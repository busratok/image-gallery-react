const Card = ({ photographer, img }) => {
  return (
    <li>
      <div className="image-container">
        <img src={img} alt="" />
      </div>

      <p>{photographer}</p>
    </li>
  );
};

export default Card;
