module.exports = {
  course: {
    MATH: ['course/MATH203', 'course/MATH204', 'course/MATH205', 'course/MATH251'],
    MAST: ['course/MAST218'],
    COMP: ['course/COMP232', 'course/COMP354', 'course/COMP361'],
    INSE: ['course/INSE6110', 'course/INSE6120', 'course/INSE6130', 'course/INSE6140'],
    SOEN: ['course/SOEN321', 'course/SOEN321_Project'],
    PHIL: ['course/PHIL210']
  },
  TA: ['ta/COMP352', 'ta/COMP249'],
  research: ['research/Common_Commands', 'research/Dictionary', 'research/MathTax', 'research/Seq2Seq', 'research/KerasLog', 'research/TFLog'],
  ml: ['ml/Course'],
  container: ['programming/container/Container', 'programming/container/Docker' ],
  go: ['programming/Go/1Why', 'programming/Go/2Hello', 
    'programming/Go/3_1Package', 'programming/Go/3_2Basic_Type', 'programming/Go/3_3Variable', 'programming/Go/3_3_1Operator', 
    'programming/Go/3_4Function', 'programming/Go/3_5Condition', 'programming/Go/3_6Defer', 'programming/Go/3_7Pointer', 
    'programming/Go/3_8Struct', 'programming/Go/3_9Array', 'programming/Go/3_10Map', 'programming/Go/3_11New_Make',
    {
      type: 'category',
      label: 'Methods and Interfaces',
      items: ['programming/Go/4_1Method', 'programming/Go/4_2init', 'programming/Go/4_3Interface'],
    },
    {
      type: 'category',
      label: 'Concurrency',
      items: ['programming/Go/5_1Goroutine', 'programming/Go/5_2WaitGroup', 'programming/Go/5_3Channel', 'programming/Go/5_4Select', 'programming/Go/5_5Mutex'],
    },
    'programming/Go/6Code_Organization',
    'programming/Go/7Dev'
  ],
  python: ['programming/Python/Python', 'programming/Python/Integration_With_PyCharm'],
  java: ['programming/Java/1IDE', 'programming/Java/2JDK_JRE', 'programming/Java/3JavaSE_JavaEE', 'programming/Java/4OOP', 
    'programming/Java/5Variable', 'programming/Java/6Operator', 'programming/Java/7ControlFlow', 
    'programming/Java/8Class', 'programming/Java/9Inheritance', 
    'programming/Java/10Exception', 
    'programming/Java/11Maven',
    'programming/Java/12Gradle',],
  cplusplus: ['programming/C++/C++', 'programming/C++/Compilation', 'programming/C++/GCC', 'programming/C++/Make'],
  database: ['programming/database/Cassandra_in_Docker'],
  
  linux: ["linux/Audio", "linux/Bash", "linux/CUPS", "linux/Disk", "linux/File", "linux/Network", "linux/Sed", "linux/SFTP", "linux/Tar", "linux/User"]
};
