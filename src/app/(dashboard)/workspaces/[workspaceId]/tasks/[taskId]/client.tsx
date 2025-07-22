"use client";

import { useGetTask } from "@/app/features/tasks/api/use-get-task";
import { TaskBreadcrumbs } from "@/app/features/tasks/components/task-bread-crumbs";
import { TaskOverview } from "@/app/features/tasks/components/task-overview";
import { useTaskId } from "@/app/features/tasks/hooks/use-task-id";
import { DottedSeparator } from "@/components/dotted-separator";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";

export const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data, isLoading } = useGetTask({ taskId });
  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <PageError message="Task not found" />;
  }
  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={data.project} task={data} />
      <DottedSeparator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
      </div>
    </div>
  );
};
