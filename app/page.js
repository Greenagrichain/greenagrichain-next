import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home.html");
  return (
    <main className="">
      <p>You are not meant to be here</p>
    </main>
  );
}
