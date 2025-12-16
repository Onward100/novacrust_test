"use client";

import { useEffect } from "react";
import { Tabs } from "./Tabs";
import { Field } from "./Field";
import { AmountRow } from "./AmountRow";
import { useCheckout } from "@/hooks/useCheckout";
import { Asset } from "@/types/checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ASSETS: Asset[] = [
  { code: "ETH", label: "ETH", icon: "/icons/eth.png" },
  { code: "CELO", label: "USDT-CELO", icon: "/icons/celo.png" },
  { code: "TON", label: "USDT-TON", icon: "/icons/ton.png" },
  { code: "BNB", label: "USDT-BNB", icon: "/icons/bnb.png" },
];

const FIAT: Asset[] = [
  { code: "NGN", label: "NGN", icon: "/icons/nig.png" },
  { code: "USD", label: "USD", icon: "/icons/usd.png" },
];

const walletIcons: Record<string, string> = {
  meta: "/icons/meta.png",
  rainbow: "/icons/rainbow.png",
  walletconnect: "/icons/Wallet.png",
  other: "/icons/connect.png",
};

export default function Checkout() {
  const { state, update, loading, error, submit } = useCheckout();

  const handleSubmit = async (
    event?: React.MouseEvent<HTMLButtonElement> | React.FormEvent
  ) => {
    event?.preventDefault();
    try {
      await submit(); 
    
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };

  // Show error toast
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);

  // Show success toast
  useEffect(() => {
    if (state.success) {
      toast.success("Conversion successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Optionally reset success state after showing the toast
      const timer = setTimeout(() => update("success", false), 3500);
      return () => clearTimeout(timer);
    }
  }, [state.success, update]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[70%] md:w-[40%] rounded-3xl bg-white p-6 shadow-xl">
        <Tabs
          active={state.activeTab}
          onChange={(t) => update("activeTab", t)}
        />

        <Field label="You pay">
          <AmountRow
            value={state.amountPay}
            onChange={(v) => update("amountPay", v)}
            options={ASSETS}
            selected={state.payAsset}
            onSelect={(v) => update("payAsset", v)}
          />
        </Field>

        <Field label="You receive">
          <AmountRow
            value={state.amountReceive}
            onChange={(v) => update("amountReceive", v)}
            options={FIAT}
            selected={state.receiveAsset}
            onSelect={(v) => update("receiveAsset", v)}
          />
        </Field>

        <Field label="Pay from">
          <div className="relative flex items-center gap-3">
            {state.payFrom && (
              <img
                src={walletIcons[state.payFrom]}
                alt=""
                className="absolute left-4 h-5 w-5"
              />
            )}
            <select
              value={state.payFrom}
              onChange={(e) => update("payFrom", e.target.value)}
              className="
                w-full appearance-none rounded-full border border-gray-400
                pl-12 pr-14 py-3 bg-white
                focus:outline-none focus:ring-2 focus:ring-teal-900
              "
            >
              <option value="">Select an option</option>
              <option value="meta">MetaMask</option>
              <option value="rainbow">Rainbow</option>
              <option value="walletconnect">WalletConnect</option>
              <option value="other">
                Other Crypto Wallets (Binance, Coinbase, Bybit etc)
              </option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21L10 10.94l4.77-4.77" />
            </svg>
          </div>
        </Field>

        <Field label="Pay to">
          <div className="relative">
            <select
              value={state.payTo}
              onChange={(e) => update("payTo", e.target.value)}
              className="
                w-full appearance-none rounded-full border border-gray-400
                px-4 py-3 pr-12 bg-white
              "
            >
              <option value="">Select an option</option>
              <option value="bank">Bank Account</option>
              <option value="mobile">Mobile Money</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Field>

        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="mt-6 w-full rounded-full bg-teal-900 py-4 font-medium text-white disabled:opacity-60"
        >
          {loading ? "Processing..." : "Convert now"}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
