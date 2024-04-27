const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark dark:border-light min-h-[8vh] flex items-center justify-center px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 font-bold border-opacity-15 dark:text-light text-sm">
      <span>
        {new Date().getFullYear()} &copy; All Rights Reserved by Shakib Nibir
      </span>
    </footer>
  );
};

export default Footer;
