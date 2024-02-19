const sampleCourses = [
  {
    title: "Web Development Bootcamp",
    description:
      "Learn web development from scratch and build modern websites and web applications.",
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?w=740&t=st=1708195473~exp=1708196073~hmac=11b1b8419ed200334c4c183134f2260243267dd540f04e15dc8260fb11f0fb06",
    price: 999,
    domain: "Web Development",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    description:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.",
    image: "https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 1599,
    domain: "Data Science",
  },
  {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    description:
      "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
    image: "https://img.freepik.com/free-vector/digital-marketing-concept-with-online-advertising-media-symbols-flat_1284-31958.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 2499,
    domain: "Digital Marketing",
  },
  {
    title: "Photography Masterclass: A Complete Guide to Photography",
    description:
      "Master photography techniques to take stunning photos and build a photography career.",
    image: "https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=sph",
    price: 799,
    domain: "Photography",
  },
  {
    title: "Learn Spanish: Complete Spanish Language Course",
    description:
      "Master Spanish language skills from beginner to advanced level.",
    image: "https://img.freepik.com/free-vector/language-word-concept-background_23-2147868616.jpg?w=740&t=st=1708225122~exp=1708225722~hmac=151be63612eab65c65cf2bb5400ed8ac5eb13aa775dea292372724a60ffa2e54",
    price: 799,
    domain: "Language Learning",
  },
  {
    title: "JavaScript: Understanding the Weird Parts",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, and more.",
    image: "https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 799,
    domain: "Web Development",
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    description:
      "Learn Python for data science, machine learning, and data visualization!",
    image: "https://img.freepik.com/free-vector/data-points-concept-illustration_114360-4070.jpg?w=740&t=st=1708224801~exp=1708225401~hmac=4171bff62e32d192c473fedc8cb831f3632bb30e7f529838ec98dc33dfe7b2f2",
    price: 999,
    domain: "Data Science",
  },
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    description:
      "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?w=740&t=st=1708195473~exp=1708196073~hmac=11b1b8419ed200334c4c183134f2260243267dd540f04e15dc8260fb11f0fb06",
    price: 999,
    domain: "Web Development",
  },
  {
    title: "Angular - The Complete Guide (2021 Edition)",
    description:
      "Master Angular 12 (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js",
    image: "https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 999,
    domain: "Web Development",
  },
  {
    title: "iOS 14 & Swift 5 - The Complete iOS App Development Bootcamp",
    description:
      "From beginner to iOS app developer with just one course. Xcode 12 & Swift 5.",
    image: "https://img.freepik.com/free-vector/mobile-app-development_24908-58343.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 1499,
    domain: "Mobile Development",
  },
  {
    title: "Android App Development Masterclass using Kotlin",
    description:
      "Learn Kotlin Android App Development And Become an Android Developer. Incl. Kotlin Tutorial and Android Tutorial Videos.",
    image: "https://img.freepik.com/free-vector/application-development-concept-illustration_1284-55776.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 999,
    domain: "Mobile Development",
  },
  {
    title: "Ethical Hacking & Cyber Security Course : A Complete Package",
    description:
      "Learn ethical hacking, Kali Linux, Cyber security, System Hacking, Penetration Testing Online.",
    image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 1499,
    domain: "Cyber Security",
  },
  {
    title: "AWS Certified Solutions Architect - Associate 2020",
    description:
      "Want to pass the AWS Solutions Architect - Associate Exam? Want to become Amazon Web Services Certified? Do this course!",
    image: "https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 1499,
    domain: "Cloud Computing",
  },
  {
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    description:
      "Become an In-demand SQL Master by creating complex databases and building reports through real-world projects",
    image: "https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration-big-data-mining-automated-analytics-system-information-analysis-pattern-recognition-info-systematization_335657-361.jpg?w=740&t=st=1708225476~exp=1708226076~hmac=b9e7b11256358cd5482eec550adaf1fad016bfad1ad1bdcace635bf5e525aae7",
    price: 799,
    domain: "Database Management",
  },
  {
    title: "The Complete Financial Analyst Course 2021",
    description:
      "Excel, Accounting, Financial Statement Analysis, Business Analysis, Financial Math, PowerPoint: Everything is Included!",
    image: "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=sph",
    price: 999,
    domain: "Finance",
  },
  {
    title: "Entire MBA in 1 Course: Award Winning Business School Prof",
    description:
      "Everything You Need to Know About Business from Start-up to IPO by Ivy League MBA Grad, former Goldman employee & VC",
    image: "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=sph",
    price: 1999,
    domain: "Business",
  },
  {
    title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
    description:
      "Use Blender to create beautiful 3D models for video games, 3D printing, house design etc. No prior knowledge required.",
    image: "https://img.freepik.com/free-vector/3d-modeling-concept-illustration_114360-3149.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 799,
    domain: "3D Modelling",
  },
  {
    title: "Learn Ethical Hacking From Scratch",
    description:
      "Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.",
    image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 999,
    domain: "Cyber Security",
  },
  {
    title: "Photography Masterclass: A Complete Guide to Photography",
    description:
      "Master photography techniques to take stunning photos and build a photography career.",
    image: "https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=sph",
    price: 799,
    domain: "Photography",
  },
  {
    title: "Complete C# Unity Game Developer 2D",
    description:
      "Learn Unity in C# & Code Your First Seven 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap (35 hours)",
    image: "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=sph",
    price: 799,
    domain: "Game Development",
  },
  {
    title: "The Data Science Course 2021: Complete Data Science Bootcamp",
    description:
      "Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning",
    image: "https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
    price: 1499,
    domain: "Data Science",
  },
  {
    title: "The Complete SQL Bootcamp 2021: Go from Zero to Hero",
    description:
      "Become an expert at SQL! In this course you will learn from scratch.",
    image: "https://img.freepik.com/free-vector/big-data-analytics-abstract-concept-illustration-big-data-mining-automated-analytics-system-information-analysis-pattern-recognition-info-systematization_335657-361.jpg?w=740&t=st=1708225476~exp=1708226076~hmac=b9e7b11256358cd5482eec550adaf1fad016bfad1ad1bdcace635bf5e525aae7",
    price: 799,
    domain: "Database Management",
  },
  {
    title: "Java Programming Masterclass for Software Developers",
    description:
      "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
    image: "https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=sph",
    price: 999,
    domain: "Software Development",
  },
 
  {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    description:
      "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
      image: "https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?size=626&ext=jpg&ga=GA1.1.430452632.1708180075&semt=ais",
      price: 799,
      domain: "Digital Marketing",
    }

  ];
  module.exports = { data: sampleCourses };