import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/discover");
  return <main className="w-full"></main>;
}
