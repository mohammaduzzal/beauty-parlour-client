import Banner from "../homeComponent/Banner";
import HandleFace from "../homeComponent/HandleFace";
import Service from "../homeComponent/Service";
import Testimonial from "../homeComponent/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <HandleFace/>
            <Testimonial/>
        </div>
    );
};

export default Home;