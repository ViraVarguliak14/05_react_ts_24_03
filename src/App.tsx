import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";


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


function App() {
  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - обертка, которая собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент библиотеки, в который передаётся маршрут и тот компонент (страницу),
          который должен быть вызван, если выполнен переход по этому маршруту */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;