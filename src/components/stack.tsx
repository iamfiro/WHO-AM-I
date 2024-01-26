import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Stack_1 from '../images/background/stack_1.jpg';
import Stack_2 from '../images/background/stack_2.jpg';
import Stack_3 from '../images/background/stack_3.jpg';
import { MdOutlineWebAsset } from "react-icons/md";
import { CgServer } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { StackData } from '../json/stack';
import { StackType } from '../json/stack';

interface IStack {
    idx: number;
    title: string;
    icon: React.ReactNode;
    style?: React.CSSProperties;
    jsonData: StackType[];
}

function MyStack({ idx, title, icon, style, jsonData }: IStack) {
    return (
        <StackContainer id={`stack_list_0${idx}_p`} style={style} data-open='true' onClick={() => {
            const el = document.getElementById(`stack_list_0${idx}`);
            const el_parent = document.getElementById(`stack_list_0${idx}_p`);
    
            if (el && el_parent) {
                el_parent.getAttribute('data-open') === 'true' ? el_parent.setAttribute('data-open', 'false') : el_parent.setAttribute('data-open', 'true');
                el.style.display = el_parent.getAttribute('data-open') === 'true' ? 'flex' : 'none';
            }
        }}>
            <StackItem>
                <StackItemIcon>
                    {icon}
                </StackItemIcon>
                <StackTitle>{title}</StackTitle>
            </StackItem>
            <StackList id={`stack_list_0${idx}`}>
                {
                    jsonData.map((data, idx) => {
                        return (
                            <>
                            <StackListItem>
                                <img src={data.image}></img>
                                <span>{data.name}</span>
                            </StackListItem>
                            </>
                        )
                    })
                }
            </StackList>
        </StackContainer>
    )
}

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
                <MyStack idx={1} title='FRONTEND' icon={<MdOutlineWebAsset />} jsonData={StackData.frontend} style={{ marginTop: '80px', borderTop: '1px solid var(--color-border)' }} />
                <MyStack idx={2} title='BACKEND' icon={<CgServer />} jsonData={StackData.backend} />
                <MyStack idx={3} title='DESIGN' icon={<MdOutlineDesignServices />} jsonData={StackData.design} />
                <MyStack idx={4} title='ELSE' icon={<MdOutlineDesignServices />} jsonData={StackData.else} />
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

    border-bottom: 1.3px solid var(--color-border);
`

const StackItem = styled.div`
    width: calc(100% - 60px);
    height: 80px;

    display: flex;
    align-items: center;

    padding: 0px 30px;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: var(--color-hover);
    }
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
    width: calc(100% - 60px);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 15px 30px 5px 30px;

    transition: height 0.3s ease-in-out;
`

const StackListItem = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0px 50px 25px 0px;

    img {
        width: 50px;
        height: 50px;
        margin-bottom: 13px;
    }

    span {
        text-align: center;
        font-size: 17px;
        font-weight: 400;

        color: var(--color-primary);
    }
`