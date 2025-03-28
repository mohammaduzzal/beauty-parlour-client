
const Message = () => {
    return (
        <div className="my-10 w-8/12 mx-auto text-gray-700">
            <h2 className="text-2xl text-black md:text-3xl font-bold text-center my-6">Let us handle your <br />
                project, professionally.</h2>
            <form className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <input type="text" placeholder="First Name" className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <input type="text" placeholder="First Name" className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                </div>
                <div>
                    <textarea
                        placeholder="Your message..."
                        rows="4"
                        className="textarea textarea-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-error px-8 py-3 text-white font-semibold bg-pink-400"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Message;