"use client";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { OrDivider } from "../or-divider";

const formSchema = z.object({
  code: z
    .string({
      invalid_type_error: "Invalid code",
      required_error: "Session code is required",
    })
    .min(6, { message: "Invalid code" })
    .max(6, { message: "Invalid code" })
    .regex(new RegExp(REGEXP_ONLY_DIGITS_AND_CHARS), {
      message: "Invalid code",
    }),
});

export type PrivateSessionFormData = z.infer<typeof formSchema>;

const PrivateSessionCard = () => {
  const t = useTranslations("DashboardPage.PrivateSessionCard");
  const form = useForm<PrivateSessionFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: PrivateSessionFormData) => {
    console.log(data);
  };

  const { handleSubmit, control } = form;

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-4"
          >
            <FormField
              control={control}
              name="code"
              render={({ field: { onChange, name, ...field } }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <InputOTP
                      maxLength={6}
                      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                      onChange={(value) => onChange(value.toUpperCase())}
                      name={name}
                      {...field}
                      autoComplete="off"
                      className="w-full"
                    >
                      <InputOTPGroup className="w-full">
                        <InputOTPSlot
                          className="w-1/6 py-[calc(100%/12)] text-2xl"
                          index={0}
                        />
                        <InputOTPSlot
                          className="w-1/6 py-[calc(100%/12)] text-2xl"
                          index={1}
                        />
                        <InputOTPSlot
                          className="w-1/6 py-[calc(100%/12)] text-2xl"
                          index={2}
                        />
                        <InputOTPSlot
                          className="w-1/6 py-[calc(100%/12)] text-2xl"
                          index={3}
                        />
                        <InputOTPSlot
                          className="w-1/6 py-[calc(100%/12)] text-2xl"
                          index={4}
                        />
                        <InputOTPSlot
                          className="w-1/6 py-[calc(100%/12)] text-2xl"
                          index={5}
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full" variant="secondary">
              {t("join-session")}
            </Button>
          </form>
        </Form>
        <OrDivider />
        <Button className="w-full">{t("create-session")}</Button>
      </CardContent>
    </Card>
  );
};

export { PrivateSessionCard };
