

function Nav() {
  return (
    <>
    <section className=" px-2 xl:px-0">
        <header>
            <nav className='flex justify-between py-8'>
                <div>
                    <a href="#"><img src="./img/CompanyLogo.svg" alt="logo" /></a>

                </div>
                <div>
                <ul className='md:flex space-x-72 text-white font-normal text-base font-DM-Sans hidden '>
                    <li><a href="#">Trips</a></li>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    
                </ul>
                <div>
                    <a href="#"><img className='block md:hidden' src="./img/menu.svg" alt="menu" /></a>
                </div>
                </div>
            </nav>
        </header>
    </section>
    </>
  )
}

export default Nav