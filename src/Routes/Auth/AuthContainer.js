import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { CREATE_ACCOUNT, LOGIN_USER, SIGN_UP } from "./AuthQueries";
 
export default () => {
    const [action,setAction] = useState("logIn");
    const username = useInput("");
    const email = useInput("");
    const password = useInput("");
    const gender = useInput("");
    const tel = useInput("");

    const [certificationAccount] = useMutation(SIGN_UP,{
        update:(_,{data}) => {
            const {certification} = data;
            if(!certification){
                toast.error("Message Value Error");
            }
        },
        variables:{tel:tel.value}
    });
    const [createAccount] = useMutation(CREATE_ACCOUNT,{
        variables:{
            username:username.value,
            email:email.value,
            password:password.value,
            gender:gender.value,
            tel:tel.value
        }
    });
    const [loginUser] = useMutation(LOGIN_USER,{
        variables:{
            email:email.value,
            password:password.value
        }
    })
 
    const onSubmit = (e) =>{
        e.preventDefault();
        if(action === "signUp"){
            if(tel !== ""){
                certificationAccount();
            }else{
                toast.error("Telephone is required");
            }
        }
        else if(action === "logIn"){
            if(email !== "" && password !=""){
                loginUser();
            }
            else{
                toast.error("All Fields are required");
            }
        }
    };//Login버튼 누를시 Submit 방지 & phone으로 비밀번호 전송
 
    return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      email={email}
      gender={gender}
      tel={tel}
      password={password}
      onSubmit={onSubmit}  
    />
    );
};