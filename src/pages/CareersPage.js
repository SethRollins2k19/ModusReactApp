import React from "react"
import {Hero} from "../component/UI/Hero";
import MainContainerComponent from "../component/StyleContainers/MainContainer";


export default class CareersPage extends React.Component {
    render() {
        return (
            <div className="Careers">
                <MainContainerComponent>
                    <Hero title="Career in out company" subtitle="This is info about career in organization and our advantages">

                    </Hero>
                </MainContainerComponent>
            </div>
        );
    }
}