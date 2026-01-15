import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Github Link */}
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://github.com/subhamkumar584"
            target="_blank"
            className="hover:underline"
          >
            Visit GitHub
          </a>
        </div>

        {/* Social Icons */}
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              key={img.url}
              href={img.url}
              target="_blank"
              className="icon"
            >
              <img
                src={img.imgPath}
                alt={img.name || "social icon"}
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Subham | All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
