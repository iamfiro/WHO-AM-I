import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Description() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger) 
        const splitTypes = document.querySelectorAll('.descriptionTitle');

        splitTypes.forEach((el) => {
            const text = new SplitType(el as HTMLElement, { types: 'chars,words'});

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
        })
    })
    return (
        <>
            <Container>
                <TitleContainer>
                    <Divider/>
                    <span>WHO I AM</span>
                </TitleContainer>
                <Text className='sliderChar'>
                    <span className='descriptionTitle'><b>I'm passionate about using development to create positive impacts</b></span><br/>
                    <span className='descriptionTitle'>I specialize in crafting user-centered, engaging digital experiences.</span><br/>
                    <span className='descriptionTitle'>As a developer, I translate these principles into efficient,</span><br/>
                    <span className='descriptionTitle'>user-friendly solutions that resonate with users on a meaningful level.</span><br/>
                </Text>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: calc(100% - 80px);
    height: 80vh;
    max-height: 1080px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-items: center;

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

const Text = styled.span`
    font-size: 2.3vw;
    letter-spacing: -.5px;

    color: #a2a2a2;

    b {
        color: var(--color-primary);
        font-weight: 500;
    }
`