import React from "react";
import Modal from "react-modal";

const EditModal = ({
  isOpen,
  onClose,
  onSaveEdit,
  newContent,
  onNewContentChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="sm:w-full w-auto max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Edit your Content</h2>
          <textarea
            value={newContent}
            onChange={onNewContentChange}
            placeholder="Content..."
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring mt-4 ring-1 ring-orange-300"
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={onSaveEdit}
              className="px-4 py-2 primaryBgColor rounded-md hover:ring-1 ring-orange-300"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 hover:bg-gray-400 hover:ring-1 ring-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
