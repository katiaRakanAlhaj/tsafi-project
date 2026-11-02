import browseImage from "@/assets/images/browseImage.png";

const BrowseCafe = () => {
  return (
    <section className="w-full lg:py-[1rem] md:mt-0 mt-[4rem]">
      <div className="lg:max-w-[70%] md:max-w-[95%] px-4 mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 items-center">
        {/* Left Column: Heading & Description (second on mobile) */}
        <div className="order-2 md:order-none flex flex-col md:gap-4 gap-[0.5rem] justify-center md:mt-[4rem] h-full lg:col-span-7 md:col-span-5">
          <h2 className="lg:text-[2rem] text-[1.5rem] font-bold text-primary lg:w-[80%] uppercase">
            Browse Local Cafes Restaurants and More
          </h2>

          <p className="text-[#1F5852E5] w-[100%] text-lg lg:leading-relaxed">
            Browse the map of your preferred local area, set the filters based
            on your individual preferences and immediately see which stores,
            cafes, restaurants or bakeries have food available for you to
            reserve and collect. You can easily sort results by distance, price,
            rating or relevance.
          </p>
        </div>

        {/* Right Column: Mobile Screen / Image Mockup (first on mobile) */}
        <div className="order-1 md:order-none relative flex justify-center items-center w-full lg:col-span-5 md:col-span-7 lg:ml-[4rem]">
          <div className="relative w-[30rem] h-[20rem] object-contain">
            <img
              src={browseImage}
              alt="Browse local map and restaurants preview"
              className="w-full h-auto object-contain mx-auto drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseCafe;
