import { hash, compare } from "bcryptjs";

export async function verifyPassword(
  password: string,
  newPassword: string
): Promise<boolean> {
  const isValid = await compare(password, newPassword);
  return isValid;
}
