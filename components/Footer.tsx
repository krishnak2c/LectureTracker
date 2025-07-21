const Footer = () => {
  return (
    <div className="container py-6 text-center md:flex md:items-center md:justify-between">
      <p className="mt-0 md:mt-0 md:order-1">&copy; {new Date().getFullYear()} Krishna Choudhary</p>
    </div>
  );
};

export default Footer;
