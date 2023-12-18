import Sidebar from '../Components/Sidebar';
import {useRef} from "react"
import { FaArrowRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Home = () => {
	return (
		<>
    <>
    
  <nav className="sidebar">
    <header>
      <div className="image-text">
        <div className="text logo-text">
          <span className="name">BlogBook.</span>
        </div>
      </div>
    </header>
    <div className="menu-bar">
      <div className="menu">
        <li className="search-box">
          <FaSearch className="bx bx-search icon" id='icony'/>
          <input type="text" placeholder="Search" />
        </li>
        <ul className="menu-links">
          <li className="nav-link">
            <a href="#">
              <FaHome className="bx bx-home-alt icon" id='icony'/>
              <span className="text nav-text">Dashboard</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <FaBell className="bx bx-bell icon" id='icony'/>
              <span className="text nav-text">Notifications</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <IoPersonCircle className="bx bx-wallet icon" id='icony'/>
              <span className="text nav-text">Profile</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-content">
        <li className="">
          <a href="#">
            <IoLogOut className="bx bx-log-out icon" id='icony'/>
            <span className="text nav-text">Logout</span>
          </a>
        </li>
        {/* <li class="mode">
                      <div class="sun-moon">
                          <i class='bx bx-moon icon moon'></i>
                          <i class='bx bx-sun icon sun'></i>
                      </div>
                      <span class="mode-text text">Dark mode</span>
  
                      <div class="toggle-switch">
                          <span class="switch"></span>
                      </div>
                  </li> */}
      </div>
    </div>
  </nav>
  <section className="home">
    <div className="main-title">
      <h1>Explore page</h1>
      <div className="hr-type" />
    </div>
    <div className="post-container">
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
      <div className="card">
        <img src="./banana boat.jpg" alt="Your Image" />
        <div className="card-content">
          <h2>Your Card Title</h2>
          <p>Your card text goes here. Customize this text as needed.</p>
        </div>
      </div>
    </div>
  </section>
</>
		</>
	)
}

export default Home