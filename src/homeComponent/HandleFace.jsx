
const HandleFace = () => {
    return (
        <div className="my-10 w-10/12 mx-auto">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="/src/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"
                        className="md:w-[580px] md:h-[381px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold">Let us handle your <br /> screen <span className="text-pink-400">Professionally</span>.</h1>
                        <p className="py-6">
                            Amazing flyers, social media posts and brand representations that would make your brand stand out.
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="stat place-items-center shadow-xl">
                                <div className="stat-value text-secondary">500 +</div>
                                <p>Happy Customer</p>
                            </div>
                            <div className="stat place-items-center shadow-xl">
                                <div className="stat-value text-secondary">16 +</div>
                                <p>Total Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandleFace;