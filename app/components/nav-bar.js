import Link from "next/link";

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
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Stitch Tracker
        </Link>
      </div>
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost btn-square">
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
          className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-200 rounded-box w-52 right-0 mr-2"
        >
          <button className="btn btn-sm btn-ghost" data-set-theme="dracula">
            Default
          </button>
          <button className="btn btn-sm btn-ghost" data-set-theme="cyberpunk">
            Cyberpunk
          </button>
          <button className="btn btn-sm btn-ghost" data-set-theme="dark">
            Dark
          </button>
          <button className="btn btn-sm btn-ghost" data-set-theme="cupcake">
            Light
          </button>
          <button className="btn btn-sm btn-ghost" data-set-theme="night">
            Dark Blue
          </button>
          <button className="btn btn-sm btn-ghost" data-set-theme="forest">
            Green
          </button>
        </ul>
      </div>
      {user ? (
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-square avatar">
            <figure className="w-8 mask mask-squircle">
              <img src={user.photoURL} alt="user avatar" />
            </figure>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-200 rounded-box w-52 right-0 mr-2"
          >
            <li aria-label="Sign Out" onClick={handleSignOut}>
              <a>Sign Out</a>
            </li>
            <li aria-label="Inventory">
              <Link href="/">Inventory</Link>
            </li>
            <li aria-label="Projects">
              <Link href="/">Projects</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
