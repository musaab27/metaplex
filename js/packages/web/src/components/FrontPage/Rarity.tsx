export const Rarity = (props) => {
  return (
    <div id="rarity" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="rarity-text">
              <h2 className="font-bold text-6xl mb-8">Rarity</h2>
              <p>
                SolBears come in a wide variety of shapes and colors. Each bear might have a bunch of items and accessories, or none at all. But no matter the bear, one thing is certain: bears are a tightly knit community. Oh, and they all love honey.
                View rarity charts in our Discord in the #rarities channel. You can also <a href="https://www.solbearsexplorer.com/" target="_blank">view the community-made SolBear explorer.</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row bear-cards">
          {props.data
            ? props.data.map((d, i) => (
              <div className="col-xs-12 col-md-3">
                {" "}
                <img
                  src={`img/rarity/${d}.png`}
                  className="img-responsive bear-img"
                  alt=""
                />{" "}
              </div>
            )
            )
            : "loading"}
        </div>
      </div>
    </div>
  );
};
