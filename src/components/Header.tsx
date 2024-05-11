import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-6">
      <nav className="text-sm text-zinc-500 flex items-center gap-6">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/cv"}>CV</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;