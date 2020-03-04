import styled from 'styled-components';

// BLOCK
const Example = styled.div`
    position: fixed;
    top: 50px;
    right: 20px;
    left: 20px;
    background: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow.default};
    border-radius: ${({ theme }) => theme.radius.default};
`;

// ELEMENT
Example.Header = styled.div`
    padding: 5px;
    border-bottom: 1px solid #ddd;
`;

// 접두사 P (Position) 위치 전용 ELEMENT style과 위치를 분리하는 것이 목적
Example.P_Option = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

// ELEMENT
Example.Body = styled.div``;

export default Example;
