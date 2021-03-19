export interface Action<T> {
    payload: T;
    type: string;
    meta?: any;
    error?: boolean;
  }