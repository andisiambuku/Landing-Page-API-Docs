'use client'
import React, { useState } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { Laptop } from "lucide-react"
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative md:hidden">
        <Laptop className='absolute left-2' />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="absolute right-2 p-2 text-gray-500">☰</button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetClose asChild>
                <button className="absolute top-2 right-2"></button>
              </SheetClose>
              <Menubar className="flex flex-col ">
                <MenubarMenu>
                  <MenubarTrigger>About</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Contact Us
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Unsplash API</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Documentation
                    </MenubarItem>
                    <MenubarItem>
                      Demo
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Rick & Morty API</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Documentation
                    </MenubarItem>
                    <MenubarItem>
                      Demo
                    </MenubarItem>
                  </MenubarContent>

                </MenubarMenu>
              </Menubar>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative hidden md:flex">
      <Link href="/"><Laptop className='absolute left-4 top-4' /></Link>
        <Menubar className='absolute right-2'>
          <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Contact Us
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Unsplash API</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/unsplash-api/docs">
                Documentation
                </Link>
              </MenubarItem>
              <MenubarItem>
              <Link href="/unsplash-api/demo">
                Demo
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Rick & Morty API</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
              <Link href="/rick-morty-api/docs">
                Documentation
                </Link>
              </MenubarItem>
              <MenubarItem>
              <Link href="/rick-morty-api/docs">
                Demo
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  );
}
