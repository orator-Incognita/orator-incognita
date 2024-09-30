import { ChatMessage } from "../chat";
import { Message } from "./message";

interface Props {
  messages: ChatMessage[];
}

export const Messages = ({ messages }: Props) => {
  return (
    <div className="overflow-auto container flex flex-col gap-4 p-6 xl:max-w-5xl">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
