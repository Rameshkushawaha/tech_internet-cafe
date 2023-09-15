import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carouselimg(){
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMd_xeSmNaangL_uuLp4ZGmrjpXSW6ItWzNQ&usqp=CAU"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Slide 1</h3>
                        <p>Slide 1 Description</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img"
                        src="https://assetsio.reedpopcdn.com/4_oui7mYm.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Slide 2</h3>
                        <p>Slide 2 Description</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img"
                        src="https://s.oneroof.co.nz/image/ac/22/ac222d0a5af4689d1361d01c540cffff.jpg?x-oss-process=image/quality,q_80"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Slide 3</h3>
                        <p>Slide 3 Description</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carouselimg