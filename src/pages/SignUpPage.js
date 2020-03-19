import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import FormWrapper from "../component/StyleContainers/FormContainer";
import MainContainerComponent from "../component/StyleContainers/MainContainer";
import '../component/style/signStyle.sass'
import {InputForm} from "../component/UI/FormUI";
import DatePickerComponent from "../component/UI/DatePickerComponent";
import Btn from "../component/UI/BtnComponent";
import {Link} from "react-router-dom";
import {_} from "../util/util";

export const SingUpPage = ({createAccount,isCreated,error}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("tsu@mail.ru")
    const [password, setPassword] = useState("1234")
    const [sex, setSex] = useState("Male")
    const [birthday, setBirthday] = useState(new Date())
    const [promo, setPromo] = useState(false)
    let history = useHistory();

    if(isCreated) {
        setTimeout(() => {
            history.push('/signin')
        }, 500)
    }
    return (
        <div className="Sign SignUp">
            <MainContainerComponent>
                <div className="SignUp__inner">
                    <FormWrapper title="Registration of account">
                        <form className="SignUp__form" onSubmit={e=>{
                            e.preventDefault()
                            let user = {name,surname,email,password,sex,birthday,promo}
                            createAccount(user)
                            setName("")
                            setSurname("")
                            setEmail("")
                            setPassword("")
                            setPromo(false)
                        }}>
                            <div className="SignUp__item">
                                <InputForm type="text"
                                           placeHolder="Name"
                                           hookSet={{
                                               hook: name,
                                               setHook: setName
                                           }}
                                />
                                <InputForm type="text"
                                           placeHolder="Surname"
                                           hookSet={{
                                               hook: surname,
                                               setHook: setSurname
                                           }}
                                />
                                <InputForm type={"radio"}
                                           name={"sex"}
                                           radioValues={['Male', 'Female', 'Other']}
                                           hookSet={{
                                               hook: sex,
                                               setHook: setSex
                                           }}
                                />
                            </div>
                            <DatePickerComponent
                                title={"date of birth"}
                                classNameAdd={"datepicker--signup"}
                                setHook={{
                                    hook: birthday,
                                    setHook: setBirthday
                                }}
                            />
                            <div className="SignUp__item">
                                <p className="form__title">Your login and password will: </p>
                                <InputForm type="email"
                                           placeHolder="Email"
                                           hookSet={{
                                               hook: email,
                                               setHook: setEmail
                                           }}
                                />
                                <InputForm type="password"
                                           placeHolder="Password"
                                           hookSet={{
                                               hook: password,
                                               setHook: setPassword
                                           }}
                                />
                                <InputForm type="checkbox"
                                           required={false}
                                           name="Receive special offers"
                                           hookSet={{
                                               hook: promo,
                                               setHook: setPromo
                                           }}
                                />
                                {error&&
                                email.length === 0 &&
                                password.length === 0 &&
                                name.length === 0 &&
                                surname.length === 0 && !isCreated?<div className="error">
                                    {error}
                                </div> : ""}
                                {isCreated?<div className="success">
                                    Account has been created
                                </div>:""}
                            </div>
                            <div className="SignUp__submit">
                                <Btn title={"reserve it up"}/>
                            </div>
                        </form>

                        <div className="Sign__already">
                            <p>Already have account? </p>
                            <Link to={`${_.defaultRouterPosition}signin`}>
                                <div className="SignUp__signIn">
                                    <Btn title="Sing in"/>
                                </div>
                            </Link>

                        </div>
                    </FormWrapper>
                </div>
            </MainContainerComponent>
        </div>
    )
}



