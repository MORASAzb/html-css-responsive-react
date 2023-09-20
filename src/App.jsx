import { useState } from 'react'

import './App.css'

import './App1.css'

function App() {



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const [activeItem, setActiveItem] = useState(0);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);
  const [isPlaying6, setIsPlaying6] = useState(false);

  const [isLike1, setIsLike1] = useState(false);
  const [isLike2, setIsLike2] = useState(false);
  const [isLike3, setIsLike3] = useState(false);
  const [isLike4, setIsLike4] = useState(false);
  const [isLike5, setIsLike5] = useState(false);
  const [isLike6, setIsLike6] = useState(false);

  const [activeIndex, setActiveIndex] = useState(1);



  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  }

  const handleItemClick = (index) => {
    setActiveItem(index);
  }

  const togglePlay1 = () => {
    setIsPlaying1(!isPlaying1);
  };

  const togglePlay2 = () => {
    setIsPlaying2(!isPlaying2);
  };

  const togglePlay3 = () => {
    setIsPlaying3(!isPlaying3);
  };

  const togglePlay4 = () => {
    setIsPlaying4(!isPlaying4);
  };

  const togglePlay5 = () => {
    setIsPlaying5(!isPlaying5);
  };

  const togglePlay6 = () => {
    setIsPlaying6(!isPlaying6);
  };



 const togglelike1 = () => {
    setIsLike1(!isLike1);
  };

  const togglelike2 = () => {
    setIsLike2(!isLike2);
  };

  const togglelike3 = () => {
    setIsLike3(!isLike3);
  };

  const togglelike4 = () => {
    setIsLike4(!isLike4);
  };

  const togglelike5 = () => {
    setIsLike5(!isLike5);
  };

  const togglelike6 = () => {
    setIsLike6(!isLike6);
  };


  const handleClick = (index) => {
    setActiveIndex(index);
  }



  return (


    <>
      <div className="top">
        <div className="first-in-top">
          <div className="logo-top">
            <img src="/image/WavesCo.svg" alt="wavesco" />
          </div>

          <div className={`menu ${isMenuOpen ? 'open ' : ''}`} onClick={closeMenu}>
            <ul className="navigation">
              <li><a className='a-in-navigation' href="https://aloravan.com/">Home</a></li>
              <li><a className='a-in-navigation' href="#">Best for Youtube</a></li>
              <li><a className='a-in-navigation' href="#">Category</a></li>
              <li><a className='a-in-navigation' href="#">Upgrade</a></li>
              <li><a className='a-in-navigation' href="#">FAQ</a></li>
            </ul>
          </div>

          <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>


          <div className="menu1" >
            <ul className="navigation1">
              <li><a className='a-in-navigation' href="https://aloravan.com/">Home</a></li>
              <li><a className='a-in-navigation' href="#">Best for Youtube</a></li>
              <li><a className='a-in-navigation' href="#">Category</a></li>
              <li><a className='a-in-navigation' href="#">Upgrade</a></li>
              <li><a className='a-in-navigation' href="#">FAQ</a></li>
            </ul>
          </div>


          <button className="button-top">
            Button
          </button>
        </div>


        <div className="second-in-top">
          <div className="title-second-in-top">
            Free download sound effects without copyright
          </div>
          <div className="description-second-in-top">
            Download free copyright sound effect for
            your YouTube video and any use.
          </div>
          <div className="search-second-in-top">
            <button className="search" onClick={handleSearch}>
              <img src="/image/search-icon.png" alt="search icon" className='search1' />
            </button>

            <input type="text"
              className='icon'
              placeholder='Search sound effects'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
          <div className="try-keyword-second-in-top">
            Try keyword: happy, funny, natural, horror, jumpscare and more
          </div>
          <div className="available-second-in-top">
            650.654 Available Sounds. Library Updated Weekly.
            <a href='#'>See popular sounds</a>
          </div>
        </div>
      </div>

      <div className="trust">
        <div className="title-trust">
          Trusted by top Youtuber and Production House
        </div>
        <div className="picture-of-trust">
          <img src="/image/dudeperfect 1.png" alt="dudeperfect" className='picture-one' />
          <img src="/image/Pewdiepie-logo 1.png" alt="Pewdiepie" className='picture-two' />
          <img src="/image/MrBeast 1.png" alt="MrBeast" className='picture-three' />
          <img src="/image/wb-removebg-preview 1.png" alt="wb-removebg" className='picture-four' />
          <img src="/image/netflix 1.png" alt="netflix" className='picture-five' />
          <img src="/image/pixar-removebg-preview 1.png" alt="pixar" className='picture-six' />
          <img src="/image/channels4_profile 1.png" alt="channels4" className='picture-seven' />
        </div>
      </div>

      <div className="audio-div">
        <div className="title-audio-div">
          Best sound effects for youtube videos
        </div>
        <div className="menu-audio-div">
          <ul className="menu-audio-div-ul">
            <li className={`navbar-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
              <a >
                All
              </a>
            </li>
            <li className={`navbar-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
              <a >
                Jumpscare
              </a>
            </li>
            <li className={`navbar-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
              <a >
                Mellow
              </a>
            </li>

            <li className={`navbar-item  none1 ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
              <a >
                Happiness
              </a>
            </li>

            <li className={`navbar-item none1 ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
              <a >
                Ambience
              </a>
            </li>

            <li className={`navbar-item none1 ${activeItem === 5 ? 'active' : ''}`} onClick={() => handleItemClick(5)}>
              <a >
                Zonk
              </a>
            </li>
          </ul>
        </div>

        <div className="audio">



          <div className="audio-div2">



            <div className="play" onClick={togglePlay1}>
              {isPlaying1 ? (
                <img src="/image/icons8-pause-button-35.png" alt="" />
              ) : (
                <img src="/image/Group 1.png" alt="" />
              )}
              
            </div>

            <div className="info-name-time">
              <div className="name-song">
                Sound name
              </div>
              <div className="time-song">
                0:12
              </div>

              <div className="name-song1">
                Sound name
              </div>
              <div className="time-song2">
                0:12
              </div>
            </div>
            <div className="comment">
              Confused excited crowd slight panic and distress
            </div>
            <div className="artist-song">
              Shocking, jumpscare
            </div>

            <div className="sign-for-audio">

            <div className="like-dislike" onClick={togglelike1}>
              {isLike1 ? (
                <img src="/image/icons8-heart-36.png" alt="" />
              ) : (
                <img src="/image/Group.png" alt="" />
              )}
              
            </div>
              <div className="download-song">
                <img src="/image/icon.png" alt="" />
              </div>
              <div className="another-thing-song">
                <img src="/image/icons8-three-dots-30.png" alt="" />
              </div>

            </div>


          </div>


          <div className="audio-div2">
            <div className="play" onClick={togglePlay2}>
              {isPlaying2 ? (
                <img src="/image/icons8-pause-button-35.png" alt="" />
              ) : (
                <img src="/image/Group 1.png" alt="" />
              )}
            </div>
            <div className="info-name-time">
              <div className="name-song">
                lorem ipsum
              </div>
              <div className="time-song">
                0:24
              </div>
              <div className="name-song1">
                Sound name
              </div>
              <div className="time-song2">
                0:12
              </div>
            </div>
            <div className="comment">
              Confused excited  slight  and distress
            </div>
            <div className="artist-song">
              Majlesi, Hip Hop
            </div>

            <div className="sign-for-audio">

               <div className="like-dislike" onClick={togglelike2}>
              {isLike2 ? (
                <img src="/image/icons8-heart-36.png" alt="" />
              ) : (
                <img src="/image/Group.png" alt="" />
              )}
              
            </div>
              <div className="download-song">
                <img src="/image/icon.png" alt="" />
              </div>
              <div className="another-thing-song">
                <img src="/image/icons8-three-dots-30.png" alt="" />
              </div>

            </div>


          </div>


          <div className="audio-div2">
            <div className="play" onClick={togglePlay3}>
              {isPlaying2 ? (
                <img src="/image/icons8-pause-button-35.png" alt="" />
              ) : (
                <img src="/image/Group 1.png" alt="" />
              )}
            </div>
            <div className="info-name-time">
              <div className="name-song">
                One Two
              </div>
              <div className="time-song">
                1:12
              </div>
              <div className="name-song1">
                Sound name
              </div>
              <div className="time-song2">
                0:12
              </div>
            </div>
            <div className="comment">
              Confused excited crowd slight panic and distress
            </div>
            <div className="artist-song">
              Sad, Jaz
            </div>

            <div className="sign-for-audio">

               <div className="like-dislike" onClick={togglelike3}>
              {isLike3 ? (
                <img src="/image/icons8-heart-36.png" alt="" />
              ) : (
                <img src="/image/Group.png" alt="" />
              )}
              
            </div>
              <div className="download-song">
                <img src="/image/icon.png" alt="" />
              </div>
              <div className="another-thing-song">
                <img src="/image/icons8-three-dots-30.png" alt="" />
              </div>

            </div>


          </div>



          <div className="audio-div2">
            <div className="play" onClick={togglePlay4}>
              {isPlaying4 ? (
                <img src="/image/icons8-pause-button-35.png" alt="" />
              ) : (
                <img src="/image/Group 1.png" alt="" />
              )}
            </div>
            <div className="info-name-time">
              <div className="name-song">
                Sound name
              </div>
              <div className="time-song">
                0:12
              </div>
              <div className="name-song1">
                Sound name
              </div>
              <div className="time-song2">
                0:12
              </div>
            </div>
            <div className="comment">
              crowd slight panic and distress
            </div>
            <div className="artist-song">
              Rock
            </div>

            <div className="sign-for-audio">

               <div className="like-dislike" onClick={togglelike4}>
              {isLike4 ? (
                <img src="/image/icons8-heart-36.png" alt="" />
              ) : (
                <img src="/image/Group.png" alt="" />
              )}
              
            </div>
              <div className="download-song">
                <img src="/image/icon.png" alt="" />
              </div>
              <div className="another-thing-song">
                <img src="/image/icons8-three-dots-30.png" alt="" />
              </div>

            </div>


          </div>



          <div className="audio-div2">
            <div className="play" onClick={togglePlay5}>
              {isPlaying5 ? (
                <img src="/image/icons8-pause-button-35.png" alt="" />
              ) : (
                <img src="/image/Group 1.png" alt="" />
              )}
            </div>
            <div className="info-name-time">
              <div className="name-song">
                Tehran
              </div>
              <div className="time-song">
                2:12
              </div>
              <div className="name-song1">
                Sound name
              </div>
              <div className="time-song2">
                0:12
              </div>
            </div>
            <div className="comment">
              Confused excited s
            </div>
            <div className="artist-song">
              Metal
            </div>

            <div className="sign-for-audio">

               <div className="like-dislike" onClick={togglelike5}>
              {isLike5 ? (
                <img src="/image/icons8-heart-36.png" alt="" />
              ) : (
                <img src="/image/Group.png" alt="" />
              )}
              
            </div>
              <div className="download-song">
                <img src="/image/icon.png" alt="" />
              </div>
              <div className="another-thing-song">
                <img src="/image/icons8-three-dots-30.png" alt="" />
              </div>

            </div>


          </div>


          <div className="audio-div2">
            <div className="play" onClick={togglePlay6}>
              {isPlaying6 ? (
                <img src="/image/icons8-pause-button-35.png" alt="" />
              ) : (
                <img src="/image/Group 1.png" alt="" />
              )}
            </div>
            <div className="info-name-time">
              <div className="name-song">
                Bia Bia
              </div>
              <div className="time-song">
                0:42
              </div>
              <div className="name-song1">
                Sound name
              </div>
              <div className="time-song2">
                0:12
              </div>
            </div>
            <div className="comment">
              Confused excited cdistress
            </div>
            <div className="artist-song">
              Ring tone
            </div>

            <div className="sign-for-audio">

               <div className="like-dislike" onClick={togglelike6}>
              {isLike6 ? (
                <img src="/image/icons8-heart-36.png" alt="" />
              ) : (
                <img src="/image/Group.png" alt="" />
              )}
              
            </div>
              <div className="download-song">
                <img src="/image/icon.png" alt="" />
              </div>
              <div className="another-thing-song">
                <img src="/image/icons8-three-dots-30.png" alt="" />
              </div>

            </div>


          </div>


        </div>

        <div className="see-all-audio-div">
          <a className="see-all1">
            See all sound effects
          </a>
        </div>
      </div>


      <div className="category">
        <div className="title-category">
          Browse by category
        </div>
        <div className="gallery-category">
          <div className="first-pic-category text-pic-category">
            Musical
          </div>
          <div className="second-pic-category text-pic-category">
            Industrial
          </div>
          <div className="third-pic-category text-pic-category">
            Movie sounds
          </div>
          <div className="fourth-pic-category text-pic-category">
            Animal
          </div>
          <div className="fifth-pic-category text-pic-category">
            Vehicles
          </div>
          <div className="sixth-pic-category text-pic-category">
            Sound designs
          </div>
          <div className="seventh-pic-category text-pic-category">
            People
          </div>
          <div className="eighth-pic-category text-pic-category">
            Emergency
          </div>
          <div className="ninth-pic-category text-pic-category">
            Cartoon
          </div>
          <div className="tenth-pic-category text-pic-category">
            Horror
          </div>
          <div className="Eleventh-pic-category text-pic-category">
            Bell
          </div>
          <div className="twelfth-pic-category text-pic-category">
            Nature
          </div>
        </div>
        <div className="see-all-category">
          See all category
        </div>
      </div>


      <div className="introduce">
        <div className="top-introduce">
          <div className="why">
            WHY US?
          </div>
          <div className="answer-why">
            We are provide the best quality sound
            effects without copyright.
          </div>
        </div>

        <div className="general-introduce">

          <div className="separate-inside1">
            <div className="inside-general-introduce">
              <div className="logo-general-introduce">
                <img src="/image/Type=customers.png" alt="" />
              </div>
              <div className="about-general-introduce">
                <div className="title-about-general-introduce">
                  1.203.322 Customer satisfied
                </div>
                <div className="introduce-about-general-introduce">
                  We`ve helped more than 1 million customers find best sound effects
                </div>
              </div>
            </div>
            <div className="inside-general-introduce">
              <div className="logo-general-introduce">
                <img src="/image/Type=royalty.png" alt="" />
              </div>
              <div className="about-general-introduce">
                <div className="title-about-general-introduce">
                  Royalty-free
                </div>
                <div className="introduce-about-general-introduce">
                  Just download and use the sound for your videos without royalty
                </div>
              </div>
            </div>
          </div>

          <div className="separate-inside2">
            <div className="inside-general-introduce">
              <div className="logo-general-introduce">
                <img src="/image/Type=best.png" alt="" />
              </div>
              <div className="about-general-introduce">
                <div className="title-about-general-introduce">
                  Provide proper sounds
                </div>
                <div className="introduce-about-general-introduce">
                  Just download and use the sound for your videos without royalty
                </div>
              </div>
            </div>
            <div className="inside-general-introduce">
              <div className="logo-general-introduce">
                <img src="/image/Type=sounds.png" alt="" />
              </div>
              <div className="about-general-introduce">
                <div className="title-about-general-introduce">
                  650.654 Sounds
                </div>
                <div className="introduce-about-general-introduce">
                  More than 600 thousand high quality to download. Still counting
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>





      <div className="experience">
        <div className="top-experience">
          <div className="title-top-experience">
            TESTIMONIALS
          </div>


          <div className="description-title-experience">
            Hear good experiences from our customers
          </div>
        </div>

        <div className="experience-interview">

          <div className={`inside-experience-interview ${activeIndex === 0 ? 'active' : ''}`}>
            <div className="coition">
              <img src="/image/ri_double-quotes-r.png" alt="" />
            </div>
            <div className="personal-experience">
              The sounds from WavesCo is great and it really helps
              our team to save time and production costs.
            </div>
            <div className="picture-person">
              <img src="/image/unsplash.png" alt="" />
            </div>
            <div className="person-name">
              Anne Joyce
            </div>
            <div className="person-carer">
              Video editor at Dude Perfect
            </div>
          </div>

          <div className={`inside-experience-interview ${activeIndex === 1 ? 'active' : ''}`}>
            <div className="coition">
              <img src="/image/ri_double-quotes-r.png" alt="" />
            </div>
            <div className="personal-experience">
              WavesCo was a great choice for our team for film
              production, the quality is amazingly great.
            </div>
            <div className="picture-person">
              <img src="/image/unsplash1.png" alt="" />
            </div>
            <div className="person-name">
              Edward Sann
            </div>
            <div className="person-carer">
              Head of Video editor at Netflix
            </div>
          </div>

          <div className={`inside-experience-interview ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="coition">
              <img src="/image/ri_double-quotes-r.png" alt="" />
            </div>
            <div className="personal-experience">
              Perfect way to get best quality sound effects
              for youtube videos. Thanks to WavesCo team.
            </div>
            <div className="picture-person">
              <img src="/image/unsplash2.png" alt="" />
            </div>
            <div className="person-name">
              Ronn D.
            </div>
            <div className="person-carer">
              Video Editor at PewDiePie
            </div>
          </div>


        </div>


        <div className="move-in-inside--experience-interview">
          <span className={`circle ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleClick(0)}></span>

          <span className={`circle ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleClick(1)}> </span>

          <span className={`circle ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleClick(2)}></span>
        </div>
      </div>


      <div className="footer">
        <div className="inside-footer">
          <div className="about-site">
            <div className="logo-title">
              <img src="/image/WavesCo.svg" alt="" />
            </div>
            <div className="about-website">
              WavesCo is a platform for providing premium
              sound effects for Youtube videos, movies and many more.
            </div>
            <div className="rights-reserved">
              WavesCo ©2021, All rights reserved
            </div>
          </div>

          <div className="menu-footer">
            <div className="box-menu-footer">
              <div className="title-menu-footer">
                Product
              </div>
              <div className="div-branch-title-menu-footer">
                <span className="first-menu-footer">Browse sounds</span>
                <span className="first-menu-footer">Pricing</span>
                <span className="first-menu-footer">FAQ</span>
                <span className="first-menu-footer">Affiliate</span>
              </div>

            </div>


            <div className="box-menu-footer">
              <div className="title-menu-footer">
                Company
              </div>
              <div className="div-branch-title-menu-footer">
                <span className="first-menu-footer">Blog</span>
                <span className="first-menu-footer">About us</span>
                <span className="first-menu-footer">Help</span>
                <span className="first-menu-footer">Career</span>
              </div>

            </div>


            <div className="box-menu-footer">
              <div className="title-menu-footer">
                Social Media
              </div>
              <div className="div-branch-title-menu-footer">
                <span className="first-menu-footer">Twitter</span>
                <span className="first-menu-footer">Instagram</span>
                <span className="first-menu-footer">YouTube</span>
                <span className="first-menu-footer">Facebook</span>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>


  )

}

export default App
