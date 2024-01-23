import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Stack() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const sections = gsap.utils.toArray(".stackSection");
        const sectionElementWidth = document.getElementById("stackSection")?.offsetWidth;
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".stackContainer",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + sectionElementWidth,
            }
        });
    })

    return (
        <>
            <Container className='stackContainer'>
                <Section id="stackSection" className='stackSection' style={{ backgroundColor: '#f1f1f1' }}>
                </Section>
                <Section id="stackSection" className='stackSection' style={{ backgroundColor: '#fff' }}>

                </Section>
                <Section id="stackSection" className='stackSection' style={{ backgroundColor: '#ffffff' }}>

                </Section>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 300%;
    display: flex;
`

const Section = styled.section`
    width: 100vw;
    height: 100vh;
`