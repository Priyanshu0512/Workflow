import { getCurrent } from "@/app/features/auth/api/queries";
import { redirect } from "next/navigation";
import { TaskIdClient } from "./client";

const TaskIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return <TaskIdClient />;
};

export default TaskIdPage;
