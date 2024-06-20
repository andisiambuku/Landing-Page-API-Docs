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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative md:hidden">
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
      </div>
    </>
  );
}
