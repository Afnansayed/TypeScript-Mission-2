//intersection types
type Manager = {
  id: number;
  name: string;
  department: string;
  email: string;
};

type Employee = {
  id: number;
  name: string;
  position: string;
  salary: number;
};

type EmployeeManger = Manager & Employee;

const manager: EmployeeManger = {
  id: 1,
  name: 'Afnan',
  position: 'Manager',
  salary: 60000,
  department: 'cse',
  email: 'ex',
};

// console.log(manager);

// union type

type UserType = 'admin' | 'user';

const checkUserType = (user: UserType): void => {
  if (user === 'admin') console.log('the user is ', user);
  if (user === 'user') console.log('The user is :', user);
};

checkUserType('user');
