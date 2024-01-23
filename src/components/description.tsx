import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KoreaImg from '../images/korea.png';
import PatternImg from '../images/pattenImage.jpg';

export default function Description() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const splitTypes = document.querySelectorAll('.descriptionTitle');

        const ImgElement = document.getElementById('descriptionImage1');

        splitTypes.forEach((el) => {
            const text = new SplitType(el as HTMLElement, { types: 'chars,words' });

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 65%',
                    scrub: true,
                    markers: false,
                },
                duration: 0.1,
                opacity: 0.2,
                stagger: 0.1,
            })
        });

        const imgOffetTop = ImgElement?.offsetTop ?? 0;
        const imgOffetHeight = ImgElement?.offsetHeight ?? 0;
        console.log(imgOffetTop, imgOffetHeight)

        gsap.to(".descriptionImage1", {
            scrollTrigger: {
                trigger: ".descriptionImage1",
                start: `top 60%`,
                end: `+=400`,
                scrub: true,
                markers: false,
            },
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
            stagger: 0.1,
            duration: 0.5,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
        })
    })
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
                        <img className='descriptionImage2' src={KoreaImg} />
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

    margin: 50px 40px;
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

    background-color: #3B78EB;

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

    img:nth-child(1) {
        height: 45vw;
    }
`