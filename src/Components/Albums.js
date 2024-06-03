import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Album from "./Album";

const API = process.env.REACT_APP_API_URL;

export default function Albums() {
  const [album, setAlbum] = useState([]);

  console.log(API);

  useEffect(() => {
    axios
      .get(`${API}/albums`)
      .then((res) => {
        console.log("Album: ", album);
        setAlbum(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  console.log(album);
  return (
    <div className="w-full">
      <section className="relative sm:w-3/6 m-auto overflow-x-hidden shadow-md rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-teal-500 ">
            <tr>
              <th scope="col" class="py-3 px-3">
                See this album
              </th>
              <th scope="col" class="py-3 px-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {album.map((album) => {
              return <Album key={album.id} album={album} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
