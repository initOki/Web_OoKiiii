import { useStoreAuth } from './auth';
import { useStoreNavigation } from './navigation';

export { useStoreAuth, useStoreNavigation };

export const useStore = () => ({
   navigation: useStoreNavigation(),
   auth: useStoreAuth(),
});