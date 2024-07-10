export default interface TUser {
  name: string;
  email: string;
  password: string;
  photo: string;
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
  isDelete: boolean;
}

export interface TLoginUser {
  email: string;
  password: string;
}
