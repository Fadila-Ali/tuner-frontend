import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

export default function ArtistDetails() {
  const [artist, setArtist] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/artists/${id}/songs`).then((res) => {
      console.log("Artist: ", res.data)
      setArtist(res.data);
    });
  }, [id, navigate, API]);

  const deleteArtist = () => {
    axios
      .delete(`${API}/artists/${id}`)
      .then(() => {
        navigate(`/artists`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteArtist();
  };
  console.log(artist);
  return (
    <div class="flex ">
      <div class="sm:flex flex-wrap items-center gap-4">
        {artist.map((el) => {
          return (
            <div class="flex justify-center items-center">
              <div class="flex flex-col justify-center rounded-lg shadow-lg bg-white w-80 h-64 text-center m-2 ">
                <div class="py-4 px-2">
                  <h3 class="my-2">Song: <span className="font-semibold">{el.name}</span></h3>
                  <h3 class="mb-2">
                    Album: <span className="font-semibold">{el.album}</span>
                  </h3>
                  <h3 class="mb-4">
                    {el.is_favorite ? (
                      <p className="flex justify-center items-center">
                        Favorite <FaStar className="inline my-0.5 mx-1 text-teal-500 hover:text-teal-900" />
                      </p>
                    ) : (
                      <p>
                        Not favorite <BsStarHalf className="inline my-0.5 mx-1 text-teal-500 hover:text-teal-900" />
                      </p>
                    )}
                  </h3>
                  <p class="mt-4">
                    Duration: <span className="font-semibold">{el.time}</span>
                  </p>
                </div>
                <div class=" flex justify-evenly gap-2 py-3 px-6 border-t border-teal-500">
                  <div>
                    {" "}
                    <Link to={`/artists`}>
                      <button
                        type="button"
                        class=" inline-block px-4 py-2.5 bg-teal-500 text-teal-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-100 hover:text-teal-500 hover:shadow-lg focus:bg-teal-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/artists/${id}/edit`}>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
