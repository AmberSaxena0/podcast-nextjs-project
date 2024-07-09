import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black">
        <LeftSidebar />
        <section className="border-2 border-red-700 flex-1 min-h-screen flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src={require("/public/icons/logo.svg")}
                alt={"logo"}
                width={30}
                height={30}
              />
              <MobileNav />
            </div>
            <div>
              Toaster Notification
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}
