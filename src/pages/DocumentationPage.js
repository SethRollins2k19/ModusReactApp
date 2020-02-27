import React from "react"
import {Hero} from "../component/UI/Hero";
import MainContainerComponent from "../component/StyleContainers/MainContainer";


export default class DocumentationPage extends React.Component {
    render() {
        return (
            <div className="Documentation">
                <MainContainerComponent>
                    <Hero title="Documentation" subtitle="This is documentation and agreements which you are accept entering this web page">

                    </Hero>
                </MainContainerComponent>
            </div>
        );
    }
}