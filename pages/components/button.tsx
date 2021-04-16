/** @jsxImportSource theme-ui */

import styled from '@emotion/styled'
export default styled.button`
    background-color: #164081;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    opacity: 0.8;
    transition: .1s ease-out;
    &:active {
        background-color: #164081;
        opacity: 1;
    }
    &:hover {
        cursor: pointer;
        padding: 6px 12px;
    }
`;
