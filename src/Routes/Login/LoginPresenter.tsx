import React from "react";
import Helmet from "react-helmet";
import { Link, RouteComponentProps } from "react-router-dom";
import logo from "../../images/logo.png";
import bgImage from "../../images/taxi.jpg";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  background: url(${bgImage}) center center no-repeat;
  height: 70%;
  width: 100%;
  padding: 0;
  margin: 0;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  vertical-align: top;
  top: 25px;
  left: 30px;
  position: absolute;
`;
const Image = styled.img`
  display: flex;
  align-items: left;
  height: 70px;
  width: 70px;
  justify-content: center;
  margin-right: 100px;
`;
const Title = styled.h1`
  display: flex;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
  color: white;

  text-shadow: rgb(0, 0, 0) 0px 0px 15px;
`;

const Footer = styled.div``;

const Subtitle = styled.h2`
  font-size: 30px;
`;

const FakeInput = styled.div`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const Grey = styled.span`
  color: ${(props) => props.theme.greyColor};
  margin-left: 10px;
`;

const SocialLogin = styled.div`
  border-top: 1px solid ${(props) => props.theme.greyColor};
  padding: 30px 20px;
`;

const SocialLink = styled.span`
  color: ${(props) => props.theme.blueColor};
  font-size: 20px;
  cursor: pointer;
`;

interface IProps extends RouteComponentProps<any> {}

const OutHomePresenter: React.SFC<IProps> = () => (
  <Container>
    <Helmet>
      <title>Login | HappyRiders</title>
    </Helmet>
    <Header>
      <Logo>
        <Image src={logo} />
        <Title>Happy Riders</Title>
      </Logo>
    </Header>
    <Footer>
      <Link to={"/phone-login"}>
        <PhoneLogin>
          <Subtitle>Get moving with Happy Riders</Subtitle>
          <FakeInput>
            ɢʙ +44 <Grey>Enter your mobile number</Grey>
          </FakeInput>
        </PhoneLogin>
      </Link>
      <Link to={"/social-login"}>
        <SocialLogin>
          <SocialLink>Or connect with social</SocialLink>
        </SocialLogin>
      </Link>
    </Footer>
  </Container>
);

export default OutHomePresenter;
