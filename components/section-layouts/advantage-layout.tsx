import Image from "next/image";
import { motion } from "framer-motion";

import { advantages } from "@/config/advantages";

export default function AdvantageLayout() {
  return (
    <div className="flex flex-col md:[&>div:nth-child(even)]:flex-row-reverse gap-12 ">
      {advantages.map((advantage, index) => {
        const isEven = index % 2 === 1;
        const titleAnimation = {
          initial: { x: isEven ? 100 : -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
          viewport: { once: true },
        };

        const imageAnimation = {
          initial: { x: isEven ? -100 : 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
          viewport: { once: true },
        };

        const listAnimation = {
          initial: { y: 50, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
          viewport: { once: true },
          variants: {
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          },
        };

        return (
          <div
            key={index}
            className="flex justify-between gap-5 md:gap-10 md:flex-row flex-col w-full"
          >
            <motion.div className="max-w-[500px]" {...titleAnimation}>
              <div className="flex flex-col gap-4 justify-start mb-5">
                <div className="flex flex-col gap-4 justify-normal ">
                  <advantage.icon color="#0072F5" size={46} strokeWidth={2} />
                  <p className={"font-bold text-2xl"}>{advantage.title}</p>
                </div>
              </div>
              <motion.ul className="flex flex-col gap-4" {...listAnimation}>
                {advantage.advantages.map((advantage, index) => (
                  <li key={index} className="flex flex-col gap-3">
                    <span className="font-semibold text-lg">
                      {advantage.title}
                    </span>
                    <p>{advantage.description}</p>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div {...imageAnimation}>
              <Image
                unoptimized
                alt={`${advantage.title}_illustration`}
                className="max-w-[450px] max-h-[384px] lg:min-w-[450px] w-full h-full rounded-xl object-center object-cover"
                height={100}
                src={advantage.illustration}
                width={100}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
