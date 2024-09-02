import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home/");
  return (
    <main>
      <div>Redirecting to Homepage... Refresh if it takes too long</div>;
    </main>
  );
}
