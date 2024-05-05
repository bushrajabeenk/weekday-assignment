import React from "react";
import { Modal } from "react-responsive-modal";

const DescriptionModal = ({ openModal, onCloseModal, description }) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
      >
        {description}
      </Modal>
    </div>
  );
};

export default DescriptionModal;
