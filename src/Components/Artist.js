// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic, FaStar } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

export default function Artist({ artist }) {
  return (
    <tr class="bg-white border-b dark:bg-gray-50 dark:border-gray-100 transition duration-300 ease-in-out hover:bg-teal-100">
      <td class="md:px-8 md:py-4 sm:px-4">
        <Link to={`/artists/${artist.id}`}>
          <FaMusic className="text-teal-500 hover:text-purple-500" />
        </Link>
      </td>
      <td class="md:px-8 md:py-4 sm:px-4">
        <Link to={`/artists/${artist.id}`} className="hover:text-purple-500">
          {artist.title}
        </Link>
      </td>
    </tr>
  );
}
