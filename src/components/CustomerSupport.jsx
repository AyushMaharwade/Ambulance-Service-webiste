
const CustomerSupport = () => {
    return (
        <section className="w-auto h-fit md:h-[55vh] flex items-center justify-center font-poppins relative my-5">
            <div className="flex flex-col items-center justify-around h-fit md:h-[55vh] w-[80vw] md:w-[80vw] bg-gradient-to-r from-primary to-primary-light rounded-lg lg:p-0 p-4">
                <div className="flex-center flex-col text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold">Customer Support</h1>
                    <p className="text-xs px-[5rem] py-[1rem] hidden md:block">At AmbuReach, we’re committed to providing you with the best experience possible. Our dedicated Customer Support team is available 24/7 to assist you with any questions, concerns, or issues you may have. Whether you need help navigating our services, troubleshooting problems, or getting more information, we are just a click or call away. Reach out to us through live chat, email, or phone, and we will ensure that your needs are met with fast, friendly, and reliable service. Your satisfaction is our top priority!</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 md:gap-20 lg:m-0 m-4">
                    <div className="w-fit md:h-[30vh] md:w-[13vw] rounded-md bg-white flex flex-col items-center justify-around py-2 px-2">
                        <img src="public/assets/icons/🦆 icon _streering_.png" />
                        <div className="text-center">
                            <h3 className="text-md font-semibold">Choose the right one</h3>
                            <p className="text-[0.6rem]">We Assist you in finding & Selecting  the right vehical according to your requirement</p>
                        </div>
                    </div>
                    <div className="w-fit md:h-[30vh] md:w-[13vw] rounded-md bg-white flex flex-col items-center justify-around py-2 px-2">
                        <img src="public/assets/icons/🦆 icon _fastapi_.png" />
                        <div className="text-center">
                            <h3 className="text-md font-semibold">Faster than ever</h3>
                            <p className="text-[0.6rem]">We Aim to provide our patients necessary medical support in  the shortest period of time</p>
                        </div>
                    </div>
                    <div className="w-fit md:h-[30vh] md:w-[13vw] rounded-md bg-white flex flex-col items-center justify-around py-2 px-2">
                        <img src="public/assets/icons/🦆 icon _mobile friendly_.png"/>
                        <div className="text-center">
                            <h3 className="text-md font-semibold">User Friendly</h3>
                            <p className="text-[0.6rem]">our team has ensured that our website is user friendly i.e easy to use </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerSupport