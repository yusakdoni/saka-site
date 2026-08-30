import {
  LayoutDashboard,
  Code2,
  BarChart3,
  Bot,
  Network,
  Compass,
  LifeBuoy,
  Package,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/content/services";

const iconMap: Record<Service["icon"], React.ComponentType<LucideProps>> = {
  "layout-dashboard": LayoutDashboard,
  code: Code2,
  "bar-chart-3": BarChart3,
  bot: Bot,
  network: Network,
  compass: Compass,
  "life-buoy": LifeBuoy,
  package: Package,
};

export default function ServiceIcon({
  icon,
  size = 22,
  className,
}: {
  icon: Service["icon"];
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon size={size} className={className} strokeWidth={1.75} />;
}
