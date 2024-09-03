"use client";


import React from 'react'

import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from "next/navigation";




const MobileNavbar = ({ user }: MobileNavProps) => {
    const pathname = usePathname()

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30} height={30}
                        alt='menu'
                        className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-white' >
                    <Link href="/" className=' flex mb-12 cursor-pointer items-center gap-1 px-4'  >
                        <Image
                            width={34}
                            height={34}
                            alt='horizon logo'
                            src="/icons/logo.svg" />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild> 
                            {/* SheetClose enables the sheet to be closed wherever we click, not just on the close button. */}
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                    return (
                                        <Link
                                            href={link.route}
                                            key={link.label}
                                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} >
                                            <div className="relative size-6">
                                                <Image
                                                    fill
                                                    alt={link.label}
                                                    src={link.imgURL}
                                                    className={cn({ 'brightness-[3] invert-0': isActive })} />
                                            </div>
                                            <p className={cn("sidebar-label", { '!text-white': isActive })} >{link.label}</p>

                                        </Link>
                                    )
                                })}
                            </nav>
                        </SheetClose>
                    </div>

                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavbar
