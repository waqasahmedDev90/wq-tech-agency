// import herorocket from "../../assets/Images/rocket.png";


const HeroRight = ({image}) => {
  return (
    <div className="text-end md:w-[40%] w-full md:block hidden justify-end">
          <img
            src={image} // Apni image ko public folder mein rakhein
            alt="Rocket Growth"
            className="w-full "
          />
        </div>
  )
}

export default HeroRight
