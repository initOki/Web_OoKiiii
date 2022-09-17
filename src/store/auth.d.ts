export interface authState {
    status?: boolean;
    isLogin: boolean;
    setLogin?: (request: string) => void;
    setLogout?: () => void;
};