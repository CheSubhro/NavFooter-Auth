
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";

export default function ConfirmModal({ isOpen, onOpenChange, onConfirm, title = "Are you sure?", message = "This action cannot be undone.", confirmText = "Confirm", cancelText = "Cancel" }) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(close) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody>
                            <p>{message}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="light" onPress={close}>
                                {cancelText}
                            </Button>
                            <Button color="danger" onPress={() => { onConfirm(); close(); }}>
                                {confirmText}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}