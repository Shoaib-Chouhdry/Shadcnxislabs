"use client"

import * as React from "react"
import { supabase } from "@/lib/supabase"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

export function UserAuthForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setIsLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    window.location.href = "/dashboard"
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <FieldGroup>
          {/* EMAIL */}
          <Field>
            <FieldLabel className="sr-only" htmlFor="email">
              Email
            </FieldLabel>

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={isLoading}
            />
          </Field>

          {/* PASSWORD */}
          <Field>
            <FieldLabel className="sr-only" htmlFor="password">
              Password
            </FieldLabel>

            <Input
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              disabled={isLoading}
            />
          </Field>

          {/* BUTTON */}
          <Field>
            <Button disabled={isLoading} className="w-full">
              {isLoading && <Spinner />}
              Sign In
            </Button>
          </Field>
        </FieldGroup>
      </form>

      {/* <FieldSeparator>Or continue with</FieldSeparator> */}

      {/* GitHub placeholder */}
      {/* <Button variant="outline" type="button" disabled>
        {isLoading ? (
          <Spinner />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}
        GitHub (not connected)
      </Button> */}
    </div>
  )
}