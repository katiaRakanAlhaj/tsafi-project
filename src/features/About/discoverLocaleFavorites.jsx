import discoverImage from "@/assets/images/discoverImage.png";
const DiscoverLocaleFavorites = () => {
  return (
    <div
      dir="ltr"
      className="lg:max-w-[80%] md:max-w-[95%] mx-auto lg:mt-[6rem] mt-[3rem]"
    >
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            className="w-full lg:h-[35rem] object-contain"
            src={discoverImage}
          />
        </div>
        <div className="md:col-span-7 flex flex-col justify-center ml-[1rem]">
          <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-primary">
            DISCOVER NEW LOCAL FAVOURITES
          </h1>
          <p className="text-[#1F5852E5] md:mt-[1.5rem] mt-[0.5rem] w-[90%] lg:text-xl md:text-lg text-lg leading-relaxed">
            Discover (new) local favourites with a wide range of food available
            for you to rescue. Use the Discover feed to see personalised
            recommendations, bags available for collection today and/or
            tomorrow, segment-specific filters, and highlights of new, recently
            added Surprise Bags.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DiscoverLocaleFavorites;
