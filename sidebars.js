module.exports = {
  course: {
    MATH: ['course/MATH203', 'course/MATH204', 'course/MATH205', 'course/MATH251'],
    MAST: ['course/MAST218'],
    COMP: ['course/COMP232', 'course/COMP354', 'course/COMP361'],
    INSE: ['course/INSE6110', 'course/INSE6130'],
    SOEN: ['course/SOEN321', 'course/SOEN321_Project'],
    PHIL: ['course/PHIL210']
  },
  TA: ['ta/COMP352'],
  research: ['research/Dictionary', 'research/MathTax', 'research/Seq2Seq', 'research/KerasLog', 'research/TFLog'],
  container: ['programming/container/Container', 'programming/container/Docker' ],
  go: ['programming/Go/Why', 'programming/Go/Hello', 
    {
      type: 'category',
      label: 'Syntax',
      items: ['programming/Go/Packages', 'programming/Go/Basic_Types'],
    },
  ],
  python: ['programming/Python/Python', 'programming/Python/Integration_With_PyCharm'],
  cplusplus: ['programming/C++/C++', 'programming/C++/Compilation', 'programming/C++/GCC', 'programming/C++/Make'],
  database: ['programming/database/Cassandra_in_Docker'],
  
  linux: ["linux/Audio", "linux/Bash", "linux/CUPS", "linux/Disk", "linux/Sed", "linux/SFTP", "linux/Tar", "linux/User"]
};
