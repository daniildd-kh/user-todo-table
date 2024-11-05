export interface IUser {
  id: number;
  username: string;
  email: string;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
