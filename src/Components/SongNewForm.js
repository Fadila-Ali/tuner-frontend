import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div class="w-full">
      <form
        class="bg-white sm:w-1/3 shadow-md rounded m-auto px-10 py-8 my-4"
        onSubmit={handleSubmit}
      >
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Song title"
            required
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artist"
            type="text"
            name="artist"
            value={song.artist}
            placeholder="Artist name"
            onChange={handleTextChange}
            required
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="album"
            type="text"
            name="album"
            value={song.album}
            placeholder="Album name"
            onChange={handleTextChange}
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="text"
            name="time"
            value={song.time}
            placeholder="min:sec"
            onChange={handleTextChange}
          />
        </div>
        <div class="mb-4">
          <label
            class="mb-2 mr-1 font-bold text-lg text-grey-darkest"
            htmlFor="is_favorite"
          >
            Is Favorite?: 
          </label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
        </div>
        <div class="flex justify-around">
          <button
            class="block bg-teal-500 text-teal-100 hover:bg-teal-100 hover:text-teal-500 py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
          <button class="block bg-teal-500 text-teal-100 hover:bg-teal-100 hover:text-teal-500 py-2 px-4 rounded">
            <Link to={`/songs`}>Cancel</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
