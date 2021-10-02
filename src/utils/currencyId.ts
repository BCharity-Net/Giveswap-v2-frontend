import { Currency, ETHER, Token } from 'giveswap-v2-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'MOVR'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
