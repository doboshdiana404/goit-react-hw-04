import Modal from 'react-modal';
import s from '../ImageGallery/ImageGallery.module.css';
export default function ImageModal({ closeModal, images, selectedImageId }) {
  return (
    <>
      {' '}
      <ul className={s.list}>
        {images.map(item => (
          <li key={item.id}>
            <Modal
              isOpen={selectedImageId === item.id}
              onRequestClose={closeModal}
              contentLabel="Image Modal"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  animation: 'fadeIn 0.3s ease-in-out',
                },
                content: {
                  backgroundColor: 'white',
                  inset: '0',
                  position: 'relative',
                  padding: '0',
                  border: 'none',
                  background: 'none',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <img
                src={item.urls.full}
                alt="Modal Content"
                width={1125}
                height={620}
              />
              {item.alt_description && (
                <div className={s.descriptionModal}>
                  <p className={s.modalDescription}>{item.alt_description}</p>
                  <p>{item.user.name}</p>
                </div>
              )}
            </Modal>
          </li>
        ))}
      </ul>
    </>
  );
}
