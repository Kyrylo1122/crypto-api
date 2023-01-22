import styled from "styled-components";

export const Form = styled.form`
  display: flex;
`;
export const FormInput = styled.input`
  border-radius: 3px;
  background: none;
  font-size: 24px;
  font-weight: 400;
`;

export const FormBtn = styled.button`
  margin-left: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-in-out 0s;
  padding: 24px;
  font-size: 24px;
  background-color: var(--accent-color);
  color: var(--light);
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
