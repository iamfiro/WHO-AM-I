import styled from 'styled-components';

export default function Footer() {
    const date = new Date();
    return (
        <>
            <Container>
                <TopContainer>
                    <span>© 2018-{date.getFullYear()} FIRO. All right reserved.</span>
                    <span>Made by FIRO</span>
                </TopContainer>
                <Title>Visual Developer.</Title>
                <BottomContainer>
                    <span>UI DESIGN</span>
                    <span>UX RESEARCH</span>
                    <span>FRONTEND</span>
                    <span>BACKEND</span>
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

    margin-top: 10px;
`

const BottomContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    border-top: 2px solid var(--color-primary);

    padding: 20px 0px;
    margin-top: 50px;

    a {
        color: var(--color-primary)
    }
`