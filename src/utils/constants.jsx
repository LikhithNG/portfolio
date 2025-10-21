// Icons
import { BsCodeSquare } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { SiFramework } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { FcProcess } from "react-icons/fc";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { RiFilePaper2Line } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";

// Images
import rt from "../assets/images/React.svg";

//Project Images
import P1 from "../assets/images/P1.png";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";

// Skills Logos
// 01
import Python from "../assets/images/Python.svg";
import Java from "../assets/images/Java.svg";
import SQL from "../assets/images/SQL.svg";
import Html from "../assets/images/Html.svg";
import CSS from "../assets/images/CSS.svg";

// 02
import NumPy from "../assets/images/NumPy.svg";
import pandas from "../assets/images/pandas.svg";
import ScikitLearn from "../assets/images/scikitlearn.svg";
import Matplotlib from "../assets/images/Matplotlib.svg";
import seaborn from "../assets/images/seaborn.svg";
import PyTorch from "../assets/images/PyTorch.svg";
import PyG from "../assets/images/PyTorchGeometric.png";
import MNEpython from "../assets/images/MNE-Python.svg";
import DBpedia from "../assets/images/DBpedia.svg";
// No Images Required - Quepy & Pyttsx

// 03
// No Images Required

// 04
// No Images Required

// 05
import MySQL from "../assets/images/MySQL.svg";
import MongoDB from "../assets/images/mongoDB.svg";
import snowflake from "../assets/images/snowflake.svg";
import AWSLambda from "../assets/images/AWS-Lambda.svg";
import GoogleColab from "../assets/images/GoogleColaboratory.svg";
import Jupyter from "../assets/images/jupyter.svg";

// 06
import PowerBI from "../assets/images/PowerBI.svg";
import Tableau from "../assets/images/Tableau.svg";
import Docker from "../assets/images/Docker.svg";
import Git from "../assets/images/Git.svg";
import NetBeans from "../assets/images/ApacheNetBeans.svg";
import Unity from "../assets/images/Unity.svg";
import UnrealEngine from "../assets/images/UnrealEngine.svg";
import Postman from "../assets/images/Postman.svg";
import JIRA from "../assets/images/Jira.svg";
import GitLab from "../assets/images/GitLab.svg";
import Jenkins from "../assets/images/Jenkins.svg";

// 07
import Windows11 from "../assets/images/Windows11.svg";
import macOS from "../assets/images/macOS.svg";

//SOCIAL
export const SOCIALS = [
  {
    linkedin: "http://linkedin.com/in/likhith-ng",
    github: "https://github.com/LikhithNG",
    instagram:
      "https://www.instagram.com/likhith.ng?igsh=eGJjNThtYTZwZngz&utm_source=qr",
  },
];

// NAVBAR
export const NAVBAR_LINKS = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Achievements", link: "#achievements" },
];

// HERO
export const TAGS = [
  { name: "Software & Data Engineering" },
  { name: "AI & Machine Learning" },
  { name: "Automation & Analytics" },
];
export const SUMMARY = [
  {
    content:
      "Curious engineer and problem-solver specializing in intelligent systems, automation, and AI. I build impactful solutions, lead collaborative teams, and tackle challenges with energy, innovation, and persistence.",
  },
];

//ABOUT
export const ABOUT = [
  {
    content: [
      {
        paragraph:
          "Hi, I'm Likhith Nagaralu Gurumurthy — a curious engineer, explorer, and problem solver who loves turning complex challenges into impactful solutions. I'm passionate about designing intelligent systems, automating workflows, and constantly learning new technologies to push the boundaries of what's possible.",
      },
      {
        paragraph:
          "I thrive in collaborative environments and enjoy leading teams where creativity and precision come together to build something extraordinary. My approach to tech is hands-on, innovative, and deeply driven by curiosity.",
      },
      {
        paragraph:
          "Outside of work, I'm a state-level badminton player and an avid traveler who loves to trek, run, and hike. Whether it’s conquering a mountain trail or debugging a tough piece of code, I bring energy, focus, and persistence to everything I do.",
      },
      {
        paragraph: "For me, growth isn't just a goal — it's a way of life.",
      },
    ],
    link: "http://linkedin.com/in/likhith-ng",
  },
];

// EXPERIENCE
export const EXPERIENCE = [
  {
    designation: "Quality Assurance Intern",
    companyName: "Pro-Test Private Limited",
    location: "Bengaluru, India",
    companyLogo: rt,
    content: [
      {
        paragraph:
          "Built end-to-end validation workflows across UI and APIs using Playwright and Postman, reducing manual regression testing by 40%.",
      },
      {
        paragraph:
          "Embedded automated compliance checks in CI/CD pipelines, ensuring system integrity before release.",
      },
      {
        paragraph:
          "Cut defect resolution time by 30% by troubleshooting pipeline failures, improving traceability and release reliability.",
      },
      {
        paragraph:
          "Maintained Jira dashboards with real-time quality metrics to support continuous improvement and regulatory reporting.",
      },
      {
        paragraph:
          "Aligned automation with stakeholder expectations by mapping test cases to business requirements and demoing compliance coverage in Agile sprints.",
      },
    ],
    duration: "September 2023 - February 2024",
  },
  {
    designation: "Data Engineering Intern",
    companyName: "Compsoft Technologies (CST)",
    location: "Bengaluru, India",
    companyLogo: rt,
    content: [
      {
        paragraph:
          "Contributed to building a voice-enabled virtual assistant aimed at improving accessibility for visually impaired users, with a focus on real-time speech interaction and information retrieval.",
      },
      {
        paragraph:
          "Designed and executed 30+ comprehensive test cases to validate feature functionality and ensure reliability across varied user scenarios.",
      },
      {
        paragraph:
          "Automated data retrieval and processing pipelines using Python with DBpedia, Quepy, and Pyttsx, while conducting API testing via Postman and ensuring backend data integrity using SQL.",
      },
      {
        paragraph:
          "Improved system stability and reduced error rates by identifying performance bottlenecks and optimizing feature behavior, resulting in a smoother and more responsive user experience.",
      },
    ],
    duration: "August 2022 - January 2023",
  },
];

// PROJECTS
export const PROJECTS = [
  {
    title: "Deep Learning for EEG Signal Analysis",
    content: [
      {
        line: "Engineered a self-supervised graph neural network pipeline for EEG-based seizure detection and classification.",
      },
      {
        line: "Integrated DCRNN with contrastive pretraining and multi-head attention for spatiotemporal pattern learning and interpretability.",
      },
      {
        line: "Built dynamic correlation graphs, optimized PyTorch Geometric training, and benchmarked models (CNN, LSTM, GNN) using F1-score and AUROC metrics across large-scale EEG datasets.",
      },
    ],
    link: "https://github.com/LikhithNG/Deep-Learning-for-EEG-Signal-Analysis-",
    img: P1,
    tags: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "PyTorch Geometric" },
      { name: "SciPy" },
      { name: "scikit-learn" },
      { name: "MNE-Python" },
    ],
  },
  {
    title: "Delivery Easy",
    content: [
      {
        line: "Developed an enterprise-grade delivery management system using Java (MVC architecture) and MySQL for real-time logistics automation.",
      },
      {
        line: "Implemented role-based authentication, route optimization algorithms, and automated order dispatching to streamline customer-driver-admin workflows.",
      },
      {
        line: "Integrated real-time tracking, digital proof-of-delivery, and analytical dashboards for performance monitoring and operational insights.",
      },
    ],
    link: "https://github.com/LikhithNG/Deliver_easy",
    img: P2,
    tags: [
      { name: "Java" },
      { name: "MySQL" },
      { name: "JDBC" },
      { name: "Swing" },
      { name: "MVC Architecture" },
      { name: "Object-Oriented Design" },
    ],
  },
  {
    title: "Smart Hydroponic Farm Management System",
    content: [
      {
        line: "Built a PL/SQL-based automation and analytics system for greenhouse operations.",
      },
      {
        line: "Designed a 3NF relational schema with triggers, stored procedures, and role-based access to automate crop cycles, sensor monitoring, and inventory tracking.",
      },
      {
        line: "Integrated real-time data validation and analytical SQL views, enabling accurate forecasting and improving operational efficiency by 30%.",
      },
    ],
    link: "https://github.com/LikhithNG/Deep-Learning-for-EEG-Signal-Analysis-",
    img: P3,
    tags: [
      { name: "PL/SQL" },
      { name: "SQL Developer" },
      { name: "Stored Procedures" },
      { name: "Triggers" },
      { name: "Data Validation" },
      { name: "Analytical Views" },
    ],
  },
  {
    title: "Leukemia Cancer Detection",
    content: [
      {
        line: "Developed a multi-class leukemia classification system using YOLOv5, YOLOv4, Faster R-CNN, and CNN architectures for high-precision cell detection and subtype recognition from microscopic images.",
      },
      {
        line: "Built robust data preprocessing and augmentation pipelines, optimized model performance through transfer learning and hyperparameter tuning, and deployed inference via Flask for real-time detection.",
      },
    ],
    link: "https://github.com/LikhithNG/Deep-Learning-for-EEG-Signal-Analysis-",
    img: P4,
    tags: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "YOLOv5/v4" },
      { name: "Faster R-CNN" },
      { name: "Flask" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
    ],
  },
];

// SKILLS
export const SKILLS = [
  // 01
  {
    logo: <BsCodeSquare size={40} />,
    title: "Languages",
    grids: 1,
    items: [
      { name: "Python", imgSrc: Python },
      { name: "Java", imgSrc: Java },
      { name: "SQL", imgSrc: SQL },
      { name: "HTML", imgSrc: Html },
      { name: "CSS", imgSrc: CSS },
    ],
  },
  // 02
  {
    logo: (
      <div className="flex items-center gap-4">
        <IoLibraryOutline size={40} /> <SiFramework size={32} />
      </div>
    ),
    title: "Libraries & Frameworks",
    grids: 2,
    items: [
      { name: "NumPy", imgSrc: NumPy },
      { name: "pandas", imgSrc: pandas },
      { name: "scikit-learn", imgSrc: ScikitLearn },
      { name: "Matplotlib", imgSrc: Matplotlib },
      { name: "seaborn", imgSrc: seaborn },
      { name: "PyTorch", imgSrc: PyTorch },
      { name: "PyTorch Geometric", imgSrc: PyG },
      { name: "MNE-Python", imgSrc: MNEpython },
      { name: "DBpedia", imgSrc: DBpedia },
      { name: "Quepy" },
      { name: "Pyttsx" },
    ],
  },
  // 03
  {
    logo: (
      <div className="flex items-center gap-4">
        <GrTechnology size={35} />
        <BsClipboardData size={40} />
      </div>
    ),
    title: "Machine Learning & Data Science",
    grids: 1,
    items: [
      { name: "Supervised/Unsupervised Learning" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
      { name: "Data Preprocessing" },
      { name: "Dimensionality Reduction" },
      { name: "Time Series Analysis" },
    ],
  },
  // 04
  {
    logo: (
      <div className="flex items-center gap-4">
        <BsClipboardData size={40} />
        <FcProcess size={40} className="text-white" />
      </div>
    ),
    title: "Data Analytics & Processing",
    grids: 1,
    items: [
      { name: "Data Cleaning" },
      { name: "EDA" },
      { name: "Statistical Analysis" },
      { name: "Data Mining" },
      { name: "Data Transformation" },
      { name: "ETL processes" },
    ],
  },
  // 05
  {
    logo: (
      <div className="flex items-center gap-4">
        <TbCloudComputing size={40} />
        <BsDatabase size={40} />
      </div>
    ),
    title: "Cloud & Databases",
    grids: 1,
    items: [
      { name: "MySQL", imgSrc: MySQL },
      { name: "MongoDB", imgSrc: MongoDB },
      { name: "Snowflake", imgSrc: snowflake },
      { name: "AWS Lambda", imgSrc: AWSLambda },
      { name: "Google Colab", imgSrc: GoogleColab },
      { name: "Jupyter Notebook", imgSrc: Jupyter },
    ],
  },
  // 06
  {
    logo: (
      <div className="flex items-center gap-4">
        <VscServerProcess size={40} />
        <FaMagnifyingGlassChart size={36} />
      </div>
    ),
    title: "Software & Visualization Tools",
    grids: 2,
    items: [
      { name: "Power BI", imgSrc: PowerBI },
      { name: "Tableau", imgSrc: Tableau },
      { name: "Docker", imgSrc: Docker },
      { name: "Git", imgSrc: Git },
      { name: "NetBeans", imgSrc: NetBeans },
      { name: "Unity", imgSrc: Unity },
      { name: "Unreal Engine", imgSrc: UnrealEngine },
      { name: "Postman", imgSrc: Postman },
      { name: "JIRA", imgSrc: JIRA },
      { name: "GitLab", imgSrc: GitLab },
      { name: "Jenkins", imgSrc: Jenkins },
    ],
  },
  // 07
  {
    logo: <RiComputerLine size={40} />,
    title: "Operating Systems",
    grids: 2,
    items: [
      { name: "Windows", imgSrc: Windows11 },
      { name: "macOS", imgSrc: macOS },
    ],
  },

  // 08 - Research
  {
    logo: <RiFilePaper2Line size={40} />,
    title: "Research Publications",
    grids: 1,
    items: [
      {
        name: "“Leukemia Cancer Detection Using Deep Learning,” IJRMETS, Vol. 05, Issue 05, May 2023.",
      },
    ],
  },

  // 09 - Certification
  {
    logo: <PiCertificate size={40} />,
    title: "Certifications",
    grids: 1,
    items: [
      { name: "Salesforce AI Associate Certification — Salesforce, Jan 2025." },
      { name: "M001: MongoDB Basics — MongoDB University, Dec 2021." },
      {
        name: "NoSQL Database & Big Data (Hadoop) — Great Learning Academy, 2022-2023.",
      },
      { name: "Blockchain Technology Workshop — CyberPeace Foundation, 2021." },
    ],
  },
];

// ACHIEVEMENTS
export const ACHIEVEMENTS = [
  // 01
  {
    title: "Second Prize — Best Final Year Project Presentation",
    subtitle: "Information Science Dept., BNMIT",
    desc: "Recognized for presenting “Smart Hydroponic Farm Management System,” a database-driven automation solution that improved operational efficiency through PL/SQL workflows and analytical dashboards.",
    year: "2023",
  },
  // 02
  {
    title: "Organizer & Lead Mentor — “Intro to PyTorch” Student Workshop",
    subtitle: "BNMIT Tech Club",
    desc: "Planned and delivered a 90-minute hands-on workshop on deep learning fundamentals, data preprocessing, and model evaluation using PyTorch; trained 40+ undergraduates in practical AI workflows.",
    year: "2023",
  },
  // 03
  {
    title: "Third Prize — Men's Singles Badminton",
    subtitle: "VTU Intercollegiate Badminton Tournament, BMSCE",
    desc: "Secured third place representing BNMIT at the VTU state-level intercollegiate tournament, demonstrating teamwork, focus, and discipline through competitive performance across 50+ participants.",
    year: "2022",
  },
  // 04
  {
    title: "Idea Recognition — 'Daily-Very' (Online Delivery App)",
    subtitle: "Interdepartmental Hackathon, BNMIT",
    desc: "Proposed and demonstrated a full-stack delivery platform prototype featuring automated order routing and real-time delivery tracking; commended for innovative use of Java and MySQL in process optimization.",
    year: "2021",
  },
];

// CONTACT

// FOOTER
