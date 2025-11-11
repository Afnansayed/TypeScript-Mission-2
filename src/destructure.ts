const universityData = {
  name: 'Northern University Bangladesh',
  established: 2002,
  campus: {
    main: {
      location: {
        city: 'Dhaka',
        area: 'Banani',
        coordinates: {
          lat: 23.7805733,
          lng: 90.4070173,
        },
      },
      departments: [
        {
          name: 'Computer Science & Engineering',
          code: 'CSE',
          head: {
            name: 'Dr. Hasan Mahmud',
            email: 'hasan.mahmud@nub.ac.bd',
            office: 'Block A, Room 304',
          },
          courses: [
            {
              id: 'CSE101',
              title: 'Introduction to Programming',
              credits: 3,
              topics: ['Variables', 'Loops', 'Functions', 'Objects'],
              instructors: [
                {
                  name: 'Md. Razin Ahmed',
                  email: 'razin_42230200944@nub.ac.bd',
                  schedule: {
                    day: 'Sunday',
                    time: '10:00 AM - 12:00 PM',
                    room: 'Lab-02',
                  },
                },
              ],
            },
            {
              id: 'CSE302',
              title: 'Web Development',
              credits: 4,
              frameworks: ['React', 'Next.js', 'Tailwind'],
              project: {
                name: 'University Management Portal',
                team: [
                  { name: 'Afnan', role: 'Frontend Dev' },
                  { name: 'Razin', role: 'Backend Dev' },
                  { name: 'Sadia', role: 'UI Designer' },
                ],
              },
            },
          ],
        },
        {
          name: 'Business Administration',
          code: 'BBA',
          head: {
            name: 'Prof. Shafiq Rahman',
            email: 'shafiq.rahman@nub.ac.bd',
          },
          students: [
            {
              id: 'BBA2023-001',
              name: 'Tania Karim',
              enrolledCourses: [
                { id: 'BUS201', grade: 'A' },
                { id: 'ACC203', grade: 'A-' },
              ],
            },
          ],
        },
      ],
    },
    branches: [
      { name: 'Chittagong', established: 2010 },
      { name: 'Khulna', established: 2015 },
    ],
  },
  systemAdmins: [
    { name: 'Admin1', role: 'IT Support', active: true },
    { name: 'Admin2', role: 'Network Manager', active: false },
  ],
};

const {
  name: universityName,
  campus: {
    main: { departments },
    branches,
  },
} = universityData;

// array destructure

const [, bObject] = branches;
// console.log(bObject);

console.log(departments);
