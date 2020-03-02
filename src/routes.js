import Main from './page/main';
import Join from './page/join';
import MyPage from './page/mypage';

import ShopList from './page/shop/list';
import ShopDetail from './page/shop/detail';

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
];

export const getRouteById = list =>
    list.map(value => routes.filter(({ id }) => id === value)[0]);

export default routes;
