import ImageCard from './ImageCard/ImageCard';
import s from './ImageGallery.module.css';

export default function ImageGallery({
  images,
  openModal,
  closeModal,
  selectedImageId,
}) {
  return (
    <ul className={s.list}>
      {images.map(item => (
        <li key={item.id}>
          <ImageCard
            item={item}
            closeModal={closeModal}
            openModal={openModal}
            isModalOpen={selectedImageId === item.id}
          />
        </li>
      ))}
    </ul>
  );
}
