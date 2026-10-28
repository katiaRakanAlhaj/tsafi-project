import discoverImage from "@/assets/images/discoverImage.png";
const DiscoverLocaleFavorites = () => {
  return (
    <div dir="ltr" className="container7 mx-auto mt-[6rem]">
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <img
            className="w-full h-[35rem] object-contain"
            src={discoverImage}
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center ml-[1rem]">
          <h1 className="text-[2rem] font-bold text-primary">
            DISCOVER NEW LOCAL FAVOURITES
          </h1>
          <p className="text-[#1F5852E5] mt-[1.5rem] w-[90%] text-xl leading-relaxed">
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
