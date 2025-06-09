import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-white px-6 py-2 shadow-sm font-abc">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={154} height={60} />
        </Link>
        <div className="flex items-center text-black gap-4">
          {session && session.user ? (
            <>
              <Link href={"/startup/create"}>
                <span className="max-sm:hidden hover:text-[#007BFF]">
                  create
                </span>
                <BadgePlus className="size-9 sm:hidden hover:bg-[#b3d9ff] rounded-full p-2" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="flex items-center justify-center"
                >
                  <span className="max-sm:hidden hover:text-[#007BFF]">
                    Logout
                  </span>
                  <LogOut className="size-9 sm:hidden hover:bg-[#b3d9ff] rounded-full p-2" />
                </button>
              </form>
              <Link href={`/user/${session.user?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit">Login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
