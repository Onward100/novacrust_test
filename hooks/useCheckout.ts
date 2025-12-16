import { useState } from "react";
import { CheckoutState } from "@/types/checkout";

export function useCheckout() {
  const [state, setState] = useState<CheckoutState>({
    activeTab: "crypto-cash",
    amountPay: "1.00",
    amountReceive: "1.00",
    payAsset: "ETH",
    receiveAsset: "NGN",
    payFrom: "",
    payTo: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof CheckoutState>(
    key: K,
    value: CheckoutState[K]
  ) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const isValid =
    Boolean(state.amountPay) &&
    Boolean(state.payFrom) &&
    Boolean(state.payTo);

 const submit = async () => {
  if (!isValid) {
    setError("Please complete all required fields");
    return;
  }

  setError(null);
  setLoading(true);

  await new Promise((r) => setTimeout(r, 1500));

  setLoading(false);

  update("success", true);
};


  return {
    state,
    update,
    loading,
    error,
    submit,
  };
}
