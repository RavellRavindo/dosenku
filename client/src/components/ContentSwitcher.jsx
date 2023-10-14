import React, { useState, useEffect } from "react";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";
import AddModal from "./Modal/AddModal";

const ContentSwitcher = () => {
  const [content, setContent] = useState("Default Content");
  const [buttonCount, setButtonCount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [newButtonName, setNewButtonName] = useState("");
  const [newContent, setNewContent] = useState("");
  const [data, setData] = useState({
    buttons: [],
  });

  const [openModal, setOpenModal] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const updateContent = (newValue) => {
    setContent(newValue);
  };

  const buttonClicked = (buttonKey) => {
    setActiveButton(buttonKey);
    const selectedButton = data.buttons.find(
      (button) => button.key === buttonKey
    );

    if (selectedButton) {
      if (selectedButton.editedContent) {
        updateContent(selectedButton.editedContent);
      } else {
        updateContent(selectedButton.content);
      }
    } else {
      updateContent("Default Content");
    }
    console.log(buttonKey);
  };

  const increaseButton = () => {
    setOpenModal(true);
  };

  const deleteButtonConfirmation = () => {
    if (activeButton !== null) {
      setOpenDeleteModal(true);
    }
  };

  const addNewButton = () => {
    if (newButtonName) {
      setButtonCount(buttonCount + 1);
      updateContent("Default Content");

      const newButton = {
        key: buttonCount + 1,
        buttonName: newButtonName,
        content: newContent,
      };

      setData({ ...data, buttons: [...data.buttons, newButton] });
      setNewButtonName("");
      setNewContent("");
      setOpenModal(false);
    }
  };

  const deleteButton = () => {
    if (buttonCount > 0 && activeButton !== null) {
      const updatedButtons = data.buttons.filter(
        (button) => button.key !== activeButton
      );
      setData({ ...data, buttons: updatedButtons });
      setButtonCount(buttonCount - 1);
      setActiveButton(null);
      updateContent("Default Content");
      deleteButtonConfirmation();
      setOpenDeleteModal(false);
    }
  };

  const editContent = () => {
    // updateContent(newContent);
    const updatedButtons = data.buttons.map((button) => {
      if (button.key === activeButton) {
        return { ...button, editedContent: newContent };
      }
      return button;
    });

    setData({ ...data, buttons: updatedButtons });
    setContent(newContent);
    setOpenEditModal(false);
  };

  useEffect(() => {
    setData({
      buttons: [
        {
          key: 0,
          buttonName: "About Me",
          content: "",
        },
      ],
    });
  }, []);

  return (
    <div className="px-4 sm:px-28">
      <div className="w-full pb-4 sm:pb-8">
        {data.buttons.map((button) => (
          <button
            key={button.key}
            onClick={() => buttonClicked(button.key)}
            className={`w-1/3 sm:w-1/12 py-2 sm:py-3 px-3 sm:px-4 m-1 sm:m-2 rounded-md ring-1 ring-black button ${
              activeButton === button.key ? "active-button" : ""
            }`}
          >
            {button.buttonName}
          </button>
        ))}
        <button
          className="py-2 px-4 rounded-3xl ring-1 ring-black primaryBgColor mx-2 sm:mx-4"
          onClick={increaseButton}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="py-2 px-4 rounded-3xl ring-1 ring-black primaryBgColor mr-2 sm:mr-4"
          onClick={deleteButtonConfirmation}
        >
          {" "}
          -{" "}
        </button>
      </div>
     
      <div className="p-2 sm:p-4 bg-gray-200 rounded-lg">
        <p className="text-sm sm:text-base">{content}</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setOpenEditModal(true)}
            className="px-2 sm:px-4 py-2 text-white secondaryBgColor rounded-md m-1 sm:m-2 hover:ring-1 ring-orange-300"
          >
            Edit
          </button>
        </div>
      </div>
      <AddModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onAddNewButton={addNewButton}
        newButtonName={newButtonName}
        onNewButtonNameChange={(e) => setNewButtonName(e.target.value)}
        newContent={newContent}
        onNewContentChange={(e) => setNewContent(e.target.value)}
      />

      <EditModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSaveEdit={editContent}
        newContent={newContent}
        onNewContentChange={(e) => setNewContent(e.target.value)}
      />
      
      <DeleteModal
        isOpen={OpenDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onDeleteButton={deleteButton}
      />
    </div>
  );
};

export default ContentSwitcher;
