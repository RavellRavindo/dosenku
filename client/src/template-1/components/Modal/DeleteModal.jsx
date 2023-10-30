import React from "react";
import Modal from "react-modal";

const DeleteModal = ({ isOpen, onClose, onDeleteButton }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="sm:w-full w-auto max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this button?</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={onDeleteButton}
              className="px-4 py-2 primaryBgColor rounded-md hover:ring-1 ring-orange-300"
            >
              Delete
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

export default DeleteModal;
