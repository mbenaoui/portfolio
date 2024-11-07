import { Col } from "react-bootstrap";

export const EducationCard = ({ title, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="proj-imgbx flex justify-center ">
        <img  className="w-96   h-72  border-2 border-white rounded-[60px]" src={imgUrl} alt={title} />
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
