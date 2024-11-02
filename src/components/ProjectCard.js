import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx space-y-4">
          <h4>{title}</h4>
          <div className=" font-serif">Ride more</div>
          {/* <button></button> */}
          {/* <span>{description}</span> */}
        </div>
      </div>
    </Col>
  );
};
