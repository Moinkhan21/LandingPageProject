import { resourcesLinks, platformLinks, communityLinks } from "../constants"; 
// Importing data arrays for links from a constants file

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      {/* Footer container with margin at the top, top border, and vertical padding */}
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Responsive grid layout: 2 columns on small screens, 3 columns on large screens */}
        
        {/* Resources Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          {/* Section heading styled for visual hierarchy */}
          <ul className="space-y-2">
            {/* Vertical spacing between list items */}
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                {/* Map through the resourcesLinks array and create list items */}
                <a 
                  className="text-neutral-300 hover:text-white" 
                  href={link.href}
                >
                  {/* Link text styled with hover effects */}
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a 
                  className="text-neutral-300 hover:text-white" 
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a 
                  className="text-neutral-300 hover:text-white" 
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
