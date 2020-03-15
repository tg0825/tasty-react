import styled from 'styled-components';

// BLOCK
const Dialog = styled.div`
    position: fixed;
    top: 50px;
    right: 20px;
    left: 20px;
    background: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow.default};
    border-radius: ${({ theme }) => theme.radius.default};
    z-index: 100;
`;

Dialog.Header = styled.div`
    padding: 10px 0 0 10px;
    border-bottom: 1px solid #ddd;
    min-height: 30px;
    font-size: 16px;
`;

Dialog.P_Option = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

Dialog.Body = styled.div``;

// Mask
Dialog.Mask = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
`;

export default Dialog;
