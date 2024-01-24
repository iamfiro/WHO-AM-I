import styled from 'styled-components';
import gsap from 'gsap';
import Background from '../images/background/footer.jpg';
import MainBackground from '../images/background/footer_main.jpg';

export default function Footer() {
    return (
        <>
            <Container>
                <TopContainer>
                    <span>© 2018-2024 FIRO. All right reserved.</span>
                    <span>Made by FIRO</span>
                </TopContainer>
                <Title>Visual Developer.</Title>
                <BottomContainer>
                    <span>FIRO</span>
                    <span>FIRO</span>
                    <a href='https://legacy.firos.dev'>Go to Legacy UI</a>
                </BottomContainer>
            </Container>
        </>
    );
}

const Container = styled.footer`
    width: calc(100% - 80px);

    background-color: var(--color-blue);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text-align: center;

    padding: 30px 40px 0px 40px;
`

const TopContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
`

const Title = styled.span`
    font-size: 8vw;
`

const BottomContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    border-top: 2px solid var(--color-primary);

    padding-top: 20px;
    margin-top: 50px;
`