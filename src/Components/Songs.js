import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Song from './Song'

const API = process.env.REACT_APP_API_URL

export default function Songs() {
    const [songs, setSongs] = useState([])

    console.log(API)

    useEffect(() => {
        axios
        .get(`${API}/songs`)
        .then((res) => {
          console.log("songs: ", res.data);
          setSongs(res.data);
        })
        .catch((c) => console.warn("catch", c))
    }, [])
  return (
    <div>
      <section className="relative overflow-x-hidden shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-teal-500 ">
            <tr>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                See this song
              </th>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                Title
              </th>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                Artist
              </th>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                Duration
              </th>
              <th scope="col" class="md:px-6 md:py-3 sm:px-3">
                favorite
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
