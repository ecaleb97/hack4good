import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email
      }
    })
    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id
      }
    })
    return user;
  } catch (error) {
    return null;
  }
}