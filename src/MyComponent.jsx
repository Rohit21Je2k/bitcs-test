import React, { useState } from "react";

export default function MyComponent(props) {
  const { title, description } = props;

  const [details, setDetails] = useState({
    title,
    description,
  });

  const [newDetails, setNewDetails] = useState({
    title,
    description,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleTitle = (e) => {
    const title = e.target.value;
    setNewDetails((prevDetails) => {
      prevDetails.title = title;
      return { ...prevDetails };
    });
  };

  const handleDescription = (e) => {
    const description = e.target.value;
    setNewDetails((prevDetails) => {
      prevDetails.description = description;
      return { ...prevDetails };
    });
  };

  const editHandler = () => {
    setIsEdit(true);
  };

  const deleteHandler = () => {
    setDetails({
      title: "",
      description: "",
    });

    setNewDetails({
      title: "",
      description: "",
    });
  };

  const saveHandler = () => {
    setIsEdit(false);
    setDetails((prevDetails) => {
      prevDetails = newDetails;
      return { ...prevDetails };
    });
  };

  const cancelHandler = () => {
    setNewDetails((prevDetails) => {
      prevDetails = details;
      return { ...prevDetails };
    });
    setIsEdit(false);
  };

  return (
    <div>
      {/* title */}
      {isEdit ? (
        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          value={newDetails.title}
          onChange={handleTitle}
        />
      ) : (
        <label>{details.title}</label>
      )}

      <br />
      {/* description */}
      {isEdit ? (
        <input
          name="description"
          type="text"
          placeholder="Enter Description"
          value={newDetails.description}
          onChange={handleDescription}
        />
      ) : (
        <span>{details.description}</span>
      )}
      <br />
      {/* edit option */}
      {isEdit ? (
        <>
          <button onClick={saveHandler}>Save</button>
          <button onClick={cancelHandler}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </>
      )}
    </div>
  );
}
