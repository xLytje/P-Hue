import { styled } from "styled-components";
import Footer from "../components/Footer";
import LightOnOff from "../components/LightOnOff";
import LightSlider from "../components/LightSlider";

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  right: 2rem;
`;
const Head = styled.div`
  padding: 2rem;
  margin: 30px 0 20px 0;
  display: flex;
  flex-direction: column;
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
const Lys = styled.p`
  color: #ffd239;
  font-size: 19px;
  font-weight: 700;
`;

const BedView = () => {
  return (
    <>
      <Head>
        <h1>
          Bed<br></br>Room
        </h1>
        <StyledImg src="../src/assets/lamp.png" alt="Lampe" />
        <Lys>4 Lights</Lys>
      </Head>
      <Menu>
        {/* <figure className="w-5 h-5 bg-black" />
        <p class="font-extrabold text-slate-500 text-3xl">test test test</p> */}
        <LightOnOff />
        <h3>Intensity</h3>
        <div className="flex justify-between w-full items-center">
          <p className="text-2xl">🔅</p>
          <LightSlider />
          <p className="text-2xl">🔆</p>
        </div>
      </Menu>
      <Footer />
    </>
  );
};

export default BedView;

// const hueApi = await axios.get(
//   "http://192.168.8.100/api/dhe6ind3MTGqt6TKDOJh6bkbTQRcuhF1NwbrPgY4/lights/32"
// );

// console.log(hueApi.data.state.on);

// const options = {
//   method: "PUT",
//   url: "http://192.168.8.100/api/dhe6ind3MTGqt6TKDOJh6bkbTQRcuhF1NwbrPgY4/lights/32/state",
//   headers: { "Content-Type": "application/json" },
//   data: { on: true },
// };
