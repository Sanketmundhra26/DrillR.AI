import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    // ⬅️ Already logged in ➔ redirect to dashboard (root)
    if (isUserAuthenticated) redirect("/");

    return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;