import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/con.jpg";

const services = [
  {
    name: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "Learn more",
  },
  {
    name: "Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "Learn more",
  },
  {
    name: "Product Braning",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I&apos;m a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
            <div className="mt-5">
              <img
                src={Image}
                alt=""
                width="90%"
                className="rounded-[20px] hidden lg:block"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            {services.map((e, i) => {
              const { name, description, link } = e;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={i}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
