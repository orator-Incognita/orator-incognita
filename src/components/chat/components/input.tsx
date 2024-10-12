"use client";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import { SmilePlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { AutoResizeTextarea } from "../../resizeable-textarea";
import { Form, FormField } from "../../ui/form";
import { z } from "zod";
import { MAX_MESSAGE_LENGTH } from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { EmojiPicker } from "../../emoji-picker";

const formSchema = z.object({
  message: z.string().min(1).max(MAX_MESSAGE_LENGTH),
});

export type MessageFormData = z.infer<typeof formSchema>;

interface Props {
  onMessage: (data: MessageFormData) => void;
}

export const Input = ({ onMessage }: Props) => {
  const t = useTranslations("ChatPage");
  const ref = useRef<HTMLFormElement>(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const form = useForm<MessageFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const { handleSubmit, control, reset, setValue, getValues } = form;

  const onSubmit = (data: MessageFormData) => {
    onMessage(data);
    reset();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      ref?.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      );
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full border-t bg-background p-4 xl:max-w-5xl"
          ref={ref}
        >
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <AutoResizeTextarea
                className="max-h-80 min-h-12 resize-none rounded-3xl bg-muted py-[0.6875rem] pl-5 pr-[5.5rem] text-base"
                placeholder={t("message-placeholder")}
                rows={1}
                {...field}
                onKeyDown={onKeyDown}
              />
            )}
          />

          <div className="absolute right-6 top-[calc(50%-1rem)] flex gap-2">
            <Button
              className="size-8 rounded-full"
              variant="tertiary"
              size="icon"
              type="button"
              onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
            >
              <SmilePlusIcon size={15} />
            </Button>
            <Button
              className="size-8 rounded-full"
              type="submit"
              variant="default"
              size="icon"
            >
              <PaperPlaneIcon />
            </Button>
            {isEmojiPickerOpen && (
              <div className="absolute bottom-12 right-0">
                <EmojiPicker
                  onClickOutside={() => setIsEmojiPickerOpen(false)}
                  onEmojiSelect={(emoji) =>
                    // TODO: Insert at previous cursor position
                    setValue("message", getValues("message") + emoji.native, {
                      shouldValidate: true,
                      shouldTouch: true,
                      shouldDirty: true,
                    })
                  }
                />
              </div>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};
