import Cookies from 'js-cookie';

const TokenKey = 'mx-token';

const ClerkCookieKey = '__session';

export const AuthKeyNames = [TokenKey, ClerkCookieKey];

export function getToken(): string | null {
  // FUCK clerk constants not export, and mark it internal and can not custom
  // packages/backend/src/constants.ts
  const clerkJwt = Cookies.get(ClerkCookieKey);

  const token = Cookies.get(TokenKey) || clerkJwt;

  return token || null;
}

export function setToken(token: string) {
  if (typeof token !== 'string') {
    return;
  }
  return Cookies.set(TokenKey, token, {
    expires: 14
  });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
