import React, {useState, useEffect} from 'react';
import Video from '../../assets/video/home.mov';
import { Button } from '../ButtonElement';
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroElements';



const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <>
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mov' />
            </HeroBg>
            <HeroContent>
                <HeroH1> MONTANA STUDIO </HeroH1>
                <HeroP>
                    Slogan aquí
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='mision'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                            Empecemos {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection