import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KoreaImg from '../images/korea.png';
import PatternImg from '../images/pattenImage.jpg';
import { IoMdArrowUp } from "react-icons/io";

export default function Description() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const splitTypes = document.querySelectorAll('.descriptionTitle');

        splitTypes.forEach((el) => {
            const text = new SplitType(el as HTMLElement, { types: 'chars,words' });

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    end: '+=70%',
                    scrub: true,
                    markers: false,
                },
                duration: 0.1,
                opacity: 0.2,
                stagger: 0.1,
            })
        });


        gsap.to(".descriptionImage1", {
            scrollTrigger: {
                trigger: ".descriptionImage1",
                start: `top 60%`,
                end: `+=400`,
                scrub: true,
                markers: false,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 0.5,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
        })

        gsap.to(".descriptionImage2", {
            scrollTrigger: {
                trigger: ".descriptionImage1",
                start: `top 60%`,
                end: `+=300`,
                scrub: true,
                markers: false,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 0.5,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
        })
    });

    return (
        <>
            <Container>
                <TitleContainer>
                    <Divider />
                    <span>WHO I AM</span>
                </TitleContainer>
                <RightContainer>
                    <Text className='sliderChar'>
                        <span className='descriptionTitle'><b>I'm passionate about using development to create positive impacts</b></span><br />
                        <span className='descriptionTitle'>I specialize in crafting user-centered, engaging digital experiences.</span><br />
                        <span className='descriptionTitle'>As a developer, I translate these principles into efficient,</span><br />
                        <span className='descriptionTitle'>user-friendly solutions that resonate with users on a meaningful level.</span><br />
                    </Text>
                    <ImageContainer>
                        <img className='descriptionImage1' src={PatternImg} />
                        <KoreaImageContainer>
                            <img className='descriptionImage2' style={{ width: '100%' }} src={KoreaImg} />
                            <GoogleMapRedirectContainer className='googleMapRedirect' id='googleMapRedirect' href='https://www.google.com/maps/place/%ED%95%9C%EA%B5%AD/' target='_blank'>
                                <span>WHERE IS THE <b>SOUTH KOREA</b></span>
                                <IoMdArrowUp />
                            </GoogleMapRedirectContainer>
                        </KoreaImageContainer>
                    </ImageContainer>
                </RightContainer>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: calc(100% - 80px);
    min-height: 80vh;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin: 50px 40px 100px 40px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;

    font-size: 18px;
    font-weight: 600;

    margin-bottom: 20px;
    
    color: #000000;
`

const Divider = styled.div`
    width: 2.3px;
    height: 14px;

    background-color: var(--color-blue);

    margin: 0px 0.625rem 0px 0px;

    transform: rotate(-20deg);
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.span`
    font-size: 2.3vw;
    letter-spacing: -.5px;

    color: #a2a2a2;

    b {
        color: var(--color-primary);
        font-weight: 500;
    }
`

const ImageContainer = styled.div`
    width: 70.1vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 100px;

    img {
        width: calc(50% - 10px);
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
    }

    .descriptionImage1 {
        height: 45vw;
    }
`

const KoreaImageContainer = styled.div`
    width: calc(50% - 10px);
`

const GoogleMapRedirectContainer = styled.a`
    display: flex;
    align-items: center;

    width: fit-content;

    margin-top: 15px;
    padding-bottom: 3px;

    font-size: 1.3vw;
    font-weight: 500;
    letter-spacing: -.1px;
    text-decoration: none;

    border-bottom: 2px solid var(--color-blue);

    color: #808080;

    cursor: pointer;

    b {
        color: var(--color-primary);
        font-weight: 600;
    }

    svg {
        height: 24px;
        width: 24px;

        color: var(--color-blue);

        transform: rotate(45deg);
    }
`