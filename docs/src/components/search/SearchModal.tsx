'use client';

import { FC } from 'react';
import ReactModal from 'react-modal';

import { ResponsiveSearch } from './ResponsiveSearch';

ReactModal.setAppElement('html');

export const SearchModal: FC<{ open: boolean; onClose: () => void }> = ({
    onClose,
    open,
}) => {
    return (
        <ReactModal
            isOpen={open}
            onAfterOpen={() => {
                console.log('x');
                document.querySelector('html').style.overflow = 'hidden';
            }}
            onRequestClose={() => {
                onClose();
            }}
            onAfterClose={() => {
                document.querySelector('html').style.overflow = 'auto';
            }}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 99,
                },
                content: {
                    width: '100%',
                    // Search Menu Width
                    maxWidth: '760px',
                    height: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    inset: '40px 40px auto 40px',
                },
            }}
        >
            <ResponsiveSearch />
        </ReactModal>
    );
    // return <div className="absolute inset-0 z-20 bg-black/10">hi</div>;
};
