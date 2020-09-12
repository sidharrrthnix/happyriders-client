import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import styled from "../../typed-components";
const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;

const Link = styled.span`
  /* background:black */
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 30px;
`;
const Icon = styled.span`
  margin-right: 10px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

interface IProps {
  loginCallback: (response) => void;
}

const SocialLoginPresenter: React.SFC<IProps> = ({ loginCallback }) => (
  <Container>
    <Helmet>
      <title>Social Login | HappyRiders</title>
    </Helmet>
    <BackArrowExtended backTo={"/"} />
    <FacebookLogin
      appId="3088435454618145"
      autoLoad={false}
      fields="name,first_name,last_name,email,picture"
      callback={loginCallback}
      render={(renderProps) => (
        <Link onClick={renderProps.onClick}>
          <Icon>
            <Image src={facebook} />
          </Icon>
          Facebook
        </Link>
      )}
    />
    <Link>
      <Icon>
        <Image src={google} />
      </Icon>
      Google
    </Link>
  </Container>
);

export default SocialLoginPresenter;
