const systemAdmins = [
  { name: 'Admin1', role: 'IT Support', active: true },
  { name: 'Admin2', role: 'Network Manager', active: false },
];
const systemAdminsT = [
  { name: 'Admin3', role: 'IT Support', active: true },
  { name: 'Admin4', role: 'Network Manager', active: false },
];

systemAdminsT.push(...systemAdmins);
// console.log(systemAdminsT, 'after push');

//! rest operator
// const getName = (...names) => {
//   names.forEach(name => console.log(`my name is ${name}`));
// };

// getName('razin', 'sazin', 'tilka');
