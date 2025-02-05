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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { State, login } from '@/lib/actions'


function Login() {
  const initialState: State = {
    username: '', password: '',
  }
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
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" placeholder="Password" type="password" />
              </div>
            </div>
            <button type='submit'>Login</button>
          </form>
        </CardContent>
        <CardFooter>
          {state.error ?? state.error}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login