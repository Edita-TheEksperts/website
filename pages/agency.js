const Agency = () => {

  const management = [
    {
      name: "Fisnik",
      title: "Solutions ekspert",
      background: "/images/Frame_97.png", // Correct path
      linkedin: "#",
    },
    {
      name: "Petrit",
      title: "Delivery ekspert",
      background: "/images/Frame_98.png", // Correct path
      linkedin: "#",
    },
    {
      name: "Pishtar",
      title: "Business ekspert",
      background: "/images/Frame_99.png", // Correct path
      linkedin: "#",
    },
    {
      name: "Edita",
      title: "Development ekspert",
      background: "/images/Frame_100.png", // Correct path
      linkedin: "#",
    },
    {
      name: "Lindon",
      title: "Design ekspert",
      background: "/images/Frame_101.png", // Correct path
      linkedin: "#",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-16 ">
      {/* Header Section */}
      <div className="max-w-[1280px] mx-auto text-center ">
        <h1
          className="font-matt text-[154px] font-black leading-[158px] tracking-[-2.88px] uppercase text-black"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            textEdge: "cap",
            leadingTrim: "both",
          }}
        >
          EKSPERTISE <br /> IST KEIN ZIEL
        </h1>
        <p className="text-gray-600 text-lg mt-2 lg:mb-[150px] font-matt">
          Sondern unser täglicher Antrieb
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-[1280px] mx-auto text-center mt-12 text-gray-700 lg:mb-[200px]">
        <p className="font-matt text-lg sm:text-xl leading-relaxed max-w-[800px] mx-auto">
          Hi, wir sind the eksperts – nicht, weil wir alles wissen oder perfekt
          sind, sondern weil wir jeden Tag daran arbeiten, die besten Lösungen
          zu finden und uns weiterzuentwickeln. Unser Name steht für den
          Anspruch, ständig besser zu werden.
        </p>
        <p className="font-matt text-lg sm:text-xl leading-relaxed max-w-[800px] mx-auto mt-6">
          Wir stellen Menschen und Prozesse in den Mittelpunkt. Nachdem wir
          unsere Kunden und ihre Herausforderungen verstanden haben, entwickeln
          wir innovative Lösungen, die Wachstum und Effizienz fördern. So
          helfen wir Unternehmen, in einer schnelllebigen digitalen Welt
          erfolgreich zu sein.
        </p>
      </div>


      {/* Management Section */}
      <div className="max-w-[1280px] mx-auto px-8 py-16 lg:mb-[200px]">
        <h2 className="text-center text-black font-bold text-4xl mb-12">
          UNSER MANAGEMENT AUF EINEN BLICK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {management.map((person, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-lg"
                >
                  {/* Image */}
                  <img
                    src={person.background}
                    alt={`${person.name}'s background`}
                    className="w-full h-full object-cover"
                  />

                </div>
              ))}
            </div>

      <section id="how" className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto lg:mt-[200px]">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Unsere 4 Säulen – Ein ganzheitlicher Ansatz
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Unser Ansatz basiert auf vier zentralen Säulen, die eine nahtlose Zusammenarbeit und nachhaltige Ergebnisse gewährleisten. Vom Verstehen eurer individuellen Anforderungen, über die visuelle und technische Umsetzung bis hin zu einer langfristigen Partnerschaft begleiten wir euch Schritt für Schritt. Gemeinsam, in enger Kooperation, entwickeln wir die beste Lösung, die nicht nur eure aktuellen Bedürfnisse erfüllt, sondern auch zukunftsfähig bleibt. Jede Phase ist dabei auf Zusammenarbeit und Qualität ausgerichtet, um euch einen nachhaltigen Mehrwert zu bieten.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/Full 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10  lg:min-w-[1280px] mx-auto">
                    <div className="flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/1 2.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>

                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Verstehen und Kommunikation – Die Basis für euren Erfolg
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Alles beginnt mit einer klaren und offenen Kommunikation. Wir analysieren eure Anforderungen, verstehen eure individuellen Herausforderungen und definieren gemeinsam die Ziele. Durch Consulting, Business-Analyse und strategische Planung legen wir den Grundstein für massgeschneiderte Lösungen, die eure spezifischen Bedürfnisse widerspiegeln.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        UI/UX – Benutzerzentrierte Gestaltung für eure Lösung
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Im nächsten Schritt gestalten wir das Look-and-Feel eurer Lösung. Wir entwickeln Prototypen, optimieren Prozesse und entwerfen ein ansprechendes, intuitives Design. Unser Ziel ist es, dass eure Website, Software oder andere Plattformen nicht nur ästhetisch überzeugen, sondern auch funktional und benutzerfreundlich sind, um den höchsten Ansprüchen gerecht zu werden.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/2 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/4 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Technische Implementierung – Von der Idee zur Realität                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Hier setzen wir eure Vision in die Tat um. Wir entwickeln leistungsfähige und skalierbare Systeme, die eure Anforderungen perfekt erfüllen. Egal ob Online-Shop, Salesforce-Instanz, Cloud-Infrastruktur oder ERP/CRM-System – wir stellen sicher, dass die technische Umsetzung stabil, effizient, sicher und zukunftssicher ist.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Optimierung, Schulung und Support – Nachhaltige Partnerschaft
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Unsere Arbeit endet nicht mit der Implementierung. Wir stehen euch langfristig zur Seite, indem wir die Lösungen kontinuierlich optimieren, Schulungen anbieten und zuverlässigen Support gewährleisten. Unsere Systeme sind darauf ausgelegt, euch auch in Zukunft zu unterstützen – und wenn es Fragen gibt, sind wir immer für euch da. Unser Ziel ist es, euch eine nachhaltige und zukunftsfähige Lösung zu bieten, die langfristig Mehrwert schafft.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/3 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    </section>
                    </div>
    </div>
  );
};

export default Agency;
