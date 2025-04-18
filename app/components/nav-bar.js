"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useUserAuth } from "../_utils/auth-context";

// From CSS Theme changer https://github.com/saadeghi/theme-change
export default function NavBar() {
  const { user, firebaseSignOut } = useUserAuth();

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        {user ? (
          <div className="dropdown">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-square avatar lg:hidden"
              aria-label="User menu"
            >
              <figure className="w-8 mask mask-squircle">
                <Image
                  src={user.photoURL}
                  alt="user avatar"
                  width={32}
                  height={32}
                />
              </figure>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-2 p-2 shadow-sm bg-base-200 rounded-box w-52 left-0 ml-2"
            >
              <li aria-label="User Page">
                <Link href="/user">User Page</Link>
              </li>
              <li aria-label="Inventory">
                <Link href="/inventory">Inventory</Link>
              </li>
              <li aria-label="Shopping List">
                <Link href="/shoppinglist">Shopping List</Link>
              </li>
              <li aria-label="Sign Out" onClick={handleSignOut}>
                <a>Sign Out</a>
              </li>
            </ul>
          </div>
        ) : null}
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl"
          aria-label="Go to homepage"
        >
          Stitch Tracker
        </Link>
      </div>
      {user ? (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li aria-label="User Page">
              <Link href="/user">User Page</Link>
            </li>
            <li aria-label="Inventory">
              <Link href="/inventory">Inventory</Link>
            </li>
            <li aria-label="Shopping List">
              <Link href="/shoppinglist">Shopping List</Link>
            </li>
            <li aria-label="Sign Out" onClick={handleSignOut}>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      ) : null}

      <div className="navbar-end">
        <div className="dropdown">
          <label
            tabIndex="0"
            className="btn btn-ghost btn-square"
            aria-label="Theme Selector"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="h-5 w-5 stroke-secondary fill-secondary"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-2 p-2 shadow-sm bg-base-200 rounded-box w-52 right-0 mr-2"
          >
            <button
              className="btn btn-sm btn-ghost"
              data-set-theme="dim"
              aria-label="default theme"
            >
              Default
            </button>
            <button
              className="btn btn-sm btn-ghost"
              data-set-theme="corporate"
              aria-label="light theme"
            >
              Light
            </button>
            <button
              className="btn btn-sm btn-ghost"
              data-set-theme="dark"
              aria-label="dark theme"
            >
              Dark
            </button>
            <button
              className="btn btn-sm btn-ghost"
              data-set-theme="cyberpunk"
              aria-label="cyberpunk theme"
            >
              Cyberpunk
            </button>

            <button
              className="btn btn-sm btn-ghost"
              data-set-theme="night"
              aria-label="dark blue theme"
            >
              Dark Blue
            </button>
            <button
              className="btn btn-sm btn-ghost"
              data-set-theme="forest"
              aria-label="dark green theme"
            >
              Green
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
