import styled from 'styled-components';

// BLOCK
const CardV = styled.div`
    overflow: hidden;
`;

// ELEMENT
CardV.Head = styled.div`
    float: left;

    img {
        display: block;
        width: 50px;
        height: 50px;
    }
`;

// ELEMENT
CardV.Body = styled.div`
    overflow: hidden;
    padding: 0 0 0 10px;
`;

// ELEMENT
CardV.Title = styled.div`
    margin-bottom: 5px;
`;

// ELEMENT
CardV.Desc = styled.div``;

// ELEMENT
CardV.Price = styled.div`
    margin-top: 10px;
`;

export default CardV;
