// "use client";
// import React, { useCallback, useState } from "react";
// import content from "@hackerlabs/content/content.json";
// import Button from "../Button";
// import Icon from "../Icon";
// import { InputOptionIcon, Submit } from "@hackerlabs/icons";
// import Input from "../InputFields";

// interface Option {
//   label: string;
//   value: string;
// }

// interface DynamicOptionsProps {
//   options: Option[];
//   onOptionChange: (selectedValue: string) => void;
//   className?: string;
// }

// const DynamicOptions: React.FC<DynamicOptionsProps> = ({
//   options,
//   onOptionChange,
//   className,
// }) => {
//   const [selectedOption, setSelectedOption] = useState<string>(
//     options[0]?.value || ""
//   );

//   const handleClick = useCallback(
//     (value: string) => {
//       setSelectedOption(value);
//       onOptionChange(value);
//     },
//     [onOptionChange]
//   );

//   return (
//     <div
//       role="radiogroup"
//       aria-required="false"
//       dir="ltr"
//       className="grid gap-3 no-outline"
//     >
//       {options.map((option: Option) => (
//         <label
//           key={option.value}
//           className="flex items-center space-x-2"
//           onClick={() => handleClick(option.value)}
//         >
//           <button
//             type="button"
//             role="radio"
//             aria-checked={selectedOption === option.value}
//             className={`options ${
//               selectedOption === option.value ? "checked" : ""
//             }`}
//           >
//             <span className="flex items-center justify-center">
//               {selectedOption === option.value ? (
//                 <InputOptionIcon
//                   viewBox="0 0 24 24"
//                   className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
//                 />
//               ) : (
//                 <span className="circle-placeholder"></span>
//               )}
//             </span>
//           </button>
//           <span className="option-text">{option.label}</span>
//         </label>
//       ))}
//     </div>
//   );
// };

// const ContactForm: React.FC = () => {
//   const budgetOptions: Option[] = [
//     { label: content.ContactForm.option1, value: "not-sure" },
//     { label: content.ContactForm.option2, value: "1000-5000" },
//     { label: content.ContactForm.option3, value: "5000-10000" },
//     { label: content.ContactForm.option4, value: "more-than-10000" },
//   ];

//   const handleOptionChange = (selectedValue: string) => {
//     console.log("Selected option:", selectedValue);
//   };

//   return (
//     <div className="contactContainer" id="contact-form">
//       <div className="left-1/4 lines"></div>
//       <div className="left-1/2 lines"></div>
//       <div className="left-3/4 lines"></div>
//       <div className="formContainer">
//         <h2 className="formHeading">{content.ContactForm.heading}</h2>
//         <div className="grid gap-3">
//           <div className="inputFields">
//             <label className="name">Name</label>
//             <Input
//               type="name"
//               inputClass="nameInputField"
//               id="name"
//               placeHolder="Your Name"
//             />
//           </div>
//           <div className="inputFields">
//             <label className="email">Email</label>
//             <Input
//               type="email"
//               inputClass="emailInputField"
//               id="email"
//               placeHolder="Email"
//             />
//           </div>
//           <div className="inputFields">
//             <label className="questions">{content.ContactForm.question}</label>
//             <DynamicOptions
//               options={budgetOptions}
//               onOptionChange={handleOptionChange}
//               className="option-text"
//             />
//           </div>
//           <div className="inputFields">
//             <label className="questions">{content.ContactForm.helpTab}</label>
//             <Input
//               inputClass="textArea"
//               placeHolder="Type your message here."
//               id="message"
//             />
//           </div>
//         </div>
//         <div className="min-h-10 pt-3"></div>
//         <div className="mt-12 flex justify-center">
//           <Button containerClass={"submitButton"} tabIndex={0}>
//             {"Submit"}
//             <Icon Icon={Submit} width={20} height={20} />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// // "use client";

// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import { z } from "zod";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import Button from "../Button";
// // import Icon from "../Icon";
// // import { InputOptionIcon, Submit } from "@hackerlabs/icons";

// // // Define the validation schema using Zod
// // const contactFormSchema = z.object({
// //   name: z
// //     .string()
// //     .min(2, "Name must be at least 2 characters")
// //     .max(50, "Name can't exceed 50 characters"),
// //   email: z.string().email("Please enter a valid email address"),
// //   budget: z.string().nonempty("Please select your budget"),
// //   message: z.string().min(10, "Message must be at least 10 characters"),
// // });

// // // Infer the form types from the schema
// // type ContactFormData = z.infer<typeof contactFormSchema>;

// // // Budget options
// // const budgetOptions = [
// //   { label: "Not sure", value: "not-sure" },
// //   { label: "$1000 - $5000", value: "1000-5000" },
// //   { label: "$5000 - $10000", value: "5000-10000" },
// //   { label: "More than $10000", value: "more-than-10000" },
// // ];

// // const ContactForm: React.FC = () => {
// //   // Initialize the form with React Hook Form and Zod resolver
// //   const {
// //     register, // For binding inputs
// //     handleSubmit, // Handles form submission
// //     formState: { errors }, // Provides error state
// //     reset, // To reset form after submission
// //   } = useForm<ContactFormData>({
// //     resolver: zodResolver(contactFormSchema), // Use Zod for validation
// //     defaultValues: {
// //       name: "",
// //       email: "",
// //       budget: "",
// //       message: "",
// //     },
// //   });

// //   // Handle form submission
// //   const onSubmit = (data: ContactFormData) => {
// //     console.log("Form submitted:", data);
// //     // Integrate an API call here to send form data to the backend
// //     reset(); // Clear the form
// //   };

// //   return (
// //     <div className="contactContainer" id="contact-form">
// //       <div className="formContainer">
// //         <h2 className="formHeading">Contact Us</h2>
// //         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
// //           {/* Name Field */}
// //           <div className="inputFields">
// //             <label htmlFor="name" className="name">
// //               Name
// //             </label>
// //             <input
// //               id="name"
// //               {...register("name")}
// //               placeholder="Your Name"
// //               className={`input ${errors.name ? "error-border" : ""}`}
// //             />
// //             {errors.name && (
// //               <p className="error-message">{errors.name.message}</p>
// //             )}
// //           </div>

// //           {/* Email Field */}
// //           <div className="inputFields">
// //             <label htmlFor="email" className="email">
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               {...register("email")}
// //               placeholder="Your Email"
// //               className={`input ${errors.email ? "error-border" : ""}`}
// //             />
// //             {errors.email && (
// //               <p className="error-message">{errors.email.message}</p>
// //             )}
// //           </div>

// //           {/* Budget Options */}
// //           <div className="inputFields">
// //             <label className="questions">Budget</label>
// //             <div className="grid gap-3 no-outline">
// //               {budgetOptions.map((option) => (
// //                 <label
// //                   key={option.value}
// //                   className="flex items-center space-x-2"
// //                 >
// //                   <input
// //                     type="radio"
// //                     value={option.value}
// //                     {...register("budget")}
// //                     className="hidden"
// //                   />
// //                   <button
// //                     type="button"
// //                     role="radio"
// //                     aria-checked={false}
// //                     className={`options ${errors.budget ? "error-border" : ""}`}
// //                     onClick={() => console.log("clicked")}
// //                   >
// //                     <span>{option.label}</span>
// //                   </button>
// //                 </label>
// //               ))}
// //             </div>
// //           </div>
// //           {/* Message Field */}
// //           <div className="inputFields">
// //             <label htmlFor="message" className="questions">
// //               Message
// //             </label>
// //             <textarea
// //               id="message"
// //               {...register("message")}
// //               placeholder="Type your message here"
// //               className={`textarea ${errors.message ? "error-border" : ""}`}
// //             />
// //             {errors.message && (
// //               <p className="error-message">{errors.message.message}</p>
// //             )}
// //           </div>

// //           {/* Submit Button */}
// //           <div className="mt-12 flex justify-center">
// //             <Button containerClass={"submitButton"} tabIndex={0}>
// //               Submit
// //               <Icon Icon={Submit} width={20} height={20} />
// //             </Button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactForm;

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
