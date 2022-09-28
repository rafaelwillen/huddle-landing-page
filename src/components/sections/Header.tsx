import { motion } from "framer-motion";
import mockups from "../../assets/images/illustration-mockups.svg";
import huddleLogo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="bg-hero-pattern-mobile bg-cover bg-center bg-no-repeat lg:bg-hero-pattern-desktop py-6 bg-paleCyan">
      <header className="container m-auto">
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-center py-5 px-3"
        >
          <img
            src={huddleLogo}
            alt="Huddle Logo"
            width={160}
            height={26}
            className="w-32 lg:w-40"
          />
          <a
            className="bg-white py-2 px-6 lg:px-12 font-bold text-sm rounded-full shadow-md transition duration-300 hover:bg-darkCyan hover:text-white"
            href="#"
          >
            Try It Free
          </a>
        </motion.div>
        <section className="mt-10 px-3 lg:flex items-center">
          <motion.div
            transition={{ duration: 1.1 }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 flex-[2] lg:gap-8"
          >
            <h1 className="text-center text-xl font-semibold font-heading lg:text-left lg:text-3xl lg:leading-relaxed">
              Build the Community <br />
              Your Fans Will Love
            </h1>
            <p className="text-center lg:text-left">
              Huddle re-images the way we build communities. You have a voice,
              but so does your audience. Creates connections with your users as
              you engage in genuine discussions.
            </p>
            <motion.a
              href="#"
              whileHover={{
                width: "90%",
              }}
              className="bg-primary w-full mx-auto block text-center text-white text-sm py-2 rounded-full shadow-lg lg:w-1/2 lg:py-3 lg:font-bold"
            >
              Get Started For Free
            </motion.a>
          </motion.div>
          <motion.img
            transition={{ duration: 1.1 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={mockups}
            width={648}
            height={462}
            sizes="(min-width: 64em) 42rem, (max-width:63.9em) 18.75rem"
            className="w-full max-w-md mx-auto p-3 mt-6 lg:mt-0 lg:flex-[3] lg:w-0 lg:max-w-2xl"
            alt="Mockups"
          />
        </section>
      </header>
    </div>
  );
};

export default Header;
