import Link from "next/link";
import Image from "next/image";
import ThemeController from "./ThemeController";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm lg:px-20 h-18 lg:h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
                <ul className="p-2">
                  <li>
                    <Link href="/projects">Projects 1</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects 1</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Logo pakai Link */}
          <Link href="/">
            {/* Image di dalam Link */}
            <Image
              src="/images/logo_web.png"
              alt="Logo Perusahaan"
              width={120}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <details className="dropdown dropdown-center text-center">
                <summary>Project</summary>
                <ul className="menu dropdown-content w-28">
                  <li>
                    <Link href="/projects">Project 1</Link>
                  </li>
                  <li>
                    <Link href="/projects">Project 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <ul role="tablist" className="tabs">
            <li>
              <Link href="/about" className="tab">About</Link>
            </li>
            <li>
              <details className="text-center tab">
                <summary>Project</summary>
                <ul className="menu dropdown-content w-28">
                  <li>
                    <Link href="/projects">Project 1</Link>
                  </li>
                  <li>
                    <Link href="/projects">Project 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact" className="tab">Contact</Link>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
          <Link href="/about" className="btn btn-accent mx-5">
            Harga Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <ThemeController />
        </div>
      </div>
    </>
  );
}
