// type UserType = 'Admin' | 'Editor' | 'Viewer';

// enum UserType {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Viewer = 'Viewer',
// }

//

const UserType = {
  Admin: 'ADMIN',
  Editor: 'EDITOR',
  Viewer: 'VIEWER',
} as const;

const isEdit = (value: (typeof UserType)[keyof typeof UserType]) => {
  if (value === UserType.Admin || value === UserType.Editor) {
    return true;
  } else return false;
};

console.log(isEdit(UserType.Editor));
