import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Stack_1 from '../images/background/stack_1.jpg';
import Stack_2 from '../images/background/stack_2.jpg';
import Stack_3 from '../images/background/stack_3.jpg';
import { MdOutlineWebAsset } from "react-icons/md";
import { CgServer } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Stack() {
    return (
        <>
            <Container className='stackContainer'>
                <Top>
                    <Image1 />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Image2 />
                        <Image3 />
                    </div>
                </Top>
                <StackContainer style={{ marginTop: '80px', borderTop: '1px solid var(--color-border)' }}>
                    <StackItem>
                        <StackItemIcon>
                            <MdOutlineWebAsset />
                        </StackItemIcon>
                        <StackTitle>FRONTEND</StackTitle>
                    </StackItem>
                    <StackList>
                        asd
                    </StackList>
                </StackContainer>
                <StackContainer>
                    <StackItem>
                        <StackItemIcon>
                            <CgServer />
                        </StackItemIcon>
                        <StackTitle>BACKEND</StackTitle>
                    </StackItem>
                </StackContainer>
                <StackContainer>
                    <StackItem>
                        <StackItemIcon>
                            <MdOutlineDesignServices />
                        </StackItemIcon>
                        <StackTitle>DESIGN</StackTitle>
                    </StackItem>
                </StackContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: calc(100% - 80px);
    display: flex;
    flex-direction: column;

    padding: 100px 40px;

    
`

const Top = styled.div`
    width: 100%;
`

const Image1 = styled.div`
    width: 100%;
    height: 350px;

    background-image: url(${Stack_1});
    background-size: cover;
    background-position: center;
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

    background-image: url(${Stack_3});
    background-size: cover;
    background-position: center;

    margin-top: 15px;
`

const StackContainer = styled.div`
    width: 100%;

    height: auto;
`

const StackItem = styled.div`
    width: calc(100% - 60px);
    height: 80px;

    display: flex;
    align-items: center;

    padding: 0px 30px;

    border-bottom: 1.3px solid var(--color-border);

    cursor: pointer;
`

const StackItemIcon = styled.div`
    width: 40px;
    height: 40px;

    border: 1px solid var(--color-border);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 20px;

    color: var(--color-blue);

    svg {
        width: 20px;
        height: 20px;
    }
`

const StackTitle = styled.div`
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--color-primary);
`
const StackList = styled.div`
    width: 100%;
    height: 0px;

    overflow: hidden;

    transition: height 0.3s ease-in-out;
`