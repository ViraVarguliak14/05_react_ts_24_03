import { useState, createContext } from "react"
import Button from "../../../../components/Button/Button"
import Input from "../../../../components/Input/Input"
import { BlogManagementTitle, BlogManagementWrapper } from "./styles"
import { BlogManagementContextType, BlogMessage } from "./types";

export const BlogManagementContext = createContext<BlogManagementContextType>({
    data: undefined,
    changeData: () => { },
});

function BlogManagement() {

    const [inputMassage, seInputMessage] = useState('');
    const [userData, setUserData] = useState<BlogMessage | undefined>(undefined);

    const handlePost = () => {
        setUserData({
          firstName: "Vera",
          lastName: "Var",
          message: inputMassage,
        });
        seInputMessage('');
      };

    return (
        <BlogManagementContext.Provider value={{
            data: userData,
            changeData: setUserData
        }}>


            <BlogManagementWrapper>
                <BlogManagementTitle>Blog</BlogManagementTitle>
                <Input
                    type="text"
                    value={inputMassage}
                    onChange={(e) => seInputMessage(e.target.value)}
                    placeholder="Enter your message" name={"postBtn"} />
                <Button onClick={handlePost} name={"blogMessage"}>Post</Button>
            </BlogManagementWrapper>
        </BlogManagementContext.Provider>

    )
}

export default BlogManagement