import React from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { bg4 } from '../../../assets/images'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const testimonialData = {
    sectionTitle: 'Testimonial',
    title: "creative & dedicated is things that Jonny studio brings for your house",
    backgroundImage: bg4
}
const testmonials = [
    {
        id: 1,
        author: 'Jemmy floyd',
        address: 'Apartment view lake at Brooklyn',
        text1: 'Lorem ipsum dolor sit amet, consectetur  fugit ipsum, blanditiis minima voluptatibus sit in laudantium doloribus, illum, reiciendis similique distinctio asperiores earum dolore eveniet eius.',
        text2: 'Thank you so much for all your design and expertise.'
    },
    {
        id: 2,
        author: 'Alex Plunket',
        address: 'Apartment view lake at Brooklyn',
        text1: 'Lorem ipsum dolor sit amet,  molestias fugit ipsum, blanditiis minima voluptatibus sit in laudantium doloribus, illum, reiciendis similique distinctio asperiores earum dolore eveniet eius.',
        text2: 'Thank you so much for all your design and expert.'
    },
    {
        id: 3,
        author: 'David & Elisa',
        address: 'Apartment view lake at Brooklyn',
        text1: 'Lorem ipsum dolor sit amet,  officia molestias fugit ipsum, blanditiis minima voluptatibus sit in laudantium doloribus, illum, reiciendis similique distinctio asperiores earum dolore eveniet eius.',
        text2: 'Thank you so much for all your design and expertise.'
    },
    {
        id: 4,
        author: 'John Dow',
        address: 'Apartment view lake at Brooklyn',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. blanditiis minima voluptatibus sit in laudantium doloribus, illum, reiciendis similique distinctio asperiores earum dolore eveniet eius.',
        text2: 'Thank you so much for all your design and expertise.'
    }
]
export default function Page7({ activeClassName, img }) {
    return (
        <div data-anchor="page7" className={`pp-scrollable text-white section section-7 ${activeClassName}`}>
            <div className="scroll-wrap">
                {/* <img src={testimonialData.styles.backgroundImage} alt="ff" /> */}
                <div className="section-bg" style={{ backgroundImage: `url(${testimonialData.backgroundImage})` }}></div>
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title hidden-xs hidden-sm"><span>{testimonialData.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-5">
                                                <span className="icon-quote ion-quote"></span>
                                                <h2 className="title-uppercase text-white">{testimonialData.title} </h2>
                                            </div>
                                            <div className="col-md-5 col-lg-5  col-md-offset-1 col-lg-offset-2">
                                                {/* <OwlCarousel
                                                    className="review-carousel owl-carousel"
                                                    loop
                                                    items={1}
                                                    margin={10}
                                                > {testmonials.map(testimonial =>
                                                    <Testimonial key={testimonial.id} testimonial={testimonial} />
                                                )}
                                                </OwlCarousel> */}
                                                <Carousel showThumbs={false} showArrows={false}>
                                                    {testmonials.map(testimonial =>
                                                        <Testimonial key={testimonial.id} testimonial={testimonial} />
                                                    )}
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Testimonial = ({ testimonial }) => {
    return (
        <div className="item review-carousel-item">
            <div className="text">
                <p>“ {testimonial.text1} </p>
                <p className="mxdn"> {testimonial.text2}"</p>
            </div>
            <div className="review-author">
                <div className="author-name">{testimonial.author}</div>
                <i>{testimonial.address}</i>
            </div>
        </div>
    )
}
