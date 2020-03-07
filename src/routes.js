import Login from 'Pages/login';
import Join from 'Pages/join';
import MyPage from 'Pages/mypage';

import ShopList from 'Pages/shop/list';
import ShopEdit from 'Src/pages/shop/edit';
import ShopDetail from 'Src/pages/shop/detail';

// etc..
import ModalExample from 'Pages/modal-example';

// authId
// 0 user 외부 사용자
// 1 member 회원가입자
// 2 admin 사내 시스템 이용자
// 3 superadmin 시스템 관리자

const routes = [
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
        id: 'login',
        name: '로그인',
        path: '/login',
        component: Login,
    },
    {
        id: 'logout',
        name: '로그아웃',
        path: '/logout',
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
        component: ShopEdit,
    },
    {
        id: 'edit',
        name: '수정',
        path: '/shop/:postId/detail',
        component: ShopEdit,
    },
    {
        id: 'detail',
        name: '상세',
        path: '/shop/:postId',
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
