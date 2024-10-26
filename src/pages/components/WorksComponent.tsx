import {
  PiBoundingBox,
  PiLightbulbFilamentFill,
  PiMedalMilitary,
  PiTreasureChestLight,
  PiUsersFour,
} from "react-icons/pi";

export default function WorksComponent() {
  const WORKS = [
    {
      title: "Two-Level Referral System",
      description:
        "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",

      icon: <PiBoundingBox className="size-7" />,
    },
    {
      title: "Earn Rebates & Commissions",
      description:
        "Earn rebates on your trades and commissions from F1 and F2.",

      icon: <PiUsersFour className="size-7" />,
    },
    {
      title: "Claim Daily Rewards",
      description:
        "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
      icon: <PiTreasureChestLight className="size-7" />,
    },
    {
      title: "Referral Tier System",
      description:
        "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.",

      icon: <PiMedalMilitary className="size-7" />,
    },
  ];
  return (
    <div className="py-4">
      {" "}
      <h2 className="flex text-xl font-semibold mb-4">
        {" "}
        <PiLightbulbFilamentFill className="size-7 mr-2 text-gray-500" />
        How It Works?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {WORKS.map((item, index) => (
          <div
            key={index}
            className="border-2 p-4 rounded-lg flex flex-col gap-2"
          >
            <div className="flex items-center justify-center size-12 rounded-sm bg-gradient-to-r from-[#ABECA2] via-[#2FB3FE] via-40% via-[#6A8EEA] via-80% to-[#A185F4] ">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="flex items-center justify-center mr-2 text-sm">
                  {index + 1}.
                </span>
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
