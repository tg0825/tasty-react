import Main from './page/main';
import Join from './page/join';

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

export default routes;
