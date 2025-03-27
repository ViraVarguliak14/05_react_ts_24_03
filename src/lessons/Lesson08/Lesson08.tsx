import './styles.css'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'
import AvatarImg from '../../assets/Cartoonify.png'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { ChangeEvent, useState } from 'react'

function Lesson08() {
  //Неконтролируемый элемент(компонент) - элемент, который контролируется браузером
  //Контролируемый элемент(компонент) - элемент, который контролируется c помощью React

  // 1 шаг контроля - создание state, в котором будет храниться значение поля
    const [massage, setMessage] = useState<string>('');
    const [showMassage, setShowMassage] = useState<boolean>(false)

     // 2 шаг контроля - создание функции, которая будет изменять значение в state, при
  // изменении значения в поле
    const onChangeMassage = (event:ChangeEvent<HTMLInputElement>) =>{
        console.log(event);
        
        setMessage(event.target.value)
    }

    const showMassageHandler = () => {
        setShowMassage(!showMassage)
    }
    return (
        <div className="lesson08-container">
            <Input name='example' />
            <Input
                name='massage'
                label='Massage'
                id='massage_id'
                placeholder='Enter yor massage'
                value={massage}
                onChange={onChangeMassage}
            />
            <Button name='Show massage' onClick={showMassageHandler}/>
            {/* {showMassage ? <div>{massage}</div> : null} */}
            {showMassage && <div>{massage}</div>}

            {/* Если в компоненте используется prop children, то в таком случае
      компонент вызывается с использованием открывающего и закрывающего элемента,
      а между ними добавляются те JSX элементы, которые мы хотим подставить вместо children */}
            <EmployeeCard
                name='Vira Varguliak'
                position="Software Engineer"
                department='IT'
                img={AvatarImg}
            >
                <h3>The best emlpoyee</h3>
                <Button name='Show personal page' />

            </EmployeeCard>
        </div>
    )
}

export default Lesson08