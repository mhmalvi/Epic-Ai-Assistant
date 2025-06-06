
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface UsageWidgetProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: "blue" | "green" | "purple" | "orange";
  progress?: number;
}

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    icon: "text-blue-600",
    progress: "bg-blue-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    icon: "text-green-600",
    progress: "bg-green-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    icon: "text-purple-600",
    progress: "bg-purple-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    icon: "text-orange-600",
    progress: "bg-orange-600",
  },
};

export const UsageWidget = ({
  title,
  value,
  icon: Icon,
  color,
  progress,
}: UsageWidgetProps) => {
  const colors = colorClasses[color];

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg", colors.bg)}>
            <Icon className={cn("h-5 w-5", colors.icon)} />
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
        {progress !== undefined && (
          <Progress 
            value={progress} 
            className="h-2"
          />
        )}
      </CardContent>
    </Card>
  );
};
