const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark min-h-[8vh] flex items-center justify-center px-32 font-bold border-opacity-15">
      <span>
        {new Date().getFullYear()} &copy; All Rights Reserved by Shakib Nibir
      </span>
    </footer>
  );
};

export default Footer;
