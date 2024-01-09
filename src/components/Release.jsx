import styled from "styled-components";

const StyledP = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 100;
`;

const Release = (props) => {
  return <StyledP className="dark:text-white">Release: {props.date}</StyledP>;
};

export default Release;
