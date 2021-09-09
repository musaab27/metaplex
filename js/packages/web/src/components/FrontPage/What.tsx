
export const What = (props) => {
    return (
      <div id="what" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2 className="font-bold text-6xl mb-8">RoadMap</h2>

              </div>  
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/what-are-solbears.png"
                className="img-responsive mx-auto"
                alt=""
              />{" "}
            </div>
          </div>
          <div className="column" >
                    <img src="/RoadMap1.png" style={{width: "85%", height:"40%"}}/>
                    <img src="/RoadMap2.png" style={{width: "85%", height:"40%"}}/>
                    <img src="/RoadMap3.png" style={{width: "85%", height:"40%"}}/>
                    <img src="/RoadMap4.png" style={{width: "85%", height:"40%"}}/>
                </div>
                <p style={{marginTop: "10px", fontSize: "24px"}}>For more information! <u><a href="https://discord.gg/z3e5HvxZ7V" target="_blank">Join our Discord!</a></u></p>
        </div>
      </div>
    );
  };
  