import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Projectsschool } from "./projectsschool";
import { EducationCard } from './EducationCard'
import projImg1 from "../assets/workBack1.png";
import projImg2 from "../assets/budy_coatch.png";
import projImg3 from "../assets/pingpong.jpeg";
import educationImg1 from "../assets/fpk.png";
import educationImg2 from "../assets/1337_1.jpeg";
import projectsschool1 from "../assets/cub3d.png";
import projectsschool2 from "../assets/web_server.jpeg";
import projectsschool3 from "../assets/pingpong.jpeg";
import projectsschool4 from "../assets/inception.webp";
import projectsschool5 from "../assets/minishell.png";

import 'animate.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const EducationClick = (project) => {
    setSelectedEducation(project);
    setShowModal1(true);
  };

  const handleClose = () => setShowModal(false);
  const handleClose1 = () => setShowModal1(false);

  const projects = [
    {
      title: "Frontaend Mobile Developer at BudyCoatch",
      description: {
        intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
        keyContributions: {
          title: "Key Contributions",
          items: [
            "React Native: Led the mobile application development, delivering a seamless and intuitive experience across iOS and Android platforms. Focused on building fast, responsive, and user-friendly interfaces.",
            "NestJS: Engineered a scalable and secure backend infrastructure using NestJS, which provided efficient data management, API integration, and robust user authentication.",
            "Tailwind CSS: Designed stylish and cohesive interfaces with Tailwind CSS, ensuring a visually engaging and consistent user experience.",
            "Prisma & PostgreSQL: Utilized Prisma as an ORM for efficient data handling, paired with PostgreSQL for secure and scalable data storage, enabling the application to grow smoothly with increasing user demands.",
            "Firebase: Implemented Firebase for real-time data interactions and secure user authentication, ensuring smooth performance and safeguarding sensitive user data.",
            "Docker: Employed Docker for containerization, ensuring consistent development and production environments across all stages of the project.",
            "Git: Managed version control using Git, ensuring smooth collaboration across teams and maintaining project integrity through well-organized and trackable changes."
          ]
        },
        collaborationAndResults: {
          title: "Collaboration and Results",
          items: [
            "Worked alongside cross-functional teams to ensure smooth frontend and backend integration, resulting in real-time synchronization and an optimized user experience.",
            " Leveraged Docker to streamline the development and deployment process, improving the reliability and efficiency of the development workflow.",
            " Delivered scalable, secure, and high-performance solutions, meeting the growing demands of the mobile platform while maintaining a seamless user experience."
          ]
        },
        softSkills: {
          title: "Soft Skills Developed",
          items: [
            "Leadership in mobile development: Directed mobile development efforts to ensure the solutions were both user-friendly and technically robust.",
            "Effective time and resource management: Collaborated efficiently across teams, ensuring deadlines were met and projects stayed on track.",
            "Adaptability and problem-solving: Tackled challenges with innovative solutions, adapting quickly to new technologies and project needs, ensuring successful project delivery."
          ]
        }
      },
      imgUrl: projImg2
    },
    {
      title: "Full-Stack Mobile Developer at Moojbuzz",
      description: {
        intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
        keyContributions: {
          title: "Key Contributions",
          items: [
            "React Native: Led the mobile application development, delivering a seamless and intuitive experience across iOS and Android platforms. Focused on building fast, responsive, and user-friendly interfaces.",
            "NestJS: Engineered a scalable and secure backend infrastructure using NestJS, which provided efficient data management, API integration, and robust user authentication.",
            "Tailwind CSS: Designed stylish and cohesive interfaces with Tailwind CSS, ensuring a visually engaging and consistent user experience.",
            "Prisma & PostgreSQL: Utilized Prisma as an ORM for efficient data handling, paired with PostgreSQL for secure and scalable data storage, enabling the application to grow smoothly with increasing user demands.",
            "Firebase: Implemented Firebase for real-time data interactions and secure user authentication, ensuring smooth performance and safeguarding sensitive user data.",
            "Docker: Employed Docker for containerization, ensuring consistent development and production environments across all stages of the project.",
            "Git: Managed version control using Git, ensuring smooth collaboration across teams and maintaining project integrity through well-organized and trackable changes."
          ]
        },
        collaborationAndResults: {
          title: "Collaboration and Results",
          items: [
            "Worked alongside cross-functional teams to ensure smooth frontend and backend integration, resulting in real-time synchronization and an optimized user experience.",
            " Leveraged Docker to streamline the development and deployment process, improving the reliability and efficiency of the development workflow.",
            " Delivered scalable, secure, and high-performance solutions, meeting the growing demands of the mobile platform while maintaining a seamless user experience."
          ]
        },
        softSkills: {
          title: "Soft Skills Developed",
          items: [
            "Leadership in mobile development: Directed mobile development efforts to ensure the solutions were both user-friendly and technically robust.",
            "Effective time and resource management: Collaborated efficiently across teams, ensuring deadlines were met and projects stayed on track.",
            "Adaptability and problem-solving: Tackled challenges with innovative solutions, adapting quickly to new technologies and project needs, ensuring successful project delivery."
          ]
        }
      },
      imgUrl: projImg1
    },
 

  ];
  // const projectsschool = [
  //   {
  //     title: "Frontaend Mobile Developer at BudyCoatch",
  //     description: {
  //       intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
  //       keyContributions: {
  //         title: "Key Contributions",
  //         items: [
  //           "React Native: Led the mobile application development, delivering a seamless and intuitive experience across iOS and Android platforms. Focused on building fast, responsive, and user-friendly interfaces.",
  //           "NestJS: Engineered a scalable and secure backend infrastructure using NestJS, which provided efficient data management, API integration, and robust user authentication.",
  //           "Tailwind CSS: Designed stylish and cohesive interfaces with Tailwind CSS, ensuring a visually engaging and consistent user experience.",
  //           "Prisma & PostgreSQL: Utilized Prisma as an ORM for efficient data handling, paired with PostgreSQL for secure and scalable data storage, enabling the application to grow smoothly with increasing user demands.",
  //           "Firebase: Implemented Firebase for real-time data interactions and secure user authentication, ensuring smooth performance and safeguarding sensitive user data.",
  //           "Docker: Employed Docker for containerization, ensuring consistent development and production environments across all stages of the project.",
  //           "Git: Managed version control using Git, ensuring smooth collaboration across teams and maintaining project integrity through well-organized and trackable changes."
  //         ]
  //       },
  //       collaborationAndResults: {
  //         title: "Collaboration and Results",
  //         items: [
  //           "Worked alongside cross-functional teams to ensure smooth frontend and backend integration, resulting in real-time synchronization and an optimized user experience.",
  //           " Leveraged Docker to streamline the development and deployment process, improving the reliability and efficiency of the development workflow.",
  //           " Delivered scalable, secure, and high-performance solutions, meeting the growing demands of the mobile platform while maintaining a seamless user experience."
  //         ]
  //       },
  //       softSkills: {
  //         title: "Soft Skills Developed",
  //         items: [
  //           "Leadership in mobile development: Directed mobile development efforts to ensure the solutions were both user-friendly and technically robust.",
  //           "Effective time and resource management: Collaborated efficiently across teams, ensuring deadlines were met and projects stayed on track.",
  //           "Adaptability and problem-solving: Tackled challenges with innovative solutions, adapting quickly to new technologies and project needs, ensuring successful project delivery."
  //         ]
  //       }
  //     },
  //     imgUrl: projectsschool1
  //   },
  //   {
  //     title: "Full-Stack Mobile Developer at Moojbuzz",
  //     description: {
  //       intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
  //       keyContributions: {
  //         title: "Key Contributions",
  //         items: [
  //           "React Native: Led the mobile application development, delivering a seamless and intuitive experience across iOS and Android platforms. Focused on building fast, responsive, and user-friendly interfaces.",
  //           "NestJS: Engineered a scalable and secure backend infrastructure using NestJS, which provided efficient data management, API integration, and robust user authentication.",
  //           "Tailwind CSS: Designed stylish and cohesive interfaces with Tailwind CSS, ensuring a visually engaging and consistent user experience.",
  //           "Prisma & PostgreSQL: Utilized Prisma as an ORM for efficient data handling, paired with PostgreSQL for secure and scalable data storage, enabling the application to grow smoothly with increasing user demands.",
  //           "Firebase: Implemented Firebase for real-time data interactions and secure user authentication, ensuring smooth performance and safeguarding sensitive user data.",
  //           "Docker: Employed Docker for containerization, ensuring consistent development and production environments across all stages of the project.",
  //           "Git: Managed version control using Git, ensuring smooth collaboration across teams and maintaining project integrity through well-organized and trackable changes."
  //         ]
  //       },
  //       collaborationAndResults: {
  //         title: "Collaboration and Results",
  //         items: [
  //           "Worked alongside cross-functional teams to ensure smooth frontend and backend integration, resulting in real-time synchronization and an optimized user experience.",
  //           " Leveraged Docker to streamline the development and deployment process, improving the reliability and efficiency of the development workflow.",
  //           " Delivered scalable, secure, and high-performance solutions, meeting the growing demands of the mobile platform while maintaining a seamless user experience."
  //         ]
  //       },
  //       softSkills: {
  //         title: "Soft Skills Developed",
  //         items: [
  //           "Leadership in mobile development: Directed mobile development efforts to ensure the solutions were both user-friendly and technically robust.",
  //           "Effective time and resource management: Collaborated efficiently across teams, ensuring deadlines were met and projects stayed on track.",
  //           "Adaptability and problem-solving: Tackled challenges with innovative solutions, adapting quickly to new technologies and project needs, ensuring successful project delivery."
  //         ]
  //       }
  //     },
  //     imgUrl: projectsschool2
  //   },
  //   {
  //     title: "Full-Stack Mobile Developer at Moojbuzz",
  //     description: {
  //       intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
  //       keyContributions: {
  //         title: "Key Contributions",
  //         items: [
  //           "React Native: Led the mobile application development, delivering a seamless and intuitive experience across iOS and Android platforms. Focused on building fast, responsive, and user-friendly interfaces.",
  //           "NestJS: Engineered a scalable and secure backend infrastructure using NestJS, which provided efficient data management, API integration, and robust user authentication.",
  //           "Tailwind CSS: Designed stylish and cohesive interfaces with Tailwind CSS, ensuring a visually engaging and consistent user experience.",
  //           "Prisma & PostgreSQL: Utilized Prisma as an ORM for efficient data handling, paired with PostgreSQL for secure and scalable data storage, enabling the application to grow smoothly with increasing user demands.",
  //           "Firebase: Implemented Firebase for real-time data interactions and secure user authentication, ensuring smooth performance and safeguarding sensitive user data.",
  //           "Docker: Employed Docker for containerization, ensuring consistent development and production environments across all stages of the project.",
  //           "Git: Managed version control using Git, ensuring smooth collaboration across teams and maintaining project integrity through well-organized and trackable changes."
  //         ]
  //       },
  //       collaborationAndResults: {
  //         title: "Collaboration and Results",
  //         items: [
  //           "Worked alongside cross-functional teams to ensure smooth frontend and backend integration, resulting in real-time synchronization and an optimized user experience.",
  //           " Leveraged Docker to streamline the development and deployment process, improving the reliability and efficiency of the development workflow.",
  //           " Delivered scalable, secure, and high-performance solutions, meeting the growing demands of the mobile platform while maintaining a seamless user experience."
  //         ]
  //       },
  //       softSkills: {
  //         title: "Soft Skills Developed",
  //         items: [
  //           "Leadership in mobile development: Directed mobile development efforts to ensure the solutions were both user-friendly and technically robust.",
  //           "Effective time and resource management: Collaborated efficiently across teams, ensuring deadlines were met and projects stayed on track.",
  //           "Adaptability and problem-solving: Tackled challenges with innovative solutions, adapting quickly to new technologies and project needs, ensuring successful project delivery."
  //         ]
  //       }
  //     },
  //     imgUrl: projectsschool3
  //   },

  // ];
  const projectsschool = [
 
    {
      id: 0,
      title: 'Ft_Transcendence',
      description: `🌐 Developed a dynamic web platform with my skilled team, using Nest.js for the backend and Next.js for the frontend. We focused on exceptional performance, security 🔒, and user experience. Implemented password hashing and SQL injection protection. The platform features intuitive navigation, OAuth login for connecting with friends worldwide 🌍, and interactive chat with private messaging 💬. Also included a modern twist on the classic Pong game 🕹️, blending nostalgia with innovative design. `,
      time: '202311',
      inProgress: false,
      slug: 'https://github.com/Hbadr13/ft_transcendence',
      imgUrl: projectsschool3,
      skils: ['Full Stack', 'Work with team', 'Nextjs', 'NestJs', 'PostgreSQL', 'Docker', 'TypeScript', 'TailwindCSS', 'Prisma']
    },
    {
      id: 0,
      title: 'Inception',
      description: `🛠️ Implemented a small-scale infrastructure within a virtual machine using Docker Compose. Created custom Dockerfiles for each service, adhering to performance guidelines with the latest stable versions of Alpine or Debian. Configured NGINX with TLSv1.2/TLSv1.3 🔒, WordPress with php-fpm, and MariaDB in dedicated containers. Set up volumes for WordPress database and files 📂, and established a Docker network for seamless inter-container communication 🌐.`,
      time: '202307',
      inProgress: false,
      slug: 'https://github.com/Hbadr13/inception',
      imgUrl: projectsschool4,
      skils: ['Docker', 'Docker Compose', 'Nginx', 'mariadb']
    },

    {
      id: 0,
      title: 'Web server',
      description: `🌐 Developed a custom HTTP server in C++ using object-oriented programming principles, capable of handling HTTP requests 📨 and responses, allowing testing with real web browsers 🌍. The server also supports WebSocket communication for real-time interaction ⚡ between clients and the server.`,
      time: '202301',
      inProgress: false,
      slug: 'https://github.com/Hbadr13/webserv',
      imgUrl: projectsschool2,
      skils: ['C/C++', 'Work with team', 'Nginx', 'WebSocket', 'HTTP Req/Res']
    },
    {
      id: 0,
      title: 'Cub3d',
      description: `🎮 Developed a dynamic 3D maze exploration project inspired by Wolfenstein 3D 🧱, utilizing ray-casting techniques and applying mathematics to create efficient algorithms, enhancing skills in graphic design, event handling, and algorithmic problem-solving. 🧩`,
      time: '202212',
      inProgress: false,
      slug: 'https://github.com/Hbadr13/cub3d',
      imgUrl: projectsschool1,
      skils: ['C/C++', 'Work with team', 'Ray-Casting']
    },
    {
      id: 0,
      title: 'Minishell',
      description: `🛠️ Created a simple shell, deepening understanding of processes and file descriptors. This project provided hands-on experience with command-line interactions and the underlying mechanisms that shaped early computing interfaces. 💻`,
      time: '202208',
      inProgress: false,
      slug: 'https://github.com/Hbadr13/minishell',
      imgUrl: projectsschool5,
      skils: ['C/C++', 'Work with team', 'Bash']
      
    },
  ]



  const Education = [
    {
      id: 0,
      title: "1337 Coding School",
      school: {
        name: '1337 Coding School',
        image: educationImg2,
        country: 'Morroco',
        city: 'khouribga',
      },
      branch: 'Software engineer',
      description: `1337 is the first institution to provide free IT training in Morocco. Its educational approach is based on peer learning, a participatory method that allows students to unleash their creativity through project-based learning, preparing the future coders of tomorrow.
        1337 is the coding school par excellence, offering a full immersion in a universe where the future is already present.`,
      startTime: 'Nov 2021',
      endTime: 'Present',
      slug: 'https://1337.ma/',
      imgUrl: educationImg2
    },
    {
      id: 1,
      title: "Faculté Polydisciplinaire de Khouribga",
      school: {
        name: 'Faculté Polydisciplinaire de Khouribga',
        image: educationImg1,
        country: 'Morroco',
        city: 'khouribga',
      },
      branch: 'Sciences mathématiques informatique et applications',
      description: `The Faculté Polydisciplinaire de Khouribga (FPK), established in 2004 as part of Morocco's decentralization and regionalization policies, is a multidisciplinary university under Sultan Moulay Slimane University. FPK offers a variety of initial and continuing education programs across fundamental and professional disciplines to meet the needs of the region it serves.`,
      startTime: 'Sept 2019',
      endTime: 'July 2024',
      slug: 'http://www.fpk.ac.ma/',
      imgUrl: educationImg1,
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className=" space-y-2">
              <h2>Projects</h2>
              <p className="mt-4"> </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center " id="pills-tab">
                  <Nav.Item><Nav.Link eventKey="first">Work</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="second">Project</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="third">Education</Nav.Link></Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="flex justify-center items-center" >
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} onClick={() => handleCardClick(project)} />
                      ))}
                    </Row>

                    {/* Full-width Modal */}
                    <Modal className=" rounded-xl  mt-12" show={showModal} onHide={handleClose} centered size="xl">
                      <Modal.Header className=" rounded-sm bg-white " closeButton>
                        <Modal.Title className="  text-black">{selectedProject?.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="   p-16 ">
                        <div className=" w-full  flex justify-center items-center">

                          <img src={selectedProject?.imgUrl} className="w-96 h-80 mb-4" alt={selectedProject?.title} />
                        </div>
                        <div className="modal-content-container flex-col -mt-8 flex justify-center items-center  p-6 md:px-16 md:py-20">

                          {/* Intro Section */}
                          <div className=' text-black   space-y-4'>
                            <h1 className='text-2xl font-bold py-2'>
                              {selectedProject?.title}
                            </h1>
                            <div className="">
                              {selectedProject?.description.intro}
                            </div>
                            <h2 className='text-xl font-semibold'>
                              Key Contributions
                            </h2>
                            <div className="">
                              <ul className=' space-y-2'>
                                {selectedProject?.description.keyContributions.items.map((item, index) =>
                                  <div key={index} className="flex space-x-2 items-center ">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <div className=" w-full">
                                      {item}
                                    </div>
                                  </div>
                                )}
                              </ul>
                            </div>
                            <h2 className='text-xl font-semibold'>
                              Collaboration and Results
                            </h2>
                            <div className="">
                              <ul className=' space-y-2'>
                                {selectedProject?.description.collaborationAndResults.items.map((item, index) =>
                                  <div key={index} className="flex space-x-2 items-center ">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <div className=" w-full">
                                      {item}
                                    </div>
                                  </div>
                                )}
                              </ul>
                            </div>
                            <h2 className='text-xl font-semibold'>
                              {selectedProject?.description.softSkills.title}
                            </h2>
                            <div className="">
                              <ul className=' space-y-2'>

                                {selectedProject?.description.softSkills.items.map((item, index) =>
                                  <div key={index} className="flex space-x-2 items-center ">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <div className=" w-full">
                                      {item}
                                    </div>
                                  </div>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>


                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row >
                      {projectsschool.map((project, index) => (
                        <Projectsschool key={index} {...project} onClick={() => projectsschool(project)} />
                      ))}
                    </Row>
                    <Modal className=" rounded-xl  mt-12" show={showModal1} onHide={handleClose} centered size="xl">
                      <Modal.Header className=" rounded-sm bg-white " closeButton>
                        <Modal.Title className="  text-black">last_wo</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="   p-16 ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Modal.Body>
                    </Modal>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className=" bg-black flex justify-center items-center " >
                      {Education.map((education, index) => (
                        <EducationCard key={index} {...education} onClick={() => EducationClick(education)} />
                      ))}
                    </Row>
                    <Modal className=" rounded-xl  mt-12" show={showModal1} onHide={handleClose1} centered size="xl">
                      <Modal.Header className=" rounded-sm bg-white " closeButton>
                        <Modal.Title className="  text-black">{selectedEducation?.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="   p-16 ">
                        <div className=" w-full  flex justify-center items-center">

                          <img src={selectedEducation?.imgUrl} className="w-96 h-80 rounded-3xl mb-4" alt={selectedEducation?.title} />
                        </div>
                        <div className="modal-content-container flex-col -mt-8 flex justify-center items-center  p-6 md:px-14 md:py-10">

                          {/* Intro Section */}
                          <div className=' text-black   -mt-5 space-y-4'>
                          
                            <li   className="w-full flex   hover:bg-pf-surface-2 rounded-xl px-0 md:p-4 space-x-1.5  md:space-x-4">
                              <div className="space-y-5 w-[calc(100%-50px)]">
                                <div className=""> 
                                  <div className="flex flex-col md:flex-row space-x-2 items-start md:items-center group"> 
                                    <div target='_blank' 
                                      className=" relative text-xl truncate font-bold before:content-[''] before:w-[0%] before:hover:w-full before:h-1 before:z-0 before:absolute before:bg-transparent  before:hover:bg-pf-brand-fill/50 before:duration-700 before:rounded-full  z-10 before:bottom-0"
                                    >
                                    { selectedEducation?.school.name}
                                    </div>
                                    
                                   <div className="hidden md:block w-0 h-0 md:w-1.5 md:h-1.5 rounded-full bg-pf-dim-grey" />
                                    <div className="text-xs flex space-x-1 items-center truncate ">
                                      <div className="">{selectedEducation?.startTime}</div>
                                      {selectedEducation?.endTime && <span className="">-</span>}
                                      <span className="">{selectedEducation?.endTime}</span>
                                    </div>
                                  </div>
                                  <div className="text-black">{selectedEducation?.branch}</div>
                                </div>
                                <div className="text-sm  text-black md:text-lg">{selectedEducation?.description}</div>
                              </div>
                            </li>
                          </div>
                        </div>

                      </Modal.Body>
                    </Modal>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};








