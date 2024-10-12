import { Ref } from "react";
import { ChatMessage } from "../chat";
import { Message } from "./message";

interface Props {
  messages: ChatMessage[];
  newestMessageRef: Ref<HTMLDivElement>;
}

export const Messages = ({ messages, newestMessageRef }: Props) => {
  return (
    <div className="container flex flex-col gap-4 overflow-auto p-6 xl:max-w-5xl">
      {messages.map(({ content, id, sender, sentAt }, i) => (
        <Message
          key={id}
          content={content}
          sender={sender}
          sentAt={sentAt}
          ref={i + 1 === messages.length ? newestMessageRef : undefined}
        />
      ))}
    </div>
  );
};
