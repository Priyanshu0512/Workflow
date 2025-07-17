import { redirect } from "next/navigation";
import { getCurrent } from "../features/auth/api/actions";
import { UserButton } from "../features/auth/components/useButton";
import { CreateWorkspaceForm } from "../features/workspaces/components/create-workspace-form";

export default async function Home() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div>
      <CreateWorkspaceForm />
    </div>
  );
}
