


interface Person<T ,V = null>{
    id: number;
    name: string;
    age: number;
    department: string;
    shift: string;
    data: T;
    vichle?: V
}


interface StudentData{
    mejor:{subjectName: string }[];
    optional: 
        {
            couseName: string,
            courseCode: string,
        }[]
    ;
}
interface TeacherData{
      subjects: {
        courseName: string 
      }[];
      labs: {
        courseName: string, courseCode: string
      }[]
}

interface Vichle{
    name: string;
    color: string;
}

const student: Person<StudentData> = {
    id: 1,
    name: 'Razin',
    age: 23,
    department: 'CSE',
    shift: 'Day',
    data: {
        mejor:[
            {
                subjectName: 'Math'
            },
            {
                subjectName: 'English'
            }
        ],
       optional: [
            {
                couseName: 'Physics',
                courseCode: '123'
            },
            {
                couseName: 'Chemistry',
                courseCode: '456'
            }
        ]
    }
}
const teacher: Person<TeacherData , Vichle> = {
    id: 56,
    name: 'Afnan',
    age: 28,
    department: 'CSE',
    shift: 'Day',
    data: {
    subjects:[ {
       courseName: 'Math',
   },
   {
       courseName: 'English',
   }],
   labs: [
       {
           courseName: 'Physics',
           courseCode: '123'
       },
       {
           courseName: 'Chemistry',
           courseCode: '456'
       }
   ]

    },
    vichle: {
        name: 'Bike',
        color: 'red'
    }
}

console.log(`Details for Teacher : `);
console.log(teacher);
console.log(`Details for Student : `);
console.log(student);