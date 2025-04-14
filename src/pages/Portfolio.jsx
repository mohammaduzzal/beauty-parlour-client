const Portfolio = () => {
    const portfolioItems = [
      {
        title: "Luxury Spa Treatment",
        image: "https://i.ibb.co.com/PBGHvrB/hbz-ott-viceroy-spa-1510676687.jpg",
        description: "A complete skincare transformation for radiant, youthful skin.",
        category: "Skincare",
      },
      {
        title: "Modern Hair Styling",
        image: "https://i.ibb.co.com/5Dp2xYy/10-Hair-Styling-Tips-for-a-Modern-Look-Blog-Post-Header-2400-x-1600-edited-361x241.webp",
        description: "Vibrant colors and trendy cuts tailored to your personality.",
        category: "Hair",
      },
      {
        title: "Relaxing Massage Therapy",
        image: "https://i.ibb.co.com/sJ3NF1bb/images-3.jpg",
        description: "Soothing massages to relieve stress and rejuvenate your body.",
        category: "Wellness",
      },
      {
        title: "Bridal Makeup",
        image: "https://i.ibb.co.com/3m5MzpWv/8.webp",
        description: "Elegant makeup designs for your special day.",
        category: "Makeup",
      },
    ];
  
    return (
      <div className="my-10 w-11/12 mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl text-center mb-8">
          Our <span className="text-pink-400">Portfolio</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="card bg-gray-50 shadow-sm rounded-xl overflow-hidden">
              <figure>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-6 text-center">
                <h3 className="card-title text-xl font-semibold">{item.title}</h3>
                <p className="text-pink-400">{item.category}</p>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 btn btn-sm bg-pink-600 text-white hover:bg-pink-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;