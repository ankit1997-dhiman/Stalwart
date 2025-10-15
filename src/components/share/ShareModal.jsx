import { Modal } from "antd";
import React from "react";
import ShareButtons from "./ShareButton";
import { useParams } from "react-router-dom";

export const ShareModal = ({
  setOpenShareModal,
  openShareModal,
  handleShareCancel,
}) => {
  const { id } = useParams();

  const handleCancel = () => {
    setOpenShareModal(false);
  };
  const propertyUrl = `${window.location.origin}/property/${id}`;

  return (
    <div>
      <Modal
        open={openShareModal}
        footer={false}
        width={300}
        onCancel={handleShareCancel}
      >
        <ShareButtons propertyUrl={propertyUrl} />
      </Modal>
    </div>
  );
};
