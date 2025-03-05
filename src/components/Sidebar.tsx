import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <Command className="w-72 bg-secondary rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                
                <CommandGroup heading="Suggestions">
                    <Link href="/" passHref>
                        <CommandItem className="gap-2">
                            <LayoutDashboard className="h-4 w-4" />
                            <span>Dashboard</span>
                        </CommandItem>
                    </Link>
                    <Link href="/inventory" passHref>
                        <CommandItem className="gap-2">
                            <Newspaper className="h-4 w-4" />
                            <span>Inventory</span>
                        </CommandItem>
                    </Link>
                    <Link href="/scanner" passHref>
                        <CommandItem className="gap-2">
                            <Folders className="h-4 w-4" />
                            <span>Scanner</span>
                        </CommandItem>
                    </Link>
                    <Link href="/crypto" passHref>
                        <CommandItem className="gap-2">
                            <CreditCard className="h-4 w-4" />
                            <span>Crypto</span>
                        </CommandItem>
                    </Link>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Settings">
                    <CommandItem className="gap-2">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem className="gap-2">
                        <CreditCard className="h-4 w-4" />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem className="gap-2">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
};

export default Sidebar;
