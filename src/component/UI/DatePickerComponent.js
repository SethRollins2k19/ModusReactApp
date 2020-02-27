import React from "react"
import '../style/datapickerStyle.sass'
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
// import PropTypes from 'prop-types';




export default class DatePickerComponent extends React.Component{
    // state = {
    //     startDate: new Date(),
    //     endDate: new Date(new Date().getTime() + 	100000000 )
    // }
    static defaultProps = {
        multi: false,
        classNameAdd: '',
        title: ['','']
    }
    render() {
        const {startDate,endDate, changeMinDate, changeMaxDate} = this.props
        const seed =  Math.floor(Math.random()*10000)
        const minDate = new Date(new Date().getTime() -	864000 )
        return (

            <div className={'datepicker'}>
                {this.props.multi === true ? <div className={`datepicker-multi ${this.props.classNameAdd }`}>
                <div className={'datepicker__item'}>
                <label className={'datepicker__label'} htmlFor={`datepicker-${seed}`}>{this.props.title[0]}</label>
                <DatePicker
                    name="dataStart"
                    className={'datepicker__input'}
                    id={`datepicker-${seed}`}
                    onChange={ date => changeMinDate(date - 840000)}
                    minDate={minDate}
                    maxDate={endDate}
                    selected={startDate}
                    selectsStart
                    // dayClassName={date => date === this.state.startDate ? "datepicker__start" : ""}
                    startDate={startDate}
                    endDate={endDate}
                />
                 </div>
                <div className={'datepicker__item'}>
                <label className={'datepicker__label'} htmlFor={`datepicker-${seed + 1}`}>{this.props.title[1]}</label>
                <DatePicker
                    className={'datepicker__input'}
                    id={`datepicker-${seed + 1}`}
                    onChange={date => changeMaxDate(date)}
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={minDate}
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

