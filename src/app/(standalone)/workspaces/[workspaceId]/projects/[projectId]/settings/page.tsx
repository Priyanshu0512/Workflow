import { getCurrent } from "@/app/features/auth/api/queries";

import { redirect } from "next/navigation";
import { ProjectIdSettingsClient } from "./client";

const WorkspaceIdSettingsPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <ProjectIdSettingsClient />;
};

export default WorkspaceIdSettingsPage;
