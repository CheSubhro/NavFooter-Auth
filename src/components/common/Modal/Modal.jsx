
import React from 'react';
import { Modal as HeroModal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";

export default function Modal({ isOpen, onOpenChange, title, children, footer }) {
    return (
        <HeroModal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(close) => (
                    <>
                        {title && <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>}
                        <ModalBody>{children}</ModalBody>
                        {footer && <ModalFooter>{footer}</ModalFooter>}
                    </>
                )}
            </ModalContent>
        </HeroModal>
    );
}