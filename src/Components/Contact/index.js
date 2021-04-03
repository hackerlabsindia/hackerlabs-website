import { ContactWraper } from "./StyledComponents";

const Contact = (props) => {
  return (
    <ContactWraper id="contact">
      <h1 className="section_title"> Contact</h1>
      <p>
        Get in touch with us at{" "}
        <a href="mailto:shackerlabs.india@gmail.com?subject=Mail from Our Site">
          hackerlabs.india@gmail.com{" "}
        </a>
      </p>
    </ContactWraper>
  );
};

export default Contact;
