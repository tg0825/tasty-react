import styled from 'styled-components';

const Dialog = styled.div`
    position: fixed;
    top: 50px;
    right: 20px;
    left: 20px;
    background: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow.default};
    border-radius: ${({ theme }) => theme.radius.default};
`;

Dialog.Header = styled.div`
    padding: 5px;
    border-bottom: 1px solid #ddd;
`;

Dialog.P_Option = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

Dialog.Body = styled.div``;

export default Dialog;
