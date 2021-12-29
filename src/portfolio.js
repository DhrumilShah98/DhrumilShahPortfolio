import dhrumil_about_image from './assets/dhrumil_images/dhrumil_image_1.jpeg';
import dalhousie_university_image from './assets/education_images/dalhousie_university.jpg';
import gujarat_technological_university_image from './assets/education_images/gujarat_technological_university.jpg';

export const portfolio = {
    fullName: "Dhrumil Shah",
    email: "shah.dhrumil1998@gmail.com",
    dhrumil_about_image: dhrumil_about_image,
    aboutus: {
        linkedInLink: "https://www.linkedin.com/in/dhrumilshah98/",
        githubLink: "https://github.com/DhrumilShah98",
        instagramLink: "https://www.instagram.com/dhrumil_shah_98/",
        facebookLink: "https://www.facebook.com/dhrumil.shah1998/",
        twitterLink: "https://twitter.com/dhrumil_shah_98",
        heading: "Hi all, I'm Dhrumil",
        paragraph: "I am a computer science student who loves analyzing, designing, constructing, and testing end-user applications by applying software design and development principles. My area of interest includes Full-stack web development, Mobile development and Cloud Technologies."
    },
    professionalExp: {
        company1: "Quixote Automotive Technologies Pvt. Ltd. | Ahmedabad, IN",
        position1: "Android Developer | Jul 2020 - Feb 2021",
        position1Desp: [
            "Devised workflows, architecture, and user interfaces for the application using tools like Lucidchart, draw.io, and Figma after identifying key features from the users.",
            "Increased the application development speed by 35% adhering to Google Material Design guidelines and Model-View-View-Model (MVVM) architecture pattern.",
            "Increased the bug detection efficiency and accuracy by 70% by designing comprehensive test cases and performing exhaustive testing of the application.",
            "Drove the application deployment using the Release on Demand methodology in an incremental fashion adhering to the security considerations agreed upon.",
            "Optimized and reduced the service layer's code by 30%, resulting in easier code maintenance and fewer bugs in production."
        ],
        position2: "Android Intern | Aug 2019 - Feb 2020",
        position2Desp: [
            "Gained practical experience with Java, Kotlin, Android SDK, Gradle, Third-party Libraries, RESTful APIs, VCS, SonarLint, Firebase, GCP and Google Play Console in less than 2 months.",
            "Managed project development process for both the applications from requirement specifications to deployment of the application and attained 80% positive feedback.",
            "Learned and Integrated Shopify Storefront APIs and Shopify Android Buy SDK in WheelIntel application."
        ]
    },
    education: {
        university1: {
            shortform: "DU",
            name: "Dalhousie University | Halifax, CA",
            years: "Jan 2021 - April 2022",
            course: "Master of Applied Computer Science",
            cgpa: "4.20/4.30",
            image: dalhousie_university_image,
            imageAlt: "Dalhousie University Logo and Text"
        },
        university2: {
            shortform: "GTU",
            name: "Gujarat Technological University | Ahmedabad, IN",
            years: "Jul 2015 - May 2019",
            course: "Bachelors in Information and Communication Technology",
            cgpa: "9.06/10",
            cpi: "9.14/10",
            image: gujarat_technological_university_image,
            imageAlt: "Gujarat Technological University Logo and Text"
        },
    },
    skills: {
        technologies: ["Java", "Kotlin", "Flutter", "Dart", "Python", "C", "C++", "Html5", "CSS3", "Bootstrap4", "Material UI", "JavaScript", "React.js", "Express.js", "Embedded JavaScript (EJS)", "Node.js", "JSON"],
        databases: ["Relational Database (RDB)", "Relational Database Management System (RDBMS)", "SQL", "SQLite", "MySQL", "Non-Relational Database (Non-RDB)", "Non-Relational Database Management System (Non-RDBMS)", "NoSQL", "Firebase Realtime Database", "Firebase Database", "MongoDB", "AWS DynamoDB", "Neo4J"],
        cloudTechnologies: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase Console", "Heroku", "Docker Cloud", "Cloudinary"],
        industryKnowledge: ["Algorithms", "Data Structures", "Object Oriented Programming (OOP)", "Agile Methodology", "Scrum", "JIRA", "Design Patterns", "Code Refactoring", "Software Development Life Cycle (SDLC)", "SOLID Principles", "Test Driven Development (TDD)", "CI/CD"],
        versionControl: ["Git", "GitHub", "GitLab", "BitBucket"]
    }
};