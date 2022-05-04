import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios, { AxiosResponse } from 'axios';

interface userInfoType {
    isLogin: boolean;
    token: string;
}

interface ServerResponse {
    data: ServerData;
    message?: string;
    status?: number;
}

interface ServerData {
    id: number;
    data: string;
    message?: string;
    status?: number;
}

const initialState: userInfoType = {
    isLogin: false,
    token: '',
};

const juno = persist(
    set => ({
        initialState,
        isText: '123',
        isLogin: false,
        onLogin: async (request: string) => {
            try {
                const response: ServerResponse = await openAPI(request);
                console.log(response);
                return (
                    response.data.id === 61795897 &&
                    set({
                        isLogin: true,
                    })
                );
            } catch (error) {
                set({
                    isLogin: false,
                });
            }
        },
        setText: (request: string) => {
            set({
                isText: request,
            });
        },
        setLogout: () => {
            set({
                isLogin: false,
            });
        },
    }),
    {
        name: 'userinfo',
        partialize: (state: any) => ({ isLogin: state.isLogin }),
    },
);

const openAPI = (request: string) => {
    const response = axios.get(`https://api.github.com/users/${request}`);
    console.log(response);
    return response;
};

export const useStoreJuno = create(juno);
