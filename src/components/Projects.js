import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import {EducationCard} from './EducationCard'
import projImg1 from "../assets/workBack1.png";
import projImg2 from "../assets/budy_coatch.png";
import projImg3 from "../assets/pingpong.jpeg";
import educationImg1 from "../assets/FP-Khouribga.jpeg";
import educationImg2 from "../assets/1337_future_is_loading_logo.jpeg";
import 'animate.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

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
      imgUrl: projImg3
    },

  ];
  const Education = [
    {
      title: "Faculté Polydisciplinaire Khouribga",
      description: {
        intro: "At Moojbuzz, I played a key role as a full-stack mobile developer, crafting high-performance mobile applications with a focus on user-centric design and reliable backend infrastructure. Leveraging React Native, NestJS, Docker, Git, and Firebase, I contributed to creating intuitive mobile experiences that were both secure and scalable.",
      },
      imgUrl: educationImg1
    },
    {
      title: "1337 Coding School",
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
          title: "Faculté Polydisciplinaire Khouribga",
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
      imgUrl: educationImg2
    },
   

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div  className=" space-y-2">
              <h2>Projects</h2>
              <p className="mt-4"> </p>
              <Tab.Container   id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center " id="pills-tab">
                  <Nav.Item><Nav.Link eventKey="first">Work</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="second">Project</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="third">Education</Nav.Link></Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row >
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
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} onClick={() => handleCardClick(project)} />
                      ))}
                    </Row>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Tab.Pane>
                  <Tab.Pane   eventKey="third">
                  <Row className=" bg-black flex justify-center items-center " >
                      {Education.map((project, index) => (
                        <EducationCard key={index} {...project} onClick={() => handleCardClick(project)} />
                      ))}
                    </Row>
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








