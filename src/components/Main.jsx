import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
    padding: 6rem 0 2rem;
    @media (min-width: 767px) {
        padding: 7rem 0 4rem;
    } ;
`;

export const Main = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};
