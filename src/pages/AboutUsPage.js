import React from "react"
import {Hero} from "../component/UI/Hero";
import MainContainerComponent from "../component/StyleContainers/MainContainer";


export default class AboutUsPage extends React.Component {
    render() {
        return (
            <div className="About">
                <MainContainerComponent>
                    <Hero title="About us" subtitle="This information about our organization">

                    </Hero>
                </MainContainerComponent>
            </div>
        );
    }
}