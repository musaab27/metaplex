
import  { Navigation }  from '../FrontPage/Navigation';
import { AppBar } from '../AppBar';
import { useWallet } from '@solana/wallet-adapter-react';


const Content = () => {
  const { connected } = useWallet();

  return <header id="header">
    <Navigation />
    {/* {connected ? (
        <div className="app-right app-bar-box">
          <CurrentUserBadge
            showBalance={false}
            showAddress={false}
            iconSize={24}
          />
        </div>
      ) : (
        <ConnectButton type="primary" allowWalletChange />
      )} */}
    <div className="intro text-black" style={{ "fontFamily": "Lato, sans-serif" }}>
      <div className="container">
        <div className="hero md:pb-16">
          <div >
            <div>
              <div className="mx-auto text-center">
                <a href="#" className="inline-block align-middle">
                  <img src="BlueShit.png" className="w-64 h-64 border-2 border-white rounded-xl mb-8" />
                </a>
              </div>
              <div className="text-6xl font-bold text-center leading-12" style={{color: "white"}}>
                Magic Solana Shits
              </div>
              {/* <div className="text-4xl font-bold text-center leading-12 mt-4" style={{color: "white"}}>
                Shits that last forever
              </div> */}
              <div className="text-xl md:text-3xl py-4 md:py-8 px-8 md:px-12 lg:px-24" style={{ lineHeight: "1.75em", color: "white"}}>
                Magic Solana Shits are 10,000 pieces of shit, programmatically generated through a smart contract on the Solana Blockchain. Magic Shits are comprised of numerous unique traits, allowing for a multitude of unique options. By owning a Magic Shit, you gain access to the shithead community! 
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="row">
      </div>
    </div>
  </header>
}

export const Header = (props) => {
  
  return (
            <Content />
  );
};
