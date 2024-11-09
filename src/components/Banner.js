import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/me.1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const period = 300;

  // Memoize the toRotate array so it doesn't trigger re-renders in useCallback
  const toRotate = useMemo(() => ["Web Developer", "Mobile Developer"], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }, [isDeleting, loopNum, text.length, period, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn space-y-4 text-5xl" : ""}>
                  <span className="w-80 p-3 flex justify-center items-center bg-[#5a61e8] font-serif text-xl rounded-xl">
                    Welcome to my Portfolio
                  </span>
                  <h1>
                    <span className="txt-rotate text-5xl" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'>
                      <span className="wrap"> {`Hi! I'm Mohammed`} {text}</span>
                    </span>
                  </h1>
                  <p>
                    As a junior full stack developer, I'm equipped with front-end skills in HTML, CSS, JavaScript, and TypeScript, 
                    alongside experience with React, Next.js, React Native, and Flutter. On the back end, I'm proficient in Nest.js, 
                    Python, Java, C, and C++, capable of working with APIs and various databases. I prioritize user-friendly, responsive 
                    web interfaces and am committed to problem-solving and effective communication within a team. With a passion for 
                    continuous learning and adaptability to new technologies, I'm eager to contribute to web development projects and grow 
                    as a well-rounded developer.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="border-2 border-[#5a61e8] rounded-full" src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
