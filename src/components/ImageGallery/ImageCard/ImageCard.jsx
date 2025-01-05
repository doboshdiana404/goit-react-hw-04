import ImageModal from '../../ImageModal/ImageModal';
import s from '../ImageGallery.module.css';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';

export default function ImageCard({
  item,
  openModal,
  closeModal,
  isModalOpen,
}) {
  return (
    <div className={s['imageContainer']}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        width={360}
        height={240}
        onClick={() => openModal(item.id)}
      />
      <div className={s['magnifying-glass']}>
        <FaMagnifyingGlassPlus />
      </div>
      <ImageModal
        isModalOpen={isModalOpen}
        openModal={openModal}
        item={item}
        closeModal={closeModal}
      />
    </div>
  );
}
