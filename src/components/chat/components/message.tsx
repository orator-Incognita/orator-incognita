import { useFormatter, useNow, useTranslations } from "next-intl";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

interface Props {
  content: string;
  sender: "orator" | "user";
  sentAt: Date;
}

const messageVariants = cva("rounded-lg px-4 py-2 whitespace-pre-line", {
  variants: {
    sender: {
      orator: "bg-muted",
      user: "bg-primary text-primary-foreground",
    },
  },
});

const Message = forwardRef<HTMLDivElement, Props>(
  ({ content, sender, sentAt }, ref) => {
    const format = useFormatter();
    const t = useTranslations("ChatPage");
    const now = useNow({
      updateInterval: 1000 * 60, // 1 min
    });

    //  If now is not yet updated sent at time can be in the future
    //  To prevent this we use now in this case
    const currentTime = now < sentAt ? now : sentAt;

    const messageInfo = t("message-info", {
      sender,
      time: format.relativeTime(currentTime, now),
    });

    return (
      <div ref={ref} className="flex flex-col gap-2">
        <div className="text-sm text-muted-foreground">{messageInfo}</div>
        <p className={messageVariants({ sender })}>{content}</p>
      </div>
    );
  },
);

Message.displayName = "Message";

export { Message };
