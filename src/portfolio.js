import dhrumil_about_image from './assets/dhrumil_images/dhrumil_image_2.jpg';
import dalhousie_university_image from './assets/education_images/dalhousie_university.jpg';
import gujarat_technological_university_image from './assets/education_images/gujarat_technological_university.jpg';
import medium_logo from './assets/logo_images/medium_logo.jpg';

export const portfolio = {
    aboutme: {
        fullName: "Dhrumil Shah",
        email: "shah.dhrumil1998@gmail.com",
        profileImage: dhrumil_about_image,
        linkedInLink: "https://www.linkedin.com/in/dhrumilshah98/",
        githubLink: "https://github.com/DhrumilShah98",
        instagramLink: "https://www.instagram.com/dhrumil_shah_98/",
        facebookLink: "https://www.facebook.com/dhrumil.shah1998/",
        twitterLink: "https://twitter.com/dhrumil_shah_98",
        heading: "Hi all, I'm Dhrumil",
        paragraph: "I am a computer science student who loves to develop end-user applications by applying software design and development principles. My area of interest includes Android development, Web development, Software development, and Cloud technologies. My hobbies are swimming, sketching, gym, and playing electric keyboard.",
        resumeLink: "https://drive.google.com/file/d/1cyyqGcpEwVLV6_rMTS5tNyBW7ElCYapM/view?usp=sharing"
    },
    experiences: [
        {
            company: "KPMG Canada | Toronto, CA",
            position: "Software Engineer Co-op | Mar 2022 - Aug 2022 (Present)",
            positionWork: null,
            positionWorkDesp: [
                "Implemented a centralized logging feature in the existing .NET project that improved the bug detection by 80%.",
                "Developed 10+ modules within 2 months solely using Agile(Scrum), Software Design Patterns and Principles.",
                "Automated a task for fetching Exchange Rates using C# Scripting, Fixer.io API and Azure Functions.",
                "Contributed to 2 projects simultaneously using C# (.NET), VueJS, NodeJS, SQL Server, and Microsoft Azure."
            ]
        },
        {
            company: "Dalhousie University | Halifax, CA",
            position: "Teaching Assistant | May 2022 - Aug 2022 (Present)",
            positionWork: null,
            positionWorkDesp: [
                "Professor - Dr Tushar Sharma",
                "Course - Software Engineering (CSCI 3130)",
                "Prepared customized lecture and lab materials on course topics that align with the course requirements.",
                "Delivered lectures and labs to a class of 60+ undergraduates on Web Development and Software Engineering.",
                "Acted as a project manager for 2 teams and guided them on project development using Agile(Scrum) manner. (ReactJS Frontend and Java Sprint Boot Backend)",
                "Performed technical troubleshooting with students during in-person labs and online on MS Teams.",
                "Delivered lectures and labs - Web Development | JavaScript | ReactJS | Material UI | React Boostrap | Java | Spring Boot | CI/CD | Git | GitLab."
            ]
        },
        {
            company: "Dalhousie University | Halifax, CA",
            position: "Teaching Assistant | Jan 2022 - Apr 2022",
            positionWork: null,
            positionWorkDesp: [
                "Professor - Dr Masud Rahman",
                "Course - Software Engineering (CSCI 3130)",
                "Prepared customized lecture materials & 15+ code tutorials on course topics that align with the course requirements.",
                "Delivered 30+ lectures & labs to a class of over 100+ undergraduates on Android, Web, and Software Engineering.",
                "Assisted students with technical troubleshooting and client TAs with domain expertise and suggestions.",
                "Tutorial Topics Delivered - Android | Git & GitLab | Firebase | Planning Game | Test-Driven Development (TDD) | Continuous Integration (CI) | Google Maps | Code Quality Analysis Tools (SonarQube & SonarLint) | PayPal Integration | Design Patterns | Chat Integration | Push Notifications"
            ]
        },
        {
            company: "Quixote Automotive Technologies Pvt. Ltd. | Ahmedabad, IN",
            position: "Android Developer | Jul 2020 - Feb 2021",
            positionWork: {
                line: "Worked on developing an Android application",
                name1: "Scouto App",
                name1Link: "https://play.google.com/store/apps/details?id=com.quixote.scouto",
                name2: "Scouto Website",
                name2Link: "https://scouto.in/",
            },
            positionWorkDesp: [
                "Devised workflows, architecture, and user interfaces for the application after eliciting key features from the users.",
                "Amplified the application development speed by 35% adhering to Google Material Design guidelines and MVVM architecture pattern.",
                "Accelerated bug detection efficiency by 70% with comprehensive test cases and exhaustive testing of the application.",
                "Drove the application deployment using Release on Demand methodology in an incremental fashion.",
                "Enhanced the storage and performance efficiency by 40% after major refactors on assets and core functionalities.",
                "Optimized and reduced the service layer's code by 30%, resulting in easier code maintenance and fewer bugs in production."
            ],
        },
        {
            company: "Quixote Automotive Technologies Pvt. Ltd. | Ahmedabad, IN",
            position: "Android Intern | Aug 2019 - Feb 2020",
            positionWork: {
                line: "Worked on developing Android applications ",
                name1: "Scouto Vendor",
                name1Link: "https://play.google.com/store/apps/details?id=com.quixote.scoutosellerbpcl",
                name2: "WheelIntel",
                name2Link: "https://play.google.com/store/apps/details?id=com.quixote.wheelintel",
            },
            positionWorkDesp: [
                "Expanded android skills while developing the application simultaneously to improve comprehension and assessment of large-scale code.",
                "Engineered the complete project development roadmap for both the applications and attained 80% positive feedback.",
                "Incorporated marketplace within the app using Shopify Storefront APIs and Mobile Buy SDK leading to user expansion by 43%."
            ]
        }
    ],
    educations: [
        {
            shortform: "DU",
            name: "Dalhousie University | Halifax, CA",
            years: "Jan 2021 - April 2022",
            course: "Master of Applied Computer Science",
            cgpa: "4.07/4.30",
            cpi: null,
            image: dalhousie_university_image,
            imageAlt: "Dalhousie University Logo and Text",
            transcriptLink: "https://drive.google.com/file/d/1B-nDlWFzkbo9UoEF1VFU2O5YiEkHgd0W/view?usp=sharing",
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
        technologies: ["Java", "Kotlin", "Python", "Android SDK", "C", "C++", "HTML5", "CSS3", "JavaScript", "XML", "JSON", "Thymeleaf", "Maven", "Gradle"],
        frameworks: ["Spring Boot", "BootStrap4", "Material UI", "Embedded JavaScript (EJS)", "React.js", "Express.js", "Node.js", "Flutter", "JUnit"],
        databases: ["MySQL", "MySQL Workbench", "SQLite", "MongoDB", "Neo4J"],
        cloudTechnologies: ["AWS Console", "Amazon S3", "Amazon DynamoDB", "Amazon Lex", "Amazon IAM", "AWS Lambda", "Amazon SNS", "Amazon SQS", "Amazon Comprehend", "Amazon CloudWatch", "Amazon Cognito", "Google Cloud Console", "Google Cloud Storage", "Google Pub/Sub", "Google Cloud Run", "Google Container Registry", "Google Compute Engine", "Google Data Studio", "Firebase Console", "Firebase Firestore", "Firebase Realtime Database", "Docker Cloud", "Heroku", "Vercel"],
        industryKnowledge: ["Object-Oriented Programming (OOP)", "Software Development Life Cycle (SDLC)", "Test Driven Development (TDD)", "SOLID Principles", "Database Design Principles", "Agile Methodology", "Scrum", "CI/CD", "Software Design Patterns", "Software Design Principles", "Model-View-Controller (MVC)", "Model-View-ViewModel (MVVM)", "Defensive Programming", "UML", "Algorithms", "Data Structures", "Reverse Engineering", "RESTful Architecture", "Atlassian Jira", "Postman", "IBM Cognos Analytics"],
        versionControl: ["Git", "GitHub", "GitLab", "BitBucket"]
    },
    projects: [
        {
            projectName: "Safe Deposit",
            projectTechnologies: ["React.js", "Material UI", "Express.js", "Node.js", "NPM", "AWS", "GCP", "Git", "GitHub", "Docker"],
            projectAWSTechnologies: ["Amazon DynamoDB", "Amazon S3", "Amazon Lambda", "Amazon Lex"],
            projectGCPTechnologies: ["Google Container Registry", "Google Cloud Run", "GCP Pub/Sub", "Google Firebase Firestore", "Google Data Studio"],
            projectDuration: "Sep 2021 - Dec 2021",
            projectAbout: "Safe Deposit is a serverless application built using a multi-cloud deployment architecture, and Backend-as-a-Service (BaaS). It provides a customization feature and, additional services for authorized users, and limited services to guests. The application provides online virtual assistance, which can quickly answer the queries of users, and in addition, it also provides a message-passing functionality between the authorized users.",
            projectGitHubLink: "https://github.com/DhrumilShah98/Dalhousie_University_CSCI5410_SDP#final-group-project",
            projectDeploymentLink: null
        },
        {
            projectName: "Travel Memories",
            projectTechnologies: ["React.js", "Material UI", "Express.js", "Node.js", "NPM", "AWS", "GCP", "Git", "GitHub", "Docker"],
            projectAWSTechnologies: ["Amazon DynamoDB", "Amazon S3", "Amazon Cognito", "Amazon Lambda"],
            projectGCPTechnologies: ["GCP App Engine", "API Gateway"],
            projectDuration: "Sep 2021 - Dec 2021",
            projectAbout: "TravelMemories is a web application built using Software as a Service (SaaS) delivery model that helps its users to plan trips for their leisure time or business easily. The application deals with multiple travel destinations and manages the reviews of each of the destinations with the help of comments and ratings. User Authentication, Posts Management, Security, and Performance are the key features of the web application.",
            projectGitHubLink: "https://github.com/DhrumilShah98/Dalhousie_University_CSCI5409_ACC#final-group-project",
            projectDeploymentLink: "https://my-travel-memories.de.r.appspot.com/"
        },
        {
            projectName: "Blood Book",
            projectTechnologies: ["Java", "JUnit", "Maven", "MySQL", "JIRA", "Git", "GitLab", "IntelliJ", "Heroku", "Data Structures", "Algorithms"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "May 2021 - Aug 2021",
            projectAbout: "A blood bank management system implemented using industrial software development standards such as Agile Methodology, SOLID principles, Design Patterns, Object-Oriented Programming, and Test Driven Development (TDD). Maintained a high-quality codebase following Seperation of Concerns, High Cohesion, Low Coupling, and clean code practices. Automated the application's deployment using GitLab's CI/CD pipeline to increase the team's performance and quality.",
            projectGitHubLink: "https://github.com/DhrumilShah98/Dalhousie_University_CSCI5308_ASDC#final-group-project",
            projectDeploymentLink: null
        },
        {
            projectName: "EnviClean",
            projectTechnologies: ["React.js", "Material UI", "Express.js", "Node.js", "NPM", "Git", "GitHub", "Postman", "Figma", "Heroku"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: ["GCP SQL"],
            projectDuration: "May 2021 - Aug 2021",
            projectAbout: "Engineered a garbage collection management system using UI/UX principles, Usability Principles, Information Architecture, and Usability Mapping by identifying key features from users. Developed high-quality, scalable, and reusable components using React JS and Material UI for enhanced user experience. Integrated front-end with back-end using Node, Express, GCP SQL, and MVC architecture to provide RESTful APIs. Automated the application's deployment using Heroku's CI/CD pipeline to increase the team's performance and quality.",
            projectGitHubLink: "https://github.com/DhrumilShah98/Group6_S21_EnviClean",
            projectDeploymentLink: "https://enviclean.herokuapp.com/"
        },
        {
            projectName: "Simple RDB and RDBMS",
            projectTechnologies: ["Java", "JUnit", "Maven", "Git", "GitLab", "IntelliJ", "Data Structures", "Algorithms"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "May 2021 - Aug 2021",
            projectAbout: "A Simple Custom Relational Database (RDB) and its Management System (RDBMS) provides features like Multi-factor authentication, Query Parser (For DDL, DQL, DML and TCL Queries), Query Processor (For DDL, DQL, DML and TCL Queries), Data Dictionary Generator/View, Meta Data Generator/View, SQL Dump Generator/View (SQL Dump Export), SQL Dump Import, ERD Generator/View, and Log Generator/View (General Logs, Query Logs, Event Logs).",
            projectGitHubLink: "https://github.com/DhrumilShah98/Dalhousie_University_CSCI5408_DMWA#final-group-project",
            projectDeploymentLink: null
        },
        {
            projectName: "Covid Tracker",
            projectTechnologies: ["Java", "JUnit", "Maven", "Git", "GitLab", "IntelliJ", "Data Structures", "Algorithms"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "Jan 2021 - Apr 2021",
            projectAbout: "Covid Tracker helps us manage the COVID-19 pandemic using contact tracing. When one person is diagnosed with COVID-19, the ability to notify other individuals who have been in contact with the person who is COVID-positive allows us to limit the spread of the disease faster. At the same time, the ability to use contact information to detect the frequency of large gatherings also helps us understand the community's compliance with physical distancing advisories. Covid Tracker is a scaled-down functionality of the Canadian federal government's application for contact tracing.",
            projectGitHubLink: "https://github.com/DhrumilShah98/Dalhousie_University_CSCI3901_SDC#final-project-covid-tracker",
            projectDeploymentLink: null
        },
        {
            projectName: "Handyman",
            projectTechnologies: ["HTML5", "CSS3", "BootStrap4", "JavaScript", "Embedded JavaScript (EJS)", "Express.js", "Node.js", "MongoDB", "Java", "Android"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "Jun 2018 - May 2019",
            projectAbout: "A platform for small-scale vendors, housewives and skilled people who are not able to showcase their skills due to reasons like less market knowledge, less awareness of how to target the customers, and due to large-scale companies who have acquired the market. Handyman helps such skilled people expand their business under their brand name, and customers can afford their services at a reasonable cost.",
            projectGitHubLink: "https://github.com/DhrumilShah98/Handyman",
            projectDeploymentLink: null
        },
        {
            projectName: "Hostel Admission System",
            projectTechnologies: ["HTML5", "CSS3", "BootStrap4", "JavaScript", "PHP", "MySQL"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "Dec 2017 - Mar 2018",
            projectAbout: "This project aims to solve the hostel admission problem faced by many students. A system was developed that solves the hostel allocation to the student by maintaining transparency in the admission procedure by considering four parameters, namely, the distance of student's hometown from the institute, merit, gender, and reservations.",
            projectGitHubLink: "https://github.com/DhrumilShah98/OnlineMeritBasedHostelAdmission",
            projectDeploymentLink: null
        },
    ],
    blogs: [
        {
            name: "AppBar in Flutter",
            logo: medium_logo,
            logoAlt: "Medium Logo",
            link: "https://dhrumilshah98.medium.com/appbar-in-flutter-ec628cc65f14",
            description: "The app bar is an important design element which stays generally on top of each screen below the status bar. It provides better user interaction and experience by allowing screen navigation and views switching.",
            dateOfPublish: "Dec 30, 2020"
        }
    ],
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
            issuer: "Student Start-up and Innovation Policy",
            issueDate: "Mar 25, 2018",
            credentialId: "1224",
            credentialLink: "https://drive.google.com/file/d/1KdjkCfn-yTTWv6SxTYzhdjY68r-URTA8/view?usp=sharing"
        },
        {
            name: "Smart Gujarat For New India Hackathon Regional Round",
            issuer: "Student Start-up and Innovation Policy",
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
    ],
    contactMe: {
        line: "Discuss a project or just want to say Hi? I am open for a conversation.",
        number: "+1 (902) 989 7865"
    }
};