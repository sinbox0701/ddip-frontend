import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { CREATE_ACCOUNT, LOCAL_LOG_IN, LOGIN_USER, SIGN_UP } from "./AuthQueries";
 
export default () => {
    const [action,setAction] = useState("logIn");
    const [open, setOpen] = useState(false);
    const username = useInput("");
    const email = useInput("");
    const password = useInput("");
    const gender = useInput("");
    const tel = useInput("");
    const certification = useInput("");

    const [certificationAccount] = useMutation(SIGN_UP,{
        variables:{tel:tel.value}
    });
    const [createAccount] = useMutation(CREATE_ACCOUNT,{
        variables:{
            username:username.value,
            email:email.value,
            password:password.value,
            gender:gender.value,
            tel:tel.value,
            certification:certification.value
        }
    });
    const [loginUser] = useMutation(LOGIN_USER,{
        variables:{
            email:email.value,
            password:password.value
        }
    });
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const onClick = async(e) => {
        e.preventDefault();
        await certificationAccount();
        setOpen(true);
    };

    const onSubmit = async(e) =>{
        e.preventDefault();
        if(action === "signUp"){
            if(username!=="" && email !== "" && password !=="" && gender !== "" && tel !== "" && certification!==""){
                await createAccount();
                setAction("logIn");
            }else{
                toast.error("All Field are required");
            }
        }
        else if(action === "logIn"){
            if(email !== "" && password !=""){
                try{                    
                    const {
                        data : {logInUser:token}
                    } = await loginUser();
                    console.log(token);
                    if(token!=="" || token!==undefined){
                        localLogInMutation({variables:{token}});
                    }else{
                        throw Error();
                    }
                }catch{
                    toast.error("Login Error")
                }
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
      certification={certification}
      onSubmit={onSubmit} 
      onClick={onClick}
      open={open}
      setOpen={setOpen} 
    />
    );
};