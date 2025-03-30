import { ChangeEvent, useState } from "react";
import './styles.css'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";


function Homework08() {

    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const showPasswordHandler = () => {
        setShowPassword(!setShowPassword)
    }
    const hidePassword = () =>{
        setShowPassword(false)
    }

    return (
        <div className="homework08-container">
            <h2 className="chang-password">Change password</h2>
            <Input name="enter-password"
                label="label-password"
                id='password_id'
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={onChangePassword}
            />
            <Button name="SHOW PASSWORD" onClick={showPasswordHandler} />
            <Button name="HIDE PASSWORD" onClick={hidePassword} />
            {showPassword && <div className="result-container">{password}</div>}
        </div>
    );
}
export default Homework08
