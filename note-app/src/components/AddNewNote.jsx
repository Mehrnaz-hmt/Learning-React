import React from "react";

export default function AddNewNote() {

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  return (
    <div>
      <h2>Add new note</h2>

      <form onClick={handleSubmit} className="note-form">
        <input type="text" className="text-field" placeholder="Note Title"/>
        <input type="text" className="text-field"  placeholder="Add escription..."/>
        <button type="submit"  className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}
