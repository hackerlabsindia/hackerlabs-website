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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleOptionChange = (selectedValue: string) => {
    console.log("Selected option:", selectedValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
      validateField(id, value); // Clear error on input
    }
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    if (field === "name" && !value.trim()) {
      error = "Name is required.";
    } else if (field === "email") {
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!emailFormat.test(value)) {
        error = "Invalid email address.";
      }
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: "",
      email: "",
    };
    validateField("name", formData.name);
    validateField("email", formData.email);

    if (!newErrors.name && !newErrors.email) {
      console.log("Form submitted successfully:", formData);
      // Proceed with form submission (e.g., API call)
    }
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
              type="text"
              inputClass="nameInputField"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeHolder="Your Name"
              required={true}
            />

            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="inputFields">
            <label className="email">Email</label>
            <Input
              type="email"
              inputClass="emailInputField"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeHolder="Email"
              required={true}
            />
            {errors.email && <span className="error">{errors.email}</span>}
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
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeHolder="Type your message here."
            />
          </div>
        </div>
        <div className="min-h-10 pt-3"></div>
        <div className="mt-12 flex justify-center">
          <Button
            containerClass="submitButton"
            tabIndex={0}
            onClick={handleSubmit}
          >
            {"Submit"}
            <Icon Icon={Submit} width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
