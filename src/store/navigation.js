import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStoreNavigation = create(
    persist(
        set => ({
            isType: '',
            setNavigation: payload =>
                set(() => ({
                    isType: payload,
                })),
        }),
        {
            name: 'navigation',
            partialize: state => ({ isType: state.isType }),
        },
    ),
);

export { useStoreNavigation };
