import React from 'react'
import {BrowserRouter} from "react-router-dom"
import { Switch, Route } from 'react-router-dom'
//main style
import './component/style/mainStyle.sass'

//components
import HomePage from "./pages/HomePage"
import RoomPage from "./pages/RoomPage"
import Page404 from "./pages/Page404"
//--header
import HeaderComponent from "./component/HeaderComponent";
//--footer
import FooterComponent from "./component/FooterComponent";


//assistant unit
import {_} from "./util/util";

//media style
import './component/style/media.sass'






export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <HeaderComponent links={['Home','About Us','Services','Careers','News','Documentation']}/>
                <Switch>
                    <Route exact path={`${_.defaultRouterPosition}`} component={HomePage}/>
                    <Route exact path={`${_.defaultRouterPosition}room`} component={RoomPage}/>
                    {/*<Route component={<Page404/>}/>*/}
                    <Route component={Page404}/>

                </Switch>
                <FooterComponent/>
            </BrowserRouter>
        )
    }
}