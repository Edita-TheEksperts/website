import { useState } from 'react';

const LogoSection = () => {
  // State to track which card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array of default logos and corresponding hover images
  const logos = [
    { default: "/images/Mobiliar.png", hover: "/images/Partner1Hover.png" },
    { default: "/images/Phc.png", hover: "/images/Rexhepi.png" },
    { default: "/images/Von.png", hover: "/images/Partner3Hover.png" },
    { default: "/images/Greenify.png", hover: "/images/Partner4Hover.png" },
    { default: "/images/Divid.png", hover: "/images/Partner5Hover.png" },
    { default: "/images/Eco.png", hover: "/images/Partner6Hover.png" },
    { default: "/images/Max.png", hover: "/images/Partner7Hover.png" },
    { default: "/images/Rexhepilogo.png", hover: "/images/Partner8Hover.png" },
    { default: "/images/Awhlogo.png", hover: "/images/Partner9Hover.png" },
    { default: "/images/Deflogo.png", hover: "/images/Partner10Hover.png" },
    { default: "/images/Mintlogo.png", hover: "/images/Partner11Hover.png" },
    { default: "/images/Mobilezonelogo.png", hover: "/images/Partner12Hover.png" },
    { default: "/images/Mobilezonelogoo.png", hover: "/images/Partner13Hover.png" },
    { default: "/images/Mobilezoneee.png", hover: "/images/Partner14Hover.png" },
    { default: "/images/Nova.png", hover: "/images/Partner15Hover.png" },
    { default: "/images/Ballenbergpp.png", hover: "/images/Partner16Hover.png" },
    { default: "/images/logoofyou.png", hover: "/images/Partner17Hover.png" },
  ];

  return (
    <div className="container mx-auto p-4 max-w-[1280px] mb-[200px] mt-[100px]">
      {/* Heading and Description */}
      <div className="text-left mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Sie haben uns dazu gezwungen.</h2>
        <p className="text-gray-500 text-lg">Sie haben the eksperts gefunden.</p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
        {logos.slice(0, 16).map((logo, index) => (
          <div
            key={index}
            className="relative flex justify-center items-cente"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Default Logo */}
            <img
              src={logo.default}
              alt={`Logo ${index + 1}`}
              className={`w-full h-full object-contain transition-opacity rounded-[20px] duration-300 ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Hovered Logo */}
            <img
              src={logo.hover}
              alt={`Hovered Logo ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full rounded-[20px] object-contain transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* 17th Logo */}
      <div
        className="relative flex justify-center items-center p-4 border rounded-[20px] bg-white mt-8"
        onMouseEnter={() => setHoveredIndex(16)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Default Logo */}
        <img
          src={logos[16].default}
          alt="Logo 17"
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            hoveredIndex === 16 ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hovered Logo */}
        <img
          src={logos[16].hover}
          alt="Hovered Logo 17"
          className={`absolute top-0 left-0 w-full h-full rounded-[20px] object-contain transition-opacity duration-300 ${
            hoveredIndex === 16 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default LogoSection;
