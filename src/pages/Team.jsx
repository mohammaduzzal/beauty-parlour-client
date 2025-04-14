
const Team = () => {
    const teamMembers = [
      {
        name: "Jane Doe",
        role: "Lead Aesthetician",
        image: "https://i.ibb.co.com/zWqcggDp/images.jpg",
        description: "Expert in advanced skincare treatments with over 10 years of experience.",
      },
      {
        name: "John Smith",
        role: "Hair Stylist",
        image: "https://i.ibb.co.com/HDSwSzXJ/images-1.jpg",
        description: "Creative stylist specializing in modern cuts and vibrant colors.",
      },
      {
        name: "Emily Brown",
        role: "Spa Manager",
        image: "https://i.ibb.co.com/XMFKVJD/images-2.jpg",
        description: "Dedicated to ensuring a relaxing and luxurious spa experience.",
      },
      {
        name: "John Smith",
        role: "Hair Stylist",
        image: "https://i.ibb.co.com/HDSwSzXJ/images-1.jpg",
        description: "Creative stylist specializing in modern cuts and vibrant colors.",
      },
      {
        name: "Emily Brown",
        role: "Spa Manager",
        image: "https://i.ibb.co.com/XMFKVJD/images-2.jpg",
        description: "Dedicated to ensuring a relaxing and luxurious spa experience.",
      },
    ];
  
    return (
      <div className="my-10 w-11/12 mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl text-center mb-8">
          Meet Our <span className="text-pink-400">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="card bg-gray-50 shadow-sm rounded-xl p-6 text-center">
              <figure className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </figure>
              <div className="card-body items-center">
                <h3 className="card-title text-xl font-semibold">{member.name}</h3>
                <p className="text-pink-400">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;