import video1 from "../assets/video1.mp4"; // Importing the first video
import video2 from "../assets/video2.mp4"; // Importing the second video

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Main container with a flex column layout, vertically centered with responsive margin */}

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {/* Main heading with responsive font sizes and centered text */}
        VirtualR build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text">
          for developers
        </span>
        {/* Highlighted text with gradient styling */}
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {/* Supporting paragraph with subtle text color and width limitation for better readability */}
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex justify-center my-10">
        {/* Container for buttons, horizontally aligned */}
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        {/* Primary call-to-action button with gradient styling */}
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
        {/* Secondary button with simple border styling */}
      </div>

      <div className="flex mt-10 justify-center">
        {/* Video container with horizontal alignment */}
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          {/* Source for the first video */}
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          {/* Source for the second video */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
