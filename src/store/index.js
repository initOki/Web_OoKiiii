import { useStoreAuth } from './auth';
import { useStoreNavigation } from './navigation';
import { useStoreCommon } from './common';

export { useStoreAuth, useStoreNavigation };

export const useStore = () => ({
    navigation: useStoreNavigation(),
    auth: useStoreAuth(),
    common: useStoreCommon(),
});
