import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";
// import { Home } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const cookieStore = await cookies();
  console.log("cookieStore", cookieStore);

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: { Cookie: cookieStore.toString() },
    cache: "no-store",
  });
  const session = await res.json();
  console.log(session);

  return (
    <div className="">
      <div className="h-screen flex flex-col items-center justify-center px-5">
        <p className="">Home page</p>

        {/* <Button>Click me</Button> */}
      </div>
    </div>
  );
}
