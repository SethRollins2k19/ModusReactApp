import React from "react";
import MainContainerComponent from "../../component/StyleContainers/MainContainer";
import style from "./style/SettingCRMStyle.module.css"

const CRMSetting = () => {
    return(<MainContainerComponent>
        <form className={style.form}>
            <label className={style.formItem}>
                <input type="checkbox"/>
                Enable bot instead managers
            </label>
            <label className={style.formItem}>
                <input type="checkbox"/>
                Enable bot instead managers
            </label>
            <button type="submit" className={style.formButton}>Save</button>
        </form>
    </MainContainerComponent>)
}



export {
    CRMSetting
}