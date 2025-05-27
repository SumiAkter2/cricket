import logoImg from "../assets/imgs/logo-1.png";
const Footer = () => {
  return (
    <div className=" bg-gray-900 ">
      <div className="flex justify-center pt-72 pb-6">
        <img src={logoImg} alt="logo-img" />
      </div>
      <footer className="md:flex justify-between items-center py-10 text-white px-24 mx-auto">
        <nav>
          <h6 className="text-xl ">Services</h6>
          <br />
          <a className="link link-hover">Branding</a>
          <br />
          <a className="link link-hover">Design</a>
          <br />
          <a className="link link-hover">Marketing</a>
          <br />
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-xl ">Company</h6>
          <br />
          <a className="link link-hover">About us</a>
          <br />
          <a className="link link-hover">Contact</a>
          <br />
          <a className="link link-hover">Jobs</a>
          <br />
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl ">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
