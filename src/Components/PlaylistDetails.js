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
    <div class="w-full">
      <div class="sm:flex flex-wrap items-center gap-4">
        {playlist.map((el) => {
          return (
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center rounded-lg shadow-lg bg-white w-80 h-64 text-center m-2 ">
                <div className="py-4 px-2">
                  <h3 className="mb-2">
                    Artist: <span className="font-semibold">{el.artist}</span>
                  </h3>
                  <h3 className="my-2">From Album: <span className="font-semibold">{el.album}</span></h3>
                  <h3 className="mb-4">
                    {el.is_favorite ? (
                      <p className="flex">
                        Favorite <FaStar className="inline my-0.5 mx-1 text-teal-500 hover:text-teal-900" />
                      </p>
                    ) : (
                      <p>
                        Not favorite <BsStarHalf className="inline my-0.5 mx-1 text-teal-500 hover:text-teal-900" />
                      </p>
                    )}
                  </h3>
                  <p className="mt-4">
                    Duration: {el.time}
                  </p>
                </div>
                <div class=" flex justify-evenly py-3 px-6 border-t border-teal-500 text-gray-600">
                  <div>
                    {" "}
                    <Link to={`/playlists`}>
                      <button
                        type="button"
                        className=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/playlists/${id}/edit`}>
                      <button
                        type="button"
                        className=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      type="button"
                      className=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
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


