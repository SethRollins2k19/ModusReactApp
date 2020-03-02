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
        const {setHook = {hook:null,setHook:null},startDate,endDate, changeMinDate, changeMaxDate, minLimit = new Date(new Date().getTime() -	864000 ), maxLimit = new Date("2020/12/31")} = this.props
        const seed =  Math.floor(Math.random()*10000)
        return (

            <div className={'datepicker'}>
                {this.props.multi === true ?
                    <div className={`datepicker-multi ${this.props.classNameAdd}`}>
                        <div className={'datepicker__item'}>
                            <label className={'datepicker__label'}
                                   htmlFor={`datepicker-${seed}`}>{this.props.title[0]}</label>
                            <DatePicker
                                name="dataStart"
                                className={'datepicker__input'}
                                id={`datepicker-${seed}`}
                                onChange={date => changeMinDate(date - 840000)}
                                minDate={minLimit}
                                maxDate={endDate}
                                selected={startDate}
                                selectsStart
                                // dayClassName={date => date === this.state.startDate ? "datepicker__start" : ""}
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>
                        <div className={'datepicker__item'}>
                            <label className={'datepicker__label'}
                                   htmlFor={`datepicker-${seed + 1}`}>{this.props.title[1]}</label>
                            <DatePicker
                                className={'datepicker__input datepicker__input--end'}
                                id={`datepicker-${seed + 1}`}
                                onChange={date => changeMaxDate(date)}
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                maxDate={maxLimit}
                            />
                        </div>
                    </div>
                    :
                    <div className={'datepicker-single'}>
                        <label htmlFor={`datepicker--single-${seed}`} className={'datepicker__label datepicker__label--signup'}>{this.props.title}</label>
                        <DatePicker
                            className={`datepicker__input ${this.props.classNameAdd}`}
                            id={`datepicker--single-${seed}`}
                            selected={setHook.hook}
                            onChange={date => setHook.setHook(date)}
                        />
                    </div>
                }
            </div>
        );
    }
}

