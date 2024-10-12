import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ReactNode } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface Props {
  children: ReactNode;
}

export const InfoTooltip = ({ children }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="relative top-[0.1875rem] ml-1">
          <InfoCircledIcon className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent className="max-w-96">{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
