import Card from "../Componeents/Card";
import CardsApi from "../Componeents/CardsApi";
const Services = () => {
    const cardsPerRow = 3;
    const rows = [];
    for (let i = 0; i < CardsApi.length; i += cardsPerRow) {
      rows.push(CardsApi.slice(i, i + cardsPerRow));
    }
    return (
    <>
    
    <div className="projectPage ">
            <h1 className="text-white text-center portfilio golden-text ">Services</h1>
    <div className="allServices container">
    {rows.map((row, index) => (
        <div className="row mb-4" key={index}>
          {row.map((card) => (
            <div className="col-md-4" key={card.id}>
              <Card
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
     
    </div>
    <br/><br/>
    </>
  );
}

export default Services;
