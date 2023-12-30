export interface TodoItf {
  index: number
  content: string
  done: boolean
}

export interface TodoContextItf {
  list: TodoItf[];
  addTodo: (todo: TodoItf) => void;
  handleClick: (index: number) => void;
  handleChange: (index: number) => void;
}

export interface UserItf {
  email: string
  nickname?: string
  password: string
}
