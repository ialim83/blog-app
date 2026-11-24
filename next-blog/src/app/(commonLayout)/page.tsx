import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
// import { Home } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const session = await authClient.getSession(); // Replace with your session logic

  // console.log(session);
  
  return (
    <div className="">
      <div className="h-screen flex flex-col items-center justify-center px-5">
        <p className="">Home page</p>

        {/* <Button>Click me</Button> */}
      </div>
    </div>
  );
}
