
const Main = () => {
  return (
    <section className="flex items-center justify-center md:gap-[8vw] font-poppins my-10 relative">
    <div>
        <img src="public/assets/images/Ambulance-amico.png" className="h-[32rem] hidden md:block lg:block"/>
    </div>
    <div className="md:w-[35vw] h-auto">
        <div className="w-[80vw] md:w-fit">
        <h1 className="text-5xl font-bold font-volkhov leading-tight ">The Only Place for all your Medical Needs. </h1>
        <p className="text-xs py-3 text-primary-dark font-regular lg:w-[30vw]">your trusted partner in emergency medical care and ambulance services. We provide rapid, reliable, and professional transportation during medical emergencies, ensuring that every second counts. With a fleet of fully-equipped ambulances and a dedicated team of trained professionals, we are committed to delivering timely and compassionate care to those in need.</p>
        </div>
        <div className="flex items-center gap-10">
            <button className="btn-d">
                Find out more
            </button>
            <button className="btn-g">
                Book Now
            </button>
        </div>
    </div>
    <img src="public/assets/images/Ambulance-bro (1).png" className="absolute h-[30rem] opacity-40 -z-10 top-0 lg:right-[8rem]"/>
    <img src="public/assets/icons/Group 590.png" className="absolute h-[10rem] -z-10 top-0 right-3 md:right-[5rem] rotate-90"/>
    <img src="public/assets/icons/Group 590.png" className="absolute h-[10rem] -z-10 bottom-0 left-3 md:left-[7rem] -rotate-90"/>
    </section>
  )
}

export default Main