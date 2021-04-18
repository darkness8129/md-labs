// Частина 1

// Дано рядок у форматі "Student1 - Group1; Student2 - Group2; ..."

const studentsStr: string =
  'Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія - ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Іванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Іванов Дмитро - ІВ-82';

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

const studentsGroups: Map<string, string[]> = new Map();

// Ваш код починається тут

// nested arr [[studentName, groupName], ...]
const studentsWithGroup: string[][] = studentsStr
  .split('; ')
  .map((student) => student.split(' - '));

// arr of unique names of groups
const groupNamesArr: string[] = Array.from(
  new Set(studentsWithGroup.map(([_, group]) => group))
);

groupNamesArr.forEach((groupName) =>
  // add new element to Map
  studentsGroups.set(
    groupName,
    studentsWithGroup
      // arr of student with groups filtered by groupName
      .filter(([_, group]) => group === groupName)
      // convert to arr of student names
      .map(([student, _]) => student)
      // sort by UA letters
      .sort((firstStudent, secondStudent) =>
        firstStudent.localeCompare(secondStudent)
      )
  )
);

// Ваш код закінчується тут

console.log('Завдання 1');
console.log(studentsGroups);
console.log();

// Дано масив з максимально можливими оцінками

const points: number[] = [12, 12, 12, 12, 12, 12, 12, 16];

// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)

// random integer number
const randomInteger = (min: number, max: number): number => {
  const rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomValue = (maxValue: number): number => {
  switch (randomInteger(0, 6)) {
    case 1:
      return Math.ceil(maxValue * 0.7);
    case 2:
      return Math.ceil(maxValue * 0.9);
    case 3 || 4 || 5:
      return maxValue;
    default:
      return 0;
  }
};

const studentPoints: Map<string, Map<string, number[]>> = new Map();

// Ваш код починається тут

groupNamesArr.forEach((groupName) => {
  const studentsOfSpecificGroup: string[] = studentsWithGroup
    // arr of student with groups filtered by groupName
    .filter(([_, group]) => group === groupName)
    // convert to arr of student names
    .map(([student, _]) => student);

  const srudentsWithPoints: Map<string, number[]> = new Map();

  studentsOfSpecificGroup.forEach((student) =>
    srudentsWithPoints.set(
      student,
      // array of random points
      points.map((point) => randomValue(point))
    )
  );

  // add new element to Map
  studentPoints.set(groupName, srudentsWithPoints);
});

// Ваш код закінчується тут

console.log('Завдання 2');
console.log(studentPoints);
console.log();

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

const sumPoints: Map<string, Map<string, number>> = new Map();

// Ваш код починається тут

groupNamesArr.forEach((groupName) => {
  const studentsOfSpecificGroup = studentsWithGroup
    // arr of student with groups filtered by groupName
    .filter(([_, group]) => group === groupName)
    // convert to arr of student names
    .map(([student, _]) => student);

  const studentsWithPointsSum: Map<string, number> = new Map();

  studentsOfSpecificGroup.forEach((student) =>
    studentsWithPointsSum.set(
      student,
      points
        // array of random points
        .map((point) => randomValue(point))
        // convert previous array to sum of points
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    )
  );

  // add new element to Map
  sumPoints.set(groupName, studentsWithPointsSum);
});

// Ваш код закінчується тут

console.log('Завдання 3');
console.log(sumPoints);
console.log();

// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи

const groupAvg: Map<string, number> = new Map();

// Ваш код починається тут

sumPoints.forEach((studentsWithPointsSum, group) => {
  groupAvg.set(
    group,
    Math.ceil(
      // sum of all points / number of students in group
      Array.from(studentsWithPointsSum.values()).reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) / studentsWithPointsSum.size
    )
  );
});

// Ваш код закінчується тут

console.log('Завдання 4');
console.log(groupAvg);
console.log();

// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів

const passedPerGroup: Map<string, string[]> = new Map();

// Ваш код починається тут

sumPoints.forEach((studentsWithPointsSum, group) => {
  passedPerGroup.set(
    group,
    Array.from(studentsWithPointsSum.entries())
      // filter where points sum >= 60
      .filter(([_, pointsSum]) => pointsSum >= 60)
      // convert to arr of students
      .map(([student, _]) => student)
  );
});

// Ваш код закінчується тут

console.log('Завдання 5');
console.log(passedPerGroup);

// Приклад виведення. Ваш результат буде відрізнятися від прикладу через використання функції random для заповнення масиву оцінок та через інші вхідні дані.
//
//Завдання 1
//["ІВ-73": ["Гончар Юрій", "Давиденко Костянтин", "Капінус Артем", "Науменко Павло", "Чередніченко Владислав"], "ІВ-72": ["Бортнік Василь", "Киба Олег", "Овчарова Юстіна", "Тимко Андрій"], "ІВ-71": ["Андрющенко Данило", "Гуменюк Олександр", "Корнійчук Ольга", "Музика Олександр", "Трудов Антон", "Феофанов Іван"]]
//
//Завдання 2
//["ІВ-73": ["Давиденко Костянтин": [5, 8, 9, 12, 11, 12, 0, 0, 14], "Капінус Артем": [5, 8, 12, 12, 0, 12, 12, 12, 11], "Науменко Павло": [4, 8, 0, 12, 12, 11, 12, 12, 15], "Чередніченко Владислав": [5, 8, 12, 12, 11, 12, 12, 12, 15], "Гончар Юрій": [5, 6, 0, 12, 0, 11, 12, 11, 14]], "ІВ-71": ["Корнійчук Ольга": [0, 0, 12, 9, 11, 11, 9, 12, 15], "Музика Олександр": [5, 8, 12, 0, 11, 12, 0, 9, 15], "Гуменюк Олександр": [5, 8, 12, 9, 12, 12, 11, 12, 15], "Трудов Антон": [5, 0, 0, 11, 11, 0, 12, 12, 15], "Андрющенко Данило": [5, 6, 0, 12, 12, 12, 0, 9, 15], "Феофанов Іван": [5, 8, 12, 9, 12, 9, 11, 12, 14]], "ІВ-72": ["Киба Олег": [5, 8, 12, 12, 11, 12, 0, 0, 11], "Овчарова Юстіна": [5, 8, 12, 0, 11, 12, 12, 12, 15], "Бортнік Василь": [4, 8, 12, 12, 0, 12, 9, 12, 15], "Тимко Андрій": [0, 8, 11, 0, 12, 12, 9, 12, 15]]]
//
//Завдання 3
//["ІВ-72": ["Бортнік Василь": 84, "Тимко Андрій": 79, "Овчарова Юстіна": 87, "Киба Олег": 71], "ІВ-73": ["Капінус Артем": 84, "Науменко Павло": 86, "Чередніченко Владислав": 99, "Гончар Юрій": 71, "Давиденко Костянтин": 71], "ІВ-71": ["Корнійчук Ольга": 79, "Трудов Антон": 66, "Андрющенко Данило": 71, "Гуменюк Олександр": 96, "Феофанов Іван": 92, "Музика Олександр": 72]]
//
//Завдання 4
//["ІВ-71": 79.333336, "ІВ-72": 80.25, "ІВ-73": 82.2]
//
//Завдання 5
//["ІВ-72": ["Бортнік Василь", "Киба Олег", "Овчарова Юстіна", "Тимко Андрій"], "ІВ-73": ["Давиденко Костянтин", "Капінус Артем", "Чередніченко Владислав", "Гончар Юрій", "Науменко Павло"], "ІВ-71": ["Музика Олександр", "Трудов Антон", "Гуменюк Олександр", "Феофанов Іван", "Андрющенко Данило", "Корнійчук Ольга"]]

// Частина 2
// № ЗК = 8129
// Варіант = (8129 mod 2 ) + 1 = 1 + 1 = 2
console.log();
console.log('Part 2');

// Yaroslav Yukhymchuk, first letters YY
class CoordinateYY {
  direction: Direction;
  degrees: number;
  minutes: number;
  seconds: number;

  constructor(
    direction: Direction = Direction.Latitude,
    degrees: number = 0,
    minutes: number = 0,
    seconds: number = 0
  ) {
    let error: string;

    // check degrees values
    if (direction === Direction.Latitude && (degrees > 90 || degrees < -90)) {
      error = 'Degrees are out of latitude range.';
    } else if (
      direction === Direction.Longitude &&
      (degrees > 180 || degrees < -180)
    ) {
      error = 'Degrees are out of longitude range.';
    }

    // check minutes and seconds values
    if (minutes > 59 || minutes < 0) {
      error = 'Minutes are out of range.';
    } else if (seconds > 59 || seconds < 0) {
      error = 'Seconds are out of range.';
    }

    // check minutes and seconds values, when degrees are 90, -90, 180, -180
    if (
      direction === Direction.Latitude &&
      (degrees === 90 || degrees === -90) &&
      (minutes !== 0 || seconds !== 0)
    ) {
      error = 'Latitude value out of range.';
    } else if (
      direction === Direction.Longitude &&
      (degrees === 180 || degrees === -180) &&
      (minutes !== 0 || seconds !== 0)
    ) {
      error = 'Longitude value out of range.';
    }

    // throw error
    if (error) throw new Error(error);

    // initialization
    this.direction = direction;
    this.degrees = degrees;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  // return coordinate in xx°yy′zz″ Z  format
  getCoordinate(): string {
    return `${this.degrees}°${this.minutes}'${this.seconds}'' ${this.getZ(
      this.degrees,
      this.direction
    )}`;
  }

  // return coordinate in xx,xxx...° Z  format
  getDecimalCoordinate(): string {
    return `${this.degrees},${(this.minutes / 60 + this.seconds / 3600).toFixed(
      4
    )}° ${this.getZ(this.degrees, this.direction)}`;
  }

  // get avarage coordinate between this coodinate and Coordinate
  getAvarageCoordinate(Coordinate: CoordinateYY): CoordinateYY | null {
    if (Coordinate.direction === this.direction) {
      return new CoordinateYY(
        this.direction,
        Math.floor((this.degrees + Coordinate.degrees) / 2),
        Math.floor((this.minutes + Coordinate.minutes) / 2),
        Math.floor((this.seconds + Coordinate.seconds) / 2)
      );
    } else {
      return null;
    }
  }

  // get avarage coordinate between this FirstCoordinate and SecondCoordinate
  getAvarageBetweenTwoCoordinates(
    FirstCoordinate: CoordinateYY,
    SecondCoordinate: CoordinateYY
  ): CoordinateYY | null {
    if (FirstCoordinate.direction === SecondCoordinate.direction) {
      return new CoordinateYY(
        FirstCoordinate.direction,
        Math.floor((FirstCoordinate.degrees + SecondCoordinate.degrees) / 2),
        Math.floor((FirstCoordinate.minutes + SecondCoordinate.minutes) / 2),
        Math.floor((FirstCoordinate.seconds + SecondCoordinate.seconds) / 2)
      );
    } else {
      return null;
    }
  }

  // private method for getting Z
  private getZ(degrees: number, direction: Direction): string {
    let Z: 'N' | 'S' | 'W' | 'E';

    // conditions for Z defining
    if (degrees >= 0 && direction === Direction.Latitude) Z = 'N';
    else if (degrees < 0 && direction === Direction.Latitude) Z = 'S';
    else if (degrees >= 0 && direction === Direction.Longitude) Z = 'E';
    else if (degrees < 0 && direction === Direction.Longitude) Z = 'W';

    return Z;
  }
}

enum Direction {
  Latitude = 'LATITUDE',
  Longitude = 'LONGITUDE',
}

const DefaultInitialized: CoordinateYY = new CoordinateYY();
console.log('Default initialization:\n', DefaultInitialized);

const InitalizedWithValues: CoordinateYY = new CoordinateYY(
  Direction.Longitude,
  57,
  32,
  7
);
console.log('Initialized with values: :\n', InitalizedWithValues);

console.log('Get coordinate test:', InitalizedWithValues.getCoordinate());

console.log(
  'Get decimal coordinate test:',
  InitalizedWithValues.getDecimalCoordinate()
);

console.log(
  'Get avarage coordinate: \n',
  InitalizedWithValues.getAvarageCoordinate(
    new CoordinateYY(Direction.Longitude, 63, 50, 15)
  )
);

console.log(
  'Get avarage coordinate with different directions:',
  InitalizedWithValues.getAvarageCoordinate(
    new CoordinateYY(Direction.Latitude, 63, 50, 15)
  )
);

console.log(
  'Get avarage coordinate between two coordinates: \n',
  InitalizedWithValues.getAvarageBetweenTwoCoordinates(
    new CoordinateYY(Direction.Latitude, 37, 50, 15),
    new CoordinateYY(Direction.Latitude, 61, 42, 39)
  )
);

console.log(
  'Get avarage coordinate between two coordinates with different directions:',
  InitalizedWithValues.getAvarageBetweenTwoCoordinates(
    new CoordinateYY(Direction.Latitude, 37, 50, 15),
    new CoordinateYY(Direction.Longitude, 61, 42, 39)
  )
);
