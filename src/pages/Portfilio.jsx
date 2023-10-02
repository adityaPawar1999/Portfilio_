import CardProject from "../Componeents/CardProject";
import ProjectApi from "../Componeents/projectApi.";
const Portfilio = () => {
    const cardsPerRow = 3;
    const rows = [];
    for (let i = 0; i < ProjectApi.length; i += cardsPerRow) {
      rows.push(ProjectApi.slice(i, i + cardsPerRow));
    }
    return (
    <>
    
    <div className="projectPage ">
            <h1 className="text-white text-center portfilio golden-text ">Portfilio</h1>
    <div className="allServices container">
    {rows.map((row, index) => (
        <div className="row mb-8" key={index}>
          {row.map((val) => (
            <div className="col-md-4" key={val.id}>
              <CardProject
                title={val.title}
                description={val.description}
                link={val.link}
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

export default Portfilio;
