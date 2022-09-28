const FloatingCard = () => {
  return (
    <div
      className="capitalize text-center bg-white floating-card-shadow
    rounded-lg absolute text-darkCyan py-12 -top-[15%] lg:-top-[25%]
    left-1/2 w-11/12 max-w-xl -translate-x-1/2"
    >
      <p className="font-bold text-lg mb-6">Ready to build your community?</p>
      <a
        href="#"
        className="bg-primary px-12 py-3 text-white text-sm rounded-full shadow-lg lg:px-20 "
      >
        Get Started For Free
      </a>
    </div>
  );
};

export default FloatingCard;
