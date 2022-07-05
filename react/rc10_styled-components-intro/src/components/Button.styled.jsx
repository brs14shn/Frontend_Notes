import styled from "styled-components";

const Button = styled.button`
  color: hotpink;
  background: ${(props) => (props.primary ? "purple" : "white")};
  padding: 1rem 1.2rem;
  cursor: pointer;
  border: 2px solid purple;
  border-radius: 5px;
  font-family: "tahoma";
`;

export default Button;
