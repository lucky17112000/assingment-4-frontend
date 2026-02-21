"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { authClient } from "@/lib/auth-client";
// import { getSession, getUser } from "@/service/auth";

const layout = ({
  admin,
  student,
  tutor,
}: {
  admin: React.ReactNode;
  student: React.ReactNode;
  tutor: React.ReactNode;
}) => {
  // const user = await getUser();
  // console.log("User in layout:", user);
  // const res = await fetch("/api/auth/session");
  // const session = await res.json();
  // console.log("Session in layout:", session);
  const session = authClient.useSession();
  // console.log("Session in LoginForm:", session.data?.user);
  console.log("User Role from session:", (session.data?.user as any)?.role);

  return (
    <DashboardLayout user={session.data?.user}>
      {admin}
      {student}
      {tutor}
    </DashboardLayout>
  );
};

export default layout;
