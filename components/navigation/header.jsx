"use client";

import React, { useState } from "react";

export default function Header(){

        const [open, setOpen] = useState(false);

        function menuExpand(){
            setOpen(!open);
        }
    return (

        <div className="w-full">
        <div class="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16">
            <div
            x-data="{ open: false }"
            class="relative flex flex-col w-full pt-2 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6">
            <div class="flex flex-row items-center justify-between lg:justify-start">
                <a href="/" class="lg:pr-8 text-black inline-flex items-center gap-3">
                
                <span class="font-bold text-2xl font-display">PicWish</span>
                </a>

                <button
                    onClick={menuExpand}
                    className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-black focus:outline-none focus:text-black lg:hidden"
                    >
                    <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                        <>
                            <path
                            className="hidden"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </>
                        ) : (
                        <>
                            <path
                            className="inline-flex"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </>
                        )}
                    </svg>
                </button>
                
            </div>
            
            <nav className={`flex-col items-center flex-grow ${open ? '' : 'hidden'} md:pb-0 md:flex md:justify-end md:flex-row`}>
                <a className="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-black hover:text-accent-400 lg:ml-auto" href="/#features">
                    Tools
                </a>
                <a className="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-black hover:text-accent-400" href="/faq">
                    API
                </a>
                <a className="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-black hover:text-accent-400" href="/#pricing">
                    Pricing
                </a>
                <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                    <a href="/login" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-slate-200 rounded-lg group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-slate-50 active:bg-slate-200 active:text-accent-400 focus-visible:outline-black">
                    Join the waiting list
                    </a>
                </div>
            </nav>
            

            </div>
            
        </div>
        <div>
            <hr class="w-full h-0.5 border-t-0 bg-slate-50 opacity-200 dark:opacity-200" />
        </div>
        </div>


    )
}