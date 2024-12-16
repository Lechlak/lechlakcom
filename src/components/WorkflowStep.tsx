import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkflowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
}

export const WorkflowStep = ({
  icon: Icon,
  title,
  description,
  isActive
}: WorkflowStepProps) => {
  return (
    <div className={cn(
      "glass-card p-6 transition-all duration-300",
      isActive ? "scale-105 shadow-lg" : "scale-100"
    )}>
      <div className="flex items-center gap-4">
        <div className={cn(
          "p-3 rounded-lg transition-colors",
          isActive ? "bg-blue-500/20" : "bg-gray-500/20"
        )}>
          <Icon className={cn(
            "w-6 h-6 transition-colors",
            isActive ? "text-blue-400" : "text-gray-400"
          )} />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};