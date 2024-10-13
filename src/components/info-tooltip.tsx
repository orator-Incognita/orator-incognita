import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ReactNode } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  triggerClassName?: string;
}

export const InfoTooltip = ({
  children,
  className,
  triggerClassName,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={cn(triggerClassName, "relative top-[0.1875rem] ml-1")}
        >
          <InfoCircledIcon className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent className={cn(className, "max-w-96")}>
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
