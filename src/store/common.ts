import create from 'zustand';
import { commonState } from './common.d';

export const useStoreCommon = create<commonState>(set => ({
    isModalType: null,
    setModalControl: isType => {
        set(() => ({
            isModalType: isType,
        }));
    },
}));
