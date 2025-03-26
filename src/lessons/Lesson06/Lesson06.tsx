
import Button from "../../components/Button/Button";
import { getAction, TRAFFIC_LIGHT } from "./object_types";


function Lesson06() {
    console.log(getAction(TRAFFIC_LIGHT.GREEN));


  return <div><Button name="Send" /></div>;
}

export default Lesson06;
