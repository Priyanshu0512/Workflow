import { getCurrent } from "@/app/features/auth/api/queries";
import { EditProjectForm } from "@/app/features/projects/components/edit-project-form";
import { getProject } from "@/app/features/projects/queries";
import { redirect } from "next/navigation";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}
const ProjectIdSettingsPage = async ({
  params,
}: ProjectIdSettingsPageProps) => {
  const user = getCurrent();
  if (!user) redirect("sign-in");

  const initialValues = await getProject({
    projectId: params.projectId,
  });
  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
      hi
    </div>
  );
};

export default ProjectIdSettingsPage;
