import React from "react";
import { connect } from 'react-redux';
import {  closeModal } from '../../redux/actions';

const Modal = ({ isOpen, closeModal, modalContent }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">

            </div>
        </div>
    );
};
