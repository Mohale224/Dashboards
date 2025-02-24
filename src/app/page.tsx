import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link href="/dashboard">
    <Button size="lg" className="text-blue-400">DashBoard</Button>
    </Link>
    <ModeToggle/>
    </main>
  );
}