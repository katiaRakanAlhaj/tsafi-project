import solution1 from "@/assets/images/solution1.png";
import solution2 from "@/assets/images/solution2.png";

const solutions = [
  {
    id: 1,
    image: solution1,
    imageAlt: "Surprise Bags",
    title: "SURPRISE BAGS",
    description:
      "Unlock revenue from surplus food: Sell your unsold food in Surprise Bags through the TSAFI app, for users to come collect in-store at a pre-determined time.",
    textWidth: "lg:w-[45%]",
    offset: false,
  },
  {
    id: 2,
    image: solution2,
    imageAlt: "TSAFI Platform",
    title: "TSAFI PLATFORM",
    description:
      "Your end-to-end surplus food management solution: Modular software that helps retailers seamlessly track, manage and redistribute surplus food.",
    textWidth: "lg:w-[80%]",
    offset: true,
  },
];

const BusinessSolutions = () => {
  return (
    <div dir = "ltr">
      {/* Header */}
      <div className="flex justify-center flex-col items-center mt-[4rem]">
        <h1 className="font-bold lg:w-[100%] w-[70%] flex justify-center text-center text-2xl md:text-4xl lg:text-5xl text-primary">
          OUR BUSINESS SOLUTIONS
        </h1>
        <div className="lg:w-[55%] w-[90%]">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-primary md:text-xl text-lg mt-[1rem] leading-relaxed">
              We provide solutions for restaurants, hotels, bakeries, and flower
              shops in Syria to manage surplus and turn it into an opportunity
              to prevent waste.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions list */}
      <div className="lg:max-w-[66%] max-w-[90%] mx-auto md:mt-[4rem] mt-[2rem]">
        {solutions.map((item) => (
          <div
            key={item.id}
            className={`${item.offset ? "mt-[3rem] lg:ml-[16rem]" : ""}`}
          >
            <div className="md:flex gap-x-[2rem]">
              <div className="relative md:w-[20rem] lg:w-[24rem] h-[15rem] shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.imageAlt}
                />
                <div className="absolute inset-0 bg-[#00000040]" />
              </div>

              <div className="flex flex-col space-y-2 lg:mt-0 md:mt-[2rem] mt-[1rem]">
                <h1 className="font-semibold md:text-2xl text-xl text-primary">
                  {item.title}
                </h1>
                <p className={`text-primary ${item.textWidth} text-lg`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSolutions;
