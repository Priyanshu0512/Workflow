import { getCurrent } from "@/app/features/auth/api/queries";
import { JoinWorkspaceForm } from "@/app/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/app/features/workspaces/queries";
import { redirect } from "next/navigation";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}
const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
  const user = getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) {
    redirect("/");
  }
  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdJoinPage;
