"use server";
import { loginFormSchema } from "@/app/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function login(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validateFields = loginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  const errorMessage = { message: "Invalid login credentials" };

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  console.log(validateFields.success);
  const { username, password } = validateFields.data;

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
      return errorMessage;
    }

    const data = await res.json();
    const token = data.token;

    await createSession(token);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "An unknown error occurred" };
  }
  redirect("/all-products");
}

export async function logout() {
  (await cookies()).delete("session");
  redirect("/login");
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
