import Button from "../Button/Button";
import cardStyle from "./Card.module.css";

function Card() {
  return (
    <>
      <div className={cardStyle.card}>
        <img src="https://picsum.photos/600/400" alt="" />
        <div className={cardStyle.cardBody}>
        <h3 className={cardStyle.textLeft}>Titolo</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          odit quos sint hic ut! Voluptatum iure omnis dolores assumenda
          repudiandae doloribus nostrum impedit itaque, error beatae rerum
          labore at, iste dicta sequi possimus aut corrupti, distinctio ut
          placeat veniam hic. Voluptas eos eius saepe dolorum vero ab
          repudiandae, praesentium fugiat!
        </p>
        <Button />
        </div>
      </div>
    </>
  );
}

export default Card;
