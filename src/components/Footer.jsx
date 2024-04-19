

function Footer() {
  return (
   <>
   <section className=" bg-black-soft  ">
    <div className=" max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 text-center sm:text-start text-white font-DM-Sans  text-16 space-y-10 sm:space-y-0  py-16 px-2 xl:px-0 ">
        <ul className=" space-y-2">
            <li className="font-bold"><a href="#">Discover</a></li>
            <li className=" opacity-75"><a href="#">Home</a></li>
            <li className=" opacity-75"><a href="#">About Us</a></li>
            <li className=" opacity-75"><a href="#">Trip Packages</a></li>
            <li className=" opacity-75"><a href="#">Travel Blog</a></li>
        </ul>
        <ul className=" space-y-2">
            <li className="font-bold"><a href="#">Services</a></li>
            <li className=" opacity-75"><a href="#">Trip Itinerary</a></li>
            <li className=" opacity-75"><a href="#">Trip Preparations</a></li>
            <li className=" opacity-75"><a href="#">Booking Form</a></li>
        </ul>
        <ul className=" space-y-2">
            <li className="font-bold"><a href="#">Packages</a></li>
            <li className=" opacity-75"><a href="#">Popular Trip</a></li>
            <li className=" opacity-75"><a href="#">Personal Tour</a></li>
            <li className=" opacity-75"><a href="#">Group Tour</a></li>
            <li className=" opacity-75"><a href="#">Business Tour</a></li>
            <li className=" opacity-75"><a href="#">Testimonials</a></li>
        </ul>
        <ul className=" space-y-2">
            <li className="font-bold"><a href="#">Support</a></li>
            <li className=" opacity-75"><a href="#">FAQ</a></li>
            <li className=" opacity-75"><a href="#">Customer Service</a></li>
            <li className=" opacity-75"><a href="#">Terms & Condition</a></li>
            <li className=" opacity-75"><a href="#">Privacy Policy</a></li>
            <li className=" opacity-75"><a href="#">Refund Policy</a></li>
            <li className=" opacity-75"><a href="#">Travel Policy</a></li>
        </ul>
        <ul className=" space-y-2">
            <li className="font-bold mb-10"><a href="#">Contacts</a></li>
            <li className=" opacity-75 "><a href="#" className="flex justify-center sm:justify-start gap-2 mb-4"><img src="./img/Phone-Icon.svg" alt="phone" /> +123 456 7890</a></li>
            <li className=" opacity-75"><a href="#" className="flex justify-center sm:justify-start gap-2 mb-6"><img src="./img/Location-Icon.svg" alt="phone" /> 123 Wanderer Street, City Name,<br/> State Name, Nation</a></li>
            <hr className=" opacity-75"/>
            <li className="flex justify-center sm:justify-end opacity-75 "><a href="#" className="mt-8 xl:mt-1">Copyright © 2023</a></li>

            
        </ul>
    </div>

   </section>

   </>
  )
}

export default Footer