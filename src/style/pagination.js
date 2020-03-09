import styled from 'styled-components';

const Pagination = styled.div`
    margin-top: 20px;
    text-align: center;
`;

Pagination.Btn = styled.button`
    box-sizing: border-box;
    display: inline-block;
    min-width: 32px;
    padding: 2px;
    margin: 0 2px;

    &.active {
        padding: 1px;
        border: 1px solid ${props => props.theme.mainColor};
        color: ${props => props.theme.mainColor};
    }
`;

export default Pagination;
