import "../styles/TicketForm.css"
import CategoryChose from "./CategoryChose"
import { ReactComponent as TrashCan } from "../svg/trash.svg";

export default function TicketForm() {

    const subject = [
        {value: "IT", label: "IT" },
        {value: "Art", label: "Art" },
        {value: "Business", label: "Business" },
        {value: "Medicine", label: "Medicine" },
    ];

    const reason = [
        {value: "Canteen", label: "Canteen" },
        {value: "Rooms", label: "Rooms" },
        {value: "Elevator", label: "Elevator" },
        {value: "University", label: "University" },
        {value: "Teachers", label: "Teachers" },
    ];

    return(
        <div className="ticketbody">

            <div className="category">
                <CategoryChose isMulti options={subject}/>
                <CategoryChose isMulti options={reason}/>
            </div>

            <input type="text" className="Headline"/>

            <textarea className="textPlace"></textarea>

            <div className="buttonGroup">
                <input type="button" className="sendBut" value="SEND"/>

                <button className="deleteButton">
                <TrashCan/>
                </button>
            </div>

        </div>
    )
}