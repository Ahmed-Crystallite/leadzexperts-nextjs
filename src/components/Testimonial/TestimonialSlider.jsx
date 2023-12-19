"use client"
// Swipper
import { register } from 'swiper/element/bundle';
// React
import { useEffect, useRef } from "react";
// Components
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = () => {
    let review = [
        {
            text: "In the first three months, I was enjoying working as a broker in real estate, but as time passed, the pressure kept on increasing; the clients asking me to show properties and apartments; and we're not getting many leads; O GOD! What the challenging last three months I had, and then I came across Leadz Experts through Instagram.",
            title: "Danette Missie",
        },
        {
            text: "At times we need an expert guidance, who could help us providing strategies through which we can get more leads, people know us, it feels like an honor that when people Google for best realtors, or best real estate services, so they find our name up intop suggestion.",
            title: "Jackie Richart",
        },
        {
            text: "I asked them to help promoting our real estate services through social media marketing, and make us renown among people, so we could get more clients, and more leads, and I am really thankful to the entire team of Leadz Experts for their dedication and outstanding services.",
            title: "Jordan Rogers",
        },
        {
            text: "I was not getting enough leads for buying clients, in fact a “costly lead” that is basic requirement for real estate business, I asked many friends, and other folks in my clan, but no results so far. Finally, the Leadz Expert helped me out.",
            title: "Nate Lee",
        }
    ];
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerGroupSkip: 1,
            speed: 1500,
            slidesPerView: 1,
            navigation: true,
            spaceBetween: 20,
            loop: true,
            autoplay: true,
            autoplayDelay: 2500,
            injectStyles: [
                `
                .swiper-button-next svg, .swiper-button-prev svg {
                    width: 0;
                    height: 0;
                    object-fit: contain;
                    transform-origin: center center;
                }
                .swiper-button-next{
                    background-image: url(/home/circled-next.png);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .swiper-button-prev{
                    background-image: url(/home/circled-back.png);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .swiper-button-next, .swiper-button-prev {
                    width: 52px;
                    height: 52px;
                }
                @media screen and (max-width:768px) {
                    .swiper-button-next, .swiper-button-prev {
                        display: none;
                    }
                }
                `
            ],
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <swiper-container ref={swiperRef} init={false}>
            {
                review && review.map((e, i) => {
                    return (
                        <swiper-slide key={i}>
                            <TestimonialCard
                                text={e.text}
                                title={e.title}
                            />
                        </swiper-slide>
                    )
                })
            }
        </swiper-container>
    );
};

export default TestimonialSlider;
