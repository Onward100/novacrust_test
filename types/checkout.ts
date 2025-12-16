export type CheckoutTab =
  | "crypto-cash"
  | "cash-crypto"
  | "crypto-loan";

export interface Asset {
  code: string;
  label: string;
  icon: string;
}


export interface CheckoutState {
  activeTab: CheckoutTab;
  amountPay: string;
  amountReceive: string;
  payAsset: string;
  receiveAsset: string;
  payFrom: string;
  payTo: string;
  success?: boolean;
}
