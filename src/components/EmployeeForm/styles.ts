import styled from "@emotion/styled";


export const  EmployeeFormComponent= styled.form`
 display: flex;
 flex-direction: column;
 gap: 30px;
 min-width: 500px;
 padding: 30px;
 background-color:  #abd0f3;
 border: 2px solid black;
 border-radius: 10px;
 
`
export const Title = styled.div`
 font-size: 30px;
 align-self: center;
 font-weight: bold;
 `
 export const CheckboxInput = styled.input`
 margin-right: 8px;
 cursor: pointer;
 width: 20px;
 height: 20px;

  &:checked + label::after {
    content: "✔"; 
    color: red;  
    
  }
`;
 