import { v4 as uuidv4 } from 'uuid';
import { UserApi } from '../types/user-api';

export const tmpArray: UserApi.User[] = Array.from(Array(10).keys()).map((x) => ({
    id: uuidv4(),
    login: `login${x}`,
    password: `pass${x}`,
    age: x,
    isDeleted: Boolean(x % 2),
}))
