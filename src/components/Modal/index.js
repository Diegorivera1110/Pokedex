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
                <button className="close-button" onClick={closeModal}>
                    Close
                </button>
                {modalContent}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isOpen: state.modal.isOpen,
    modalContent: state.modal.content,
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
