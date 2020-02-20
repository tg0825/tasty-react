import Main from './Page/Main';
import Posts from './Page/Posts';
import Post from './Page/Post';
import Join from './Page/Join';

const routes = [
    {
        id: 'main',
        name: '메인',
        path: '/',
        component: Main,
    },
    {
        id: 'posts',
        name: '목록',
        path: '/posts',
        component: Posts,
    },
    {
        id: 'create',
        name: '쓰기',
        path: '/create',
        component: Post,
    },
    {
        id: 'view',
        name: '상세',
        path: '/post/:postId',
        component: Post,
    },
    {
        id: 'edit',
        name: '수정',
        path: '/post/:postId/edit',
        component: Post,
    },
    {
        id: 'join',
        name: '회원가입',
        path: '/join',
        component: Join,
    },
];

export default routes;
