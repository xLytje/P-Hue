import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Room from "../components/Room";
import Footer from "../components/Footer";

const User = styled.figure`
  height: 50px;
  width: 50px;
  border-radius: 500px;
  border: 1px solid #fff;
  margin: 0;
`;
const Head = styled.div`
  padding: 2rem;
  margin: 30px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.section`
  background: #f6f8fb;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
  height: auto;
`;

const BedView = () => {
  return (
    <>
      <Head>
        <h1>
          Bed<br></br>Room
        </h1>
        <User />
      </Head>
      <Menu>
        <h3>All Rooms</h3>
        <Room
          image={"../src/assets/bed.png"}
          title={"Bed room"}
          bread={"4 Lights"}
        />
      </Menu>
      <Footer />
    </>
  );
};

export default BedView;
