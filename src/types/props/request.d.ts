export type GeneralResponse<T> = {
  config: any;
  data: T;
  headers: any;
  request: any;
  status: number;
};

export type DetailAndMessage = {
  data: {
    detail: string;
  };
  message: string;
};
