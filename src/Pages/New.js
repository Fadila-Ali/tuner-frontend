import React from 'react'
import SongNewForm from '../Components/SongNewForm'

export default function New() {
  return (
    <div class="flex flex-col items-center">
      <h2>Add a New Song</h2>
      <SongNewForm />
    </div>
  );
}
