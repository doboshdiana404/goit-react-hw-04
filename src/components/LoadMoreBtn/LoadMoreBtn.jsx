import s from './LoadMoreBtn.module.css';
export default function LoadMoreBtn({ handleChangePage }) {
  return (
    <div className={s.loadMore}>
      <button onClick={handleChangePage} className={s.moreBtn}>
        Load more
      </button>
    </div>
  );
}
