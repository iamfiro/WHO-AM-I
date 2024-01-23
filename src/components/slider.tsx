import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DividerImage from '../svg/RadialVector_003.svg';

export default function Slider() {
    useGSAP(() => {
        gsap.fromTo('.sliderChar', { x: 0 }, { x: '-100%', repeat: -1, duration: 10, ease: 'linear'})
    })
    return (
        <>
            <Container>
                <Text className='sliderChar'>
                    <span>WEB DESIGN</span>
                    <img src={DividerImage} width={30}></img>
                    <span>UX RESEARCH</span>
                    <img src={DividerImage} width={30}></img>
                    <span>FRONTEND</span>
                    <img src={DividerImage} width={30}></img>
                    <span>FRONTEND</span>
                    <img src={DividerImage} width={30}></img>
                    <span>BACKEND</span>
                    <img src={DividerImage} width={30}></img>
                </Text>
                <Text className='sliderChar'>
                    <span>WEB DESIGN</span>
                    <img src={DividerImage} width={30}></img>
                    <span>UX RESEARCH</span>
                    <img src={DividerImage} width={30}></img>
                    <span>FRONTEND</span>
                    <img src={DividerImage} width={30}></img>
                    <span>FRONTEND</span>
                    <img src={DividerImage} width={30}></img>
                    <span>BACKEND</span>
                </Text>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: fit-content;
    flex: auto;
    height: 80px;

    display: flex;
    align-items: center;
    box-sizing: border-box;
    

    background-color: #D9F250;

    img {
        margin: 0 20px;
    }
`

const Text = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    font-weight: bold;

    color: #000000;

    font-size: 4vw;
`