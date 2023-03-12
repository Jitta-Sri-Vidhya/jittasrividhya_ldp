import bitcoin from '../asset/bitcoin.svg'
import ethereum from '../asset/ethereum.svg'
import binance from '../asset/binance.svg'
import cardano from "../asset/cardano.svg"
import dogecoin from "../asset/dogecoin.svg"
import polkadot from "../asset/polkadot.svg"
import tether from "../asset/tether.svg"
import xrp from "../asset/xrp.svg"


interface PictureProps {
    [key: string]: string
  }
export const logos: PictureProps = {
    "bitcoin": bitcoin,
    "ethereum": ethereum,
    "binance": binance,
    "cardano": cardano,
    "dogecoin": dogecoin,
    "polkadot": polkadot,
    "tether": tether,
    "xrp": xrp,
    
}