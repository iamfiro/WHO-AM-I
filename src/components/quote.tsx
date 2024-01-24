import styled from 'styled-components';
import gsap from 'gsap';

export default function Quote() {
    return (
        <>
            <Container className='stackContainer'>
            There are two ways to write error-free programs<br/>only the third one works.
            </Container>
        </>
    );
}

const Container = styled.div`
    width: calc(100% - 80px);

    display: flex;
    justify-content: center;

    text-align: center;

    padding: 100px 40px;
`
