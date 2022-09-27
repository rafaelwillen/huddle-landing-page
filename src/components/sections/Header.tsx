import mockups from "../../assets/images/illustration-mockups.svg";
import huddleLogo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="bg-hero-pattern-mobile bg-cover bg-center bg-no-repeat lg:bg-hero-pattern-desktop h-screen">
      <header className="container m-auto">
        <div className="flex justify-between items-center py-5 px-3">
          <img
            src={huddleLogo}
            alt="Huddle Logo"
            width="128px"
            className="w-32 lg:w-40"
          />
          <a
            className="bg-white py-2 px-6 lg:px-12 font-bold text-sm rounded-full shadow-md"
            href="#"
          >
            Try It Free
          </a>
        </div>
        <section className="mt-10 px-3 lg:flex items-center">
          <div className="flex flex-col gap-6 flex-[2] lg:gap-8">
            <h1 className="text-center text-xl font-semibold font-heading lg:text-left lg:text-3xl lg:leading-relaxed">
              Build the Community <br />
              Your Fans Will Love
            </h1>
            <p className="text-center lg:text-left">
              Huddle re-images the way we build communities. You have a voice,
              but so does your audience. Creates connections with your users as
              you engage in genuine discussions.
            </p>
            <a
              href="#"
              className="bg-primary w-full block text-center text-white text-sm py-2 rounded-full shadow-lg lg:w-1/2 lg:py-3 lg:font-bold"
            >
              Get Started For Free
            </a>
          </div>
          <img
            src={mockups}
            width={296}
            sizes="(min-width: 64em) 42rem, (max-width:63.9em) 18.75rem"
            className="w-full p-3 mt-6 lg:mt-0 lg:flex-[3] lg:w-0 lg:max-w-2xl"
            alt="Mockups"
          />
        </section>
      </header>
    </div>
  );
};

export default Header;
