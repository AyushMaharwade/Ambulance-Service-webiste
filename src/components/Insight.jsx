
const Insight = () => {
  return (
    <section className="w-auto h-[20vh] flex items-center justify-center font-poppins relative">
        <div className="flex items-center justify-evenly h-[13vh] w-[80vw] md:w-[55vw] bg-gradient-to-r from-primary to-primary-light rounded-lg">
            <div className="flex items-center justify-center flex-col text-white">
                <h1 className="text-xl font-semibold md:text-3xl">800+</h1>
                <p>Lives Assited</p>
            </div>
            <div className="flex items-center justify-center flex-col text-white">
                <h1 className="text-xl font-semibold md:text-3xl">15min</h1>
                <p>Response Time</p>
            </div>
            <div className="flex items-center justify-center flex-col text-white">
                <h1 className="text-xl font-semibold md:text-3xl">10+</h1>
                <p>Cities</p>
            </div>
        </div>
        <img src="public/assets/images/Ellipse 10.png" className="absolute right-0 top-0.5 -z-10 " />
    </section>
  )
}

export default Insight