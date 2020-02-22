import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: '필수값 입니다.',
    },
    string: {
        min: '${min}자 이상 입력해주세요.',
        max: '${min}자 이하 입력해주세요.',
    },
    boolean: {
        required: '필수입니다.',
    },
});

export default Yup;
