"use client";
import React, { useCallback, useState } from "react";
import content from "@hackerlabs/content/content.json";
import Button from "../Button";
import Icon from "../Icon";
import { InputOptionIcon, Submit } from "@hackerlabs/icons";
import Input from "../InputFields";

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
  className,
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

const ContactForm: React.FC = () => {
  const budgetOptions: Option[] = [
    { label: content.ContactForm.option1, value: "not-sure" },
    { label: content.ContactForm.option2, value: "1000-5000" },
    { label: content.ContactForm.option3, value: "5000-10000" },
    { label: content.ContactForm.option4, value: "more-than-10000" },
  ];

  const handleOptionChange = (selectedValue: string) => {
    console.log("Selected option:", selectedValue);
  };

  return (
    <div className="contactContainer" id="contact-form">
      <div className="left-1/4 lines"></div>
      <div className="left-1/2 lines"></div>
      <div className="left-3/4 lines"></div>
      <div className="formContainer">
        <h2 className="formHeading">{content.ContactForm.heading}</h2>
        <div className="grid gap-3">
          <div className="inputFields">
            <label className="name">Name</label>
            <Input
              type="name"
              inputClass="nameInputField"
              id="name"
              placeHolder="Your Name"
            />
          </div>
          <div className="inputFields">
            <label className="email">Email</label>
            <Input
              type="email"
              inputClass="emailInputField"
              id="email"
              placeHolder="Email"
            />
          </div>
          <div className="inputFields">
            <label className="questions">{content.ContactForm.question}</label>
            <DynamicOptions
              options={budgetOptions}
              onOptionChange={handleOptionChange}
              className="option-text"
            />
          </div>
          <div className="inputFields">
            <label className="questions">{content.ContactForm.helpTab}</label>
            <Input
              inputClass="textArea"
              placeHolder="Type your message here."
              id="message"
            />
          </div>
        </div>
        <div className="min-h-10 pt-3"></div>
        <div className="mt-12 flex justify-center">
          <Button containerClass={"submitButton"} tabIndex={0}>
            {"Submit"}
            <Icon Icon={Submit} width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



