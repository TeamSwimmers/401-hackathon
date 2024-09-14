"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import { PiStackBold } from "react-icons/pi";
import { RiBookletLine } from "react-icons/ri";
import UserDropdown from "./user-dropdown";

export default function Navigation() {
  return (
    <header className="lg:border-b flex min-h-20 w-full items-center lg:justify-center shadow-none lg:shadow-md px-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link" size="icon" className="lg:hidden">
            <PiStackBold size={25} />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden md:flex" prefetch={false}>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6 bg-background">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Login
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Sign up
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="lg:flex justify-center hidden lg:min-w-[1012px] xl:min-w-[1268px] items-center px-4">
        <nav className="hidden md:flex gap-2 items-center w-full justify-center">
          <a
            href="/"
            className="lg:mr-0 hidden md:flex justify-self-start mx-auto"
          >
            <Image
              src="/touchgrass_logo_black.svg"
              alt="div"
              width={212}
              height={65}
              // sizes="100vw"
              // style={{ width: "100%", height: "auto" }}
              priority
            ></Image>
            <span className="sr-only">TouchGrass</span>
          </a>
          <div className="mx-auto">
            <Button
              className="px-9 font-bold text-foreground"
              variant={"link"}
              asChild
            >
              <Link className="" href="#" scroll={false}>
                Discover
              </Link>
            </Button>
            <Button
              className="px-9 font-bold text-foreground"
              variant={"link"}
              asChild
            >
              <Link className="" href="/user" scroll={false}>
                Resume
              </Link>
            </Button>
            <Button
              className="px-9 font-bold text-foreground"
              variant={"link"}
              asChild
            >
              <Link className="" href="/ask" scroll={false}>
                Applications
              </Link>
            </Button>
          </div>
          <UserDropdown />
        </nav>
      </div>
    </header>
  );
}
