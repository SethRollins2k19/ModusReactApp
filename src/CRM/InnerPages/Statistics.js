import React from "react";
import style from "./style/CRMStatisticsStyle.module.css";
import {Bar} from "react-chartjs-2";
import "chart.js";
import MainContainerComponent from "../../component/StyleContainers/MainContainer";

const CRMStatistics = () => {
    return (
        <MainContainerComponent>
            <div className={style.statistics}>
                <div className={style.statisticsItem}>
                    <div>
                        <Bar data={{
                            labels: ["yesterday", "today", "tomorrow"],
                            datasets: [{
                                label: "Orders per day",
                                data: [30, 20, 60, 40, 50, 60, 70]
                            }],
                            backgroundColor: ["rgba(255,255,255,1)", "rgba(33,33,33,1)"],

                        }}
                             options={{maintainAspectRatio: true}}
                             height={400}/>
                    </div>
                </div>
                <div className={style.statisticsItem}>
                    <div>
                        <Bar data={{
                            labels: ["yesterday", "today", "tomorrow"],
                            datasets: [{
                                label: "Orders per month",
                                data: [30, 20, 60, 40, 50, 60, 70]
                            }],
                            backgroundColor: ["rgba(255,255,255,1)", "rgba(33,33,33,1)"],

                        }}
                             options={{maintainAspectRatio: true}}
                             height={400}/>
                    </div>
                </div>
                <div className={style.statisticsItem}>
                    <div>
                        <Bar data={{
                            labels: ["yesterday", "today", "tomorrow"],
                            datasets: [{
                                label: "Orders per year",
                                data: [30, 20, 60, 40, 50, 60, 70]
                            }],
                            backgroundColor: ["rgba(255,255,255,1)", "rgba(33,33,33,1)"],

                        }}
                             options={{maintainAspectRatio: true}}
                             height={400}/>
                    </div>
                </div>
            </div>
        </MainContainerComponent>)
}





export {
    CRMStatistics
}