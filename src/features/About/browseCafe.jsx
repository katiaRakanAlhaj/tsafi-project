import browseImage from "@/assets/images/browseImage.png";

const DiscoverLocaleFavorites = () => {
  return (
    <section className="w-full py-[1rem]">
      <div className="container8 px-4 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading & Description */}
        <div className="flex flex-col gap-4 justify-center mt-[4rem] h-full col-span-7">
          <h2 className="text-[2rem] font-bold text-primary w-[80%] uppercase">
            Browse Local Cafes Restaurants and More
          </h2>

          <p className="text-[#1F5852E5] w-[100%] text-lg leading-relaxed">
            Browse the map of your preferred local area, set the filters based
            on your individual preferences and immediately see which stores,
            cafes, restaurants or bakeries have food available for you to
            reserve and collect. You can easily sort results by distance, price,
            rating or relevance.
          </p>
        </div>

        {/* Right Column: Mobile Screen / Image Mockup */}
        <div className="relative flex justify-center items-center w-full col-span-5 ml-[4rem]">
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

export default DiscoverLocaleFavorites;
