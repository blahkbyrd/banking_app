"use client";

import Link from 'next/link'
import Image from 'next/image'
import React, { use, useState } from 'react'
import { z } from "zod"   // Zod is a TypeScript-first schema declaration and validation library
import { zodResolver } from "@hookform/resolvers/zod" // zodResolver is a validator function that integrates Zod schema validation with React Hook Form’s form validation process.
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Field from './Field';
import { authFormSchema } from '@/lib/utils';



const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null);

    // 1. Define the form.
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {},
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className=' flex mb-12 cursor-pointer items-center gap-1'  >
                    <Image
                        width={34}
                        height={34}
                        alt='horizon logo'
                        src="/icons/logo.svg" />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                </Link>
                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user
                            ? 'Link Account' :
                            type === "sign-in"
                                ? "Sign-in"
                                : "Sign-up"}
                    </h1>
                    <p className='text-1- font-normal text-gray-600'>
                        {user
                            ? "Lier votre compte pour commencer"
                            : "Veuillez compléter votre profil"
                        }
                    </p>

                </div>
            </header>
            {
                user
                    ? (
                        <div className='flex flex-col gap-4'>
                            {/* Plaid link */}
                        </div>
                    )
                    : (
                        // Form
                        <>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                   <Field control={form.control} name="email" label='votre email' placeholder='email' type='text'/>
                                   <Field control={form.control} name="password" label='mot de passe' placeholder='mot de passe' type='password'/>
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>

                        </>
                    )
            }
        </section>
    )
}

export default AuthForm
