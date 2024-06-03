import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "./Playlist";

const API = process.env.REACT_APP_API_URL;

export default function Playlists() {
  const [playlist, setPlaylist] = useState([]);

  console.log(API);

  useEffect(() => {
    axios
      .get(`${API}/playlists`)
      .then((res) => setPlaylist(res.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="w-full">
      <section className="relative sm:w-3/6 m-auto overflow-x-hidden shadow-md rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-teal-500 ">
            <tr>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                See this playlist
              </th>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((playlist) => {
              return <Playlist key={playlist.id} playlist={playlist} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
