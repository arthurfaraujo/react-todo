export interface TodoItf {
  id: string
  title: string
  completed: boolean
}

export interface TodoContextItf {
  list: TodoItf[]
  setList: (list: TodoItf[]) => void
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  completeTodo: (id: string) => void
  changeTodo: (id: string, title: string) => void
  token: string | null
  getToken: () => string | null
  changeToken: (token?: string) => void
}

export interface UserItf {
  email: string
  nickname?: string
  password: string
}
