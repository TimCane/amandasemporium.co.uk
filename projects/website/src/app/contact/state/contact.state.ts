export interface ContactState {
  isLoading: boolean;
  errorMessage: string | null;
  success: boolean;
}
export const initialState: ContactState = {
  isLoading: false,
  errorMessage: null,
  success: false,
};
