import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const { title, rating, reviewer, content, id } = review;

  return (
    <div class="w-full">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          handleSubmit={handleSubmit}
          toggleView={toggleView}
        />
      ) : (
        <div class="flex flex-col justify-center rounded-lg shadow-lg bg-teal-100 w-11/12 text-start m-4 p-4 overflow-y-auto">
          <h4 class="flex justify-between">
            <h5 className="text-base"><span className="font-semibold text-xl mr-2">{title}</span> by {reviewer}</h5>
            <span>Rating: {rating}</span>
          </h4>
          <p>{content}</p>
          <div class="flex justify-start p-2 mt-4 text-sm">
            <button
              class="border border-teal-500 hover:bg-teal-500 hover:text-teal-100 mx-2 py-1 px-4 rounded"
              onClick={toggleView}
            >
              Edit
            </button>
            <button
              class="border border-teal-500 hover:bg-teal-500 hover:text-teal-100 mx-2 py-1 px-2 rounded"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </div>
      </div>
      )}
    </div>
  );
}
