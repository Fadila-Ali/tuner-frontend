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
    <div class="w-full flex items-center justify-center">
      {props.children}
      <form
        class="bg-white w-full flex flex-col gap-4 shadow-md rounded px-10 py-6 m-4"
        onSubmit={handleSubmit}
      >
        <h3 class="text-gray-900 text-xl font-medium mb-2">Add your Review</h3>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          value={review.title}
          onChange={handleTextChange}
          placeholder="Your review title"
          required
        />
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
          placeholder="Rating (1 = lowest and 5 = highest)"
          required
        />
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think...?"
          onChange={handleTextChange}
        />
        <button
          class="block bg-teal-500 text-teal-100 hover:bg-teal-100 hover:text-teal-500 text-lg mx-auto py-2 px-4 rounded"
          type="submit"
        >
          Submit review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
