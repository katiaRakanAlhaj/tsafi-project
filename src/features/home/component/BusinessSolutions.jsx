import solution1 from "../../../assets/images/solution1.png";
import solution2 from "../../../assets/images/solution2.png";

const solutions = [
  {
    id: 1,
    image: solution1,
    imageAlt: "Surprise Bags",
    title: "SURPRISE BAGS",
    description:
      "Unlock revenue from surplus food: Sell your unsold food in Surprise Bags through the TSAFI app, for users to come collect in-store at a pre-determined time.",
    textWidth: "w-[45%]",
    offset: false,
  },
  {
    id: 2,
    image: solution2,
    imageAlt: "TSAFI Platform",
    title: "TSAFI PLATFORM",
    description:
      "Your end-to-end surplus food management solution: Modular software that helps retailers seamlessly track, manage and redistribute surplus food.",
    textWidth: "w-[70%]",
    offset: true,
  },
];

const BusinessSolutions = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center flex-col items-center mt-[4rem]">
        <h1 className="font-bold text-5xl text-primary">
          OUR BUSINESS SOLUTIONS
        </h1>
        <div className="w-[55%]">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-primary text-xl mt-[1rem] leading-relaxed">
              We provide solutions for restaurants, hotels, bakeries, and flower
              shops in Syria to manage surplus and turn it into an opportunity
              to prevent waste.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions list */}
      <div className="container3 mx-auto mt-[4rem]">
        {solutions.map((item) => (
          <div
            key={item.id}
            className={`${item.offset ? "mt-[3rem] ml-[16rem]" : ""}`}
          >
            <div className="flex gap-x-[2rem]">
              <div className="relative w-[24rem] h-[15rem] shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.imageAlt}
                />
                <div className="absolute inset-0 bg-[#00000040]" />
              </div>

              <div className="flex flex-col space-y-2">
                <h1 className="font-semibold text-2xl text-primary">
                  {item.title}
                </h1>
                <p
                  className={`text-primary ${item.textWidth} text-lg leading-relaxed`}
                >
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
