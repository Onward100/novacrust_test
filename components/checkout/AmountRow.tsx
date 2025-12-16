"use client";

import { useState } from "react";
import { Asset } from "@/types/checkout";
import { SearchIcon } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selectedAsset = options.find(o => o.code === selected);

  const filtered = options.filter(o =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex items-center justify-between rounded-xl px-4 py-2">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-1/2 outline-none"
      />

      {/* Dropdown */}
      <div className="relative w-40">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-2 rounded-full border bg-gray-100 px-3 py-1"
        >
          {selectedAsset && (
            <img src={selectedAsset.icon} className="h-5 w-5" />
          )}
          <span className="flex-1 text-left text-sm">
            {selectedAsset?.label}
          </span>
          <span>▾</span>
        </button>

        {open && (
          <div className="absolute z-50 mt-2 w-full rounded-xl border bg-white shadow-lg">
            {/* Search */}
            <div className="flex items-center gap-2 border rounded-full px-3 py-2 w-[90%] mx-auto my-2">
              <SearchIcon className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Options */}
            <ul className="max-h-48 overflow-auto">
              {filtered.map(o => (
                <li
                  key={o.code}
                  onClick={() => {
                    onSelect(o.code);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="
                    flex cursor-pointer items-center gap-2 px-3 py-2
                    hover:bg-gray-200
                  "
                >
                  <img src={o.icon} className="h-4 w-4" />
                  <span className="text-sm">{o.label}</span>
                </li>
              ))}

              {filtered.length === 0 && (
                <li className="px-3 py-2 text-sm text-gray-400">
                  No results
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
