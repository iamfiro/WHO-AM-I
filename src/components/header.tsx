import { useState } from 'react';
import styled from 'styled-components';
import useInterval from 'use-interval';
import FiroIcon from '../svg/icon.png';

function getKorTime() {
    const curr = new Date();
    const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + (KR_TIME_DIFF));
    return kr_curr
}

export default function Header() {
    const [timeData, setTimeData] = useState(getKorTime());

    useInterval(()=>{
        setTimeData(getKorTime())
    },1000);

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <MenuItem active="true">
                        <span>DESIGNER MODE</span>
                    </MenuItem>
                    <MenuItem active="false">
                        <span>DEVELOPER MODE</span>
                    </MenuItem>
                </MenuContainer>
                    <img src={FiroIcon} height={25} />
                    <div style={{ width: '240px', display: 'flex', flexDirection: 'row-reverse' }}>
                        <TimeContainer>
                            Republic of Korea,&nbsp;<b>{timeData.getHours()}:{timeData.getMinutes() > 9 ? timeData.getMinutes() : '0' + timeData.getMinutes()}</b>&nbsp;{timeData.getHours() > 12 ? 'PM' : 'AM'}
                        </TimeContainer>
                    </div>
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
    width: calc(100% - 80px);
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;

    padding: 15px 40px;
`

const MenuContainer = styled.div`
    width: 300px;
    height: auto;

    display: flex;
    flex-direction: row;

    padding: 5px;
    
    background-color: var(--color-primary);

    border-radius: 100px;
`

const MenuItem = styled.div<{ active: string }>`
    width: 50%;
    height: 40px;

    background-color: ${(props) => props.active === 'true' ? `var(--color-secondary)` : `var(--color-primary)`};
    color: ${(props) => props.active === 'true' ? `#000` : `#fff`};

    font-size: 13px;
    font-weight: 500;
    letter-spacing: .75px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 100px;

    transition: all .25s ease-in-out;

    &:hover {
        background-color: ${(props) => props.active === 'true' ? `var(--color-secondary)` : `var(--color-secondary-transparent)`};

        cursor: pointer;
    }
`

const TimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 500;
    letter-spacing: -.1px;

    color: #808080;

    b {
        color: var(--color-primary);
        font-weight: 500;
    }
`
