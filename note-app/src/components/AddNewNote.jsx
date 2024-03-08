import React, { useState } from "react";

export default function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createAt: new Date().toDateString(),
    };
    setTitle("");
    setDescription("");
    console.log(newNote);

    //We should update our notes in the next Step!
  };

  return (
    <div>
      <h2>Add new note</h2>

      <form onSubmit={handleSubmit} className="note-form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Add escription..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}
