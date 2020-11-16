import {gql} from "apollo-boost";
 
export const SIGN_UP = gql`
    mutation certificateAccount($tel: String!){
        certificateAccount(tel:$tel)
    }
`;

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $username: String!
        $email: String!
        $tel: String!
        $password: String!
        $gender: String!
        $certification: String!
    ){
        createAccount(
            username:$username
            email:$email
            tel:$tel
            gender:$gender
            password:$password
            certification:$certification
        )
    }
`;

export const LOGIN_USER = gql`
    mutation logInUser(
        $email:String!
        $password:String!
    ){
        logInUser(
            email:$email
            password:$password
        )
    }
`;

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token:String!){
        logUserIn(token:$token) @client
    }
`;
