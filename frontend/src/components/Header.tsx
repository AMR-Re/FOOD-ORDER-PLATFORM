import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return(
    <div className=" border-b-2 border-b-orange-500  py-6 ">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl text-bold tracking-tight text-orange-500 ">
                FoodOrigin.Com
            </Link>
        </div>
        <div className="md:hidden">
            <MobileNav/>
        </div>
    </div>
  )
}

export default Header;