import { getCurrent } from "@/features/auth/api/queries";
import { SignInCard } from "@/features/auth/components/SignInCard";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");
  return <SignInCard />;
};

export default SignInPage;
