export interface ContactFormValues {
  email: string;
  subject: string;
  message: string;
}

const ContactTemplate: React.FC<Readonly<ContactFormValues>> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>New contact request from neckerastudio.com</h1>
    <p>
      <strong>From:</strong> {email}
      <br />
      <strong>Subject:</strong> {subject}
    </p>
    <p>
      <strong>Message:</strong>
      <br />
      {message}
    </p>
  </div>
);

export default ContactTemplate;
