"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


function Login() {

  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const router = useRouter();

  useEffect(() => {
    document.title = "Login | Fake Online Store"

    const checkLogin = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auth/me', {
          method: 'GET',
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.id) {
            router.replace('/all-products')
          }
        }
      } catch (error) {
        console.log('User not logged in:', error)
      }
    }
    checkLogin();
  }, [router])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      throw new Error('Failed to Login')
    }
    window.location.href = '/all-products'
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='w-auto md:w-96'>
        <CardHeader>
          <CardTitle className='text-center text-3xl'>Welcome Back</CardTitle>
          <CardDescription className='text-center text-xl'>Please sign in your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
              </div>
            </div>
            <Button className='mt-5 w-full' type='submit'>Login</Button>
          </form>

          <p className='my-3 text-center'>Don&apos;t have an account ?</p>
          <Link href={{ pathname: '/register' }}>
            <Button className='w-full' type='submit'>Register</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login