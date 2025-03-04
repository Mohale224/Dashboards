import Image from "next/image";
import Link from "next/link";
import logo from "../../../img/logo2.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/Themetoggler";
const Navbar = () => {
    return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <Link href="/">
            <Image src={logo} alt="Smart Farm" width={50} height={50}/>
            </Link>
            <div className="flex items-center">
            <ThemeToggler/>
            <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"  alt="@shadcn"/>
                    <AvatarFallback className='text-black'>CN</AvatarFallback>
            </Avatar>

    </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link href='/auth'>Logout
        </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>

    </DropdownMenuContent>
</DropdownMenu>
            </div>
            


    </div>
    );
}; 
export default Navbar;