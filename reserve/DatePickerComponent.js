import React from "react"
import '../style/datapickerStyle.sass'
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
// import PropTypes from 'prop-types';




export default class DatePickerComponent extends React.Component{
    static defaultProps = {
        multi: false,
        classNameAdd: '',
        title: ['','']
    }
    render() {
        const {minDate,maxDate,changeMinDate,changeMaxDate} = this.props
        const seed =  Math.floor(Math.random()*10000)
        const startDate = new Date()
        // const minDate = new Date(new Date().getTime() -	86400 )
        return (

            <div className={'datepicker'}>
                {this.props.multi === true ? <div className={`datepicker-multi ${this.props.classNameAdd }`}>
                <div className={'datepicker__item'}>
                <label className={'datepicker__label'} htmlFor={`datepicker-${seed}`}>{this.props.title[0]}</label>
                <DatePicker
                    className={'datepicker__input'}
                    id={`datepicker-${seed}`}
                    onChange={date => {
                        changeMinDate(date)
                    }}
                    minDate={startDate}
                    maxDate={maxDate}
                    selected={minDate}
                    selectsStart
                    // dayClassName={date => date === this.state.startDate ? "datepicker__start" : ""}
                    startDate={minDate}
                    endDate={maxDate}
                />
                 </div>
                <div className={'datepicker__item'}>
                <label className={'datepicker__label'} htmlFor={`datepicker-${seed + 1}`}>{this.props.title[1]}</label>
                <DatePicker
                    className={'datepicker__input'}
                    id={`datepicker-${seed + 1}`}
                    onChange={date => changeMaxDate(date)}
                    selected={maxDate}
                    selectsEnd
                    startDate={minDate}
                    endDate={maxDate}
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

