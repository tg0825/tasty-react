import styled from 'styled-components';

const Card = styled.div`
    display: block;
    overflow: hidden;
`;

Card.Title = styled.div`
    margin-top: 10px;
`;

Card.Img = styled.img`
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 10px;
`;

export default Card;
