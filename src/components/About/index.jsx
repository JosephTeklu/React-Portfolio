import React from 'react';
import Jojo_pic from '../../assets/Jojo_Pics-10.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={Jojo_pic} alt="" className="prof" />
        </div>
        <p>
          Hi my name is Joseph and I am a full-stack developer. I have a passion for learning and creating new things. 
          I am currently enrolled in the University of Denver's coding bootcamp. 
          I am excited to learn new skills and apply them to my future career. 
          I am currently working on a project that will help me upload my pictures to my website as sort of an online art galery. 
          I am excited to see what the future holds for me.
        </p>
        <p>
          I am an avid user of technology and always wonder how some amazing techonoligies are made. 
          I love the quote "Any sufficiently advanced technology is indistinguishable from magic" -By Arthur C. Clarke and I really believe that. 
          I am excited to learn new technologies and see what I can create with them. 
          One day I hope to create something that is advanced enough to be considered magic.
        </p>
      </div>
    </section>
  );
}

export default About;
