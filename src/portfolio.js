import dhrumil_about_image from './assets/dhrumil_images/dhrumil_image_1.jpeg';
import dalhousie_university_image from './assets/education_images/dalhousie_university.jpg';
import gujarat_technological_university_image from './assets/education_images/gujarat_technological_university.jpg';

export const portfolio = {
    aboutus: {
        fullName: "Dhrumil Shah",
        email: "shah.dhrumil1998@gmail.com",
        dhrumil_about_image: dhrumil_about_image,
        linkedInLink: "https://www.linkedin.com/in/dhrumilshah98/",
        githubLink: "https://github.com/DhrumilShah98",
        instagramLink: "https://www.instagram.com/dhrumil_shah_98/",
        facebookLink: "https://www.facebook.com/dhrumil.shah1998/",
        twitterLink: "https://twitter.com/dhrumil_shah_98",
        heading: "Hi all, I'm Dhrumil",
        paragraph: "I am a computer science student who loves analyzing, designing, constructing, and testing end-user applications by applying software design and development principles. My area of interest includes Full-stack web development, Mobile development and Cloud Technologies.",
        resumeLink: "https://drive.google.com/file/d/1HO23rHchtH22TMK1QvM-76ouEeQJMiOs/view?usp=sharing"
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
    education: [
        {
            shortform: "DU",
            name: "Dalhousie University | Halifax, CA",
            years: "Jan 2021 - April 2022",
            course: "Master of Applied Computer Science",
            cgpa: "4.20/4.30",
            cpi: null,
            image: dalhousie_university_image,
            imageAlt: "Dalhousie University Logo and Text",
            transcriptLink: "https://drive.google.com/file/d/1bvpTU-i8KtaqWe4NmccAqzf-1aECzVtp/view?usp=sharing",
            degreeCertiLink: null
        },
        {
            shortform: "GTU",
            name: "Gujarat Technological University | Ahmedabad, IN",
            years: "Jul 2015 - May 2019",
            course: "Bachelors in Information and Communication Technology",
            cgpa: "9.06/10",
            cpi: "9.14/10",
            image: gujarat_technological_university_image,
            imageAlt: "Gujarat Technological University Logo and Text",
            transcriptLink: "https://drive.google.com/file/d/13hSg2kBPL_AlSNWpSoPZ02UqnW0SjzyB/view?usp=sharing",
            degreeCertiLink: "https://drive.google.com/file/d/1fVSo0CBJ4llzVKcBauD0ju9iPdKDd4jJ/view?usp=sharing"
        },
    ],
    skills: {
        technologies: ["Java", "Kotlin", "Flutter", "Dart", "Python", "C", "C++", "Html5", "CSS3", "Bootstrap4", "Material UI", "JavaScript", "React.js", "Express.js", "Embedded JavaScript (EJS)", "Node.js", "JSON"],
        databases: ["Relational Database (RDB)", "Relational Database Management System (RDBMS)", "SQL", "SQLite", "MySQL", "Non-Relational Database (Non-RDB)", "Non-Relational Database Management System (Non-RDBMS)", "NoSQL", "Firebase Realtime Database", "Firebase Database", "MongoDB", "AWS DynamoDB", "Neo4J"],
        cloudTechnologies: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Firebase Console", "Heroku", "Docker Cloud", "Cloudinary"],
        industryKnowledge: ["Algorithms", "Data Structures", "Object Oriented Programming (OOP)", "Agile Methodology", "Scrum", "JIRA", "Design Patterns", "Code Refactoring", "Software Development Life Cycle (SDLC)", "SOLID Principles", "Test Driven Development (TDD)", "CI/CD"],
        versionControl: ["Git", "GitHub", "GitLab", "BitBucket"]
    },
    certifications: [
        {
            name: "AWS Educate Introduction to Cloud 101",
            issuer: "Amazon Web Services (AWS)",
            issueDate: "Nov 1, 2021",
            credentialId: "W7RQE2D5KF6Q",
            credentialLink: "https://www.credly.com/badges/65fcc748-a9c7-40ba-bdd8-557e6b4111b8",
        },
        {
            name: "M001: MongoDB Basics",
            issuer: "MongoDB University",
            issueDate: "Apr 29, 2021",
            credentialId: "b291d32c-ef85-4a5b-aac4-c8e123557986",
            credentialLink: "https://university.mongodb.com/course_completion/b291d32c-ef85-4a5b-aac4-c8e123557986?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing",
        },
        {
            name: "Intermediate SQL",
            issuer: "Datacamp",
            issueDate: "Jun 13, 2020",
            credentialId: "fe141379c73910481f2b9a9889103cdc2a5b1645",
            credentialLink: "https://www.datacamp.com/statement-of-accomplishment/course/fe141379c73910481f2b9a9889103cdc2a5b1645",
        },
        {
            name: "Database Design",
            issuer: "Datacamp",
            issueDate: "Jun 13, 2020",
            credentialId: "a9e8f47a6760f5891f4a73e78e20e111dcb1ab8d",
            credentialLink: "https://www.datacamp.com/statement-of-accomplishment/course/a9e8f47a6760f5891f4a73e78e20e111dcb1ab8d",
        },
        {
            name: "Introduction to Relational Databases in SQL",
            issuer: "Datacamp",
            issueDate: "Jun 11, 2020",
            credentialId: "bb29a3d435a54c7a0990dd4631c5a6e7c0c1b529",
            credentialLink: "https://www.datacamp.com/statement-of-accomplishment/course/bb29a3d435a54c7a0990dd4631c5a6e7c0c1b529",
        },
        {
            name: "Joining Data in SQL",
            issuer: "Datacamp",
            issueDate: "Jun 09, 2020",
            credentialId: "d776b84f5c36d72774c11bfaee0351760ddfaadf",
            credentialLink: "https://www.datacamp.com/statement-of-accomplishment/course/d776b84f5c36d72774c11bfaee0351760ddfaadf",
        },
        {
            name: "Introduction to SQL",
            issuer: "Datacamp",
            issueDate: "Jun 08, 2020",
            credentialId: "feff362f883a8f2a4fda104dc097ec706350f6ae",
            credentialLink: "https://www.datacamp.com/statement-of-accomplishment/course/feff362f883a8f2a4fda104dc097ec706350f6ae",
        },
        {
            name: "Machine Learning",
            issuer: "Coursera and Stanford",
            issueDate: "Nov 6, 2019",
            credentialId: "W7RQE2D5KF6Q",
            credentialLink: "https://coursera.org/share/49b97fbdae12bf3dd821526d3b5fc929",
        },
        {
            name: "Full-Stack Web Development with React Specialization",
            issuer: "Coursera and HKUST",
            issueDate: "Jun 1, 2019",
            credentialId: "GZX4DFN5UADT",
            credentialLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/GZX4DFN5UADT",
        },
        {
            name: "Python for Everybody Specialization",
            issuer: "Coursera and University of Michigan",
            issueDate: "Apr 9, 2019",
            credentialId: "ZSJJTWKYE5JD",
            credentialLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZSJJTWKYE5JD",
        },
        {
            name: "Android Basics Nanodegree by Google",
            issuer: "Udacity and Google",
            issueDate: "Jul 12, 2018",
            credentialId: "KFYCGFHH",
            credentialLink: "https://confirm.udacity.com/KFYCGFHH",
        },
        {
            name: "Algorithmic Toolbox",
            issuer: "Coursera and UCSanDiego",
            issueDate: "Oct 18, 2017",
            credentialId: "9SS2X7QWHEHC",
            credentialLink: "https://www.coursera.org/account/accomplishments/certificate/9SS2X7QWHEHC",
        },
        {
            name: "Oracle Certified Associate (OCA), Java SE7 Programmer",
            issuer: "Oracle",
            issueDate: "Jul 22, 2017",
            credentialId: "40c5ebf4-c269-4107-ac56-be264ace45bc",
            credentialLink: "https://www.credly.com/badges/40c5ebf4-c269-4107-ac56-be264ace45bc",
        },
        {
            name: "Smart Gujarat For New India Hackathon Final Round",
            issuer: "Student Start-up and Innovation Policy (SSIP)",
            issueDate: "Mar 25, 2018",
            credentialId: "1224",
            credentialLink: "https://drive.google.com/file/d/1KdjkCfn-yTTWv6SxTYzhdjY68r-URTA8/view?usp=sharing"
        },
        {
            name: "Smart Gujarat For New India Hackathon Regional Round",
            issuer: "Student Start-up and Innovation Policy (SSIP)",
            issueDate: "Mar 11, 2018",
            credentialId: "1224",
            credentialLink: "https://drive.google.com/file/d/1m8Z8YvlcpPd7waJL0iTu0_xbI66bP1Vh/view?usp=sharing"
        },
        {
            name: "Certificate in C++",
            issuer: "C-DAC, GIST",
            issueDate: "Sep 18, 2017",
            credentialId: "GNA03Ju17534125",
            credentialLink: "https://drive.google.com/file/d/1kht0M5SG_v8xw7j6bYW9TNVQ-ht4OYUH/view?usp=sharing"
        },
        {
            name: "Certificate in C",
            issuer: "C-DAC, GIST",
            issueDate: "Oct 05, 2016",
            credentialId: "GNA03Fe16478313",
            credentialLink: "https://drive.google.com/file/d/1rLKr2K_0DP2hLBIutGhElOUxhay9ijFt/view?usp=sharing"
        },
    ]
};