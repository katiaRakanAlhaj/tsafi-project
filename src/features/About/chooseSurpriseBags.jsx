import favoriteImage from "@/assets/images/favoriteImage.png";
const ChooseSurpriseBags = () => {
  return (
    <div className="bg-primary h-auto py-[6rem]  mt-[7rem] border-b-[0.01rem] border-b-[#67D695]">
      <div dir="ltr" className="container9 mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img
              className="w-full h-[32rem] object-contain"
              src={favoriteImage}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center ml-[1rem]">
            <h1 className="text-[2rem] font-bold text-white uppercase  w-[80%]">
              CHOOSE YOUR FAVOURITE SURPRISE BAGS
            </h1>
            <p className="text-white mt-[1rem] w-[85%] text-lg leading-relaxed">
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
