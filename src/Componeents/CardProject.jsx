
const CardProject = (props) => {
  return (

    <div class="card-deck">
      
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="protfilioLink">
    <div class="card portfilioCard">
      <img class="card-img-top" src={props.imgSrc} alt="Card images cap"/>
      <div class="card-body">
        <h5 class="card-title titlePort">{props.title} :</h5>
        <p class="card-text descriptionPort">{props.description}</p>
    

      </div>

    </div>

    </a>
  </div>
  );
}

export default CardProject;
