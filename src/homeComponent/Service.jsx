
const Service = () => {
    return (
        <div className="my-10 w-11/12 mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl text-center">Our Awesome <span className="text-pink-400">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="/src/assets/icons/Group 1372.png"
                        alt="Shoes"
                        className="rounded-xl w-[42px] h-[42px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Anti Age Face Treatment</h2>
                    <p className="text-pink-400">$199</p>
                    <p>We craft stunning and amazing web UI, using a well drafted UX to fit your product.</p>
                </div>
            </div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="/src/assets/icons/Group 1373.png"
                        alt="Shoes"
                        className="rounded-xl w-[42px] h-[42px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Hair Color & Styling</h2>
                    <p className="text-pink-400">$99</p>
                    <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                </div>
            </div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="/src/assets/icons/Group 1374.png"
                        alt="Shoes"
                        className="rounded-xl w-[42px] h-[42px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Skin Care Treatment</h2>
                    <p className="text-pink-400">$299</p>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
            </div>
            </div>
            <div className="block items-center text-center my-3">
            <button className="btn btn-error bg-pink-400 text-white">Explore More</button>
            </div>
        </div>
    );
};

export default Service;