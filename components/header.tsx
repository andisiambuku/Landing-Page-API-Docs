"use client"
import React, { useState } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet"; // Assuming you have a sheet component

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-gray-500">☰</button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetClose asChild>
                <button className="absolute top-2 right-2"></button>
              </SheetClose>
              <div className="mt-4 flex flex-row">
                <Menubar>
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
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex">
        <Menubar>
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
