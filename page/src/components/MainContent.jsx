import Avatar from "./Avatar";
import Navbar from "./navbar";
import "../styles/MainContent.css"
import TicketForm from "./TicketForm";
import MessageBlock from "./MessageBlock";

export default function MainContent() {
    return(
    <div className = "PageWrapper">

        <div className="nav-wrapper">
            <Avatar/>
            <Navbar/>
        </div>
    
        <div className="Page">

            {/* <MessageBlock/> */}

            <TicketForm/> 
        </div>

    </div>
    )
}