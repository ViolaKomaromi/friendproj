import { useState } from "react";
import Developer from "./Developer";
import "../../components/ContactButton/contactpage.css";
import items from "../../data/developers";

function ContactDeveloperCard() {
    const [developers, setDevelopers] = useState(items);
    return (
        <div className="developer-cards">
            <Developer items={developers} />
        </div>
    );
}

export default ContactDeveloperCard;
