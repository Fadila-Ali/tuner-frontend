import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "./Artist"

const API = process.env.REACT_APP_API_URL;

export default function Artists() {
  const [artist, setArtist] = useState([]);

  console.log(API);

  useEffect(() => {
    axios
      .get(`${API}/artists`)
      .then((res) => setArtist(res.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <section className="relative overflow-x-hidden shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-teal-500 ">
            <tr>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                See this artist
              </th>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {artist.map((artist) => {
              return <Artist key={artist.id} artist={artist} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
