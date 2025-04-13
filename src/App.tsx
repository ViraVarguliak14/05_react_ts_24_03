// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import GlobalStyles from "./styles/GlobalStyles";
// import Layout from "./components/Layout/Layout";
// import About from "./pages/About/About";
// import Home from "./pages/Home/Home";
// import Course from "./pages/Course/Course";
// import Users from './pages/User/Users'
// import Designer from './pages/User/components/Designer/Designer'
// import Manager from './pages/User/components/Manager/Manager'
// import PageNotFound from './pages/PageNotFound/PageNotFound'
// import Clients from "./pages/Clients/Clients";
// import Facebook from './pages/Clients/components/Facebook/Facebook'
// import Instagram from "./pages/Clients/components/Instagram/Instagram";
// import Telegram from "./pages/Clients/components/Telegram/Telegram";
// import Lesson18 from "./lessons/Lesson18/Lesson18";
// import Homework18 from "./homeworks/Homework18/Homework18";

// import Homework06 from "./homeworks/Homework06/Homework06";

// import Lesson07 from "./lessons/Lessons07/Lessons07";
// import Homework07 from "./homeworks/Homework07/Homework07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Consultation04 from "./consbltations/Consultation04/Consultation04";
// import Homework08 from "./homeworks/Homework08/Homework08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";
// import Homework09 from "./homeworks/Homework09/homework09";
// import Homework10 from "./homeworks/Homework10/Homework10";

// import Lesson10 from "./lessons/Lesson10/Lesson10";
// import Homework10 from "./homeworks/Homework10/Homework10";
// import Lesson11 from "./lessons/Lesson11/Lesson11";
// import Homework11 from "./homeworks/Homework11/Homework11";
// import Lesson12 from "./lessons/Lesson12/Lesson12"
// import Homework12 from "./homeworks/Homework12/Homework12";
// import Lesson13 from "./lessons/Lesson13/Lesson13";


// import Homework14 from "./homeworks/Homework14/Homework14";
// import Homework15 from "./homeworks/Homework15/Homework15";


// function App() {
//   return (
//     //BrowserRouter - глобальная обёртка для всего приложения,
//     // которая позволяет использовать маршрутизацию
//     <BrowserRouter>
//       <GlobalStyles />
//       <Layout>
//         {/* Routes - обертка, которая собирает все маршруты приложения */}
//         <Routes>
//           {/* Route - компонент библиотеки, в который передаётся маршрут и тот компонент (страницу),
//           который должен быть вызван, если выполнен переход по этому маршруту */}
//           <Route path='/' element={<Home />}/>
//           <Route path='/about' element={<About />}/>
//           <Route path='/course' element={<Course/>}/>
//           <Route path='/users' element={<Users />} />
//           <Route path='/users/designer' element={<Designer />} />
//           <Route path='/users/manager' element={<Manager />} />
//           <Route path='/clients/' element={<Clients />} />
//           <Route path='/clients/facebook' element={<Facebook/>} />
//           <Route path='/clients/instagram' element={<Instagram />} />
//           <Route path='/clients/telegram' element={<Telegram />} />
//           <Route path='/lesson18' element={<Lesson18 />} />
//           <Route path='/homework18' element={<Homework18 />} />

//            {/* path='*' - специальный маршрут, который вызовет переданный компонент в
//           том случае, если в маршрутах выше не будет найдено того маршрута,
//           к которому обращается пользователь */}
//           {/* <Route path='*' element={<PageNotFound />} /> */}
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './project/UserLoginForm/UserLoginForm';
import UserData from './project/UserData/UserData';
import GlobalStyles from "./styles/GlobalStyles";
import Layout from './project/LayoutUser/LayoutUser';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginForm  />} />
          <Route path="/user-data" element={<UserData />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;