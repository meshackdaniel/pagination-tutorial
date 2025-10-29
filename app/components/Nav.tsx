"use client"
import React, { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", href: "#" },
        { name: "Watchlist", href: "#" },
        { name: "Category", href: "#" },
        { name: "Account", href: "#" },
    ];

    return (
        <nav className="bg-white shadow-sm" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-gray-900 uppercase font-extrabold tracking-wide text-xl"
                    >
                        movieshub
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-gray-900 transition-colors uppercase text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen((s) => !s)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            aria-expanded={open}
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-gray-100">
                    <div className="px-4 py-3 space-y-1">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-50 uppercase font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}