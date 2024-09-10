"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const menuItems = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

export default function NavbarHome() {
  return (
    <Popover className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between px-6 py-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-b-xl">
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image
            src="/metabolichubnameframe.png"
            alt="MetabolicHub Logo"
            width={100}
            height={50}
            priority={true}
            className="object-contain h-12 w-auto transition-transform transform hover:scale-105"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className="font-semibold hover:text-blue-600 transition">
            <Button variant="link">{item.label}</Button>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <span className="sr-only">Open Menu</span>
          <FaBars className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      {/* Mobile Menu */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition sm:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-100">
            <div className="px-5 pt-4 pb-6 flex items-center justify-between">
              <Image
                src="/metabolichubnameframe.png"
                alt="MetabolicHub Logo"
                width={80}
                height={40}
                priority={true}
                className="object-contain h-10 w-auto"
              />
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close Menu</span>
                <FaX className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-4 px-5">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
