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
            getStorage: () => sessionStorage,
            // serialize: state => btoa(JSON.stringify(state.isType)),

            // serialize: state => btoa(JSON.stringify(state.isType)),
            // deserialize: partialize => atob(JSON.parse(partialize)),
            partialize: state => ({ isType: state.isType }),

            // partialize: state => ({ isType: btoa(JSON.stringify(state.isType)) }),
            // deserialize: isType => atob(JSON.parse(isType)),
        },
    ),
);

export { useStoreNavigation };
