// type UserType = 'Admin' | 'Editor' | 'Viewer';

enum UserType {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer',
}

const isEdit = (value: UserType) => {
  if (value === UserType.Admin) {
    return true;
  } else return false;
};

console.log(isEdit(UserType.Admin));
