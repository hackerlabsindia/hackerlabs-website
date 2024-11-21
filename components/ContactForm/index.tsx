import React from "react";
import content from "@hackerlabs/content/content.json";
import Button from "../Button";
import Icon from "../Icon";
import { Submit } from "@hackerlabs/icons";
import Input from "../InputFields";

const ContactForm = () => {
  return (
    <div className="contactContainer" id="contact-form">
      <div className="left-1/4 lines"></div>
      <div className="left-1/2 lines"></div>
      <div className="left-3/4 lines"></div>
      <div className="formContainer">
        <h2 className="formHeading">{content.ContactForm.heading}</h2>
        <div className="grid gap-3">
          <div className="inputFields">
            <label className="name">{content.ContactForm.name}</label>
            <Input
              type="name"
              inputClass="nameInputField"
              id="name"
              placeHolder="Your Name"
            />
          </div>
          <div className="inputFields">
            <label className="email">{content.ContactForm.email}</label>
            <Input
              type="email"
              inputClass="emailInputField"
              id="email"
              placeHolder="Email"
            />
          </div>
          <div className="inputFields">
            <div
              role="radiogroup"
              aria-required="false"
              dir="ltr"
              className="grid gap-3 no-outline"
              tabIndex={0}
            >
              <label className="questions">
                {content.ContactForm.question}
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="not-sure"
                  className="options"
                  id="not-sure"
                  tabIndex={-1}
                  data-radix-collection-item
                >
                  <span
                    className="flex items-center justify-center"
                    data-state="checked"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </span>
                </button>
                <label className="option-text">
                  {content.ContactForm.option1}
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="1000-5000"
                  className="options"
                  id="1000-5000"
                  tabIndex={-1}
                  data-radix-collection-item
                ></button>
                <label className="option-text">
                  {content.ContactForm.option2}
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="5000-10000"
                  className="options"
                  id="5000-10000"
                  tabIndex={-1}
                  data-radix-collection-item
                ></button>
                <label className="option-text">
                  {content.ContactForm.option3}
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="more-than-10000"
                  className="options"
                  id="more-than-10000"
                  tabIndex={-1}
                  data-radix-collection-item
                ></button>
                <label className="option-text">
                  {content.ContactForm.option4}
                </label>
              </div>
            </div>
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
            {content.ContactForm.button}
            <Icon Icon={Submit} width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
