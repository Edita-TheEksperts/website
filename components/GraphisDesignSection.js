import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo3 from "/images/Component 9.png";
import hoverImage1 from "/images/HoverImage1.png";
import hoverImage2 from "/images/HoverImage2.png";
import hoverImage3 from "/images/HoverImage3.png";
import hoverImage4 from "/images/HoverImage4.png";

const GraphicDesignSection = () => {
  // Define the images for the hover effect
  const additionalImages = [hoverImage1, hoverImage2, hoverImage3, hoverImage4];
  const [currentImage, setCurrentImage] = useState(logo3);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      setCurrentImage(additionalImages[currentIndex]);
      currentIndex = (currentIndex + 1) % additionalImages.length;
    }, 1000);

    // Store the interval so it can be cleared on mouse leave
    document.hoverInterval = interval;
  };

  const handleMouseLeave = () => {
    setHovering(false);
    clearInterval(document.hoverInterval);
    setCurrentImage(logo3); // Revert to the original image
  };

  return (
    <section
      className="font-matt relative flex flex-col md:flex-row items-center justify-between bg-[#FAFAFA] p-4 rounded-[20px] min-w-[1280px] mx-auto my-8 lg:h-[620px] group transition-all duration-500 hover:bg-radial hover:bg-gradient-to-r from-[#D83200] via-[#0009FF] to-[#0009FF]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Right Section: Image */}
      <div className="font-matt md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 flex justify-center transition-transform duration-500 group-hover:translate-x-6">
        <Image
          src={currentImage}
          alt="Graphic Design Image"
          width={400}
          height={400}
          className="rounded-lg object-contain"
          priority
        />
      </div>

      {/* Left Section: Text */}
      <div className="font-matt md:w-1/2 order-1 md:order-2 transition-transform duration-500 group-hover:-translate-x-6">
        <h2 className="font-matt text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 transition-colors duration-300 group-hover:text-white">
          Graphic Design
        </h2>
        <p className="text-[#5A585A] mb-8 font-matt font-[20px] leading-[33px] transition-colors duration-300 group-hover:text-white">
          Haben Sie einen Engpass im Unternehmen, steht ein Projekt an oder
          möchten Sie Ihre IT-Abteilung erweitern? <br />
          Mit Book Your Expert haben wir die Lösung. Beschreiben Sie uns Ihr
          Problem, Ihre Wünsche und
        </p>
        <div className="flex space-x-4">
          <Link href="/services/salesforce">
            <button className="font-matt border-2 border-[#0009FF] text-white bg-[#0009FF] px-3 py-2 rounded-[20px] leading-[16px] text-[14px] font-extrabold transition-all duration-300 group-hover:border-white group-hover:text-[#0009FF] group-hover:bg-white">
              MEHR <br />
              ERFAHREN
            </button>
          </Link>
          <Link href="/services/contact">
            <button className="font-matt border-2 border-[#0009FF] text-[#0009FF] bg-white px-3 py-2 rounded-[20px] leading-[16px] text-[14px] font-extrabold transition-colors duration-200 group-hover:bg-transparent group-hover:text-white group-hover:border-white">
              JETZT PROJEKT <br />
              STARTEN
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
