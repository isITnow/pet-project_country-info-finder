import styled from 'styled-components';
// import
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { useState } from 'react';
import { useEffect } from 'react';

const HeaderEl = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;
const Title = styled.a.attrs({
    href: '/',
})`
    text-decoration: none;
    color: var(--color-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
    color: var(--color-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where in the World?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}{' '}
                        <span style={{ marginLeft: '0.75rem' }}>
                            {theme} mode
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
