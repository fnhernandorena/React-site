import { FaHouseUser } from "react-icons/fa6";
import { Fa1, Fa2,Fa3,Fa4,Fa5 } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const links = [
    { name: "Home", icon: FaHouseUser, href: "/" },
    {
      name: "Example", icon: Fa1,
      href: "example01",
    },
    {
      name: "Example", icon: Fa2,
      href: "/example02"
    },
    { name: "Example",icon: Fa3, href: "/example03" },
    { name: "Example", icon: Fa4, href: "/example04" },
    { name: "Example", icon: Fa5, href: "/example05"}
  ];
  

function Nav() {
    return (
    <nav className="flex max-w-screen-lg w-full justify-around mb-10">
        {links.map(link =>{
            return(
                <NavLink className={({ isActive }) => (isActive ? "border-l-2 border-r-2 flex p-3 w-28 justify-around flex-col  text-white h-full items-center m-1 border-sky-300" : "border-l-2 border-r-2 flex border-gray-600 p-3 w-28 justify-around flex-col  text-white h-full items-center m-1 duration-300 hover:border-sky-300")} to={link.href}><p>{link.name}{link.icon && <link.icon />}</p></NavLink>
            )
        })}
    
    </nav>
    )
}

export default Nav;