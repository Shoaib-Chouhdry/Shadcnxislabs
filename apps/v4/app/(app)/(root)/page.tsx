
import { type Metadata } from "next"
import Link from "next/link"

import { FieldDescription } from "@/registry/new-york-v4/ui/field"
import { UserAuthForm } from "./components/user-auth-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Login page",
}

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm space-y-7">
        
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Login
          </h1>

          <p className="text-sm text-muted-foreground">
            Enter your email and password
          </p>
        </div>

        <UserAuthForm />

        <FieldDescription className="text-center text-xs leading-5 text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </FieldDescription>
      </div>
    </div>
  )
}