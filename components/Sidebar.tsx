"use client";

import { cn } from "@/lib/utils";
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";


const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname()

    return (
        <section className='sidebar'>
            <nav className="flex flex-col gap-4">
                <Link href="/" className=' flex mb-12 cursor-pointer items-center gap-2' >
                    <Image width={34} height={34} alt='horizon logo' src="/icons/logo.svg" className='size-[24] max-xl:size-14' />
                    <h1 className='sidebar-logo'>Horizon</h1>
                </Link>

                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                    return (
                        <Link href={link.route} key={link.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} >
                            <div className="relative size-6">
                                <Image fill alt={link.label} src={link.imgURL} className={cn({ 'brightness-[3] invert-0': isActive })} />
                            </div>
                            <p className={cn("sidebar-label", { '!text-white': isActive })} >{link.label}</p>

                        </Link>
                    )
                })}

                USER
            </nav>
            FOOTER
        </section>
    )
}

export default Sidebar
