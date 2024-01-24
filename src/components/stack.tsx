import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stack_1 from '../images/background/stack_1.jpg';
import Stack_2 from '../images/background/stack_2.jpg';
import Stack_3 from '../images/background/stack_3.jpg';

export default function Stack() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(".stackTitleChar", { y: 135 }, {
            scrollTrigger: {
                trigger: ".stackTitleChar",
                start: `top 80%`,
                end: `+=120%`,
                scrub: true,
                markers: true,
            },
            ease: 'linear',
            stagger: 0.1,
            duration: 1,
            letterSpacing: '-.8vw'
        })
    })

    return (
        <>
            <Container className='stackContainer'>
                <Top>
                    <Title className='stackTitleChar'>FIRO<br/>VISUAL DEVELOPER</Title>
                    <Image1 />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Image2 />
                        <Image3 />
                    </div>
                </Top>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: calc(100% - 80px);
    display: flex;

    padding: 300px 40px;
`

const Top = styled.div`
    width: 100%;
`

const Title = styled.span`
    font-size: 4vw;
    font-weight: 400;
    letter-spacing: 3vw;
    line-height: 4vw;

    position: relative;

    color: var(--color-primary);
`

const Image1 = styled.div`
    width: 100%;
    height: 350px;

    background-image: url(${Stack_1});
    background-size: cover;
    background-position: center;

    margin-top: 20px;
`

const Image2 = styled.div`
    width: calc(30% - 7.5px);
    height: 250px;

    background-image: url(${Stack_2});
    background-size: cover;
    background-position: center;

    margin-top: 15px;
`

const Image3 = styled.div`
    width: calc(70% - 7.5px);
    height: 250px;

    background-image: url(${Stack_3 });
    background-size: cover;
    background-position: center;

    margin-top: 15px;
`