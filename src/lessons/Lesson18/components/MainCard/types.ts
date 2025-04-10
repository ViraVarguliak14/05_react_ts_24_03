import { Dispatch, SetStateAction } from "react"

export interface UserData {
  firstName: string,
  lastName: string,
  age: number
}


  //при типизации функции для изменения state в треугольные скобки дженерика
  //для типа SetStateAction добавляем типизацию state - Dispatch<SetStateAction<типизация state>>
export interface MainCardContextType{
  data: UserData | undefined,
  changeData: (() => void)|Dispatch<SetStateAction<UserData|undefined>>
}


