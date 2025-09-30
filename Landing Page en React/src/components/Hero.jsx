import ellipse from "../assets/images/ellipse.png";
import doctor from "../assets/images/banner-doctor.png";
import { motion } from "framer-motion";

const text = "Bienvenidos a Clínica del Valle";
const subtitle ="Brindamos atención médica de calidad con los mejores profesionales y tecnología avanzada.";

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-2 md:px-14 py-10 bg-[rgba(6,71,136,0.05)]">
      <div className="flex flex-col justify-center gap-4 px-[25px] md:px-[15px] md:w-1/2 sm:w-1/6" >
        {/* Título animado */}
        <motion.h1
          className="text-4xl sm:text-4xl p-4 md:text-[52px] font-bold"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {text.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-[18px] font-medium text-[#5C5C5C] "
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.03, delayChildren: 2 } },
          }}
        >
          {subtitle.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          className="flex mt-5 ml-2.5 gap-7 banner-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          <button className="px-10 py-5 rounded-[10px] cursor-pointer bg-[#174EB2] text-white hover:scale-105 transition">
            Turno Online
          </button>
          <button className="px-10 py-5 rounded-[10px] cursor-pointer border border-[#174EB2] text-[#174EB2] bg-white hover:bg-[#174EB2] hover:text-white hover:scale-105 transition">
            Más Información
          </button>
        </motion.div>
      </div>
      <motion.div
        className="w-full relative md:w-1/2 flex justify-center mt-8 md:mt-2 banner-graphic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.img
          src={ellipse}
          alt="imagen1"
          className="w-[500px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 4 }}
        />
        <motion.img
          src={doctor}
          alt="imagen2"
          className="w-[1500px] absolute -left-[120px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
