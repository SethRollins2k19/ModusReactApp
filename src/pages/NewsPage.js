import React from "react"
import {Hero} from "../component/UI/Hero";
import MainContainerComponent from "../component/StyleContainers/MainContainer";


export default class NewsPage extends React.Component {
    render() {
        return (
            <div className="News">
                <MainContainerComponent>
                    <Hero title="News" subtitle="This is news and events">

                    </Hero>
                </MainContainerComponent>
            </div>
        );
    }
}