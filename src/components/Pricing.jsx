/* eslint-disable no-unused-vars */
import { CheckCircle2 } from "lucide-react"; // Icon for feature checkmarks
import { features, pricingOptions } from "../constants"; // Pricing options and feature data

const Pricing = () => {
  return (
    <div className="mt-20">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      
      {/* Pricing Options Container */}
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            {/* Individual Pricing Card */}
            <div className="p-10 border border-neutral-700 rounded-xl">
              {/* Plan Title */}
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                  /* Highlight the most popular plan dynamically */
                )}
              </p>
              
              {/* Price Display */}
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
                {/* Price and billing cycle */}
              </p>
              
              {/* Features List */}
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    {/* Icon for feature */}
                    <span className="ml-2">{feature}</span>
                    {/* Feature text */}
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
              {/* Button for subscribing to the plan */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
