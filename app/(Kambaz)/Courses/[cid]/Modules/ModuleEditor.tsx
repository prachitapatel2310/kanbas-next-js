"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Button, FormControl } from "react-bootstrap";

export default function ModuleEditor({
  show,
  handleClose,
  dialogTitle,
  moduleName,
  setModuleName,
  addModule,
}: any) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormControl
          placeholder="Module name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={async () => {
            await addModule();    // CREATE THE MODULE
            handleClose();        // CLOSE MODAL
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
