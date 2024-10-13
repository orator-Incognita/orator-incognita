import { HTMLAttributes } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { cn } from "../lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Circle } from "lucide-react";

const COMPASS_BASE_SIZE = 200;

interface CompassPointProps {
  socialAxis: number;
  economicAxis: number;
}

const CompassPoint = ({ socialAxis, economicAxis }: CompassPointProps) => {
  const left = `${50 * (socialAxis + 1)}%`;
  const bottom = `${50 * (economicAxis + 1)}%`;
  const t = useTranslations("Common.Compass");
  const formatter = useFormatter();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="absolute translate-x-[-50%] translate-y-[50%] rounded-full p-[2px] focus-visible:z-10 focus-visible:bg-background"
          style={{
            left,
            bottom,
          }}
        >
          <Circle className="size-4 fill-current" />
        </TooltipTrigger>
        <TooltipContent>
          <dl className="grid grid-cols-2">
            <dt>{t("economic-axis")}</dt>
            <dd className="flex justify-end font-semibold">
              {formatter.number(economicAxis, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </dd>
            <dt>{t("social-axis")}</dt>
            <dd className="flex justify-end font-semibold">
              {formatter.number(socialAxis, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </dd>
          </dl>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CompassProps extends HTMLAttributes<SVGElement> {}

const Compass = ({ children, className, ...props }: CompassProps) => {
  const t = useTranslations("Common.Compass");

  return (
    <div className="relative">
      <svg
        width={COMPASS_BASE_SIZE}
        height={COMPASS_BASE_SIZE}
        viewBox={`0 0 ${COMPASS_BASE_SIZE} ${COMPASS_BASE_SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("overflow-visible", className)}
        {...props}
      >
        <g>
          <path
            d="M100 200L102.887 195H97.1132L100 200ZM100 0L97.1132 5H102.887L100 0ZM100.5 195.5L100.5 4.5H99.5L99.5 195.5H100.5Z"
            fill="currentColor"
          />
          <path
            d="M0 100L5 102.887V97.1132L0 100ZM200 100L195 97.1132V102.887L200 100ZM4.5 100.5H195.5V99.5H4.5V100.5Z"
            fill="currentColor"
          />
          {/* TODO: Replace text with foreignObject */}
          {/* <path
          d="M29.3186 54H28.3953L31.0658 46.7273H31.9749L34.6453 54H33.722L31.5487 47.8778H31.4919L29.3186 54ZM29.6595 51.1591H33.3811V51.9403H29.6595V51.1591ZM39.102 51.7699V48.5455H39.9401V54H39.102V53.0767H39.0452C38.9173 53.3537 38.7185 53.5893 38.4486 53.7834C38.1787 53.9751 37.8378 54.071 37.4259 54.071C37.085 54.071 36.7819 53.9964 36.5168 53.8473C36.2516 53.6958 36.0433 53.4685 35.8918 53.1655C35.7403 52.8601 35.6645 52.4754 35.6645 52.0114V48.5455H36.5026V51.9545C36.5026 52.3523 36.6138 52.6695 36.8364 52.9062C37.0613 53.143 37.3477 53.2614 37.6958 53.2614C37.9041 53.2614 38.116 53.2081 38.3314 53.1016C38.5492 52.995 38.7315 52.8317 38.8783 52.6115C39.0274 52.3913 39.102 52.1108 39.102 51.7699ZM43.8472 48.5455V49.2557H41.0205V48.5455H43.8472ZM41.8444 47.2386H42.6824V52.4375C42.6824 52.6742 42.7168 52.8518 42.7854 52.9702C42.8564 53.0862 42.9464 53.1643 43.0553 53.2045C43.1666 53.2424 43.2838 53.2614 43.4069 53.2614C43.4992 53.2614 43.575 53.2566 43.6341 53.2472C43.6933 53.2353 43.7407 53.2259 43.7762 53.2188L43.9466 53.9716C43.8898 53.9929 43.8105 54.0142 43.7087 54.0355C43.6069 54.0592 43.4779 54.071 43.3216 54.071C43.0849 54.071 42.8529 54.0201 42.6256 53.9183C42.4007 53.8165 42.2137 53.6615 42.0645 53.4531C41.9178 53.2448 41.8444 52.982 41.8444 52.6648V47.2386ZM46.0631 50.7188V54H45.2251V46.7273H46.0631V49.3977H46.1341C46.262 49.116 46.4537 48.8923 46.7094 48.7266C46.9675 48.5585 47.3108 48.4744 47.7393 48.4744C48.1109 48.4744 48.4365 48.549 48.7158 48.6982C48.9952 48.8449 49.2118 49.071 49.3657 49.3764C49.5219 49.6795 49.6001 50.0653 49.6001 50.5341V54H48.762V50.5909C48.762 50.1577 48.6495 49.8227 48.4246 49.5859C48.2021 49.3468 47.8931 49.2273 47.4978 49.2273C47.2232 49.2273 46.9769 49.2853 46.7591 49.4013C46.5437 49.5173 46.3733 49.6866 46.2478 49.9091C46.1247 50.1316 46.0631 50.4015 46.0631 50.7188ZM54.0594 54V46.7273H54.9401V53.2188H58.3208V54H54.0594ZM61.8577 54.1136C61.3321 54.1136 60.8788 53.9976 60.4976 53.7656C60.1188 53.5312 59.8264 53.2045 59.6205 52.7855C59.4169 52.3641 59.3151 51.8741 59.3151 51.3153C59.3151 50.7566 59.4169 50.2642 59.6205 49.8381C59.8264 49.4096 60.1129 49.0758 60.4798 48.8366C60.8492 48.5952 61.28 48.4744 61.7725 48.4744C62.0566 48.4744 62.3371 48.5218 62.6141 48.6165C62.8911 48.7112 63.1432 48.8651 63.3705 49.0781C63.5977 49.2888 63.7789 49.5682 63.9138 49.9162C64.0487 50.2642 64.1162 50.6927 64.1162 51.2017V51.5568H59.9117V50.8324H63.2639C63.2639 50.5246 63.2024 50.25 63.0793 50.0085C62.9585 49.767 62.7857 49.5765 62.5608 49.4368C62.3383 49.2971 62.0755 49.2273 61.7725 49.2273C61.4387 49.2273 61.1498 49.3101 60.906 49.4759C60.6645 49.6392 60.4787 49.8523 60.3485 50.1151C60.2182 50.3778 60.1531 50.6596 60.1531 50.9602V51.4432C60.1531 51.8551 60.2242 52.2043 60.3662 52.4908C60.5106 52.7749 60.7107 52.9915 60.9664 53.1406C61.222 53.2874 61.5191 53.3608 61.8577 53.3608C62.0779 53.3608 62.2767 53.33 62.4543 53.2685C62.6342 53.2045 62.7893 53.1098 62.9195 52.9844C63.0497 52.8565 63.1503 52.6979 63.2213 52.5085L64.031 52.7358C63.9458 53.0104 63.8025 53.2519 63.6013 53.4602C63.4001 53.6662 63.1515 53.8272 62.8556 53.9432C62.5596 54.0568 62.227 54.1136 61.8577 54.1136ZM67.82 48.5455V49.2557H64.8797V48.5455H67.82ZM65.7604 54V47.7926C65.7604 47.4801 65.8338 47.2197 65.9806 47.0114C66.1273 46.803 66.3179 46.6468 66.5523 46.5426C66.7867 46.4384 67.0341 46.3864 67.2945 46.3864C67.5004 46.3864 67.6685 46.4029 67.7987 46.4361C67.9289 46.4692 68.026 46.5 68.0899 46.5284L67.8485 47.2528C67.8058 47.2386 67.7467 47.2209 67.6709 47.1996C67.5975 47.1783 67.5004 47.1676 67.3797 47.1676C67.1027 47.1676 66.9027 47.2375 66.7796 47.3771C66.6588 47.5168 66.5985 47.7216 66.5985 47.9915V54H65.7604ZM71.3667 48.5455V49.2557H68.54V48.5455H71.3667ZM69.3639 47.2386H70.202V52.4375C70.202 52.6742 70.2363 52.8518 70.305 52.9702C70.376 53.0862 70.4659 53.1643 70.5748 53.2045C70.6861 53.2424 70.8033 53.2614 70.9264 53.2614C71.0187 53.2614 71.0945 53.2566 71.1537 53.2472C71.2129 53.2353 71.2602 53.2259 71.2957 53.2188L71.4662 53.9716C71.4094 53.9929 71.33 54.0142 71.2282 54.0355C71.1265 54.0592 70.9974 54.071 70.8412 54.071C70.6044 54.071 70.3724 54.0201 70.1452 53.9183C69.9202 53.8165 69.7332 53.6615 69.5841 53.4531C69.4373 53.2448 69.3639 52.982 69.3639 52.6648V47.2386Z"
          fill="currentColor"
          fill-opacity="0.7"
        /> */}
          <foreignObject x="0" y="0" width="100" height="100">
            <p className="flex h-full w-full items-center justify-center px-4 text-center text-[0.625rem] opacity-70">
              {t("auth-left")}
            </p>
          </foreignObject>
          <foreignObject x="100" y="0" width="100" height="100">
            <p className="flex h-full w-full items-center justify-center px-4 text-center text-[0.625rem] opacity-70">
              {t("auth-right")}
            </p>
          </foreignObject>
          <foreignObject x="0" y="100" width="100" height="100">
            <p className="flex h-full w-full items-center justify-center px-4 text-center text-[0.625rem] opacity-70">
              {t("lib-left")}
            </p>
          </foreignObject>
          <foreignObject x="100" y="100" width="100" height="100">
            <p className="flex h-full w-full items-center justify-center px-4 text-center text-[0.625rem] opacity-70">
              {t("lib-right")}
            </p>
          </foreignObject>
        </g>
      </svg>
      {children}
    </div>
  );
};
export { Compass, CompassPoint };
