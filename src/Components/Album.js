// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

export default function Album({ album }) {
  return (
    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-teal-100">
      <td class="py-4 px-4">
        <Link to={`/albums/${album.id}`}>
          <FaMusic className="text-teal-500 hover:text-teal-500" />
        </Link>
      </td>
      <td class="py-4 px-4">
        <Link
          to={`/albums/${album.id}`}
          className="hover:text-teal-500"
        >
          {album.name}
        </Link>
      </td>
    </tr>
  );
}
