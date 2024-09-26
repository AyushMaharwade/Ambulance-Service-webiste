import React from 'react';

const Main = () => {
  return (
    <main>

<img src="public/assets/images/Ellispe.png" alt="Ellipse"  className="absolute insert-0 -z-10  right-[0rem] " />
<img src="public/assets/images/Ellispe.png" alt="Ellipse" className="absolute inset-0 -z-10 rotate-180  top-[30rem] lg:left-[0rem] " />


    <div className="common-padding">
      <div className=" screen-max-width flex flex-col md:flex-row items-center md:items-start">
        <div>
          <h2 className="text-5xl mb-4 font-bold">Live Ambulance <br />Tracking</h2>
          <p className="mb-4 md:w-2/3">Live ambulance tracking allows you to monitor the real-time location of an ambulance. This technology provides timely updates, ensuring you know exactly where the ambulance is and when it will arrive. It enhances coordination, reduces anxiety, and ensures prompt medical assistance by keeping you informed every step of the way.</p>
          <button className="btn">Search</button>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 flex-center">
          <img src="public/assets/images/map.png" alt="google-map" className="w-full h-auto" />
        </div>
      </div>


        <div className="screen-max-width flex flex-col-reverse md:flex-row items-center md:items-start mt-20 relative">

        <div className="md:w-2/3 mt-4 md:mt-0 flex-center md:mr-20">
            <img src="public/assets/images/Ambulance-rafiki.png" alt="Ambulance" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-5xl mb-4 font-bold md:ml-40">Find Medicines at your <br />nearest Hospitals</h2>
            <p className="mb-4  md:w-2/3 md:ml-40">Easily locate and access the medicines you need at hospitals near you. Our service connects you with local hospitals, ensuring you get the right medication quickly and efficiently. Whether it’s a prescription refill or an urgent requirement, find the nearest hospital with the medicines you need. Stay healthy and worry-free with our reliable service.</p>
            <button className="btn md:ml-40">Find</button>
          </div>
        </div>

    </div>
    
    </main>
  );
};

export default Main;
