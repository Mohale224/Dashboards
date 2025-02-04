import DashBoardSideBar from "./(components)/DashBoardSideBar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    return (
        <div className="grind min-h-screen w-full lg:grid-cols-[280px_1fr]">
           {/** Dashboard Sidebar */}
            <DashBoardSideBar/>
           {/** Dashboard Nav */}
        </div>
    );
} 