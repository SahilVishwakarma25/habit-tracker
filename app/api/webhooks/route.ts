import { EmailAddress } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import connectToDB from "@/app/lib/connectToDb"; // Import your DB connection utility
import User from "@/app/Models/UserSchema"; // Import your User model
export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  const { id, email_addresses } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  const newUser = {
    clerkUserId: id,
    emailAddress: email_addresses?.[0]?.email_address || "N/A",
  };

  console.log("New user data:", newUser);

  try {
    await connectToDB();
    await User.create(newUser);
    console.log("User created");
  } catch (err) {
    console.error("Error creating user:", err);
    return new Response("Error creating user", {
      status: 500,
    });
  }

  // Ensure return and logs are inside the function
  console.log(`Webhook with and id of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("Webhook processed successfully", {
    status: 200,
  });
}
