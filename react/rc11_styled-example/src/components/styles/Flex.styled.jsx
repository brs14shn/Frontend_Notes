//escd
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export default Flex;
