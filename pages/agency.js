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
    <div className="container mx-auto px-4 lg:py-16 py-10 ">
      {/* Header Section */}
      <div className="max-w-[1280px] mx-auto text-center ">
        <h1
          className="font-matt lg:text-[154px] text-[50px] font-black lg:leading-[158px] leding-[30px] tracking-[-2.88px] uppercase text-black"
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

            <section className="font-matt max-w-[1280px] mx-auto px-6 lg:px-12 py-16 flex flex-col items-center text-center lg:mt-[200px] ">
                {/* Title */}
                <h2 className="text-center text-2xl lg:text-6xl font-bold mb-20 uppercase">
                  Our Values
                </h2>

                {/* Values List */}
                <div className="flex flex-col items-center space-y-8 ">
                  {/* Love */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/love-icon.png"
                        alt="Love Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#E24125] uppercase leading-[37px] text-[28px]">
                        ● LOVE:
                      </h3>
                      <p className="text-gray-600 max-w-[589px] leading-[33px] text-[20px]">
                        Do it with love or don’t do it at all. We are passionate about what we
                        do, and we love the work we deliver.
                      </p>
                    </div>
                  </div>

                  {/* Integrity */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/integrity-icon.png"
                        alt="Integrity Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#0009FF] uppercase leading-[37px] text-[28px]">
                        ● INTEGRITY:
                      </h3>
                      <p className="text-gray-600 max-w-[589px] leading-[33px] text-[20px]">
                        We believe in transparency, honesty, and building long-term
                        relationships.
                      </p>
                    </div>
                  </div>

                  {/* Excellence */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/excellence-icon.png"
                        alt="Excellence Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#CFFF49] uppercase leading-[37px] text-[28px]">
                        ● EXCELLENCE:
                      </h3>
                      <p className="text-gray-600 max-w-[589px] leading-[33px] text-[20px]">
                        We continuously push the boundaries of technology to create better and
                        more efficient solutions.
                      </p>
                    </div>
                  </div>

                  {/* Communication */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[100px] h-[110px]">
                      <img
                        src="/images/communication-icon.png"
                        alt="Communication Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#03C319] uppercase leading-[37px] text-[28px]">
                        ● COMMUNICATION:
                      </h3>
                      <p className="text-gray-600 max-w-[589px] leading-[33px] text-[20px]">
                        Understanding our clients and fostering clear, open communication is
                        essential to our collaborative success.
                      </p>
                    </div>
                  </div>

                  {/* Flexibility */}
                  <div className="flex items-start space-x-6 max-w-[800px] mb-2">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-[110px] h-[110px]">
                      <img
                        src="/images/flexibility-icon.png"
                        alt="Flexibility Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#0009FF] uppercase leading-[37px] text-[28px]">
                        ● FLEXIBILITY:
                      </h3>
                      <p className="text-gray-600 max-w-[589px] leading-[33px] text-[20px]">
                        We embrace change and remain agile, ready to tackle any new challenges
                        that arise.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

      <section id="how" className="font-matt flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 lg:min-w-[1280px] mx-auto lg:mt-[200px] mt-[50px]">
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
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

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10  lg:min-w-[1280px] mx-auto">
                    <div className="flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/1 2.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>

                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Verstehen und Kommunikation – Die Basis für euren Erfolg
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Alles beginnt mit einer klaren und offenen Kommunikation. Wir analysieren eure Anforderungen, verstehen eure individuellen Herausforderungen und definieren gemeinsam die Ziele. Durch Consulting, Business-Analyse und strategische Planung legen wir den Grundstein für massgeschneiderte Lösungen, die eure spezifischen Bedürfnisse widerspiegeln.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
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

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/4 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Technische Implementierung – Von der Idee zur Realität                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Hier setzen wir eure Vision in die Tat um. Wir entwickeln leistungsfähige und skalierbare Systeme, die eure Anforderungen perfekt erfüllen. Egal ob Online-Shop, Salesforce-Instanz, Cloud-Infrastruktur oder ERP/CRM-System – wir stellen sicher, dass die technische Umsetzung stabil, effizient, sicher und zukunftssicher ist.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md lg:text-left text-center">
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

                    <section className="font-matt px-6 lg:px-12">
                      <div className="max-w-[1280px] mx-auto text-center">
                        {/* Section Header */}
                        <h2 className="text-2xl lg:text-6xl font-bold uppercase mb-4">
                          Unser Engagement Für Gutes!
                        </h2>
                        <p className="text-gray-600 text-lg max-w-[800px] mx-auto">
                          Here I want to write about the eksperts academy. It’s a text section
                        </p>
                      </div>

                      {/* Content Section */}
                      <div className="max-w-[1280px] mx-auto mt-12 grid grid-cols-1 gap-12 items-center">
                        {/* Card 1 */}
                        <div className="flex flex-col md:flex-row items-center lg:text-start text-center md:items-start md:space-x-6 space-y-4 md:space-y-0">
                          {/* Icon */}
                          <div className="flex-shrink-0 flex items-center justify-center">
                          <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M225.098 161.023V113.004L124.549 59.0156L24 113.004L124.549 166.992L212.278 119.887V161.023C207.598 163.379 204.377 168.226 204.377 173.813C204.377 181.705 210.797 188.125 218.688 188.125C226.58 188.125 233 181.705 233 173.813C233 168.226 229.779 163.378 225.098 161.023Z" fill="#0009FF"/>
                            <path d="M130.613 178.29L124.549 181.547L118.484 178.29L63.6484 148.848V188.285L124.549 220.985L185.449 188.285V148.848L130.613 178.29Z" fill="#0009FF"/>
                            </svg>
                          </div>
                          {/* Text */}
                          <div className="bg-[#F9FAF9] p-6 rounded-[20px] flex items-center justify-center">
                          <p className="text-black text-lg leading-[33px] lg:mt-[60px]">
                            Wir glauben daran, einen positiven Einfluss zu hinterlassen – nicht nur für unsere Kunden, sondern auch für unsere Gemeinschaft. Mit der Gründung der eksperts Academy fördern wir Talente und schaffen Zugang zu Wissen und Ressourcen, um die nächste Generation von Fachkräften zu unterstützen.
                          </p>
                        </div>

                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col md:flex-row items-center lg:text-start text-center md:items-start md:space-x-6 space-y-4 md:space-y-0">
                          {/* Icon */}
                          <div className="flex-shrink-0 flex items-center justify-center">
                          <svg width="280" height="280" viewBox="0 0 258 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M68.4141 107.461C80.5816 107.461 90.4453 97.5972 90.4453 85.4297C90.4453 73.2622 80.5816 63.3984 68.4141 63.3984C56.2465 63.3984 46.3828 73.2622 46.3828 85.4297C46.3828 97.5972 56.2465 107.461 68.4141 107.461Z" fill="#0009FF"/>
                          <path d="M129 96.4453C132.034 96.4453 134.508 98.9143 134.508 101.953C134.508 104.997 136.971 107.461 140.016 107.461C143.06 107.461 145.523 104.997 145.523 101.953C145.523 94.782 140.905 88.7256 134.508 86.4442V79.9219C134.508 76.8775 132.044 74.4141 129 74.4141C125.956 74.4141 123.492 76.8775 123.492 79.9219V86.4442C117.095 88.7256 112.477 94.782 112.477 101.953C112.477 111.065 119.889 118.477 129 118.477C132.034 118.477 134.508 120.946 134.508 123.984C134.508 127.023 132.034 129.492 129 129.492C125.966 129.492 123.492 127.023 123.492 123.984C123.492 120.94 121.029 118.477 117.984 118.477C114.94 118.477 112.477 120.94 112.477 123.984C112.477 131.156 117.095 137.212 123.492 139.493V146.016C123.492 149.06 125.956 151.523 129 151.523C132.044 151.523 134.508 149.06 134.508 146.016V139.493C140.905 137.212 145.523 131.156 145.523 123.984C145.523 114.873 138.111 107.461 129 107.461C125.966 107.461 123.492 104.992 123.492 101.953C123.492 98.9143 125.966 96.4453 129 96.4453Z" fill="#0009FF"/>
                          <path d="M90.4453 201.094V188.897C70.8599 178.847 57.3984 158.486 57.3984 135C57.3984 131.956 59.8619 129.492 62.9062 129.492C65.9506 129.492 68.4141 131.956 68.4141 135C68.4141 162.335 90.6498 184.57 117.984 184.57H129C135.084 184.57 140.016 179.638 140.016 173.555C140.016 167.471 135.084 162.539 129 162.539H117.984C102.795 162.539 90.4453 150.184 90.4453 135C90.4453 119.816 78.0957 107.461 62.9062 107.461C47.7168 107.461 35 119.816 35 135V201.094C35 204.138 37.4635 206.602 40.5078 206.602H84.9375C87.9819 206.602 90.4453 204.138 90.4453 201.094Z" fill="#0009FF"/>
                          <path d="M189.586 107.461C201.753 107.461 211.617 97.5972 211.617 85.4297C211.617 73.2622 201.753 63.3984 189.586 63.3984C177.418 63.3984 167.555 73.2622 167.555 85.4297C167.555 97.5972 177.418 107.461 189.586 107.461Z" fill="#0009FF"/>
                          <path d="M195.096 107.461C179.906 107.461 167.557 119.816 167.557 135C167.557 147.626 158.969 158.182 147.359 161.419C149.67 164.903 151.033 169.069 151.033 173.555C151.033 177.241 150.037 180.664 148.43 183.72C171.752 179.697 189.588 159.454 189.588 135C189.588 131.956 192.051 129.492 195.096 129.492C198.14 129.492 200.603 131.956 200.603 135C200.603 158.486 187.142 178.847 167.557 188.897V201.094C167.557 204.138 170.02 206.602 173.064 206.602H217.494C220.538 206.602 223.002 204.138 223.002 201.094V135C223.002 119.816 210.285 107.461 195.096 107.461Z" fill="#0009FF"/>
                          </svg>

                          </div>
                          {/* Text */}
                          <div className="bg-[F9FAF9] p-6 rounded-[20px]">
                            <p className="text-black text-lg leading-[33px] lg:mt-[60px]">
                              Darüber hinaus setzen wir uns für lokale und kleinere Unternehmen ein. Durch Sponsoring oder gezielte Investments – sei es in Form von finanzieller Unterstützung oder der Bereitstellung unserer Ressourcen – helfen wir dabei, ihre Ideen und Projekte zu realisieren. So leisten wir unseren Beitrag, um Wachstum und Innovation in unserer Region zu fördern.
                            </p>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col md:flex-row items-center lg:text-start text-center md:items-start md:space-x-6 space-y-4 md:space-y-0">
                          {/* Icon */}
                          <div className="flex-shrink-0 flex items-center justify-center">
                          <svg width="280" height="270" viewBox="0 0 258 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1068_9986)">
                            <path d="M192.629 97.5304L139.999 150.161L87.3689 97.5304C72.8354 82.9968 72.8354 59.4334 87.3689 44.9002C101.903 30.3666 125.466 30.3666 139.999 44.9002C154.533 30.3666 178.096 30.3666 192.629 44.9002C207.163 59.4334 207.163 82.9968 192.629 97.5304Z" fill="#0009FF"/>
                            <path d="M234.317 82.4805C227.865 82.4805 222.635 87.7105 222.635 94.1624V138.882C222.635 145.319 220.129 151.371 215.576 155.923L193.405 178.094L184.622 169.311L206.793 147.14C211.346 142.586 211.346 135.177 206.793 130.624C202.239 126.07 194.83 126.07 190.276 130.624L146.211 174.689V246.001H201.152V211.737L246 161.648V94.1624C245.999 87.7105 240.769 82.4805 234.317 82.4805Z" fill="#0009FF"/>
                            <path d="M73.2063 130.624C68.6529 135.177 68.6529 142.586 73.2063 147.14L95.3773 169.311L86.5938 178.094L64.4228 155.923C59.8706 151.371 57.3639 145.319 57.3639 138.882V94.1624C57.3639 87.7105 52.1339 82.4805 45.6819 82.4805C39.23 82.4805 34 87.7105 34 94.1624V161.648L78.8475 211.737V246.001H133.788V174.689L89.7225 130.624C85.1694 126.07 77.7602 126.07 73.2063 130.624Z" fill="#0009FF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1068_9986">
                            <rect width="212" height="212" fill="white" transform="translate(34 34)"/>
                            </clipPath>
                            </defs>
                            </svg>
                          </div>
                          {/* Text */}
                          <div className="bg-[F9FAF9] p-6 rounded-[20px]">
                            <p className="text-black text-lg leading-[33px] lg:mt-[120px]">
                              Denn für uns bedeutet Erfolg, etwas zurückzugeben und gemeinsam eine nachhaltige Zukunft zu gestalten.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="bg-[#FAFAFA] lg:mt-[200px] lg:mb-[100px] px-6">
                        <div className="max-w-[1280px] mx-auto text-center">
                          {/* Header */}
                          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
                            Werde Teil von the eksperts
                          </h2>
                          <p className="text-xl font-extrabold text-black mb-4 uppercase">
                            Gemeinsam wachsen, entwickeln und die Zukunft gestalten
                          </p>
                          <p className="text-lg text-black max-w-[800px] mx-auto mb-10 leading-relaxed">
                            Aktuell haben wir leider keine offenen Stellen. Aber lass dich davon
                            nicht entmutigen! Schau gerne bald wieder vorbei oder folge uns auf Social
                            Media, um als Erster von neuen Jobangeboten zu erfahren. Vielleicht bist
                            du schon bald Teil unseres Teams und gestaltest mit uns innovative
                            Lösungen für die digitale Welt.
                          </p>

                          {/* Buttons */}
                          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            {/* Instagram Button */}
                            <a
                              href="https://instagram.com/theeksperts"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center lg:w-[480px] lg:h-[89px] md:w-auto bg-[#0009FF] text-white lg:text-[64px] text-[24px] pr-2 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="90" viewBox="0 0 89 90" fill="none" className="mr-2 lg:p-2 p-4">
                                <g clip-path="url(#clip0_1068_9931)">
                                <path d="M88.9128 26.7561C88.7044 22.0272 87.9396 18.7761 86.8442 15.959C85.7141 12.9687 83.9754 10.2915 81.6976 8.06591C79.472 5.80571 76.7771 4.04943 73.8215 2.93698C70.9881 1.84151 67.754 1.07679 63.0251 0.868295C58.2608 0.642138 56.7484 0.589844 44.6649 0.589844C32.5815 0.589844 31.0691 0.642138 26.3225 0.850637C21.5936 1.05914 18.3425 1.82454 15.5261 2.91932C12.5351 4.04943 9.85789 5.78805 7.63232 8.06591C5.37211 10.2915 3.61651 12.9863 2.50339 15.942C1.40792 18.7761 0.6432 22.0095 0.434701 26.7384C0.208544 31.5027 0.15625 33.0151 0.15625 45.0985C0.15625 57.1819 0.208544 58.6944 0.417043 63.441C0.625542 68.1699 1.39094 71.421 2.48641 74.2381C3.61651 77.2284 5.37211 79.9056 7.63232 82.1312C9.85789 84.3914 12.5528 86.1476 15.5084 87.2601C18.3425 88.3556 21.5759 89.1203 26.3055 89.3288C31.0514 89.5379 32.5646 89.5896 44.648 89.5896C56.7314 89.5896 58.2439 89.5379 62.9904 89.3288C67.7193 89.1203 70.9704 88.3556 73.7868 87.2601C79.7681 84.9476 84.497 80.2187 86.8095 74.2381C87.9043 71.404 88.6697 68.1699 88.8782 63.441C89.0867 58.6944 89.139 57.1819 89.139 45.0985C89.139 33.0151 89.1214 31.5027 88.9128 26.7561ZM80.8982 63.0933C80.7067 67.4398 79.9766 69.7869 79.3681 71.3517C77.8726 75.229 74.7954 78.3062 70.9181 79.8017C69.3534 80.4102 66.9893 81.1403 62.6597 81.3311C57.9654 81.5403 56.5575 81.5919 44.6826 81.5919C32.8077 81.5919 31.3822 81.5403 26.7049 81.3311C22.3583 81.1403 20.0112 80.4102 18.4464 79.8017C16.5169 79.0886 14.7607 77.9585 13.3351 76.4806C11.8573 75.0374 10.7272 73.2988 10.0141 71.3694C9.40558 69.8046 8.67549 67.4398 8.48465 63.1109C8.27547 58.4166 8.22386 57.0081 8.22386 45.1332C8.22386 33.2583 8.27547 31.8327 8.48465 27.1561C8.67549 22.8096 9.40558 20.4624 10.0141 18.8977C10.7272 16.9675 11.8573 15.2119 13.3528 13.7857C14.7953 12.3079 16.5339 11.1778 18.4641 10.4653C20.0288 9.85683 22.3936 9.12674 26.7225 8.93522C31.4168 8.72672 32.8253 8.67443 44.6996 8.67443C56.5922 8.67443 58 8.72672 62.6773 8.93522C67.0239 9.12674 69.371 9.85683 70.9358 10.4653C72.8652 11.1778 74.6215 12.3079 76.0471 13.7857C77.5249 15.2289 78.655 16.9675 79.3681 18.8977C79.9766 20.4624 80.7067 22.8265 80.8982 27.1561C81.1067 31.8504 81.159 33.2583 81.159 45.1332C81.159 57.0081 81.1067 58.399 80.8982 63.0933Z" fill="#FDFEFF"/>
                                <path d="M44.6636 22.2344C32.0417 22.2344 21.8008 32.4746 21.8008 45.0972C21.8008 57.7199 32.0417 67.9601 44.6636 67.9601C57.2863 67.9601 67.5265 57.7199 67.5265 45.0972C67.5265 32.4746 57.2863 22.2344 44.6636 22.2344ZM44.6636 59.9278C36.4752 59.9278 29.8331 53.2864 29.8331 45.0972C29.8331 36.9081 36.4752 30.2667 44.6636 30.2667C52.8528 30.2667 59.4942 36.9081 59.4942 45.0972C59.4942 53.2864 52.8528 59.9278 44.6636 59.9278Z" fill="#FDFEFF"/>
                                <path d="M73.7693 21.3335C73.7693 24.281 71.3794 26.671 68.4312 26.671C65.4837 26.671 63.0938 24.281 63.0938 21.3335C63.0938 18.3853 65.4837 15.9961 68.4312 15.9961C71.3794 15.9961 73.7693 18.3853 73.7693 21.3335Z" fill="#FDFEFF"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1068_9931">
                                <rect width="89" height="89" fill="white" transform="translate(0 0.589844)"/>
                                </clipPath>
                                </defs>
                              </svg>
                              theeksperts
                            </a>

                            {/* LinkedIn Button */}
                            <a
                              href="https://linkedin.com/company/theeksperts"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center lg:w-[480px] lg:h-[90px] w-auto bg-[#0009FF] text-white lg:text-[64px] text-[24px] pr-2 rounded-lg shadow-lg text-lg font-bold transition-transform transform hover:scale-105"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="87" height="88" viewBox="0 0 87 88" fill="none" className="mr-2 lg:p-2 p-4">
                                <g clip-path="url(#clip0_1068_9947)">
                                <path d="M27.1888 72.4668H15.2943V34.0645H27.1888V72.4668ZM28.3756 21.8294C28.3756 17.9843 25.256 14.8633 21.4128 14.8633C17.5551 14.8633 14.4434 17.9843 14.4434 21.8294C14.4434 25.6759 17.5551 28.7969 21.4128 28.7969C25.256 28.7969 28.3756 25.6759 28.3756 21.8294ZM71.707 51.3394C71.707 41.0306 69.5292 33.3848 57.4867 33.3848C51.7001 33.3848 47.8158 36.2787 46.23 39.2882H46.2188V34.0645H34.6641V72.4668H46.2188V53.3997C46.2188 48.4063 47.4898 43.5688 53.6794 43.5688C59.7846 43.5688 59.9824 49.2791 59.9824 53.717V72.4668H71.707V51.3394ZM87 77.3945V10.7852C87 5.16313 82.4267 0.589844 76.8047 0.589844H10.1953C4.57329 0.589844 0 5.16313 0 10.7852V77.3945C0 83.0166 4.57329 87.5898 10.1953 87.5898H76.8047C82.4267 87.5898 87 83.0166 87 77.3945ZM76.8047 7.38672C78.6785 7.38672 80.2031 8.91137 80.2031 10.7852V77.3945C80.2031 79.2683 78.6785 80.793 76.8047 80.793H10.1953C8.32153 80.793 6.79688 79.2683 6.79688 77.3945V10.7852C6.79688 8.91137 8.32153 7.38672 10.1953 7.38672H76.8047Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1068_9947">
                                <rect width="87" height="87" fill="white" transform="translate(0 0.589844)"/>
                                </clipPath>
                                </defs>
                              </svg>
                              theeksperts
                            </a>
                          </div>
                        </div>
                      </section>


    </div>
  );
};

export default Agency;

