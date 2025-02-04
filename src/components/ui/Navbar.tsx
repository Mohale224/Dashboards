import Image from "next/image";
import Link from "next/link";
import logo from "../../../img/logo2.png";
const Navbar = () => {
    return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <Link href="/">
            <Image src={logo} alt="Smart Farm" width={50} height={50}/>
            </Link>
    </div>
    );
}; 
export default Navbar;