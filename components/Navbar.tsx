"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    if (isMenu) {
      document.body.style.overflowY = 'hidden';
      document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    } else {
      document.body.style.overflowY = "auto";
      
    }
  }, [isMenu]);

  return (
    <nav className="overflow-x-hidden">
      <div
        className={`flexBetween max-container padding-container relative z-30 py-5`}
      >
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden lg:flex h-full gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              className="regular-16 text-gray-50 cursor-pointer pb-1.5 flexCenter hover:text-green-50 transition-all"
              href={link.href}
              onClick={() => {
                window.scrollTo({
                  top:
                    link.label === "How Hilink Work?"
                      ? 1720
                      : link.label === "Services"
                      ? 2650
                      : link.label === "Pricing "
                      ? 3600
                      : link.label === "Contact Us"
                      ? 10000
                      : 0,
                  behavior: "smooth",
                });
              }}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type={"button"}
            title={"Login"}
            icon={"/user.svg"}
            variant={"btn_dark_green"}
          />
        </div>

        <Image
          src="/menu.svg"
          width={32}
          height={32}
          alt="menu"
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setIsMenu(true)}
        />
      </div>
      {isMenu && (
        <div
          className={`lg:hidden absolute z-30 top-0 left-0 w-[100vh] h-[100vh] backdrop-blur-sm ${
            isMenu ? "translate-x-0 opacity-100" : "-z-10 opacity-0 hidden"
          }  `}
        ></div>
      )}
      <div
        className={` lg:hidden absolute right-0 top-0 p-6 w-[80%] sm:w-[60%] md:w-[50%] h-[100vh]  bg-green-50 transition-opacity duration-150 ease-in-out ${
          isMenu ? "opacity-100 translate-x-0 z-40" : "-z-20 opacity-0"
        } `}
      >
        {isMenu && (
          <>
            <div className="w-full">
              <Image
                src="/close.svg"
                width={36}
                height={36}
                alt="menu"
                className="cursor-pointer lg:hidden ml-auto"
                onClick={() => setIsMenu(false)}
              />
            </div>
            <ul className="flex flex-col lg:hidden h-auto gap-6 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  className="regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold"
                  key={link.key}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
