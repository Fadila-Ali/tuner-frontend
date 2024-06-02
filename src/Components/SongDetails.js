import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import Reviews from "./Reviews";

export default function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((res) => {
      setSong(res.data);
    });
  }, [id, navigate, API]);
  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteSong();
  };
  return (
    <div class="flex flex-col justify-center items-center gap-4 w-full">
      <article class="rounded-lg shadow-lg bg-white w-96 text-center py-2 my-2">
        <div class="py-4 px-10 border-b border-teal-500 font-bold text-lg">
          {song.name}
        </div>
        <div class="p-10">
          <h3 class="text-gray-900 text-xl font-medium mb-2">
            Artist: {song.artist}
          </h3>
          <h3 class="text-gray-700">From Album: {song.album}</h3>
          <h3 class="mb-4">
            {song.is_favorite ? (
              <p className="flex items-center justify-center pt-4">
                <span>Favorite</span>
                <FaStar className="my-0.5 mx-1 text-teal-500 hover:text-teal-900" />
              </p>
            ) : (
              <p>
                <span>Not favorite</span>
                <BsStarHalf className="my-0.5 mx-1 text-teal-500 hover:text-teal-900" />
              </p>
            )}
          </h3>
          <p class="text-gray-700 text-base mb-4">Duration: {song.time}</p>
        </div>
        <div class=" flex justify-evenly py-3 px-6 border-t border-teal-500 text-gray-600">
          <div>
            {" "}
            <Link to={`/songs`}>
              <button
                type="button"
                class=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Back
              </button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button
                type="button"
                class=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Edit
              </button>
            </Link>
          </div>
          <div>
            <button
              type="button"
              class=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
      <h3>Reviews</h3>
      <Reviews />
    </div>
  );
}
