import choose1 from "../../../assets/images/choose1.png";
import choose2 from "../../../assets/images/choose2.png";
import choose3 from "../../../assets/images/choose3.png";
import choose4 from "../../../assets/images/choose4.png";
import bagImage from "../../../assets/images/Bag Image 2.png";

const points = [
  {
    id: 1,
    image: choose1,
    alt: "Enjoy Good Food",
    text: "Enjoy Good Food At ½ Price Or Less",
    side: "left",
  },
  {
    id: 2,
    image: choose2,
    alt: "Help Environment",
    text: "Help The Environment By Reducing Food Waste",
    side: "left",
  },
  {
    id: 3,
    image: choose3,
    alt: "Rescue Food",
    text: "Rescue Food Near You",
    side: "right",
  },
  {
    id: 4,
    image: choose4,
    alt: "Try Something New",
    text: "Try Something New From Local Cafes, Bakeries Or Restaurants",
    side: "right",
  },
];

const PointCard = ({ point, align }) => (
  <div className={`flex flex-col items-center ${align} gap-3`}>
    <img
      src={point.image}
      alt={point.alt}
      className="object-contain w-[3rem]"
    />
    <p
      className={`text-[#0C6766] font-bold text-lg leading-relaxed ${
        align.includes("items-end") ? "max-w-[70%]" : "max-w-[70%]"
      }`}
    >
      {point.text}
    </p>
  </div>
);

const WhyChooseTsafi = () => {
  const leftPoints = points.filter((p) => p.side === "left");
  const rightPoints = points.filter((p) => p.side === "right");

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[55%]">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-[#13615C] text-center leading-relaxed text-3xl mt-[2rem]">
              Tsafi is a social impact company on a mission to inspire and
              empower everyone to fight food waste together.
            </p>
            <p className="text-md text-[#000000] mt-2">
              Our app is the syria largest marketplace for surplus food. We help
              users rescue good food from going to waste, offering great value
              for money at local stores, cafes and restaurants.
            </p>
            <h1 className="text-[#036664] mt-[3rem] font-bold text-5xl">
              WHY USE
            </h1>
            <h1 className="font-bold text-5xl mt-[1rem] tracking-[1rem] text-[#FF914D]">
              TSAFI
            </h1>
          </div>
        </div>
      </div>

      {/* 4 Points + Bag Section */}
      <div className="grid grid-cols-3 gap-4 items-center mt-[2rem]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-16 md:gap-28 items-center lg:items-end text-center lg:text-right">
          {leftPoints.map((point) => (
            <PointCard key={point.id} point={point} align="lg:items-end" />
          ))}
        </div>

        {/* CENTER COLUMN (Bag Image) */}
        <div className="flex justify-center items-center relative order-first order-none mb-0">
          <img
            src={bagImage}
            alt="Tsafi Bag"
            className="w-[26rem] object-contain drop-shadow-2xl z-10"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-16 md:gap-28 items-center lg:items-start">
          {rightPoints.map((point) => (
            <PointCard key={point.id} point={point} align="lg:items-start" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTsafi;
