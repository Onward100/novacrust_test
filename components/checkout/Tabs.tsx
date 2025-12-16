import { CheckoutTab } from "@/types/checkout";

interface TabsProps {
  active: CheckoutTab;
  onChange: (t: CheckoutTab) => void;
}

const TABS: { id: CheckoutTab; label: string }[] = [
  { id: "crypto-cash", label: "Crypto to cash" },
  { id: "cash-crypto", label: "Cash to crypto" },
  { id: "crypto-loan", label: "Crypto to fiat loan" },
];

export function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="mb-6 flex rounded-full bg-gray-100 p-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 rounded-full px-3 py-2 text-sm transition ${
            active === tab.id
              ? "bg-teal-900 text-white"
              : "text-gray-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
