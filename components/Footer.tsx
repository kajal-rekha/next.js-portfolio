const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary text-light">
      <div className="wrapper py-6 text-center text-sm text-light/80">
        © {new Date().getFullYear()} Kajal Rekha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
