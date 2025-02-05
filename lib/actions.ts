"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type State = {
  username: string;
  password: string;
  error?: string;
  loading?: boolean;
  success?: boolean;
};

export async function login(
  prevState: State,
  formData: FormData
): Promise<State> {
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return { ...prevState, error: "Username and pasword are required" };
  }
  const url = "https://fakestoreapi.com/auth/login";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      return { ...prevState, error: "Wrong email" };
    }

    const data = await res.json();
    const token = data.token;

    await createSession(token);
  } catch (error: any) {
    return { ...prevState, error: error.error };
  }
  redirect("/all-products");
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 10 * 1000);

  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
