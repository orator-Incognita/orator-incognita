import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Emoji } from "../types/emoji";

interface Props {
  onClickOutside?: () => void;
  onEmojiSelect?: (emoji: Emoji) => void;
}

const EmojiPicker = ({ onClickOutside, onEmojiSelect }: Props) => {
  const locale = useLocale();
  const [lang] = locale.split("-");
  const { theme } = useTheme();

  return (
    <Picker
      data={data}
      onEmojiSelect={onEmojiSelect}
      onClickOutside={onClickOutside}
      locale={lang}
      theme={theme}
      previewPosition="none"
      // set="apple"
      autoFocus
      icons="outline"
    />
  );
};

export { EmojiPicker };
