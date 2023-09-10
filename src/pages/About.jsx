
function About() {
    return (<>
        <div className="projectPage container text-white">
            <h1 className=" text-center portfilio golden-text ">About Us</h1>
            <div className="  row aboutBothSide">
                    <div className="col-12   col-sm-8 col-md-8 card1">
                        <div className="aboutCard">
                            <h1 className="aboutTitle">ADITYA PAWAR </h1>
                            <p className="aboutContact"><i className="fa-solid fa-phone "></i>  +91 8888359809<br />

                                <i className="fa-solid fa-envelope"></i>  pawaraditya2285@gmail.com</p>
                            <p className="aboutParagraph">
                                
                                Hello! I'm Aditya Pawar, an aspiring tech enthusiast and a fresh talent in the world of freelancing. My academic journey includes an MCA degree from Savtribahi Fule University and a BCA degree from North Maharashtra University, where I achieved top scores. I've also completed a full-stack Java course in Banglore from J-Spider.
                                <br/><br/> I'm eager to apply my skills in  Node-js ,react ,Express-js ,java ,JavaScript, HTML, CSS, Bootstrap, WordPress, and database management to your projects. As a problem solver at heart, I enjoy tackling challenges, breaking them down, and delivering practical solutions.
                                <br/><br/>I'm committed to continuous learning, a dedicated reader, and a passionate traveler. Let's collaborate and turn your ideas into reality through my fresh perspective and enthusiasm!
                            </p>
                            <br/>
                            <button className='headingButton '>
                    <a href="https://docs.google.com/document/d/1Wyef5BgdqhTF1jhkjIQsVl5hU9HlFNuv_yfzCqN8ck8/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className="nav-link text-white aboutButton ">
                        Resume</a>
                           </button>
                            <div className="aboutSkills">
                                <h4>Tool and Skills </h4>
                                <p className="iconsSize"><i className="fa-brands fa-java text-info" data-toggle="tooltip" data-placement="top" title="Java"></i>
                                    <i className="fa-brands fa-square-js text-warning "data-toggle="tooltip" data-placement="top" title="JavaScript"></i>
                                    <i className="fa-brands fa-node text-success" data-toggle="tooltip" data-placement="top" title="Node js"></i>
                                    <i className="fa-brands fa-html5 text-danger" data-toggle="tooltip" data-placement="top" title="Html"></i>
                                    <i className="fa-brands fa-css3-alt text-warning"data-toggle="tooltip" data-placement="top" title="Css"></i>
                                    <i className="fa-brands fa-react text-primary" data-toggle="tooltip" data-placement="top" title="React-JS"></i>
                                    <i className="fa-brands fa-figma text-warning"data-toggle="tooltip" data-placement="top" title="Figma"></i>
                                    <i className="fa-brands fa-bootstrap text-info"data-toggle="tooltip" data-placement="top" title="Bootstrap"></i>
                                    </p>
                                <br/>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4  col-sm-12 card2">
                        <div className="aboutImage"></div>
                    </div>
        </div>
               </div>
    </>)
}
export default About;   