import React, { useEffect } from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <BootstrapModal
      show={isOpen}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={true} // vẫn cho phép ESC, nhưng bạn đang xử lý thủ công
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="d-flex align-items-center gap-2">
          {title}
        </BootstrapModal.Title>
        <Button
          variant="link"
          onClick={onClose}
          className="ms-auto p-0 text-muted"
        >
          <X size={20} />
        </Button>
      </BootstrapModal.Header>

      <BootstrapModal.Body>{children}</BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;
