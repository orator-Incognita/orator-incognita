import { useFormatter, useTranslations } from "next-intl";
import { ChatMessage } from "../chat";
import { cva } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

interface Props {
  message: ChatMessage;
}

const messageVariants = cva("rounded-lg px-4 py-2", {
  variants: {
    sender: {
      orator: "bg-muted",
      user: "bg-primary text-primary-foreground",
    },
  },
});

export const Message = ({ message }: Props) => {
  const { content, sender, sentAt } = message;
  const format = useFormatter();
  const t = useTranslations("ChatPage");

  const messageInfo = t("message-info", {
    sender,
    time: format.relativeTime(sentAt),
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground text-sm">{messageInfo}</div>
      <p className={cn(messageVariants({ sender }))}>{content}</p>
    </div>
  );
};
