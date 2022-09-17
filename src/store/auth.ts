import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { authState } from './auth.d';
import axios from 'axios';

type MyPersist = (
    config: StateCreator<authState>,
    options: PersistOptions<authState>,
) => StateCreator<authState>;

export const useStoreAuth = create<authState>(
    (persist as unknown as MyPersist)(
        set => ({
            isLogin: false,
            setLogin: async request => {
                const response = await axios.get('https://api.github.com/users/' + request);
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
            // partialize: state => ({ status: state.isLogin }),
        },
    ),
);