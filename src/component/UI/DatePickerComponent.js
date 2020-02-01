import React from "react"
import '../style/datapickerStyle.sass'
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
export default class DatePickerComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: null
        }
    }

    render() {
        return (
            <div className={'datepicker'}>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={date => this.setState({startDate: date})}
                    selectsStart
                    dayClassName={date=> date === this.state.startDate ? "datepicker__start" : ""}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                <DatePicker
                    selected={this.state.endDate}
                    onChange={date => this.setState({endDate: date})}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    minDate={this.state.startDate}
                />
            </div>
        );
    }
}


function calendar(){

}