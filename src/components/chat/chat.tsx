import { Input } from "./components/input";
import { Messages } from "./components/messages";

export interface ChatMessage {
  id: number;
  content: string;
  sentAt: Date;
  sender: "user" | "orator";
}

const mockMessages: ChatMessage[] = [
  {
    id: 1,
    content: "Hello",
    sender: "orator",
    sentAt: new Date(Date.now() - 4 * 60 * 1000),
  },
  {
    id: 2,
    content: "Hi",
    sender: "user",
    sentAt: new Date(Date.now() - 3 * 60 * 1000),
  },
  {
    id: 3,
    content: "How are you?",
    sender: "orator",
    sentAt: new Date(Date.now() - 2 * 60 * 1000),
  },
  {
    id: 4,
    content: "I'm good, thanks",
    sender: "user",
    sentAt: new Date(Date.now() - 1 * 60 * 1000),
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod et ipsum ut tincidunt. Phasellus consectetur arcu nisl, et commodo nibh convallis eget. Quisque dignissim egestas tortor et congue. Pellentesque aliquam ultricies turpis eget hendrerit. Phasellus vehicula volutpat nulla nec consequat. Phasellus tempor diam consectetur nisl fringilla pretium. Mauris vitae accumsan ex, non blandit velit. Curabitur ut tortor vel mauris sodales hendrerit. Phasellus vestibulum diam non diam fermentum vulputate. In mattis sed dui in mattis. Morbi hendrerit gravida libero, sed fermentum neque dapibus in. In feugiat augue at sagittis facilisis.",
    sender: "orator",
    sentAt: new Date(),
  },
  {
    id: 6,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod et ipsum ut tincidunt. Phasellus consectetur arcu nisl, et commodo nibh convallis eget. Quisque dignissim egestas tortor et congue. Pellentesque aliquam ultricies turpis eget hendrerit. Phasellus vehicula volutpat nulla nec consequat. Phasellus tempor diam consectetur nisl fringilla pretium. Mauris vitae accumsan ex, non blandit velit. Curabitur ut tortor vel mauris sodales hendrerit. Phasellus vestibulum diam non diam fermentum vulputate. In mattis sed dui in mattis. Morbi hendrerit gravida libero, sed fermentum neque dapibus in. In feugiat augue at sagittis facilisis.",
    sender: "user",
    sentAt: new Date(),
  },
  {
    id: 7,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod et ipsum ut tincidunt. Phasellus consectetur arcu nisl, et commodo nibh convallis eget. Quisque dignissim egestas tortor et congue. Pellentesque aliquam ultricies turpis eget hendrerit. Phasellus vehicula volutpat nulla nec consequat. Phasellus tempor diam consectetur nisl fringilla pretium. Mauris vitae accumsan ex, non blandit velit. Curabitur ut tortor vel mauris sodales hendrerit. Phasellus vestibulum diam non diam fermentum vulputate. In mattis sed dui in mattis. Morbi hendrerit gravida libero, sed fermentum neque dapibus in. In feugiat augue at sagittis facilisis.",
    sender: "orator",
    sentAt: new Date(),
  },
];

export const Chat = () => {
  return (
    <div className="h-[calc(100vh-4.0625rem)] mx-auto border-x shadow-muted shadow-2xl relative flex flex-col">
      <Messages messages={mockMessages} />
      <Input />
    </div>
  );
};
