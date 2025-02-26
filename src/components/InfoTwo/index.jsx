import React from "react";
import Video from "../../videos/video.mp4";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SocialIcons,
  SocialIconLink,
  InfoBg,
  VideoBg,
} from "./InfoElements";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline1,
  headline2,
  headline3,
  darkText,
  description
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </InfoBg>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline1}</Heading>
                <Heading lightText={lightText}>{headline2}</Heading>
                <Heading lightText={lightText}>{headline3}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <SocialIcons>
                  {/* <SocialIconLink href='https://www.facebook.com/Vishnu.Gops10' target='_blank' arial-label='Facebook'>
                    <FaFacebook />
                  </SocialIconLink> */}
                  <SocialIconLink
                    href="https://www.instagram.com/vish_you_were_there/"
                    target="_blank"
                    arial-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.youtube.com/channel/UCqRp3VPHZ_sW4Rxkd2Rx51A"
                    target="_blank"
                    arial-label="Youtube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://twitter.com/vishnu_gops"
                    target="_blank"
                    arial-label="Twitter"
                  >
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com/in/vishnugops/"
                    target="_blank"
                    arial-label="Linkedin"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </TextWrapper>
            </Column1>
            {/* <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2> */}
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
