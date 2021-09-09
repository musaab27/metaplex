// import DiscordIcon from "./DiscordIcon"
// import TwitterIcon from "./TwitterIcon"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-transparent'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {" "}
            <img
              src="img/logo.png"
              className="img-responsive bear-logo hidden-xs hidden-sm"
              alt=""
            />{
            " "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#what' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='#rarity' className='page-scroll'>
                Rarity
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#faq' className='page-scroll'>
                FAQ
              </a>
            </li>
            {/* <li>
              <a href='https://twitter.com/TheBearGangNFT' className='page-scroll'>
              <TwitterIcon fill='#5D7600' />
              </a>
            </li>
            <li>
              <a href='https://discord.gg/solbears' className='page-scroll'>
                <DiscordIcon fill='#5D7600' />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
};
