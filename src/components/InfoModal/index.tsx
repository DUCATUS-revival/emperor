import React, {ReactFragment} from 'react';
import Modal from 'react-modal';

import './InfoModal.scss';

type TypeInfoModalProps = {
  isOpen: boolean;
  close: any;
  img: string;
  name: string;
  position: string;
  bio: ReactFragment;
}

const InfoModal: React.FC<TypeInfoModalProps> = ({isOpen, close, img, name, position, bio}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      preventScroll={true}
      style={
        {
          overlay: {
            zIndex: 1000,
            inset: 0
          },

          content: {
            inset: 0,
            padding: 0
          }
        }
      }
    >
      <div className="modal">
        <img src={img} alt={name}/>
        <div className="modal__content">
          <div className="modal__content__name">{name}</div>
          <div className="modal__content__position">{position}</div>
          <div className="modal__content__bio">{bio}</div>
        </div>
        <div className="button" onClick={close}>x</div>
      </div>
    </Modal>
  )
}

export default InfoModal;
