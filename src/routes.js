import Main from 'Pages/Main';
import Join from 'Pages/join';
import MyPage from 'Pages/mypage';

import ShopList from 'Pages/shop/list';
import ShopDetail from 'Pages/shop/detail';

// etc..
import ModalExample from 'Pages/modal-example';

const routes = [
    {
        id: 'main',
        name: '메인',
        path: '/',
        component: Main,
    },
    {
        id: 'mypage',
        name: '내정보',
        path: '/mypage',
        component: MyPage,
    },
    {
        id: 'join',
        name: '회원가입',
        path: '/join',
        component: Join,
    },
    {
        id: 'shopList',
        name: '목록',
        path: '/shop/list',
        component: ShopList,
    },
    {
        id: 'add',
        name: '등록',
        path: '/shop/add',
        component: ShopDetail,
    },
    {
        id: 'detail',
        name: '상세',
        path: '/shop/:postId',
        component: ShopDetail,
    },
    {
        id: 'edit',
        name: '수정',
        path: '/shop/:postId/detail',
        component: ShopDetail,
    },
    {
        id: 'modalexample',
        name: '모달예제',
        path: '/modalexample',
        component: ModalExample,
    },
];

export const getRouteById = list =>
    list.map(value => routes.filter(({ id }) => id === value)[0]);

export default routes;
