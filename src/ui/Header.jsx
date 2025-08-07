import styled, { css } from "styled-components";
import { devicesMax } from "../styles/BreakPoint";
import NavBar from "../features/Navbar/NavBar";
import Button from "../ui/Button";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import festivalBg from "../../public/image18.jpg";

// eslint-disable-next-line react/prop-types
function Header({ type }) {
  return (
    <StyledHeader type={type}>
      <NavBar type={type} />

      {type === "home" && (
        <>
          <MusicNotes>♪</MusicNotes>
          <MusicNotes>♫</MusicNotes>
          <MusicNotes>♬</MusicNotes>
          <VinylRecord />

          <ContentContainer>
            <TextBox>
              <Heading>
                GHANA-SPAIN INTERNATIONAL MUSIC & CULTURAL FESTIVAL
                <span>2025</span>
              </Heading>

              <ThemeHeading>
                Fostering creativity through music and culture to promote
                national development and peace
              </ThemeHeading>

              <EventDetails>
                <DetailCard>
                  <DetailIcon>
                    <FaCalendarAlt />
                  </DetailIcon>
                  <DetailContent>
                    <h3>Date</h3>
                    <p>29th - 31st August 2025</p>
                  </DetailContent>
                </DetailCard>

                <DetailCard>
                  <DetailIcon>
                    <FaClock />
                  </DetailIcon>
                  <DetailContent>
                    <h3>Time</h3>
                    <p>10AM - 12AM Daily</p>
                  </DetailContent>
                </DetailCard>

                <DetailCard>
                  <DetailIcon>
                    <FaMapMarkerAlt />
                  </DetailIcon>
                  <DetailContent>
                    <h3>Venue</h3>
                    <p>Plaza del los Fueros, 01001 Vitoria-Gasteiz, Spain</p>
                  </DetailContent>
                </DetailCard>
              </EventDetails>
            </TextBox>

            <BtnContainer>
              <Button to={"gallery"} size="large" variation="primary">
                View Artists
              </Button>
              <Button to={"events"} size="large" variation="secondary">
                Event Schedule
              </Button>
              <Button to={"tickets"} size="large" variation="tertiary">
                Get Tickets
              </Button>
            </BtnContainer>
          </ContentContainer>

          <EqualizerBars>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </EqualizerBars>
        </>
      )}
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  position: relative;
  margin-bottom: 6rem;
  overflow: hidden;

  ${(props) =>
    props.type === "home" &&
    css`
      /* height: 100vh; */
      /* min-height: 700px; */
      background: linear-gradient(
          135deg,
          rgba(15, 5, 45, 0.95) 0%,
          rgba(60, 10, 100, 0.9) 100%
        ),
        url(${festivalBg}) center/cover no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* padding: 0 2rem; */

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: linear-gradient(to top, rgba(15, 5, 45, 0.9), transparent);
        z-index: 1;
      }

      @media ${devicesMax.md} {
        height: 90vh;
        min-height: 600px;
      }
    `}
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  padding-top: 8rem;

  @media ${devicesMax.md} {
    padding-top: 6rem;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  text-align: center;
  padding: 0 2rem;

  @media ${devicesMax.md} {
    width: 90%;
  }
`;

const Heading = styled.h1`
  font-size: 5.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
  letter-spacing: -1px;
  background: linear-gradient(to right, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  padding-bottom: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(to right, #ff00cc, #3333ff);
    border-radius: 2px;
  }

  span {
    display: block;
    font-size: 3.5rem;
    letter-spacing: 3px;
    background: none;
    -webkit-background-clip: initial;
    background-clip: initial;
    color: #e0d6ff;
    text-transform: none;
    margin-top: 1.5rem;
    font-weight: 400;
  }

  @media ${devicesMax.lg} {
    font-size: 4.5rem;

    span {
      font-size: 3rem;
    }
  }
  @media ${devicesMax.md} {
    font-size: 3.8rem;

    span {
      font-size: 2.4rem;
    }
  }
  @media ${devicesMax.sm} {
    font-size: 3rem;

    span {
      font-size: 1.8rem;
    }
  }
`;

const ThemeHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #e0d6ff;
  max-width: 900px;
  margin: 2rem auto 3rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-left: 4px solid #ff00cc;
  border-right: 4px solid #3333ff;
  border-radius: 5px;

  &::before,
  &::after {
    content: "❝";
    position: absolute;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.2);
  }

  &::before {
    top: -15px;
    left: 15px;
  }

  &::after {
    bottom: -25px;
    right: 15px;
    transform: rotate(180deg);
  }

  @media ${devicesMax.lg} {
    font-size: 2.4rem;
  }

  @media ${devicesMax.md} {
    font-size: 2rem;
    padding: 1rem;
  }

  @media ${devicesMax.sm} {
    font-size: 1.8rem;
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0 4rem;
  max-width: 900px;
  width: 100%;

  @media ${devicesMax.sm} {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const DetailCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  min-width: 280px;

  @media ${devicesMax.md} {
    min-width: 240px;
    padding: 1.2rem 2rem;
  }
`;

const DetailIcon = styled.div`
  font-size: 2.8rem;
  color: #ff00cc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailContent = styled.div`
  text-align: left;

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-300);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    margin: 0;
    line-height: 1.3;
  }

  @media ${devicesMax.md} {
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media ${devicesMax.sm} {
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
  }
`;

const VinylRecord = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #333 0%, #000 100%),
    repeating-radial-gradient(
      circle at center,
      transparent 0%,
      transparent 4%,
      #444 4%,
      #444 5%
    );
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: spin 20s linear infinite;
  border: 8px solid #222;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #ff00cc, #3333ff);
    border-radius: 50%;
    border: 4px solid #000;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    z-index: 3;
  }

  @keyframes spin {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) rotate(360deg);
    }
  }

  @media ${devicesMax.lg} {
    width: 300px;
    height: 300px;
    right: 5%;
  }

  @media ${devicesMax.md} {
    display: none;
  }
`;

const MusicNotes = styled.div`
  position: absolute;
  font-size: 10rem;
  color: rgba(255, 255, 255, 0.08);
  z-index: 1;
  user-select: none;

  &:nth-child(1) {
    top: 15%;
    left: 10%;
    animation: float 8s infinite ease-in-out;
  }

  &:nth-child(2) {
    top: 70%;
    right: 15%;
    animation: float 10s infinite ease-in-out reverse;
  }

  &:nth-child(3) {
    top: 40%;
    left: 20%;
    animation: float 12s infinite ease-in-out;
    font-size: 7rem;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(10deg);
    }
  }

  @media ${devicesMax.lg} {
    font-size: 8rem;

    &:nth-child(3) {
      font-size: 5rem;
    }
  }

  @media ${devicesMax.md} {
    display: none;
  }
`;

const EqualizerBars = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 40px;
  z-index: 2;

  div {
    width: 6px;
    background: linear-gradient(to top, #ff00cc, #3333ff);
    border-radius: 3px 3px 0 0;
    animation: equalize 1.2s infinite ease-in-out;

    &:nth-child(1) {
      height: 30%;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      height: 70%;
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      height: 40%;
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      height: 90%;
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      height: 50%;
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      height: 80%;
      animation-delay: 0.5s;
    }
    &:nth-child(7) {
      height: 60%;
      animation-delay: 0.6s;
    }
    &:nth-child(8) {
      height: 30%;
      animation-delay: 0.7s;
    }
  }

  @keyframes equalize {
    0%,
    100% {
      height: 30%;
    }
    10% {
      height: 70%;
    }
    20% {
      height: 40%;
    }
    30% {
      height: 90%;
    }
    40% {
      height: 50%;
    }
    50% {
      height: 80%;
    }
    60% {
      height: 60%;
    }
    70% {
      height: 30%;
    }
  }

  @media ${devicesMax.sm} {
    bottom: 20px;
    height: 30px;

    div {
      width: 4px;
    }
  }
`;
