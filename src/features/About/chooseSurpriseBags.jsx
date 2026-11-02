import favoriteImage from "@/assets/images/favoriteImage.png";
const ChooseSurpriseBags = () => {
  return (
    <div className="bg-primary h-auto lg:py-[6rem] py-[3rem]  lg:mt-[7rem] mt-[3rem] border-b-[0.01rem] border-b-[#67D695]">
      <div dir="ltr" className="container9 mx-auto">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              className="w-full md:h-[32rem] object-contain"
              src={favoriteImage}
            />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center ml-[1rem]">
            <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-white uppercase md:w-[80%] w-[100%]">
              CHOOSE YOUR FAVOURITE SURPRISE BAGS
            </h1>
            <p className="text-white md:mt-[1rem] mt-[0.5rem] md:w-[85%] text-lg leading-relaxed">
              Use the Favourites tab to easily keep track of your Favourites.
              Use the heart-shaped ‘Favourite’ feature to track your most-liked
              Surprised Bags, and receive alerts and notifications when they are
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseSurpriseBags;
