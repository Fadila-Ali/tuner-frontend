// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic, FaStar } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

export default function Song({ song }) {
  // const [favorite, setFavorite] = useState(false)

  // function toogleFavorite () {
  //     setFavorite(!favorite)
  // }
  return (
    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-teal-100">
      <td class="md:px-8 md:py-4 sm:px-4">
        <Link to={`/songs/${song.id}`}>
          <FaMusic className="text-teal-500 hover:text-teal-500" />
        </Link>
      </td>
      <td class="md:px-8 md:py-4 sm:px-4">
        <Link to={`/songs/${song.id}`} className="hover:text-teal-500">
          {song.name}
        </Link>
      </td>
      <td class="md:px-8 md:py-4 sm:px-4">
        <Link to={`/songs/${song.id}`} className="hover:text-teal-500">
          {song.artist}
        </Link>
      </td>
      <td class="md:px-8 md:py-4 sm:px-4">
        <span>{song.time}</span>
      </td>
      <td class="md:px-8 md:py-4 sm:px-4">
        {song.is_favorite ? (
          <span>
            <FaStar className="text-teal-500 hover:text-teal-500" />
          </span>
        ) : (
          <span>
            <BiStar className="text-teal-500 hover:text-teal-500" />
          </span>
        )}
      </td>
    </tr>
  );
}
