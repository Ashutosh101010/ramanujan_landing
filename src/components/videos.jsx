import React from "react";

export const Videos = () => {
  const videoUrl = "https://www.youtube.com/watch?v=dNsbeRXgWvk";
  const videoId = videoUrl.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div id="videos" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>FREE KI PATHSHALA</h2>
          <p>
            Join our free IIT-JEE and NEET preparation platform, and let's explore our YouTube channel.
          </p>
        </div>
        <div id="row">


          <div className="col-md-12 col-sm-12 team">
            <div className="thumbnail">

              <iframe
                id="freekipathshala"
                width={"100%"}
                height={"70%"}
                src={embedUrl}
                title="YouTube Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
