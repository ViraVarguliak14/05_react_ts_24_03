import { EmployeeCardProps } from "./types"
import './styles.css'

function EmployeeCard ({ name, position, department, img, children }: EmployeeCardProps ) {
return (
    <div className="employee-card-container">
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <div>{position}</div>
        <div>{department}</div>
        {children}
    </div>
)
}
export default EmployeeCard