import { Form, FormBtn, FormInput } from "./index.styled";
import { toast } from "react-toastify";
export default function HeroForm() {
  const submitForm = (e) => {
    e.preventDefault();

    const value = e.target.elements.mail.value;
    if (value === "") {
      toast.error("Value cannot be empty");
      return;
    }
    toast(`We send next steps to ${e.target.elements.mail.value}`);
    e.target.reset();
  };
  return (
    <Form onSubmit={submitForm}>
      <FormInput type="email" name="mail" placeholder="Email address" />
      <FormBtn type="submit">Get started</FormBtn>
    </Form>
  );
}
