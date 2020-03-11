import styled from 'styled-components';
import Card from 'Style/card';

const CardList = styled.div`
    display: block;
    padding: 10px;

    ${Card} + ${Card} {
        margin-top: 10px;
    }
`;

export default CardList;
