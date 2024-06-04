'use client'

import {FC} from 'react'

import CoinbaseIcon from '@/components/Icons/Coinbase'

import styled from 'styled-components'

import {CoingeckoSimplePriceResponse} from '@/types/coingecko/simplePrices'
import HistoricPrice from '@/classes/HistoricPrice'

import PriceComparing from './PriceComparing'

import {
  TableRow,
  CoinCell,
  PriceUSDCell,
  TableCell,
} from '@/styled-components/Coingecko'
import {dimensions} from '../setting'
import pricePercentFormat from '@/utils/format/pricePercentFormat'

const CryptoIcon = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 0.5rem;
`

export interface Props {
  item: CoingeckoSimplePriceResponse
}

const CoingeckoTableRow: FC<Props> = ({item}) => {
  const historicPrice = new HistoricPrice()
  historicPrice.calculateHistoricDiff(item)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const price = formatter.format(item.usd)

  const icon = `/icons/crypto/${item.cryptoCurrency}.svg`

  return (
    <TableRow>
      <CoinCell width={dimensions.coin.width}>
        <CryptoIcon src={icon} title={item.cryptoCurrency} />
      </CoinCell>
      <PriceUSDCell width={dimensions.usd.price.width}>{price}</PriceUSDCell>
      <TableCell width={dimensions.usd.priceChanged.width}>
        <PriceComparing percent={item.usd_24h_change}>
          <span>{pricePercentFormat(item.usd_24h_change)}</span>
          <span>({formatter.format(historicPrice.usd)})</span>
        </PriceComparing>
      </TableCell>
      <TableCell width={dimensions.btc.price.width}>
        {item.btc !== 1 && item.btc.toFixed(5)}
      </TableCell>
      <TableCell width={dimensions.btc.priceChanged.width}>
        <PriceComparing percent={item.btc_24h_change}>
          <span title={historicPrice.btc.toString()}>
            {pricePercentFormat(item.btc_24h_change)}
          </span>
        </PriceComparing>
      </TableCell>
      <TableCell width={dimensions.eth.price.width}>
        {item.eth !== 1 && item.eth.toFixed(5)}
      </TableCell>
      <TableCell width={dimensions.eth.priceChanged.width}>
        <PriceComparing percent={item.eth_24h_change}>
          <CoinbaseIcon cryptoCurrency={item.cryptoCurrency} />
          <span title={historicPrice.eth.toString()}>
            {pricePercentFormat(item.eth_24h_change)}
          </span>
        </PriceComparing>
      </TableCell>
    </TableRow>
  )
}

export default CoingeckoTableRow
