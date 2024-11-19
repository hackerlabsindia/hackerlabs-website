import React from "react";
import content from "@hackerlabs/content/content.json";

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
            <input
              type="name"
              className="nameInputField"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="inputFields">
            <label className="email">{content.ContactForm.email}</label>
            <input
              type="email"
              className="emailInputField"
              id="email"
              placeholder="Email"
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
            <textarea
              className="textArea"
              placeholder="Type your message here."
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="min-h-10 pt-3"></div>
        <div className=""></div>
        <div className="mt-12 flex justify-center">
          <button className="submitButton" tabIndex={0}>
            {content.ContactForm.button}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
