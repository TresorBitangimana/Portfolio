import "./Home.css"


function Home(){
    return(
        <div className="home-container" id="home-container">
            <div className="content-container" id="content-container">
                <div className="my-image-container" id="my-image-container">
                    <img src="src/Images/my_image.png" alt="my image" className="my-image" id="my-image" />
                </div>
                <div className="information-container" id="information-container">
                    <h1 className="about-me-description" id="about-me-description">
                        Hi! Im Tresor
                    </h1>
                    <p className="profile-description" id="profile-description">
                        I am a motivated Computer Science freshman at Texas Christian 
                        University, seeking Internship opportunity to apply programming 
                        and problem-solving skills, and gain hand on experience in technology, 
                        and software development, or IT.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;