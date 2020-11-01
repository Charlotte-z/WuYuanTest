import { request } from 'umi';

export const getNavLink = value => {
  return new Promise(resolve => {
    request(``).then(res => {
      if (res.code === 0) {
        resolve({ tag: res?.result?.tag ?? [] });
      }
    });
  });
};
