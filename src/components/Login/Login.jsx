import './Login.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("male");


    const onLogin = () => {
        window.alert("LOGIN: username " + username + " password " + password)

    }
    const onRegister = () => {
        window.alert("REGISTER: username " + username + " password " + password)

    }

    const pageLoaded = () => {
        console.log(" page has been loaded");
    }


    const monitoringUsername = () => {

        console.log("username updating.. ")
    }


    useEffect(() => {


        pageLoaded();


    }, [])



    useEffect(() => {

        // console.log("username updating.. ")

        monitoringUsername();

        if(username === 'francis') {
            window.alert("hey you!")
        }

        if(password === 'pa') {
            window.alert("password")
        }
    }, [username, password])


    return (
        <div className="login">




            Gender:

            <select value={gender}  onChange={({target}) => {
                    setGender(target.value)

                }} >
                <option value={""} >Select Gender</option>
                <option value={"male"} >Male</option>
                <option value={"female"} >Female</option>

            </select>











            Login page

            <br/>

            username: {username}


            <input type={"text"}

                   onChange={({target}) => {

                     //  console.log(target.value)

                       setUsername(target.value)

                   }}

            /> < br/>

            password: {password}

            <input type={"password"}

                   onChange={({target}) => {

                        console.log(target.value)

                       setPassword(target.value)

                   }}

            /> < br/>

            <button onClick={onLogin}> Login</button>
            <button onClick={onRegister}>Register</button>
            < br/>
            < br/>
            < br/>
            < br/>

            <button onClick={()=>{
                navigate(-1)
            }}> Back</button>


        </div>
    );
}

export default Login;
