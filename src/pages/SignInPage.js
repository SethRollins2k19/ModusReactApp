import React, {useState} from "react"
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import FormWrapper from "../component/StyleContainers/FormContainer";
import '../component/style/signStyle.sass'
import {InputForm} from "../component/UI/FormUI";
import Btn from "../component/UI/BtnComponent";
import {Link} from "react-router-dom";
import {_} from "../util/util";


export const SignInPage = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return(
        <div className="Sign SignIp">
            <MainContainerComponent>
                <div className="SignIn__inner">
                    <FormWrapper title="Logging in">
                        <form className="SignIn__form" action="">
                           <InputForm type="email"
                                      placeHolder="Email"
                                      hookSet={{
                                          hook:email,
                                          setHook: setEmail
                                      }}
                           />
                           <InputForm type="password"
                                      placeHolder="Password"
                                      hookSet={{
                                          hook:password,
                                          setHook: setPassword
                                      }}
                           />
                            <div className="SignIn__submit">
                                <Btn title={"Sign in"}/>
                            </div>
                        </form>
                        <div className="Sign__already">
                            <p>Already haven't account?</p>
                            <Link to={`${_.defaultRouterPosition}signup`}>
                                <div className="SignUp__signIn">
                                    <Btn title="Sing up"/>
                                </div>
                            </Link>
                        </div>
                    </FormWrapper>
                </div>
            </MainContainerComponent>
        </div>
        )
}