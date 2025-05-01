// app/(root)/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    // ⬅️ Not logged in ➔ redirect to sign-in page
    if (!isUserAuthenticated) redirect("/sign-in");

    return <div className="root-layout">{children}</div>;
};

export default RootLayout;
