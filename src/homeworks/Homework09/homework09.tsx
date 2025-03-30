// Требования:

// Создайте компонент "Homework09" в папке "homeworks"
// В компоненте должны быть:

// Две карточки (блока) с похожими стилями (на ваше усмотрение)
// Первая карточка будет считаться vip карточкой и должна иметь ширину и высоту больше на 50px и более яркий background
// Наполнение первой карточки:
// Заголовок - VIP Пользователь
// Описание - Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.
// Наполнение второй карточки:
// Заголовок - Обычный Пользователь
// Описание - Стандартный доступ, базовые функции и поддержка в порядке очереди.
import { AvatarImg, BoxInfo, Card, Container, Title, } from "./styles"
import VipLogo from '../../assets/vip.png'
import Regular from '../../assets/regular.png'


function Homework09() {
  return (
    <div>
      <Container> 
        <Card vip>
        <BoxInfo >
          <AvatarImg src={VipLogo} alt="VIP Logo" />
        </BoxInfo>
        <Title>VIP User</Title>
        <p>Access to exclusive features, a personal manager, and priority support.</p>
      </Card>
      <Card>
      <BoxInfo >
          <AvatarImg src={Regular} />
        </BoxInfo>
        <Title>Regular User</Title>
        <p>Standard access, basic features, and support in the queue.</p>
      </Card>
      </Container>
      

    </div>

  )
}

export default Homework09