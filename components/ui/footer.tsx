import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Image
                  src={Logo}
                  alt={"the sites logo"}
                  width={500}
                  className="w-16 h-16 fill-quint"
                ></Image>
              </div>
              <div className="text-gray-200 text-sm">
                The Bread People delivering bread since 2023.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}

            {/* Copyrights note */}
            <div className="text-gray-300 text-sm mr-4">
              &copy; The Bread People. All rights reserved.
            </div>
            {/* Skudunter Tag */}
            <div className="text-green-400 hover:text-green-300 transition duration-150 ease-in-out text-sm mr-4 font-bold underline underline-offset-4 decoration-2">
              <Link href={"https://skudunter.com"}>
                {" "}
                Made by skudunter web dev
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
