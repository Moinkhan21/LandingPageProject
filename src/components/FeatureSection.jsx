import { features } from "../constants"; // Importing the features array or object from constants for rendering

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Main container with relative positioning, margin at the top, bottom border, and a minimum height */}

      <div className="text-center">
        {/* Center-aligned section header */}
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          {/* Highlighted badge for the section */}
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          {/* Responsive headline with gradient text */}
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {/* Flex container to arrange feature items in rows and columns */}
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            {/* Feature card container with responsive width */}
            <div className="flex">
              {/* Horizontal layout for icon and content */}
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center rounded-full">
                {/* Icon container with consistent size and background styling */}
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                {/* Title of the feature */}
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {/* Feature description with subtle styling */}
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
