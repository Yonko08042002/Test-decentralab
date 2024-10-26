import { Button } from "@/components/atoms/button";

export default function Footer() {
  return (
    <footer className=" w-full flex items-center justify-center  bg-[#101423]">
      <div className=" flex flex-col items-center justify-center p-6">
        <p className="max-w-1/4 text-center font-semibold">
          Apply for the{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ABECA2] via-[#2FB3FE] via-40% via-[#6A8EEA] via-80% to-[#A185F4] ">
            Copin Affiliate Program
          </span>{" "}
          to get <br /> more benefits!
        </p>
        <Button
          variant="link"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABECA2] via-[#2FB3FE] via-40% via-[#6A8EEA] via-80% to-[#A185F4] "
        >
          Contact us
        </Button>
      </div>
    </footer>
  );
}
