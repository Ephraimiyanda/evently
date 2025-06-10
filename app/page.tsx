"use client";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { ArrowRight } from "lucide-react";

import { title, subtitle } from "@/components/common/primitives";
import { features } from "@/config/features";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import FeaturesCard from "@/components/cards/feature-cards";
import BenefactorsCard from "@/components/cards/benefactors-cards";
import AdvantageLayout from "@/components/section-layouts/advantage-layout";

export default function Home() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10  ">
      <section
        className="flex flex-col items-center justify-center gap-4  "
        id="introduction"
      >
        <div className="flex flex-wrap max-w-2xl text-center justify-center">
          <span className={title()}>Streamline&nbsp;</span>
          <span className={title({ color: "blue" })}>Event&nbsp;</span>
          <br />
          <span className={title()}>planning, creating&nbsp;</span>
          <span className={title({ color: "blue" })}>simplicity&nbsp;</span>
          <span className={title()}>and&nbsp;</span>
          <span className={title({ color: "blue" })}>efficiency</span>
          <span className={title()}>.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Making event planning effortless, plan better, stress less.
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Button
            isExternal
            as={Link}
            className="py-2 h-10 shadow-md w-fit"
            color="primary"
            endContent={<ArrowRight size={25} />}
            fullWidth={true}
            href="#"
            radius="full"
            size="lg"
            variant="shadow"
          >
            Download now
          </Button>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-14"
        id="features"
      >
        <div ref={ref} className="max-w-6xl mx-auto  sm:px-6 lg:px-8">
          <motion.div
            animate={controls}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold ">
              Everything You Need to{" "}
              <span className={title({ color: "blue" })}>Succeed</span>
            </h2>
            <p className={subtitle({ class: "mt-4" })}>
              Our comprehensive suite of tools makes event planning simple,
              organized, and stress-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeaturesCard
                key={index}
                controls={controls}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 pt-0 sm:bg-[url(/background/blurry.svg)] bg-[url(/background/blurry-vertical.svg)] bg-no-repeat bg-center sm:bg-[size:90%] bg-cover w-full"
        id="benefactors"
      >
        <h3 className="my-4 text-center">
          <span className={title()}>Who can </span>{" "}
          <span className={title({ color: "blue" })}>benefit</span>{" "}
          <span className={title()}>from our services</span>
        </h3>
        <div className="flex flex-col w-full md:w-auto justify-center gap-4">
          <BenefactorsCard />
        </div>
      </section>
      <section
        className="flex flex-col md:self-stretch items-center justify-center gap-4 py-8 md:py-10 pt-0 "
        id="advantages"
      >
        <h3 className="my-4 text-center">
          <span className={title({ color: "blue" })}>Advantages </span>{" "}
          <span className={title()}>of using</span>
          <br />
          <span className={title()}>our app</span>
        </h3>
        <AdvantageLayout />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 pt-0 text-center">
        <div>
          <motion.h4
            // initial={{ opacity: 0, y: 30 }}
            // animate={controls}
            // transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className={title()}>Ready to </span>
            <span className={title({ color: "blue" })}>plan</span>{" "}
            <span className={title()}> your next event?</span>
          </motion.h4>

          <motion.p
            // initial={{ opacity: 0, y: 30 }}
            // animate={controls}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl dark:text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Join thousands of users who have simplified their event planning
            with EventFlow. Start your free trial today!
          </motion.p>

          <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={controls}
          // transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              className="py-2 h-10 shadow-md w-fit"
              color="primary"
              endContent={<ArrowRight size={25} />}
              fullWidth={true}
              radius="full"
              size="lg"
              variant="shadow"
            >
              Download now
            </Button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
