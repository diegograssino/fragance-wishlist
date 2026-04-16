export interface DALError {
  status: number;
  message: string;
}

export interface DALResponse<T> {
  data: T | null;
  error: DALError | null;
}
