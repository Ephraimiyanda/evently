import Image from "next/image";
import { advantages } from "@/config/advantages";
export default function AdvantageLayout() {
  return (
    <div className="flex flex-col md:[&>div:nth-child(even)]:flex-row-reverse gap-12 ">
      {advantages.map((advantage, index) => (
        <div
          className="flex justify-between gap-5 md:gap-10 md:flex-row flex-col w-full"
          key={index}
        >
          <div className="max-w-[500px]">
            <div className="flex flex-col gap-4 justify-start mb-5">
              <div className="flex flex-col gap-4 justify-normal ">
                <advantage.icon strokeWidth={2} size={46} color="#0072F5" />
                <p className={"font-bold text-2xl"}>{advantage.title}</p>
              </div>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                {advantage.advantages.map((advantage, index) => (
                  <li className="flex flex-col gap-3" key={index}>
                    <span className="font-semibold text-lg">
                      {advantage.title}
                    </span>
                    <p>{advantage.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Image
              width={100}
              height={100}
              alt={`${advantage.title}_illustration`}
              src={advantage.illustration}
              unoptimized
              className="max-w-[450px] max-h-[384px] lg:min-w-[450px] w-full h-full rounded-xl object-center object-cover"
            ></Image>
          </div>
        </div>
      ))}
    </div>
  );
}
