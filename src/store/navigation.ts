import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { navigationState } from './navigation.d';

type MyPersist = (
    config: StateCreator<navigationState>,
    options: PersistOptions<navigationState>,
    // partialize: (state: navigationState) => Partial<navigationState>,
) => StateCreator<navigationState>;

export const useStoreNavigation = create<navigationState>(
    (persist as unknown as MyPersist)(
        set => ({
            isType: '',
            setNavigation: isType => {
                set(() => ({
                    isType: isType,
                }));
            },
        }),
        {
            name: 'navigation',
            getStorage: () => sessionStorage,
            // serialize: state => btoa(JSON.stringify(state.isType)),

            // serialize: state => btoa(JSON.stringify(state.isType)),
            // deserialize: partialize => atob(JSON.parse(partialize)),
            // partialize: state => ({ isType: state.isType }),

            // partialize: state => ({ isType: btoa(JSON.stringify(state.isType)) }),
            // deserialize: isType => atob(JSON.parse(isType)),
        },
    ),
);
