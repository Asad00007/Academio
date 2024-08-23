import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  popularCourses: any[] = [];
  selectedCourses: any[] = [];
  selectedCoursesChanged: EventEmitter<void> = new EventEmitter();
  courses = [
    {
      name: 'Google Data Analytics Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/64/4a8b13f0e64dbdb41d587c7cea1103/excel-logo-4-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'This program includes over 180 hours of instruction and hundreds of practice-based assessments.',
      rating: 4.2,
      provider: 'Google',
      category: 'Professional Certificate',
      level: 'Beginner',
      skills: ['Google Data', 'Google analytics', 'Çertificate'],
    },
    {
      name: 'Meta Social Media Marketing Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/d6/554730bda341178c8c2801a0603acd/Hands-on-Introduction-to-Linux_Final.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',

      description:
        'Develop your skills in social media marketing, including strategy, content creation, and analysis.',
      rating: 4.7,
      provider: 'Meta',
      category: 'Professional Certificate',
      level: 'Intermediate',
      skills: ['Meta Data', 'Meta analytics', 'Çertificate'],
    },
    {
      name: 'Google Project Management Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Gain an immersive understanding of the practices and skills needed to succeed in an entry-level project management role.',
      rating: 4.9,
      provider: 'Google',
      category: 'Professional Certificate',
      level: 'Advanced',
      skills: [
        'Google Data',
        'Google analytics',
        'Google project management',
        'Çertificate',
      ],
    },
    {
      name: 'Meta Front-End Developer Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ac/3285d972fe420ea24ea3cd8354fa9b/space-grey-ipad-air-with-graph-on-brown-wooden-table-187041.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',

      description:
        'Learn the skills needed to become a front-end developer, including HTML, CSS, and JavaScript.',
      rating: 4.2,
      provider: 'Meta',
      category: 'Professional Certificate',
      level: 'Beginner',
      skills: ['Meta Front end', 'Meta analytics', 'Çertificate'],
    },
    {
      name: 'Google UX Design Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/4dcbc397754fb880094f4ebde1fdb5/Java-Full-Stack-Developer-specialization-2-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'This program teaches you the foundations of UX design and research.',
      rating: 4.9,
      provider: 'Google',
      category: 'Professional Certificate',
      level: 'Intermediate',
      skills: ['Google UX', 'Google UI', 'Çertificate'],
    },
    {
      name: 'Meta Marketing Analytics',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c8/5bae18bb5d475d926526e6e8ac3cc6/maryland-cybersecurity-for-everyone-1-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',

      description:
        'Learn the core concepts of marketing analytics and how to use data to drive marketing decisions.',
      rating: 4.6,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Advanced',
      skills: ['Meta Data', 'Meta Marketing', 'Çertificate'],
    },
    {
      name: 'Google Cloud Platform Fundamentals: Core Infrastructure',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c9/ce066273194fc0adc8e08b57b33ced/Diseno-sin-titulo-5-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',

      description:
        'This course introduces you to important concepts and terminology for working with Google Cloud Platform (GCP).',
      rating: 4.1,
      provider: 'Google',
      category: 'Course',
      level: 'Beginner',
      skills: [
        'Google Data',
        'Google analytics',
        'Google Cloud',
        'Çertificate',
      ],
    },
    {
      name: 'Meta AR/VR Prototyping and Design',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Learn the basics of augmented reality (AR) and virtual reality (VR), and create your own AR/VR applications.',
      rating: 4.6,
      provider: 'Meta',
      category: 'Course',
      level: 'Intermediate',
      skills: ['Meta AR', 'Meta VR', 'Çertificate'],
    },
    {
      name: 'Google IT Support Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'This program covers troubleshooting, customer service, networking, operating systems, system administration, and security.',
      rating: 4.4,
      provider: 'Google',
      category: 'Professional Certificate',
      level: 'Beginner',
      skills: ['Google Data', 'Google analytics', 'Google IT', 'Çertificate'],
    },
    {
      name: 'Meta Advanced Social Media Marketing',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Deep dive into advanced techniques and strategies in social media marketing.',
      rating: 4.9,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Beginner',
      skills: [
        'Meta Data',
        'Meta analytics',
        'Meta Social Media',
        'Çertificate',
      ],
    },
    {
      name: 'Google Cloud Security Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/22/fd0bb5fa6640abad2df3b86ed9f13e/front-end-dev6.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Learn how to secure Google Cloud environments and prepare for the Google Cloud Professional Security Engineer exam.',
      rating: 4.8,
      provider: 'Google',
      category: 'Professional Certificate',
      level: 'Advanced',
      skills: [
        'Google Cloud',
        'Google analytics',
        'Google Security',
        'Çertificate',
      ],
    },
    {
      name: 'Meta AR Developer Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Develop skills in augmented reality, including building and deploying AR experiences.',
      rating: 4.3,
      provider: 'Meta',
      category: 'Professional Certificate',
      level: 'Intermediate',
      skills: ['Meta AR', 'Meta Analytics', 'Çertificate'],
    },
    {
      name: 'Google Machine Learning Specialization',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/69/d189dfdb9d46db9bc3641bfdb39bfb/NET-FullStack-Developer.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Master machine learning fundamentals, techniques, and tools with hands-on projects.',
      rating: 4.5,
      provider: 'Google',
      category: 'Specialization',
      level: 'Expert',
      skills: [
        'Google Data',
        'Google analytics',
        'Google Machine Learning',
        'Expert Çertificate',
      ],
    },
    {
      name: 'Meta Advanced Data Visualization',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',

      description:
        'Learn advanced techniques in data visualization to create impactful visual stories.',
      rating: 4.7,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Beginner',
      skills: ['Meta Data', 'Meta Advanced Data', 'Çertification'],
    },
    {
      name: 'Google Digital Marketing & E-commerce Professional Certificate',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',

      description:
        'Gain in-demand skills that prepare you for entry-level jobs in digital marketing and e-commerce.',
      rating: 3.9,
      provider: 'Google',
      category: 'Professional Certificate',
      level: 'Intermediate',
      skills: ['Google Data', 'Google Advanced Data', 'Çertification'],
    },
    {
      name: 'React Basics',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/2e/289c392ddc43f2a1c5840cdb8d0cec/iOS-dev8.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Learn the fundamentals of React to build dynamic web applications.',
      rating: 4.5,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Beginner',
      skills: ['React Basics', 'JavaScript Basics', 'Çertification'],
    },
    {
      name: 'Advanced React Patterns',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/88/de3111c1ff4f2e91a68ca29615c333/Android-dev9.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Explore advanced patterns in React to enhance your development skills.',
      rating: 4.8,
      provider: 'Google',
      category: 'Specialization',
      level: 'Intermediate',
      skills: ['React Advanced', 'JavaScript Advanced', 'Çertification'],
    },
    {
      name: 'Angular Fundamentals',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/17/16e0aa3a304e2dae44ecad82f62805/Frontend-Development-using-Angular-2-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Get started with Angular and build robust web applications.',
      rating: 4.6,
      provider: 'Google',
      category: 'Specialization',
      level: 'Beginner',
      skills: ['Angular Basics', 'JavaScript Basics', 'Çertification'],
    },
    {
      name: 'Angular Advanced Concepts',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/28/009d60c15048d48dc738c53a5b8332/Coursera-Logos.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Dive deeper into Angular to master advanced concepts and techniques.',
      rating: 4.7,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Intermediate',
      skills: ['Angular Basics', 'JavaScript Basics', 'Çertification'],
    },
    {
      name: 'Backend Development with Node.js',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/collections/product-images/ibm-full-stack-cloud-developer.jpeg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Learn backend development using Node.js and build scalable applications.',
      rating: 4.6,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Beginner',
      skills: [
        'Node js Basics',
        'JavaScript Basics',
        'Backend introduction',
        'Çertification',
      ],
    },
    {
      name: 'Advanced Backend Development with Express.js',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/collections/product-images/ibm-frontend-developer.jpeg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',
      description:
        'Master backend development with advanced techniques in Express.js.',
      rating: 4.7,
      provider: 'Google',
      category: 'Specialization',
      level: 'Intermediate',
      skills: [
        'Node js Advanced',
        'JavaScript Advanced',
        'Backend Full',
        'Çertification',
      ],
    },
    {
      name: 'Database Management with SQL',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/bc/2691e15f754f10a2b78d71617ae50d/Node.js.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop',
      description: 'Learn SQL to manage and manipulate databases effectively.',
      rating: 4.5,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Beginner',
      skills: [
        'Database Basics(MySql)',
        'JavaScript Basics',
        'Database introduction',
        'Çertification',
      ],
    },
    {
      name: 'Advanced Database Design',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/06/52a51228bb463a84a5249723a98e94/Database-Management-Essentials.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Explore advanced database design principles to optimize your data structures.',
      rating: 4.8,
      provider: 'Google',
      category: 'Specialization',
      level: 'Intermediate',
      skills: [
        'Database Advanced(MySql,PostgresSql)',
        'JavaScript Basics',
        'Database Full',
        'Çertification',
      ],
    },
    {
      name: 'Full-Stack Development with MERN',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/2c/c9b36e0de04147b43661ee0655561f/Image-JS-Full-Stack.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Learn full-stack development using the MERN stack: MongoDB, Express, React, and Node.js.',
      rating: 4.6,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Intermediate',
      skills: [
        'MERN Stack',
        'JavaScript Full',
        'Database Full',
        'APIs',
        'Çertification',
      ],
    },
    {
      name: 'DevOps Fundamentals',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/64/e9c91436254d768b5ddb328579b536/DevOps_PC_Image_Final.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Get started with DevOps to streamline your development and deployment processes.',
      rating: 4.5,
      provider: 'Google',
      category: 'Specialization',
      level: 'Beginner',
      skills: ['DevOps Basics', 'Backend introduction', 'Çertification'],
    },
    {
      name: 'Advanced DevOps Practices',
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/76/71a71596614eeb95713aea7e0584fa/Applied-DevOps-PC.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
      description:
        'Master advanced DevOps practices to improve your software delivery lifecycle.',
      rating: 4.8,
      provider: 'Meta',
      category: 'Specialization',
      level: 'Intermediate',
      skills: ['DevOps Advanced', 'Backend introduction', 'Çertification'],
    },
  ];

  getPopularCourses() {
    if (this.popularCourses.length === 0) {
      for (let item of this.courses) {
        if (item.rating >= 4.8) {
          this.popularCourses.push(item);
        }
      }

      return this.popularCourses;
    } else {
      return this.popularCourses;
    }
  }
}
