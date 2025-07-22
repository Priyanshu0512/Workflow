import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import Projects from "./projects";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <div className="flex items-center space-x-2 justify-center">
          <Image src="/logo.png" alt="logo" width={300} height={300} />
          {/* <div className="text-3xl font-semibold text-blue-700 uppercase">
            Workflow
          </div> */}
        </div>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />

      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
