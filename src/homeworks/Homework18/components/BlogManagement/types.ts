import { Dispatch, SetStateAction } from "react";



export interface BlogMessage{
    firstName: string;
    lastName: string;
    message: string;
}

export interface BlogManagementContextType {
    data: BlogMessage | undefined;
    changeData: (() => void) | Dispatch<SetStateAction<BlogMessage|undefined>>
  }
  