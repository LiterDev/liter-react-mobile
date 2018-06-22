const accountList = [
  {
    label: '홈',
    to: '/',
  },
  {
    label: '로그인',
    to: '/login',
    showAuth: false
  },
  {
    label: '마이페이지',
    to: '/mypage',
    showAuth: true
  },
  {
    label: '로그아웃',
    to: '/logout',
    showAuth: true
  },
  {
    label: '회원가입',
    to: '/sign_in',
    showAuth: false
  },
  {
    label: '비번찾기',
    to: '/find_password',
    showAuth: false
  },
  {
    label: '모두보임',
    to: '/sample'
  }
];
const middleList = [
  {
    label: '1',
    to: '/'
  }
];
const lastList = ['환', '자', '개', '이'];

export { accountList, middleList, lastList };
