import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 2.5;
    border-radius: var(--radii);

    border: none;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--colors-text);
    cursor: pointer;
`;
