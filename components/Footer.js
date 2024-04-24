const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark min-h-[8vh] flex items-center justify-between px-32 font-bold">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <span>Shakib Nibir</span>
    </footer>
  );
};

export default Footer;
