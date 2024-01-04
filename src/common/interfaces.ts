export interface TodoItf {
  id: number
  title: string
  completed: boolean
}

export interface TodoContextItf {
  list: TodoItf[]
  addTodo: (todo: TodoItf) => void
  handleClick: (index: number) => void
  handleChange: (index: number) => void
  token: string | null
  getToken: () => string | null
  changeToken: (token?: string) => void
}

export interface UserItf {
  email: string
  nickname?: string
  password: string
}
