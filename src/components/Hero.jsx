import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="px-2">
        <div className="hero rounded-bl-lg rounded-br-lg min-h-[450px] pt-0 pb-4 bg-customPurple text-white">
          <div className="hero-content text-center">
            <div className="max-w-screen-lg">
              <h1 className="text-5xl font-bold mb-4">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-4 max-w-3xl mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <Link
                to="/dashboard"
                className="btn text-xl bg-white rounded-full text-customPurple font-bold"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl  mx-auto -mt-20 p-5 bg-[rgba(255,255,255,0.3)] rounded-lg">
        <img
          className="rounded-lg h-[400px] w-full"
          src="https://i.ibb.co.com/236fK7h/banner.jpg"
          alt="banner"
        />
      </div>
    </>
  );
};

export default Hero;
