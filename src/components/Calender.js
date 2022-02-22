import React from "react";
import moment from "moment";

function Calendar(){
    const days= moment.weekdaysShort();
    console.log("Moment",moment())
    const [dateObj,setDateObj]=React.useState(moment());

    const firstDayOfMonth=()=>{
        const date=moment(dateObj).startOf('month').format("d");
        return date
    }

    const generateCalendar=()=>{
        const startDayIndex=firstDayOfMonth();
        let blanks=[];
        for(let i=0;i<startDayIndex;i++){
            blanks.push(<td>{""}</td>);
        }
        const totalDays=moment(dateObj).daysInMonth();
        const daysInMonth=[];
        for(let i=1;i<=totalDays;i++){
            daysInMonth.push(<td>{i}</td>);
        }
        const totalSlots= [...blanks,...daysInMonth]; 
        const rows=[];
        const totalRowsCount=Math.ceil(totalSlots.length/days.length);
       //<tr> 7 tds </tr>
       for(let i=0;i<totalRowsCount;i++){
              const row=[];
                for(let j=0;j<days.length;j++){
                    row.push(totalSlots.shift());
                }
                rows.push(<tr>{row}</tr>);
       }
      return rows;

    }

   

    return(
        <table style={{marginTop:30}}>
            <thead>
                <tr>
                    {days.map(day=>{
                        return <th>{day}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {generateCalendar()}
            </tbody>
        </table>
    )
}

export default Calendar;