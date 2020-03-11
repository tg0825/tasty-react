import styled from 'styled-components';

// BLOCK
const GridBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

// ELEMENT
GridBlock.Item = styled.div`
    width: 33.3%;
    height: 100px;

    border: 1px solid #eee;
    box-sizing: border-box;
    text-align: center;

    /* vertical align middle */
    display: flex;
    justify-content: center;
    align-items: center;
`;

// ELEMENT
GridBlock.ItemContent = styled.div`
    display: block;

    svg {
        color: ${({ theme }) => theme.subColor};
    }

    div {
        margin-top: 10px;
    }
`;

export default GridBlock;
