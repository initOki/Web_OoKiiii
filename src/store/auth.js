import create from 'zustand';

const useStoreAuth = create(set => ({
    isLogin: false,
    setLogin: () =>
        set(() => ({
            isLogin: true,
        })),
    setLogout: () =>
        set(() => ({
            isLogin: false,
        })),
}));

export { useStoreAuth };
