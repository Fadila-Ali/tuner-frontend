import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    song_id: id,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      song_id: id,
    });
  };
  return (
    <div class="w-full max-w-xs flex flex-col items-center justify-center">
      {props.children}
      <form
        class="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="reviewer"
        >
          Name:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          required
          value={review.title}
          onChange={handleTextChange}
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Rating:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={review.rating}
          onChange={handleTextChange}
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Review:
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />
        <button
          class="block bg-teal-500 hover:bg-purple-500 text-slace-900 text-lg mx-auto p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
