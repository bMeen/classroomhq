import { LucideIcon } from "lucide-react";

import { Options } from "../types";
import DashboardOptions from "../features/dashboard/DashboardOptions";

type ValueType = {
  title: string;
  icon: LucideIcon;
  value: number | string;
  type: "value";
};

type SelectType = {
  title: string;
  icon: LucideIcon;
  type: "select";
  options: Options[];
};

type StatsCardProps = ValueType | SelectType;

function StatsCard(props: StatsCardProps) {
  const { title, icon: Icon, type } = props;
  return (
    <div className="relative z-10 flex flex-col items-start gap-2 rounded-md px-3 py-4 shadow lg:px-7">
      <div className="inline-block rounded-full bg-slate-200 p-3">
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      </div>
      <h2 className="text-xs md:text-base">{title}</h2>
      {type === "value" && (
        <p className="mb-auto self-end text-end text-sm md:text-lg">
          {props.value}
        </p>
      )}
      {type === "select" && <DashboardOptions options={props.options} />}
    </div>
  );
}

export default StatsCard;
