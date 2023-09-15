const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-gradient btn-link text-[30px] font-bold leading-[0.8] lg:text-[40px]"
          >
            CHAMP
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
