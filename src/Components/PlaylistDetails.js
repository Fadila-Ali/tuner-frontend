import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

export default function PlaylistDetails() {
  const [playlist, setPlaylist] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/playlists/${id}/songs`).then((res) => {
      setPlaylist(res.data);
    });
  }, [id, navigate, API]);

  const deletePlaylist = () => {
    axios
      .delete(`${API}/playlists/${id}`)
      .then(() => {
        navigate(`/playlists`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deletePlaylist();
  };
  console.log(playlist);
  return (
    <div class="w-[100vw] flex">
      <div class=" flex flex-wrap h-28 min-w-28 p-10">
        {playlist.map((el) => {
          return (
            <div class="flex justify-center items-center">
              <div class="flex flex-col justify-center rounded-lg shadow-lg bg-white max-w-sm text-center m-2 ">
                <div class="py-4 px-8 font-bold text-lg">
                  <h3 class="text-gray-900 text-xl font-medium mb-2">
                    Artist: {el.artist}
                  </h3>
                  <h3 class="text-gray-700">From Album: {el.album}</h3>
                  <h3 class="mb-4">
                    {el.is_favorite ? (
                      <p className="flex">
                        <span>Favorite</span>
                        <FaStar className="my-0.5 mx-1 text-teal-500 hover:text-purple-500" />
                      </p>
                    ) : (
                      <p>
                        <span>Not favorite</span>
                        <BsStarHalf className="my-0.5 mx-1 text-teal-500 hover:text-purple-500" />
                      </p>
                    )}
                  </h3>
                  <p class="text-gray-700 text-base mt-4">
                    Duration: {el.time}
                  </p>
                </div>
                <div class=" flex justify-evenly py-3 px-6 border-t border-teal-500 text-gray-600">
                  <div>
                    {" "}
                    <Link to={`/playlists`}>
                      <button
                        type="button"
                        class=" inline-block px-4 py-2.5 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/playlists/${id}/edit`}>
                      <button
                        type="button"
                        class=" inline-block px-4 py-2.5 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      type="button"
                      class=" inline-block px-4 py-2.5 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


