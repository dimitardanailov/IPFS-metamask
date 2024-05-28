import {CoingeckoSimplePriceRequest} from '@/types/coingecko/simplePrices/RequestParams'

export function getCoingeckoRequestParams(): CoingeckoSimplePriceRequest {
  const coingeckoIds = ['bitcoin,chainlink,cosmos,solana']

  return {
    ids: coingeckoIds.join(','),
    vs_currencies: 'btc,usd,eth',
    include_24hr_change: true,
    include_7d_change: true,
    include_last_updated_at: true,
  }
}
