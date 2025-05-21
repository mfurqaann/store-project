"use client"
import React, { FormEvent, useEffect, useState } from 'react'
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
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        document.title = "Register | Fake Online Store"

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        const response = await fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            window.alert('Register Failed')
            throw new Error('Failed to register')
        };
        setIsRegisterSuccess(true)
        setFormData({ name: '', email: '', password: '' })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Card className='w-auto md:w-96'>
                <CardHeader>
                    <CardTitle className='text-center text-3xl'>Register Your Account</CardTitle>
                    <CardDescription className='text-center text-xl'>Please Create your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" />
                            </div>
                        </div>
                        <Button className='mt-5 w-full' type='submit'>Register</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    {isRegisterSuccess && (
                        <p className="text-sm text-green-500 font-bold mx-auto">Register Successful!</p>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default Register