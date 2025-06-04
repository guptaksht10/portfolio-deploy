import React from 'react'
import styled, { useTheme } from 'styled-components'
import {Bio} from '../../data/constants';
import { TypeAnimation } from 'react-type-animation';
import HeroImg from "../../images/guptaksh10.jpg";
import HeroBgAnimation from "../../HeroBgAnimation";
import Tilt from 'react-parallax-tilt';
import {motion} from "framer-motion";
import {headContainerAnimation, headContentAnimation, headTextAnimation} from "../../utils/motion";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    postion: relative;
    padding: 80px 30px;
    z-index: 1;

    @media(max-width: 960px){
        padding: 66px 16px;
    }
    
    @media(max-width: 640px{
        padding: 32px 16px;
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`
const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    
    @media(max-width: 960px) {
    flex-direction: column;
    }
`
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media(max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @media(max-width: 960px) {
        order: 1;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }

    
    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({theme})=> theme.text_primary};
    line-height: 68px;

    @media(max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`

const TextLoop = styled.div`
    font-weight: 600px;
    font-size: 32px;
    display: flex;
    gap: 12px;

    color: ${({theme})=> theme.text_primary};
    line-height: 68px;

    @media(max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`
const Span = styled.div`
    cursor: pointer;
    color: ${({theme})=> theme.primary};
    font-weight: 700; 
`

const SubTitle = styled.div`
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 42px;
    
    color: ${({theme})=> theme.text_primary + 95};
    @media (max-width: 960px) {
        font-size: 15px;
        line-height: 25px;
        padding: 0 40px;
    }
`

const HorizontalRuler = styled.div`
    width: 70%;
    height: 1px;
    color: ${({theme})=> theme.text_primary + 95};
    margin: 32px 0 ;
`


const ResumeButton = styled.a`
        -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;

    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    

    cursor: pointer;
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 4px solid ${({theme}) => theme.primary}

    @media(max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 70%;
    left: 50%;

    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`

function Hero() {
    const theme = useTheme();
  return (
    <div  id="About">
        <HeroContainer>
            <HeroBg>
                <HeroBgAnimation/>
            </HeroBg>
            <motion.div {...headContainerAnimation}>
            <HeroInnerContainer>
                <HeroLeftContainer>
                    <Title>Hi, I am <br></br> {Bio.name}</Title>
                    <motion.div {...headTextAnimation}>
                        <TextLoop>I am a
                            <Span>
                            <TypeAnimation
                                sequence={Bio.roles}
                                speed={25}
                                deletionSpeed={50}
                                repeat={Infinity}
                                />
                            </Span>
                        </TextLoop>
                    </motion.div>
                    <HorizontalRuler><hr style={{ border: `1px solid ${theme.text_primary}90` }} /></HorizontalRuler>
                    <SubTitle>{Bio.description}</SubTitle>
                    <ResumeButton href={Bio.resume} target='_blank'>View Resume</ResumeButton>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <motion.div {...headContentAnimation}>
                    <Tilt>
                        <Img src={HeroImg} alt="Akshat Gupta"></Img>
                    </Tilt>
                    </motion.div>
                </HeroRightContainer>
            </HeroInnerContainer>
            </motion.div>
        </HeroContainer>
    </div>
  )
}

export default Hero