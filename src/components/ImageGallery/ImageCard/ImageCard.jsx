import Modal from 'react-modal';
export default function ImageCard({
  item,
  openModal,
  closeModal,
  isModalOpen,
}) {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        width={360}
        height={240}
        onClick={() => openModal(item.id)}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            inset: '0',
            position: 'relative',
            padding: '0',
            border: 'none',
            background: 'none',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <img
          src={item.urls.full}
          alt="Modal Content"
          width={1125}
          height={620}
        />
      </Modal>
    </div>
  );
}
