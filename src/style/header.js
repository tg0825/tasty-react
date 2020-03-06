import styled from 'styled-components';

const Header = styled.div`
    border-bottom: 1px solid #000;
    padding: 10px;
    background: ${({ theme }) => theme.keyColor};
`;

Header.Logo = styled.div`
    color: #fff;
`;

Header.MainNav = styled.div`
    display: inline-block;
`;

Header.MainNav.Link = styled.a`
    vertical-align: middle;
    display: inline-block;
    margin-left: 20px;
    color: #fff;
`;

Header.SubNav = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

Header.SubNav.Link = styled.a`
    vertical-align: middle;
    display: inline-block;
    margin-left: 20px;
    color: #fff;
    cursor: pointer;
`;

export default Header;
