import { CarouselSpacing } from "@/components/Home/carousel/carousolSpacing";
import { Footer2 } from "@/components/Home/footer/footer2";
import StartText from "@/components/Home/startText/StartText";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Home() {
  const createSession = async () => {
    const session = await authClient.getSession();
    console.log("Current session:", session);
  };
  return (
    <div className="">
      {/* <Button className="bg-amber-200 text-blue-500">Shadcn Button</Button> */}
      <StartText />
      <div className="flex justify-center items-center">
        {" "}
        <CarouselSpacing />
      </div>
      <Footer2 />
    </div>
  );
}
