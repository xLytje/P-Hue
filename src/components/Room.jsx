import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled(Link)`
  filter: drop-shadow(0px 3px 11px rgba(10, 77, 162, 0.06));
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`;
const Title = styled.h4`
  color: #393939;
  font-size: 19px;
  font-weight: 700;
`;
const Bread = styled.p`
  color: #ffa939;
  font-size: 13px;
  font-weight: 700;
`;
const Image = styled.img`
  max-width: 50px;
`;

const Room = (props) => {
  return (
    <Box to={props.link}>
      <Image src={props.image} alt={props.title} />
      <div>
        <Title>{props.title}</Title>
        <Bread>{props.bread}</Bread>
      </div>
    </Box>
  );
};

export default Room;
