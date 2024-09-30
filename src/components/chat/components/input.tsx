import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { SmilePlusIcon } from "lucide-react";

export const Input = () => {
  return (
    <form className="w-full border-t relative bg-background p-4 xl:max-w-5xl">
      <Textarea className="bg-muted resize-none rounded-3xl" />
      <div className="absolute right-6 top-[calc(50%-1.125rem)] flex gap-2">
        <Button
          className="rounded-full"
          variant="destructive"
          size="icon"
          type="button"
        >
          <SmilePlusIcon size={15} />
        </Button>
        <Button
          className="rounded-full"
          type="submit"
          variant="default"
          size="icon"
        >
          <PaperPlaneIcon />
        </Button>
      </div>
    </form>
  );
};
