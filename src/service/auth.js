/**
 * 아이디로 유저 검색
 * @param {string} id
 */
export const getUserById = id => {
    const ls = JSON.parse(localStorage.getItem('userList'));
    if (!ls) return false;
    let result = false;
    ls.some(user => {
        if (user.id === id) {
            result = user;
            return true;
        }
        return false;
    });
    return result;
};

/**
 * 비밀번호 채크
 * @param {object} user
 * @param {string} pw
 */
export const checkPw = (user, pw) => {
    return user.pw === pw;
};

/**
 * 로그인 유효성 검사
 * @param {object} values
 */
export const validLogin = values => {
    let user = getUserById(values.id);
    if (!user) {
        return {
            state: 'error',
            data: [
                {
                    name: 'id',
                    message: '아이디를 확인해주세요.',
                },
            ],
        };
    }

    if (!checkPw(user, values.pw)) {
        return {
            state: 'error',
            data: [
                {
                    name: 'pw',
                    message: '비밀번호를 확인해주세요.',
                },
            ],
        };
    }

    return true;
};
