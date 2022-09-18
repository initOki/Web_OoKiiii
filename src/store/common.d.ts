export interface commonState {
    isModalType: string | null;

    setModalControl?: (payload: string | null) => void;
}