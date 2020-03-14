import styled from 'styled-components';
import CardV from 'Style/card-v';

// BLOCK
const CardVList = styled.ul`
    margin: 0;
    padding: 10px;

    ${CardV} + ${CardV} {
        margin-top: 10px;
    }
`;

export default CardVList;
