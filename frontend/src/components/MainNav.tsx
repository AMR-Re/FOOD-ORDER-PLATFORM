import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <span className="flex space-x-2 items-center">
    <Button variant="ghost" className="font-bold hover:text-orange-500 hover:bg-white justify-end items-end ">
        Log In
    </Button>
    </span>
  )
}

export default MainNav;