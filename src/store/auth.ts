import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

type authState = {
    isLogin: boolean;
    setLogin: (request: string) => void;
    setLogout: () => void;
};

const useStoreAuth = create<authState>()(
    persist(
        set => ({
            isLogin: false,
            setLogin: async request => {
                const response = await axios.get('https://api.github.com/users/' + request);
                console.log();
                response.data.id === 61795897
                    ? set(() => ({
                          isLogin: true,
                      }))
                    : set(() => ({
                          isLogin: false,
                      }));
            },
            setLogout: () =>
                set(() => ({
                    isLogin: false,
                })),
        }),
        {
            name: 'status',
            getStorage: () => sessionStorage,
            partialize: state => ({ status: state.isLogin }),
        },
    ),
);

export { useStoreAuth };
