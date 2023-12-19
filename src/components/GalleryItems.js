function GalleryItems({ movieTitle, overview, imagePath, audienceRating, tabIndex }) {

    let imageHeightClass = imagePath === "../assets/icons/tv-outline.svg" ? "placeholder-image" : '';

    let rating = audienceRating > 0 ? audienceRating : "N/A";

    let truncatedTitle = (movieTitle.length > 49) ? (movieTitle.slice(0, 49) + "...") : movieTitle;


    return (
        // tab index default 0 and -1 when dropdown menu is open
        <li className="safari_only" tabIndex={tabIndex}>
            <img className={imageHeightClass} src={imagePath} alt={movieTitle} />
            <div className="info-container">
                <h3>{truncatedTitle}</h3>
                <p className="rating">{rating}</p>
            </div>
            <div className="overview">
                <h4>Overview</h4>
                <p>{overview}</p>
            </div>
        </li>
    )
}

export default GalleryItems;