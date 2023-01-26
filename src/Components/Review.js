import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const { title, rating, reviewer, content, id } = review;

  return (
    <div class="">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          handleSubmit={handleSubmit}
          toggleView={toggleView}
        />
      ) : (
        <div class="flex flex-col justify-center rounded-lg shadow-lg bg-teal-100 max-w-sm text-start my-1 mx-4 px-1 overflow-auto">
          <h4 class="flex justify-between">
            <span>Title: {title}</span>
            <span>Ratings: {rating}</span>
          </h4>
          <h5>Name: {reviewer}</h5>
          <p>Review: {content}</p>
        </div>
      )}
      <div class="flex justify-start p-2">
        <button
          class="block bg-teal-500 hover:bg-purple-500 text-slace-900 text-lg mx-2 p-1 rounded"
          onClick={toggleView}
        >
          Edit review
        </button>
        <button
          class="block bg-teal-500 hover:bg-purple-500 text-slace-900 text-lg mx-2 p-1 rounded"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
