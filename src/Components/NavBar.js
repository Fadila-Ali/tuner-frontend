import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiNeteaseCloudMusicFill} from "react-icons/ri"
import { VscAdd} from "react-icons/vsc"

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('songs');
  return (
    <nav>
      <div className="flex justify-between bg-teal-500 p-6">
        <h1 className="text-4xl font-bold font-signature">
          <Link
            to="/songs"
            className="flex hover:text-teal-100"
          >
            <RiNeteaseCloudMusicFill />
            <span>Tuner</span>
          </Link>
        </h1>
        <div>
          <button
            type="button"
            class="inline-block px-6 py-2 border border-teal-100 font-medium text-xs leading-tight  rounded hover:bg-teal-100 hover:bg-opacity-6 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <Link
              to="/songs/new"
              className=" flex hover:text-teal-500"
            >
              <VscAdd className="font-bold " />
              <span className="font-bold">song</span>
            </Link>
          </button>
          <button
            type="button"
            class="inline-block px-6 py-2 ml-2 border border-teal-100 font-medium text-xs leading-tight  rounded hover:bg-teal-100 hover:bg-opacity-6 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <Link
              to="/playlists/new"
              className=" flex hover:text-teal-500"
            >
              <VscAdd className="font-bold " />
              <span className="font-bold">Playlist</span>
            </Link>
          </button>
        </div>
      </div>
      <div>
        <ul class="flex border-b  border-teal-500 ml-1 mt-1">
          <li class="-mb-px mr-1">
            <button onClick={() => setActiveLink('songs')}>
              <Link
                class={`bg-teal-100 inline-block ${activeLink === 'songs' ? 'border-l border-t border-r border-teal-500 bg-teal-500' : ''} rounded-t py-2 px-4 font-semibold`}
                to="/songs"
              >
                Songs
              </Link>
            </button>
          </li>
          <li class="mr-1">
            <button onClick={() => setActiveLink('playlists')}>
              <Link
                class={`bg-teal-100 inline-block ${activeLink === 'playlists' ? 'border-l border-t border-r border-teal-500 bg-teal-500' : ''} py-2 px-4 hover:text-teal-500 font-semibold`}
                to="/playlists"
              >
                Playlists
              </Link>
            </button>
          </li>
          <li class="mr-1">
            <button onClick={() => setActiveLink('albums')}>
              <Link
                class={`bg-teal-100 inline-block ${activeLink === 'albums' ? 'border-l border-t border-r border-teal-500 bg-teal-500' : ''} py-2 px-4 hover:text-teal-500 font-semibold`}
                to="/albums"
              >
                Albums
              </Link>
            </button>
          </li>
          <li class="mr-1">
            <button onClick={() => setActiveLink('artists')}>
              <Link
                class={`bg-teal-100 inline-block ${activeLink === 'artists' ? 'border-l border-t border-r border-teal-500 bg-teal-500' : ''} py-2 px-4 hover:text-teal-500 font-semibold`}
                to="/artists"
              >
                Artists
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
