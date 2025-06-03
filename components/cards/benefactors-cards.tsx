import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { benefactors } from "@/config/benefactors";

export default function BenefactorsCard() {
  const { ref, controls } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="grid place-items-center col-auto sm:grid-cols-2 lg:grid-cols-3 gap-8  w-full  "
    >
      {benefactors.map((benefactor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className=" w-full flex justify-center"
        >
          <Card
            className="p-8 transition-all duration-300 transform hover:-translate-y-2  w-full  max-w-[280px] h-[130px]"
            shadow="sm"
          >
            <CardBody className="p-0 flex flex-col justify-center">
              <p className="text-center text-lg font-semibold leading-relaxed">
                {benefactor}
              </p>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
