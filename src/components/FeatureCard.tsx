
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "green" | "purple" | "orange";
  onClick: () => void;
  disabled?: boolean;
  usageText?: string;
}

const colorClasses = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    icon: "text-blue-600",
  },
  green: {
    gradient: "from-green-500 to-green-600",
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    icon: "text-green-600",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    icon: "text-purple-600",
  },
  orange: {
    gradient: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    icon: "text-orange-600",
  },
};

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  color,
  onClick,
  disabled = false,
  usageText,
}: FeatureCardProps) => {
  const colors = colorClasses[color];

  return (
    <Card className={cn(
      "transition-all duration-200 hover:shadow-lg",
      disabled ? "opacity-50" : "hover:-translate-y-1",
      `hover:${colors.border}`
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className={cn(
            "p-3 rounded-lg",
            colors.bg
          )}>
            <Icon className={cn("h-6 w-6", colors.icon)} />
          </div>
          {usageText && (
            <Badge variant="secondary" className={cn("text-xs", colors.text)}>
              {usageText}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className={cn(
            "w-full bg-gradient-to-r hover:shadow-md transition-all duration-200",
            colors.gradient,
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={onClick}
          disabled={disabled}
        >
          {disabled ? "Limit Reached" : "Use Feature"}
        </Button>
      </CardContent>
    </Card>
  );
};
