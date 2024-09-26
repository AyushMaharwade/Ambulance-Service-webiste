
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center font-poppins">
        <nav className="flex items-center justify-between w-full screen-max-width">
            <div className=" flex gap-3">
              <img src="public/assets/icons/Icon.png" alt="" />
              <h1 className="font-semibold text-2xl">AmbuReach</h1>
            </div>

            <div className="flex justify-evenly items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
              <button>
                <img src="public/assets/icons/🦆 icon _hamburger button_.png" className="cursor-pointer block md:hidden lg:hidden h-[40px] w-[40px]"/>
              </button>
              <ol className="flex justify-evenly items-center gap-8 font-medium  max-sm:hidden">
                <li className="cursor-pointer hover:text-primary-light">About us</li>
                <li className="cursor-pointer hover:text-primary-light">Services</li>
                <li className="cursor-pointer hover:text-primary-light">Pricing</li>
                <li className="cursor-pointer hover:text-primary-light">Use Cases</li>
              </ol>
            </div>
        </nav>
    </header>
  )
}

export default Navbar