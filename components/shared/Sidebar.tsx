"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">

        {/* Logo */}
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.png"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>


        {isSignedIn ? (
          <nav className="flex h-full flex-col justify-between">

            {/* Top Navigation */}
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element ${
                      isActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-700 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    <Link
                      href={link.route}
                      className="sidebar-link"
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={
                          isActive ? "brightness-200" : "group-hover:brightness-200"
                        }
                      />

                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>


            {/* Bottom Navigation */}
            <ul className="sidebar-nav_elements">

              {navLinks.slice(6).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element ${
                      isActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-700 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    <Link
                      href={link.route}
                      className="sidebar-link"
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={
                          isActive ? "brightness-200" : "group-hover:brightness-200"
                        }
                      />

                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}


              {/* User */}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton showName />
              </li>

            </ul>

          </nav>

        ) : (

          <Link
            href="/sign-in"
            className="button bg-purple-gradient bg-cover"
          >
            Login
          </Link>

        )}

      </div>
    </aside>
  );
};

export default Sidebar;