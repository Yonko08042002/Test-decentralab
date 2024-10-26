import { ArrowRight } from "lucide-react";
import { Chart } from "./Chart";

export default function ProfileHeader() {
  return (
    <div className="w-full h-full py-4 px-10 bg-gradient-to-l  from-[rgba(66,62,244,0.1)] to-[rgba(62,162,244,0)]">
      <div className=" w-full h-full items-center gap-10 md:gap-0 flex flex-col md:flex-row">
        <div className=" mx-auto lg:w-1/2">
          <h1 className=" text-xl md:text-2xl lg:text-3xl  font-bold mb-4">
            Unlock Rewards with the Copin <br /> Referral Program
          </h1>
          <p className="mb-2 text-gray-500">
            Earn rebates and commissions by inviting friends.
          </p>
          <p className="mb-4 text-gray-500">
            Grow your network and benefit from our 6-tier reward system.
          </p>
          <p className="cursor-pointer py-1 w-max flex items-center justify-center hover:border-b-2 border-blue-400 text-blue-400">
            View referral Ranking <ArrowRight className="size-6 ml-2" />
          </p>
        </div>
        <div className="mx-auto lg:w-1/2 ">
          <Chart />
        </div>{" "}
      </div>
    </div>
  );
}
