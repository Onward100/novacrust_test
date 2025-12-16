import { Asset } from "@/types/checkout";

interface AmountRowProps {
  value: string;
  onChange: (v: string) => void;
  options: Asset[];
  selected: string;
  onSelect: (v: string) => void;
}
export function AmountRow({
  value,
  onChange,
  options,
  selected,
  onSelect,
}: AmountRowProps) {
  const selectedAsset = options.find(o => o.code === selected);

  return (
    <div className="flex items-center justify-between rounded-xl border px-4 py-3">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-1/2 outline-none"
      />

      <div className="relative ">
        {selectedAsset && (
          <img
            src={selectedAsset.icon}
            alt=""
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
          />
        )}

        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value)}
          className="
            w-full appearance-none rounded-lg border
            pl-10 pr-8 py-1
            bg-white
          "
        >
          {options.map((o) => (
            <option key={o.code} value={o.code}>
              {o.label}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21L10 10.94l4.77-4.77" />
        </svg>
      </div>
    </div>
  );
}
