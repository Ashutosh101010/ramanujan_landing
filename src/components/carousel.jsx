import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Dialog } from "@mui/material";

export const CarouselSlider = () => {

    const [defaultModal, setDefaultModal] = useState(true)
    return (
        <div id="Carousle">

            <Dialog open={defaultModal} onClose={() => setDefaultModal(false)} >
                <img src="img/IMG-20220119-WA0026.jpg" className="" alt="" style={{ height: "593px" }} />
            </Dialog>
            <Carousel autoPlay={true} showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
                <div>
                    <img src="img/IMG-20231129-WA0000.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="img/2.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="img/3.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>

                <div>
                    <img src="img/Screenshot_20181126-145219.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>


                <div>
                    <img src="img/google ad-2.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
        </div>
    )
}