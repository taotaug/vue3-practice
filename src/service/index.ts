interface Config {
  needHttpResMeta?: boolean;
  showLoading?: boolean;
}

interface UserInfo {
  username: string;
  userId: string;
}

interface CommonRes<T> {
  code: number;
  message: string;
  data: T;
}

export const getUserInfo = <
  T extends Config,
  R = T extends {
    needHttpResMeta: boolean;
  }
    ? CommonRes<UserInfo>
    : UserInfo
>(
  data: {},
  option?: T
): R => {
  const res = { userId: '123', username: '213' } as UserInfo;
  if (option?.needHttpResMeta) {
    return res as R;
  }
  return {
    code: 0,
    message: '',
    data: res
  } as R;
};
