export type StepDataType = { desc: string; icon: StepIconType; buttonDesc: string }[]

export enum StepIconType {
  TOGGLE,
  CHECK,
}

export type OrderDataType = {
  orderType: OrderType
  priceType: PricerType
  currentStep: number
}

export enum OrderType {
  BUY,
  SELL,
}

export enum PricerType {
  MARKET,
  LIMIT,
}
