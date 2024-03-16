'use client'

import { useTransition, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";

export function LoginForm () {
  const searchParams = useSearchParams()
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : ""
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()
  const [showTwoFactor, setShowTwoFactor] = useState(false)

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      login(values) 
        .then((data) => {
          if (data?.error) {
            form.reset()
            setError(data.error)
          }

          if (data?.success) {
            form.reset()
            setSuccess(data.success)
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => {
          setError("Something went wrong!")
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Bienvenido otra vez!"
      backButtonLabel="¿No tienes cuenta?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            {
              showTwoFactor && (
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Two Factor Code</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          disabled={isPending}
                          placeholder="123456"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )
            }
            {
              !showTwoFactor && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            disabled={isPending}
                            placeholder="john.doe@example.com"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="password"
                            disabled={isPending}
                            placeholder="********"
                          />
                        </FormControl>
                        <Button 
                          size={"sm"} 
                          variant={"link"} 
                          asChild
                          className="px-0 font-normal"
                        >
                          <Link href={"/auth/reset"}>¿Has olvidado tu contraseña?</Link>
                        </Button>
                      </FormItem>
                    )}
                  />
                </>
              )
            }
            
          </div>
          <FormSuccess message={success} />
          <FormError message={error || urlError} />
          <Button type="submit" disabled={isPending}
            className="w-full bg-[#DC574B]">
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}