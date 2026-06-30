import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  return (
    <>
      {/* Child routes render here */}
      <Outlet />
      <Toaster position="top-center" richColors />
    </>
  );
}
