
const Footer = () => {
  return (
    <footer className="footer text-white sm:footer-horizontal bg-pink-400 p-10">
      <aside>
        <img src="/src/assets/icons/map-pin-2-fill.png" alt="" />
        <p className="text-white">
          H#000 (0th Floor), Road #00,
          <br />
          New DOHS, Mohakhali, Dhaka, Bangladesh
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title">Contact</h6>
        <div className="flex justify-center items-center gap-2">
          <img className="w-8 h-8" src="/src/assets/icons/Vector.png" alt="" />
          <img className="w-8 h-8" src="/src/assets/icons/Vector-1.png" alt="" />
          <img className="w-8 h-8" src="/src/assets/icons/Vector-2.png" alt="" />
          <img className="w-8 h-8" src="/src/assets/icons/Vector-3.png" alt="" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;