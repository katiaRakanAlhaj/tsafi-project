import choose1 from "@/assets/images/choose1.png";
import choose2 from "@/assets/images/choose2.png";
import choose3 from "@/assets/images/choose3.png";
import choose4 from "@/assets/images/choose4.png";
import bagImage from "@/assets/images/Bag Image 2.png";

const points = [
  {
    id: 1,
    image: choose1,
    alt: "Enjoy Good Food",
    text: "Enjoy Good Food At ½ Price Or Less",
    side: "left",
    order: "order-1 md:order-1",
  },
  {
    id: 2,
    image: choose2,
    alt: "Help Environment",
    text: "Help The Environment By Reducing Food Waste",
    side: "left",
    order: "order-4 md:order-3",
  },
  {
    id: 3,
    image: choose3,
    alt: "Rescue Food",
    text: "Rescue Food Near You",
    side: "right",
    order: "order-2 md:order-2",
  },
  {
    id: 4,
    image: choose4,
    alt: "Try Something New",
    text: "Try Something New From Local Cafes, Bakeries Or Restaurants",
    side: "right",
    order: "order-3 md:order-4",
  },
];

/* بطاقة النقاط للشاشات الكبيرة (lg فأكبر) */
const PointCard = ({ point, align }) => (
  <div className={`flex flex-col items-center ${align} gap-3`}>
    <img
      src={point.image}
      alt={point.alt}
      className="object-contain w-[3rem]"
    />
    <p className="text-[#0C6766] font-bold text-lg leading-relaxed max-w-[70%]">
      {point.text}
    </p>
  </div>
);

/* بطاقة النقاط للشاشات الصغيرة والمتوسطة (أصغر من lg) */
const CompactPointCard = ({ point }) => (
  <div className={`flex items-center gap-3 ${point.order}`}>
    <img
      src={point.image}
      alt={point.alt}
      className="object-contain w-10 md:w-12 shrink-0"
    />
    <p className="text-[#0C6766] font-bold text-sm md:text-base leading-snug">
      {point.text}
    </p>
  </div>
);

const WhyChooseTsafi = () => {
  const leftPoints = points.filter((p) => p.side === "left");
  const rightPoints = points.filter((p) => p.side === "right");

  return (
    <div className="px-4 lg:px-0 pb-10 lg:pb-0">
      {/* قسم العناوين والنصوص التعريفية */}
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-[55%]">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-[#13615C] text-center text-xl md:text-2xl lg:text-3xl mt-[2rem]">
              Tsafi is a social impact company on a mission to inspire and
              empower everyone to fight food waste together.
            </p>
            <p className="text-sm lg:text-base text-[#000000] mt-2 max-w-[90%] lg:max-w-[85%]">
              Our app is Syria's largest marketplace for surplus food. We help
              users rescue good food from going to waste, offering great value
              for money at local stores, cafes and restaurants.
            </p>
            <h1 className="text-[#036664] mt-10 md:mt-12 font-bold text-3xl md:text-4xl lg:text-5xl">
              WHY USE
            </h1>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-[1rem] tracking-[0.6rem] md:tracking-[1rem] text-[#FF914D]">
              TSAFI
            </h1>
          </div>
        </div>
      </div>

      {/* ===== الشاشات الكبيرة (lg فأكبر): تصميم 3 أعمدة ===== */}
      <div className="hidden lg:grid grid-cols-3 gap-4 items-center mt-[3rem]">
        {/* العمود الأيسر */}
        <div className="flex flex-col gap-16 md:gap-28 items-end text-right">
          {leftPoints.map((point) => (
            <PointCard key={point.id} point={point} align="lg:items-end" />
          ))}
        </div>

        {/* العمود الأوسط (صورة الحقيبة) */}
        <div className="flex justify-center items-center relative">
          <img
            src={bagImage}
            alt="Tsafi Bag"
            className="w-[26rem] object-contain drop-shadow-2xl z-10"
          />
        </div>

        {/* العمود الأيمن */}
        <div className="flex flex-col gap-16 md:gap-28 items-start">
          {rightPoints.map((point) => (
            <PointCard key={point.id} point={point} align="lg:items-start" />
          ))}
        </div>
      </div>

      {/* ===== الشاشات الأصغر من lg: الحقيبة بالأعلى والنقاط تحتها ===== */}
      <div className="lg:hidden">
        <div className="flex justify-center mt-6">
          <img
            src={bagImage}
            alt="Tsafi Bag"
            className="w-56 md:w-72 object-contain drop-shadow-2xl"
          />
        </div>

        {/* شبكة النقاط (عمود واحد للشاشات الصغيرة، شبكة 2x2 للشاشات المتوسطة) */}
        <div className="mx-auto mt-8 w-full max-w-[22rem] md:max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8">
          {points.map((point) => (
            <CompactPointCard key={point.id} point={point} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTsafi;
