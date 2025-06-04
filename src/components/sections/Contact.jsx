import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  margin-top: 80px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  padding: 0 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px rgba(164, 23, 230, 0.4), 0 0 15px rgba(164, 23, 230, 0.3);
    transform: scale(1.02);
  }
`;

const AlertBox = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
`;

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("");

  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => setAlertMessage(null), 3000); // Auto-hide after 3s
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value;
    const name = form.current.from_name.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    if (!email || !name || !subject || !message) {
      showAlert("⚠️ Please fill in all fields!", "danger");
      return;
    }

    if (!validateEmail(email)) {
      showAlert("❌ Invalid email format!", "warning");
      return;
    }

    emailjs
      .sendForm(
        "service_8d469pq", // Your Service ID
        "template_u5yx0vq", // Your Template ID
        form.current,
        "uRir3VgqcO8o5HhVE" // Your Public Key
      )
      .then(
        (result) => {
          showAlert("✅ Message Sent Successfully! 🚀", "success");
          form.current.reset();
        },
        (error) => {
          showAlert("❌ Failed to send message. Please try again.", "danger");
          console.error(error);
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>

        {/* Bootstrap Styled Alert */}
        {alertMessage && (
          <AlertBox className={`alert alert-${alertType} text-center`} role="alert">
            {alertMessage}
          </AlertBox>
        )}

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" rows={4} required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
