import React from "react";
import { Link } from "react-router-dom";
import { RiNeteaseCloudMusicFill} from "react-icons/ri"
import { VscAdd} from "react-icons/vsc"

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-teal-500 p-6">
      <h1 className="text-4xl font-bold font-signature">
        <Link to="/songs" className="flex text-slace-900 hover:text-purple-500">
          <RiNeteaseCloudMusicFill />
          <span>Tuner</span>
        </Link>
      </h1>
      <button
        type="button"
        class="inline-block px-8 py-2 border-2 border-teal-100 text-slace-900 font-medium text-xs leading-tight uppercase rounded-full hover:bg-purple-500 hover:bg-opacity-6 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        <Link
          to="/songs/new"
          className=" flex text-slace-900 hover:text-teal-100"
        >
          <VscAdd className="font-bold " />
          <span className="font-bold">New</span>
        </Link>
      </button>
    </nav>
  );
}
