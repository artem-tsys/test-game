export interface IFetch {
  loadingStatus: 'idle' | 'pending' | 'completed' | 'failed';
  error: string | null;
}
