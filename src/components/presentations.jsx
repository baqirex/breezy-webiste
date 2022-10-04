import React from "react";
import Presentation from "./common/presentation";
import des1 from "../images/des1.jpg";
import des2 from "../images/des2.jpg";
import des3 from "../images/des3.jpg";

const Presentations = () => {
  return (
    <div className="p-container">
      <Presentation
        title="Advertise & Attract"
        color="#d12a64"
        heading="Get your job in front of millions of candidates."
        description="You’re ready to get the word out about your openings. 
                     Breezy will advertise your open positions on 50+ top job sites, with a single click. 
                     What good are all those eyeballs if they don’t love what they see? 
                     Breezy makes it easy to customize a simple, beautiful careers site in as as little 
                     or as much time as you like."
        image={des1}
      />
      <Presentation
        title="Automate & Qualify"
        color="blue"
        heading="Focus on hiring, not tedious, repetitive tasks."
        description="You already have a million things to do. Breezy automates tedious tasks like pre-screening candidates, sending emails, scheduling interviews, and collecting feedback from your team."
        image={des2}
      />
      <Presentation
        title="Hire & Measure"
        color="purple"
        heading="Turn great candidates into new employees."
        description="You’ve done all the legwork and are ready to hire. Breezy’s easy-to-use offer management and HRIS integrations make it simple to turn applicants into employees!"
        image={des3}
      />
    </div>
  );
};

export default Presentations;
