export function Swiper({ exhibit }) {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    return (
        <div className="swiper-container">
            <p className="animal-label">Animals in this exhibit: </p>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img className="swiper-image" alt="alt"></img>
                </div>
            </div>
            <div className="button-prev"></div>
            <div className="button-next"></div>
            <div className="animal-div">
                <p className="animal-text">
                    <a className="animal-link" href=" ">Link</a>
                </p>
            </div>
        </div>
    );
}