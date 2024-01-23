import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowUp } from "react-icons/io";
import DummyBackground from '../images/background/lofi.webp'

export default function Stack2() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".stackTitle", {
            scrollTrigger: {
                trigger: ".stackTitle",
                start: `top 50%`,
                end: `+=50%`,
                scrub: true,
                markers: false,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 0.5,
            fontSize: '3vw',
            letterSpacing: '-2px',
            marginBottom: '20px',
        })
    })

    return (
        <>
            <Container className='stackContainer'>
                <Title className='stackTitle'>PROJEC<span>T</span></Title>
                <ContentContainer style={{ backgroundImage: `url(${DummyBackground})` }} className='contentContainer'>
                    <ContentTop>
                        <ContentIndex>01</ContentIndex>
                        <div></div>
                    </ContentTop>
                    <ContentBottom>
                        <ContentTitle>LOFI STATION</ContentTitle>
                        <IoMdArrowUp />
                    </ContentBottom>
                </ContentContainer>
                <ContentContainer style={{ backgroundImage: `url(${DummyBackground})` }} className='contentContainer'>
                    <ContentTop>
                        <ContentIndex>02</ContentIndex>
                        <div></div>
                    </ContentTop>
                    <ContentBottom>
                        <ContentTitle>LOFI STATION</ContentTitle>
                        <IoMdArrowUp />
                    </ContentBottom>
                </ContentContainer>
                <ContentContainer style={{ backgroundImage: `url(${DummyBackground})` }} className='contentContainer'>
                    <ContentTop>
                        <ContentIndex>02</ContentIndex>
                        <div></div>
                    </ContentTop>
                    <ContentBottom>
                        <ContentTitle>LOFI STATION</ContentTitle>
                        <IoMdArrowUp />
                    </ContentBottom>
                </ContentContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    color: var(--color-primary);

    font-size: 15vw;
    font-weight: bold;
    letter-spacing: -1vw;

    margin-left: 40px;

    span {
        color: var(--color-blue)
    }
`

const ContentContainer = styled.div`
    width: calc(100% - 80px);
    height: calc(60vh - 40px);

    padding: 20px 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    cursor: pointer;
`

const ContentTop = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

const ContentIndex = styled.span`
    font-size: 2vw;
    font-weight: 500;

    color: #fff;
`

const ContentBottom = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    svg {
        width: 6vw;
        height: 6vw;
        transform: rotate(135deg);

        color: #fff;
    }
`

const ContentTitle = styled.span`
    font-size: 5vw;

    color: #fff; 
`