import bannerImage from '../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="w-[200px] h-[180px] md:w-[484px] md:h-[478px]"
                    alt="Young Asian Woman Beauty Concept"
                />
                <div>
                    <h1 className="text-2xl md:text-5xl font-semibold md:font-bold">
                        BEAUTY SALON FOR EVERY WOMEN
                    </h1>
                    <p className="md:py-6">
                        A beauty salon is an establishment that offers a variety of cosmetic treatments and cosmetic
                        services for men and women.
                    </p>
                    <button className="btn btn-outline bg-pink-400">Get an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
