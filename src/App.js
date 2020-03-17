import React from 'react'
import { Switch, Route } from 'react-router-dom'
//main style
import './component/style/mainStyle.sass'

//components
import HomePage from "./pages/HomePage"
import RoomPageContainer from "./containers/RoomPageContainer";
import Page404 from "./pages/Page404"
import AboutUsPage from "./pages/AboutUsPage";
import CareersPage from "./pages/CareersPage";
import NewsPage from "./pages/NewsPage";
import DocumentationPage from "./pages/DocumentationPage";
import SingleRoomPageContainer from "./containers/SingleRoomPageContainer";
import AccountPageContainer from "./containers/AccountPageContainer";
import SignInPageContainer from "./containers/SignInPageContainer";
import {SingUpPage} from "./pages/SignUpPage";
//--header
import HeaderComponentContainer from "./containers/HeaderComponentContainer";
//--footer
import FooterComponent from "./component/FooterComponent";


//media style
import './component/style/media.sass'
//assistant unit
import {_} from "./util/util";





export default class App extends React.Component{
    render(){
        return(
            <>
                <HeaderComponentContainer links={['Home','About Us','Room','Careers','News','Documentation']}/>
                <Switch>
                    <Route exact path={`${_.defaultRouterPosition}`} component={HomePage}/>
                    <Route exact path={`${_.defaultRouterPosition}room`} component={RoomPageContainer}/>
                    <Route exact path={`${_.defaultRouterPosition}aboutus`} component={AboutUsPage}/>
                    <Route exact path={`${_.defaultRouterPosition}careers`} component={CareersPage}/>
                    <Route exact path={`${_.defaultRouterPosition}news`} component={NewsPage}/>
                    <Route exact path={`${_.defaultRouterPosition}documentation`} component={DocumentationPage}/>
                    <Route exact path={`${_.defaultRouterPosition}signup`} component={SingUpPage}/>
                    <Route exact path={`${_.defaultRouterPosition}signin`} component={SignInPageContainer}/>
                    <Route exact path={`${_.defaultRouterPosition}account`} component={AccountPageContainer}/>
                    {/*<Route exact path={`${_.defaultRouterPosition}room/:slug`} component={SingleRoomPage}/>*/}
                    <Route exact path={`${_.defaultRouterPosition}room/:slug`} component={SingleRoomPageContainer}/>
                    <Route component={Page404}/>

                </Switch>
                <FooterComponent/>
            </>
        )
    }
}