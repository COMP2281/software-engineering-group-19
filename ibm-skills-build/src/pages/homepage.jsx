import "../styles/homepage.css";

const HomePage = () => {
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
            <p style={{ fontSize: "1.5rem" }}> Featured Courses</p>
          </div>
          <div className="cards">
            {/* Card 1 */}
            <div className="card">
              <img src="/assets/card_1.jpg" alt="Course 1" />
              <p className="card_title">Lorem ipsum</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>

            {/* Card 2 */}
            <div className="card">
              <img src="/assets/card_2.jpg" alt="Course 2" />
              <p className="card_title">Lorem ipsum</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>

            {/* Card 3 */}
            <div className="card">
              <img src="/assets/card_3.jpg" alt="Course 3" />
              <p className="card_title">Lorem ipsum</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="navbar">
        <p>IBM Skills Build Group-19</p>
      </footer>
    </>
  );
};

export default HomePage;
