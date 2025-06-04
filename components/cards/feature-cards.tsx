import { AnimationControls, motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";

import { featureTypes } from "@/types/features";

export default function FeaturesCard({
  feature,
  controls,
  index,
}: {
  feature: featureTypes;
  controls: AnimationControls;
  index: number;
}) {
  return (
    <motion.div
      key={feature.title}
      animate={controls}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.4 }}
    >
      <Card
        className="p-8 h-full transition-all duration-300 transform hover:-translate-y-2 "
        shadow="sm"
      >
        <CardBody className="p-0">
          <div
            className={`bg-content1 justify-center p-[2px]  mb-6  flex items-center w-16 h-16 bg-gradient-to-br from-[#0072F5] via-[#5EA2EF] to-[#0072F5]  rounded-xl`}
          >
            <div
              className={`flex items-center justify-center  bg-inherit w-full h-full rounded-[10px]`}
            >
              <feature.icon className="text-[#0072F5] w-8 h-8" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
            {feature.description}
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
}
