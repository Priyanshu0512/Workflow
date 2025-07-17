import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      console.log("inside mutation");
      const response = await client.api.auth.logout["$post"]();
      if (!response.ok) {
        throw new Error("Failed to logout");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Logged Out");
      router.refresh();
      // window.location.reload();
      queryClient.invalidateQueries({ queryKey: ["current"] });
    },
    onError: () => {
      toast.error("Failed to log out.");
    },
  });
  return mutation;
};
