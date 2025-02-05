// src\services\userId.ts
"use server"
import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function getUserInfo() {
  const { userId } = await auth();
  const user = await currentUser();

  return {
    image: user?.imageUrl,
    name: `${user?.firstName} ${user?.lastName}`,
    email: user?.emailAddresses[0].emailAddress,
    userId,
    lastSignIn: user?.lastSignInAt
  };
}

export async function userPostSanity() {
  try {
    const user = await getUserInfo();

    const res = await client.createOrReplace({
      _type: "user",
      _id: `user-${user?.userId}`,
      name: user?.name,
      userID: user?.userId,
      email: user?.email,
      image: user?.image,
    });

    console.log("😡User created in Sanity:", res);
    return res.userID;
  } catch (error) {
    console.error("Sanity API error:", error);
  }
}
