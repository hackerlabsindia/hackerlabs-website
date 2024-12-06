"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { useCallback, useState } from "react";

import { Button } from "@hackerlabs/@/components/ui/button";
import { Input } from "@hackerlabs/@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@hackerlabs/@/components/ui/form";
import "./contactForm.css";
import content from "@hackerlabs/content/content.json";
import Icon from "../Icon";
import { InputOptionIcon, Submit } from "@hackerlabs/icons";
import { Textarea } from "@hackerlabs/@/components/ui/textarea";
import React, { forwardRef } from "react";


interface Option {
  label: string;
  value: string;
}

interface DynamicOptionsProps {
  options: Option[];
  onOptionChange: (selectedValue: string) => void;
  className?: string;
}

const DynamicOptions: React.FC<DynamicOptionsProps> = ({
  options,
  onOptionChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0]?.value || ""
  );
  const handleClick = useCallback(
    (value: string) => {
      setSelectedOption(value);
      onOptionChange(value);
    },
    [onOptionChange]
  );

  return (
    <div
      role="radiogroup"
      aria-required="false"
      dir="ltr"
      className="grid gap-3 no-outline"
    >
      {options.map((option: Option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2"
          onClick={() => handleClick(option.value)}
        >
          <button
            type="button"
            role="radio"
            aria-checked={selectedOption === option.value}
            className={`options ${
              selectedOption === option.value ? "checked" : ""
            }`}
          >
            <span className="flex items-center justify-center">
              {selectedOption === option.value ? (
                <InputOptionIcon
                  viewBox="0 0 24 24"
                  className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                />
              ) : (
                <span className="circle-placeholder"></span>
              )}
            </span>
          </button>
          <span className="option-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
type FormType = "contact-form";


const ContactForm = forwardRef<HTMLDivElement, { type: "contact-form" }>(
  ({ type }, ref) => {
    const budgetOptions: Option[] = [
      { label: content.ContactForm.option1, value: "not-sure" },
      { label: content.ContactForm.option2, value: "1000-5000" },
      { label: content.ContactForm.option3, value: "5000-10000" },
      { label: content.ContactForm.option4, value: "more-than-10000" },
    ];

    const authFormSchema = (formType: FormType) => {
      console.log({ formType });
      return z.object({
        email: z.string().email(),
        fullName:
          formType === "contact-form"
            ? z.string().min(2).max(50)
            : z.string().optional(),
        text: z
          .string()
          .min(10, {
            message: "Message must be at least 10 characters.",
          })
          .max(160, {
            message: "Message must not be longer than 50 characters.",
          }),
      });
    };

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        email: "",
      },
    });

    const handleOptionChange = (selectedValue: string) => {
      console.log("Selected option:", selectedValue);
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setIsLoading(true);
      setErrorMessage(" ");
      console.log("user");
    };

    return (
      <>
        <div className="contactContainer">
          <div className="left-1/4 lines"></div>
          <div className="left-1/2 lines"></div>
          <div className="left-3/4 lines"></div>
          <div className="formContainer" id="contact-form" ref={ref}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <h2 className="formHeading">{content.ContactForm.heading}</h2>
                <div className="grid gap-3">
                  <div className="inputFields">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <div className="shad-form-item ">
                            <FormLabel className="name shad-form-label text-light-100 body-2 ">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                className="nameInputField shad-input body-2 placeholder"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="shad-form-message text-red body-2" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="inputFields">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <div className="shad-form-item">
                            <FormLabel className="email shad-form-label text-light-100 body-2">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your email"
                                className="emailInputField shad-input body-2 placeholder"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="shad-form-message text-red body-2" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="inputFields">
                    <label className="questions">
                      {content.ContactForm.question}
                    </label>
                    <DynamicOptions
                      options={budgetOptions}
                      onOptionChange={handleOptionChange}
                      className="option-text"
                    />
                  </div>
                  <div className="inputFields">
                    <FormField
                      control={form.control}
                      name="text"
                      render={({ field }) => (
                        <FormItem>
                          <div className="shad-form-item">
                            <FormLabel className="shad-form-label text-light-100 body-2">
                              {content.ContactForm.helpTab}
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Type your message here"
                                className="textArea shad-input body-2 placeholder"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="shad-form-message text-red body-2" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="min-h-10 pt-3"></div>
                <div className="mt-12 flex justify-center">
                  <Button
                    type="submit"
                    className="submitButton"
                    disabled={isLoading}
                  >
                    {"Submit"}
                    <Icon Icon={Submit} width={20} height={20} />
                    {type === "contact-form"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </>
    );
  }
);
ContactForm.displayName = "ContactForm";


  
export default ContactForm;
