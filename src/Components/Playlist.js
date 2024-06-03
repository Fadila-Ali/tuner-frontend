// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";


export default function Playlist({ playlist }) {

  return (
    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-100 transition duration-300 ease-in-out hover:bg-teal-100">
      <td class="py-4 px-4">
        <Link to={`/playlists/${playlist.id}`}>
          <FaMusic className="text-teal-500 hover:text-purple-500" />
        </Link>
      </td>
      <td class="py-4 px-4">
        <Link to={`/playlists/${playlist.id}`} className="hover:text-purple-500">
          {playlist.title}
        </Link>
      </td>
    </tr>
  );
}
