import s from '../ImageGallery.module.css';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';

export default function ImageCard({ item, openModal }) {
  return (
    <div className={s['imageContainer']}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        width={360}
        height={240}
        onClick={() => openModal(item.id)}
        loading="lazy"
      />
      <div className={s['magnifying-glass']}>
        <FaMagnifyingGlassPlus />
      </div>
    </div>
  );
}
