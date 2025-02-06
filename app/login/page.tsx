"use client"
import React, { useActionState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { State, login } from '@/lib/actions'
import { Button } from '@/components/ui/button'


function Login() {
  const initialState: State = {
    message: null, errors: {}
  }

  useEffect(() => {
    document.title = "Login | Fake Online Store"
  }, [])

  const [state, formAction] = useActionState(login, initialState);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='w-auto md:w-96'>
        <CardHeader>
          <CardTitle className='text-center text-3xl'>Welcome Back</CardTitle>
          <CardDescription className='text-center text-xl'>Please sign in your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" placeholder="Username" />
                {state.errors?.username && (
                  <p className="text-sm text-red-500">{state.errors.username}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" placeholder="Password" type="password" />
                {state.errors?.password && (
                  <p className="text-sm text-red-500">{state.errors.password}</p>
                )}
              </div>
            </div>
            <Button className='mt-5 w-full' type='submit'>Login</Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className='w-full mt-5'>Hint</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Username : johnd</p>
                  <p>Password : m38rmF$</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </form>
        </CardContent>
        <CardFooter>
          {state.message && (
            <p className="text-sm text-red-500 mx-auto">{state.message}</p>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login