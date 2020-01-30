import React from 'react'
//main style
import './component/style/mainStyle.sass'


//components
//--header
import HeaderComponent from "./component/HeaderComponent";
//--footer
import FooterComponent from "./component/FooterComponent";

//media style
import './component/style/media.sass'



export default class App extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent links={['Home','About Us','Services','Careers','News','Documentation']}/>
                <FooterComponent/>
            </div>
        )
    }
}