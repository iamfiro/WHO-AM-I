import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowUp } from "react-icons/io";
import DummyBackground from '../images/background/lofi.webp'

interface Props {
    index: number;
    name: string;
}

function Project({ index, name }: Props) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".contentContainer1", {
            scrollTrigger: {
                trigger: ".contentContainer1",
                start: `top 60%`,
                end: `+=50%`,
                scrub: true,
                markers: false,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 1,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        })

        gsap.to(".contentContainer2", {
            scrollTrigger: {
                trigger: ".contentContainer2",
                start: `top 60%`,
                end: `+=50%`,
                scrub: true,
                markers: false,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 1,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        })

        gsap.to(".contentContainer3", {
            scrollTrigger: {
                trigger: ".contentContainer3",
                start: `top 60%`,
                end: `+=50%`,
                scrub: true,
                markers: true,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 1,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        })

        gsap.to(".contentContainer4", {
            scrollTrigger: {
                trigger: ".contentContainer4",
                start: `top 60%`,
                end: `+=50%`,
                scrub: true,
                markers: false,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 1,
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        })
    })

    return (
        <ContentContainer style={{ backgroundImage: `url(${DummyBackground})` }} className={`contentContainer` + index}>
            <ContentTop>
                <ContentTopLeft>
                    <ContentIndex>{index < 10 ? '0' + index : index}</ContentIndex>
                    <ContentDivider/>
                </ContentTopLeft>
                <ContentDescription>Easier to listen to lofi</ContentDescription>
            </ContentTop>
            <ContentBottom>
                <ContentTitle>{name}</ContentTitle>
                <IoMdArrowUp />
            </ContentBottom>
        </ContentContainer>
    )
}

export default function Stack2() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".stackTitle", {
            scrollTrigger: {
                trigger: ".stackTitle",
                start: `top 60%`,
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
                <Project index={1} name="Lofi Station" />
                <Project index={2} name="Lofi Station" />
                <Project index={3} name="Lofi Station" />
                <Project index={4} name="Lofi Station" />
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

    height: 300px;

    font-size: 15vw;
    font-weight: bold;
    letter-spacing: -1vw;

    display: flex;
    align-items: flex-end;

    margin-left: 40px;
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

    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);

    cursor: pointer;
`

const ContentTop = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ContentDescription = styled.span`
    color: #fff;

    font-size: 1.5vw;
`

const ContentTopLeft = styled.div`
    display: flex;
    align-items: center;
`

const ContentIndex = styled.span`
    font-size: 2vw;
    font-weight: 500;

    color: #fff;
`

const ContentDivider = styled.div`
    width: 100px;
    height: 3px;

    margin-left: 15px;

    background-color: #ffffff;
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
    text-transform: uppercase;

    color: #fff; 
`