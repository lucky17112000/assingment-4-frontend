import StartText from "@/components/Home/StartText/SartText";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Button className="bg-amber-200 text-blue-500">Shadcn Button</Button> */}
      <StartText />
    </div>
  );
}
