import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = [
  
]
  
;

export const Faq = (props) => {
  return (
    <div id="faq">
      <div className="container">
        <h2 className="font-bold text-6xl mb-8">FAQ</h2>
        <Collapse accordion>
          <Panel header="How do I get started buying NFTs?" key="1" >
            <li>If you want to be ready to mint, you will need SOL (Solana).</li>
              <li>
                Get the <a href="https://phantom.app/">Phantom Wallet</a> Extension for Google Chrome, which is the recommended wallet for SOL.
              </li>
              <li>
              You will have to send SOL to your new Wallet. 
              You can exchange SOL using the Voyager APP, CoinBase, Crypto.com, as well as a variety of other options.
              </li>
              <li>
              Click the Connect Button on the top left of our website to connect your wallet. After connecting you will be able to buy!
              </li>
              <li>
                If you're having trouble, please reach out to us at our <a href="https://discord.gg/z3e5HvxZ7V" target="_blank">Discord!</a>
              </li>
          </Panel>
          <Panel header="What is an NFT?" key="2" >
            <p>An NFT is a non-fungible token that represents a unit of data stored on a digital ledger, called a blockchain, 
              that certifies a digital asset to be unique and therefore is not interchangeable. </p>
          </Panel>
          <Panel header="Where can I trade Solana Magic Shits?" key="3">
            <p>After our release, we will attempt to list on Solanart.io, Digital Eyes, and get verified on SolSea.</p>
          </Panel>
      </Collapse>,
      </div>
    </div>
  );
};




