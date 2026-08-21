import { redirect } from "next/navigation";

// LP-B content now lives at "/" — redirect to keep one canonical URL.
export default function InvestRedirect() {
  redirect("/");
}
