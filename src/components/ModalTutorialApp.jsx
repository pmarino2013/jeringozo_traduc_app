import Modal from "react-bootstrap/Modal";
import ReadMarkdownApp from "./ReadMarkdownApp";

const ModalTutorialApp = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="sticky-top bg-white">
        <Modal.Title>Tutorial 🤓</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReadMarkdownApp />
      </Modal.Body>
    </Modal>
  );
};

export default ModalTutorialApp;
