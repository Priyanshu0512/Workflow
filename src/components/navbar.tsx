import { UserButton } from "@/app/features/auth/components/useButton";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Monitor all your of your projects and tasks here.
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};
