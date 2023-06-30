import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


import animalData from "../animalData.json";
import imageData from "../imageData.json";

import { transformAnimalString } from "../utils";
import { transformExhibitString } from "../utils";

let animalList = [];
let exhibitList = [];
let imageList = [];

animalData.forEach((animal) => {
    if (animal.title && animal.exhibit_name) {
        animalList.push(transformAnimalString(animal.title));
        exhibitList.push(transformExhibitString(animal.exhibit_name));
    }
});

const dataArray = Object.values(imageData);
dataArray.forEach(animal => {
    if (animalList.includes(transformAnimalString(animal.title))) {
        let index = animalList.indexOf(transformAnimalString(animal.title));
        imageList[index] = animal.image_small;
        let indexDuplicate = animalList.indexOf(transformAnimalString(animal.title), index + 1);
        if (indexDuplicate) imageList[indexDuplicate] = animal.image_small;
    }
});

export function AnimalSwiper({ exhibit, expanded }) {
    if (expanded) {
        let animals = animalList.filter(animal => { return exhibitList[animalList.indexOf(animal)] === transformExhibitString(exhibit); });
        let images = imageList.filter(image => { return exhibitList[imageList.indexOf(image)] === transformExhibitString(exhibit); });

        return (
            <Swiper slidesPerView={6} modules={[Navigation]} navigation={true}>
                <p slot="container-start" className="animal-label">Animals in this exhibit: </p>
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img className="swiper-image" src={image} alt={animals[index]}></img>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            /**
            <div className="swiper-container">
                <p className="animal-label">Animals in this exhibit: </p>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {
                            images.map((image, index) => (
                                <img className="swiper-image" src={image} alt={animals[index]}></img>
                            ))
                        }
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
             */
        );
    } else {
        return null;
    }
}