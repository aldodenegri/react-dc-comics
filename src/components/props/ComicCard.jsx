import style from '../Main.module.css'

function ComicCard({ comics }) {
    return (
        <div className={style.comic_grid}>
            {comics.map((comic) => (
                <div key={comic.id} className={style.comic_card}>
                    <img src={comic.thumb} alt={comic.title} className={style.comic_thumb} />
                    <h3>{comic.series}</h3>
                </div>
            ))}
        </div>
    );
}
export default ComicCard;