import { LucideIcon } from "lucide-react";

type StatsCardProps = {
  title: string;
  icon: LucideIcon;
  value: number | string;
};

function StatsCard({ title, icon: Icon, value }: StatsCardProps) {
  return (
    <div className="relative z-10 flex flex-col items-start gap-2 rounded-md px-3 py-4 shadow lg:px-7">
      <div className="inline-block rounded-full bg-slate-200 p-3">
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      </div>
      <h2 className="text-sm md:text-base">{title}</h2>

      <p className="mb-auto self-end text-end text-sm md:text-lg">{value}</p>
    </div>
  );
}

export default StatsCard;
