import { Count, Multiply } from "../App";
import {Increase} from "../App";
import {Decrease} from "../App";

export default function Contact() {
    return (
        <div className="">
            <h1>Contact</h1>
            <Count />
            <Increase />
            <Decrease />
            <Multiply/>
        </div>
    );
}

