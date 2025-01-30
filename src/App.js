import './App.css';
import './App1.css';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUs/AboutUs';
import Skills from "./components/Skills/Skills";
import Stats from "./components/Stats/Stats";
import Work from "./components/Work/Work";
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from "./components/Services/Services";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="holder">
      <Header />
      <AboutUs />
      <Skills />
      <Stats />
      <Work />
      <WorkProcess />
      {/* Move App1 before Testimonials */}
      <Testimonials />
      <App1 />
      <Contact />
      <Footer />
    </div>
  );
}

function App1() {  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="App1-container">
      {/* Meet Our Team Title with team id */}
      <h2 className="section__title text__center" id="team">Meet Our Team</h2>

      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="slider-card">
              
              {/* Image Section */}
              <div className='image-container'>
                <img src={d.img} alt={d.name} />
              </div>

              {/* Text Box Section */}
              <div className="text-box">
                <p className="name">{d.name}</p>
                <p className="review">{d.review}</p>
                <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                  <button className="read-more-btn">LinkedIn</button>
                </a>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


// Move data outside App1 so it's accessible
const data = [
  {
    name: `Mayank Sharma`,
    img: `/students/mayank.jpg`,
    review: `Club Head`,
    linkedin: `http://www.linkedin.com/in/mayank-sharma-pes`
  },
  {
    name: `Lakshaya Bhutani`,
    img: `/students/Lakshay.jpg`,
    review: `Deputy Club Head`,
    linkedin: `http://www.linkedin.com/in/lakshay-bhutani-software/`
  },
  {
    name: `Raghav Sharma`,
    img: `/students/Raghav.png`,
    review: `Deputy Club Head`,
    linkedin: `http://www.linkedin.com/in/raghav-sharma-0b90832bb`
  },
  {
    name: `Priyanshu Agarwal`,
    img: `/students/priyanshu.jpeg`,
    review: `Mentor`,
    linkedin: `https://www.linkedin.com/in/rigo-louie`
  },
  {
    name: `Sneha Patil`,
    img: `/students/sneha.jpg`,
    review: `Mentor`,
    linkedin: `https://www.linkedin.com/in/sneha-patil-96ba67231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`
  },
  {
    name: `Rachit Singla`,
    img: `/students/Rachit.jpg`,
    review: `Mentor`,
    linkedin: `https://www.linkedin.com/in/mia-williams`
  },

  {
    name: `Naman Rao`,
    img: `/students/Naman.jpg`,
    review: `Physical Health Head`,
    linkedin: `http://www.linkedin.com/in/mayank-sharma-pes`
  },
  {
    name: `T T Ankush`,
    img: `/students/ankush.jpeg`,
    review: `Deputy Club Head`,
    linkedin: `http://www.linkedin.com/in/lakshay-bhutani-software/`
  },
  {
    name: `Rhea Gangamma`,
    img: `/students/Rhea.jpeg`,
    review: `Digital content Head`,
    linkedin: `http://www.linkedin.com/in/raghav-sharma-0b90832bb`
  },
  {
    name: `Gaurav Balaji`,
    img: `/students/gaurav.jpeg`,
    review: `Sponsorship Head`,
    linkedin: `https://www.linkedin.com/in/rigo-louie`
  },
  {
    name: `Aadya Jain`,
    img: `/students/aadhya.jpeg`,
    review: `Mental health Head`,
    linkedin: `https://www.linkedin.com/in/mia-williams`
  },
  {
    name: `Tejas Khurana`,
    img: `/students/tejas.jpeg`,
    review: `Logistics Head`,
    linkedin: `http://www.linkedin.com/in/mayank-sharma-pes`
  },
  {
    name: `Srijan Aditya`,
    img: `/students/srijan.jpg`,
    review: `Event Management Head`,
    linkedin: `https://www.linkedin.com/in/srijan-aditya-33a34a23a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`
  },
  {
    name: `Chirag M`,
    img: `/students/chirag.jpg`,
    review: `Technical Head`,
    linkedin: `http://www.linkedin.com/in/raghav-sharma-0b90832bb`
  },
  {
    name: `Shreya Verma`,
    img: `/students/shreya.jpg`,
    review: `Design Head`,
    linkedin: `https://www.linkedin.com/in/rigo-louie`
  },
  {
    name: `Riya Hoysal`,
    img: `/students/riya.jpeg`,
    review: `Logistics Head`,
    linkedin: `https://www.linkedin.com/in/mia-williams`
  },
  
  {
    name: `Vanshita Arora`,
    img: `/students/vanshita.jpeg`,
    review: `Event Management Head`,
    linkedin: `http://www.linkedin.com/in/raghav-sharma-0b90832bb`
  },
  {
    name: `Aishly Jain`,
    img: `/students/aishley.jpg`,
    review: `Design Head`,
    linkedin: `https://www.linkedin.com/in/aishly-jain-581671183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`
  },
  {
    name: `Sara Girdhar`,
    img: `/students/sara.jpeg`,
    review: `Sponsorship Head`,
    linkedin: `https://www.linkedin.com/in/sara-girdhar-558a09299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`
  },
];

export default App;
