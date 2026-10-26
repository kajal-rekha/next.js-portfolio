import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary text-light">
      <Reveal>
        {" "}
        <div className="wrapper py-6 text-center text-sm text-light/80">
          © {new Date().getFullYear()} Kajal Rekha. All rights reserved.
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
