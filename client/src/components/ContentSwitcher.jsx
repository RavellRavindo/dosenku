import React, { useState } from "react";
import Modal from "react-modal";

const ContentSwitcher = () => {
  const [content, setContent] = useState("Default Content");
  const [buttonCount, setButtonCount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [newButtonName, setNewButtonName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [buttons, setButtons] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const contentValue = (newValue) => {
    setContent(newValue);
  };

  const buttonClicked = (i) => {
    setActiveButton(i);
    contentValue(newContent);
  };

  const increaseButton = () => {
    setOpenModal(true);
  };

  const deleteButton = () => {
    if (buttonCount > 0) {
      const updatedButtons = buttons.slice(0, -1);
      setButtons(updatedButtons);
      setButtonCount(buttonCount - 1);

      if (activeButton === buttonCount - 1) {
        setActiveButton(null);
        contentValue("Default Content");
      }
    }
  };

  //   const deleteButton = () => {
  //     if (buttonCount > 0 && activeButton !== null) {
  //       const updatedButtons = buttons.filter(
  //         (button, index) => index !== activeButton
  //       );
  //       setButtons(updatedButtons);
  //       setButtonCount(buttonCount - 1);
  //       setActiveButton(null);
  //       contentValue("Default Content");
  //     }
  //   };

  const addNewButton = () => {
    if (newButtonName) {
      setButtonCount(buttonCount + 1);
      contentValue("Default Content");
      setActiveButton(null);

      setButtons((prevButtons) => [
        ...prevButtons,
        <button
          key={buttonCount}
          onClick={() => buttonClicked(buttonCount)}
          className={`w-1/12 py-3 px-4 mx-2 rounded-md ring-1 ring-black ${
            activeButton !== null && activeButton === buttonCount
              ? "primaryBgColor"
              : ""
          }`}
        >
          {newButtonName}
        </button>,
      ]);
      setNewButtonName("");

      setOpenModal(false);
    }
  };

  const editContent = () => {
    contentValue(newContent);
    setOpenEditModal(false);
  };

  return (
    <div className="px-28">
      <div className="w-full pb-8">
        {buttons}
        <button
          className="py-2 px-3.5 rounded-3xl ring-1 ring-black primaryBgColor mx-4"
          onClick={increaseButton}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="py-2 px-3.5 rounded-3xl ring-1 ring-black primaryBgColor mr-4"
          onClick={deleteButton}
        >
          {" "}
          -{" "}
        </button>
      </div>
      <div className="p-4 bg-gray-200 rounded-lg">
        <p>{content}</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setOpenEditModal(true)}
            className="px-4 py-2 text-white secondaryBgColor rounded-md ml-2 hover:ring-1 ring-orange-300"
          >
            Edit
          </button>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="sm:w-full w-auto max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Enter New Content</h2>
            <input
              type="text"
              value={newButtonName}
              onChange={(e) => setNewButtonName(e.target.value)}
              placeholder="Button Name"
              className="w-full px-3 py-2 border rounded-md outline-none ring-1 ring-orange-300 focus:ring"
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Content..."
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring mt-4 ring-1 ring-orange-300"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={addNewButton}
                className="px-4 py-2 primaryBgColor rounded-md hover:ring-1 ring-orange-300"
              >
                Add
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 hover:bg-gray-400 hover:ring-1 ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openEditModal}
        onRequestClose={() => setOpenEditModal(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="sm:w-full w-auto max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit your Content</h2>
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Content..."
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring mt-4 ring-1 ring-orange-300"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={editContent}
                className="px-4 py-2 primaryBgColor rounded-md hover:ring-1 ring-orange-300"
              >
                Save
              </button>
              <button
                onClick={() => setOpenEditModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 hover:bg-gray-400 hover:ring-1 ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContentSwitcher;
