"use client";

import { cn } from "@/src/lib/utils";
import { Textarea, TextareaProps } from "./ui/textarea";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import { mergeRefs } from "../lib/merge-refs";

const AutoResizeTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onChange, ...props }, ref) => {
    const localRef = useRef<HTMLTextAreaElement>(null);

    const resize = useCallback(() => {
      if (!localRef?.current) return;

      localRef.current.style.height = "auto";

      const scrollHeight = localRef.current.scrollHeight;
      localRef.current.style.height = `${scrollHeight}px`;
    }, []);

    useEffect(() => {
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    }, [resize]);

    useEffect(() => {
      resize();
    }, [props.value, resize]);

    return (
      <Textarea
        className={cn(
          "scroll-hide flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={mergeRefs(ref, localRef)}
        {...props}
        onChange={(...args) => [onChange?.(...args), resize()]}
      />
    );
  },
);
AutoResizeTextarea.displayName = "AutoResizeTextarea";

export { AutoResizeTextarea };
