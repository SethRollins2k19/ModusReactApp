import React from "react"
import '../style/datapickerStyle.sass'
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
// import PropTypes from 'prop-types';




export default class DatePickerComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: new Date( new Date().getTime() + (24 * 60 * 60 * 1000)),
            seed: Math.floor(Math.random()*10000)
        }
    }
    static defaultProps = {
        multi: false,
        classNameAdd: '',
        title: ['','']
    }

    render() {
        return (

            <div className={'datepicker'}>
                {this.props.multi === true ? <div className={`datepicker-multi ${this.props.classNameAdd }`}>
                <div className={'datepicker__item'}>
                <label className={'datepicker__label'} htmlFor={`datepicker-${this.state.seed}`}>{this.props.title[0]}</label>
                <DatePicker
                    className={'datepicker__input'}
                    id={`datepicker-${this.state.seed}`}
                    onChange={date => this.setState({startDate: date})}
                    minDate={new Date()}
                    selected={this.state.startDate}
                    selectsStart
                    // dayClassName={date => date === this.state.startDate ? "datepicker__start" : ""}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                 </div>
                <div className={'datepicker__item'}>
                <label className={'datepicker__label'} htmlFor={`datepicker-${this.state.seed + 1}`}>{this.props.title[1]}</label>
                <DatePicker
                    className={'datepicker__input'}
                    id={`datepicker-${this.state.seed + 1}`}
                    onChange={date => this.setState({endDate: date})}
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    minDate={this.state.endDate}
                />
                </div>
                </div>
                    :
                <div className={'datepicker-single'}>
                    <DatePicker
                        minDate={new Date()}
                        selected={this.state.startDate}
                        onChange={date => this.setState({startDate: date})}
                    />
                </div>
                }
            </div>
        );
    }
}

