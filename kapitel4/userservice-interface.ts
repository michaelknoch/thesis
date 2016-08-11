
export interface IUserService {
    login(mail: string, password: string)
    logout();
    register(mail: string, password: string, name: string, surname: string);
    getLocalMe();
    setUser(user: any);
    setSystem(system: any);
}
