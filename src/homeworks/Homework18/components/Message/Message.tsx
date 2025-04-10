
import { DataItem, MessageComponent } from "./styles";
import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import Button from "../../../../components/Button/Button";

function Message() {

    const {data , changeData} = useContext(BlogManagementContext);
    
    const deleteData = () => {
        changeData(undefined);
      };

    return (
        <MessageComponent>
            <DataItem>First Name: {data?.firstName}</DataItem>
            <DataItem>Last Name: {data?.lastName}</DataItem>
            <DataItem>Message: {data?.message}</DataItem>
            <Button name='Delete all data' onClick={deleteData} />
        </MessageComponent>
    )
}

export default Message