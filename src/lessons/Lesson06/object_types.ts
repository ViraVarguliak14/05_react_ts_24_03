
  //Тип any
  let city: any = "Berlin";
  city = ["Paris", 1234];

  //Типизация объекта через интерфейс
  interface User {
    name: string;
    age?: number | string;
  }

  const userData: User = {
    name: "Vera",
    age: 38,
  };

  interface User {
    isAdmin?: boolean;
  }

  interface Admin extends User {
    email: string;
    tel: string;
  }
  const personData: Admin = {
    name: "Bob",
    email: "123@gmail.com",
    tel: "123456",
  };
  const newUser: User = {
    name: "John",
    // email: '123445@gemail.com'
  };

  //---Типизация через type
  type Weight = string | number | null;

  let userWeight: Weight = 52;
  let animalWeight: Weight = null;

  type Status = "success" | "error" | "loading";

  let requestStatus: Status = "success";
  requestStatus = "loading";
  // requestStatus = 'eror'; если будет неправильное значение єто не сработает

  type Animal = {
    name: string;
    weight?: number;
  };
  const animalDate: Animal = {
    name: "Lion",
    weight: 200,
  };
  // type Animal = {country: string};

  type NewAnimal = Animal & { country: string };
  const zebra: NewAnimal = {
    name: "Zebra",
    country: "Africa",
  };
  const dog: Animal = {
    name: "Dog",
    // country: 'Germany'
  };

  type CustomArrayType<T = null> = (string | T)[];

  const arrayMix1: CustomArrayType<number> = ["red", 123, "black"];
  const arrayMix2: CustomArrayType<number[]> = ["apple", [1, 4, 1]];
  const arrayMix3: CustomArrayType = ["zebra", null];

  interface Fruit<T = number> {
    title: string,
    address: T

  }
  const fruitObj: Fruit<string>={
    title: 'Grape',
    address: 'London, str..'
  }
  
  enum Colors {Red, Black=6, Green};

 //---Строковое перечисление
  // enum для цветов светофора
  export enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green'
  }

  export const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return 'Стоп!';
      case TRAFFIC_LIGHT.YELLOW:
        return 'Приготовьтесь идти';
      case TRAFFIC_LIGHT.GREEN:
        return 'Можно идти';
    }
  }
