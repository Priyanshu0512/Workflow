import { getCurrent } from "@/features/auth/api/queries";
import { SignUpCard } from "@/features/auth/components/SignUpCard";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");
  return <SignUpCard />;
};

export default SignInPage;
