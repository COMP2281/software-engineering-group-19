import "../styles/homepage.css";
import coursesData from "../course.json"; // Adjust the path as necessary
// Function to shuffle an array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  
  return array;
}

const Homepage = () => {
  // Shuffle the courses data and slice the first 4 elements
  const shuffledCourses = shuffleArray([...coursesData]).slice(0, 4);
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/ibm_logo.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/Leaderboard">Leaderboard</a>
          <a href="/chatbot">Chatbot</a>
        </div>
      </nav>
      <div className="hero-section">
        <div className="text-container">
          <p className="title">IBM SkillsBuild</p>
          <p>
            Power your future in tech with job skills, courses, and credentials.
            Kick-start your tech journey with free courses and resources.
          </p>
        </div>
        <div className="image-container">
          <img src="/assets/homepage_image.jpg" alt="Hero Image" />
        </div>
      </div>
      <hr />
      <div className="featured-courses-section">
        <div className="cards-container">
          <div className="section-title">
            <p style={{ fontSize: "1.5rem" }}>Featured Courses</p>
          </div>
          <div className="cards">
            {shuffledCourses.map((course) => (
              <div className="card" key={course.id}>
                <img src={`/assets/card_2.jpg`} alt={course.title} /> {/* Adjust image path as necessary */}
                <p className="card_title">{course.title}</p>
                <p>{course.description}</p>
                <a href={course.link} className="course-link">
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="navbar">
        <p>IBM Skills Build Group-19</p>
      </footer>
    </>
  );
};

export default Homepage;
