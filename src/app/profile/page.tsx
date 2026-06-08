import { redirect } from "next/navigation";

export default function ProfileIndexPage() {
  // Redirect to the first tab by default
  redirect("/profile/account/identity");
}
