import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const CarouselSlider = () => {
    return (
        <div id="Carousle">
            <Carousel autoPlay={true} showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
                <div>
                    <img src="img/google ad-2.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="img/IMG_20190904_185753.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="img/Screenshot_20181126-145219.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="img/IMG_20180806_085019.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    )
}