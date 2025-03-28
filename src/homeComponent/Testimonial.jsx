import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {

    const testimonials = [
        {
            name: 'Nash Patrik',
            title: 'CEO, Manpol',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            rating: 5,
            image: '/src/assets/images/Ellipse 90.png',
        },
        {
            name: 'Miriam Barron',
            title: 'CEO, Manpol',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            rating: 5,
            image: '/src/assets/images/Ellipse 91.png',
        },
        {
            name: 'Bria Malone',
            title: 'CEO, Manpol',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            rating: 5,
            image: '/src/assets/images/Ellipse 92.png',
        },
        {
            name: 'Nash Patrik',
            title: 'CEO, Manpol',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            rating: 5,
            image: '/src/assets/images/Ellipse 90.png',
        },
        {
            name: 'Miriam Barron',
            title: 'CEO, Manpol',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            rating: 5,
            image: '/src/assets/images/Ellipse 91.png',
        },
        {
            name: 'Bria Malone',
            title: 'CEO, Manpol',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
            rating: 5,
            image: '/src/assets/images/Ellipse 92.png',
        },
    ];



    return (
        <div className='testimonial-section my-10 w-11/12 mx-auto'>
            <h2 className='font-bold text-2xl md:text-3xl text-center my-5'>Testimonials</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Responsive breakpoints
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >

                {
                    testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="testimonial-card grid grid-cols-1 md:grid-cols-4 gap-2">
                                <div className="profile">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="profile-image"
                                    />
                                    <div className="profile-info">
                                        <h3>{testimonial.name}</h3>
                                        <p className="title">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="description">{testimonial.description}</p>
                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star" />
                                    ))}
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                    )}

            </Swiper>
        </div>
    );
};

export default Testimonial;