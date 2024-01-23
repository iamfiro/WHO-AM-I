import styled from 'styled-components';
import FlowerImage from '../svg/flower.svg'
import CircleImage from '../svg/circle_.svg'
import BackgroundAbstract from '../background/abstract.webp'
import Circle2Image from '../svg/circle2.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TopText() {
    useGSAP(() => {
        gsap.fromTo(".char", { y: 135 }, { y: 0, clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)', duration: .35, delay: .10, stagger: .04 })
        gsap.to(".topTextImg", { rotation: 360, repeat: -1, duration: 13, ease: "linear" })
        gsap.fromTo(".topTextRightImg", {}, {clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)', duration: .7, delay: .10 })
    })
    
    return (
        <>
            <Container>
                <Text id="text">
                    <div>
                        <span className='char'>S</span>
                        <span className='char'>T</span>
                        <span className='char'>Y</span>
                        <span className='char'>L</span>
                        <span className='char'>I</span>
                        <span className='char'>S</span>
                        <span className='char'>H</span> 
                        <img className='char topTextImg' src={FlowerImage} style={{ marginLeft: '.8vw', marginBottom: '0.2vw'}} />
                    </div>
                    <div>
                        <span className='char'>H</span>
                        <span className='char'>I</span>
                        <span className='char'>G</span>
                        <span className='char'>H</span>
                        <span className='char'>&nbsp;</span>
                        <span className='char'>S</span>
                        <span className='char'>C</span>
                        <span className='char'>H</span>
                        <img className='char' src={Circle2Image} style={{ marginLeft: '0px'}} />
                        <span className='char'>O</span>
                        <span className='char'>L</span>
                    </div>
                    <div>
                        <span className='char'>F</span>
                        <span className='char'>U</span>
                        <span className='char'>L</span>
                        <span className='char'>L</span>
                        <span className='char'>S</span>
                        <span className='char'>T</span>
                        <span className='char'>A</span> 
                        <span className='char'>C</span>
                        <span className='char'>K</span> 
                    </div>
                    <div>
                        <span className='char'>D</span>
                        <span className='char'>E</span>
                        <span className='char'>V</span>
                        <span className='char'>E</span>
                        <span className='char'>L</span>
                        <img className='char' src={CircleImage} style={{ marginLeft: '0vw'}}/>
                        <span className='char'>P</span> 
                        <span className='char'>E</span>
                        <span className='char'>R</span> 
                    </div>
                </Text>
                <BackgroundImage className='topTextRightImg' src={BackgroundAbstract}></BackgroundImage>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: calc(100% - 80px);

    flex-direction: row-reverse;
    display: flex;
    justify-content: space-between;

    padding: 5vw 40px;
`

const Text = styled.span`
    font-size: 8vw;
    font-weight: 500;
    letter-spacing: -.3vw;
    line-height: 7vw;

    margin-top: 40px;

    position: absolute;
    left: 40px;
    z-index: 1000;

    color: var(--color-primary);

    div {
        height: auto;

        display: flex;
        align-items: center;
    }

    .char {
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
    }

    .hello {
        margin-left: 20px;
        width: 5vw;
        height: 5vw;
    }

    img:not(.hello) {
        width: 6.8vw;
        height: 6.8vw;
        margin: 0 .01vw -.6vw .01vw;
    }
`

const BackgroundImage = styled.img`
    width: 60vw;
    clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
`