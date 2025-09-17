import { useMemo, useState } from "react";
import { Module } from "../types/chess";
import Image from "next/image";

type ModuleSwitcherProps = {
  modules: Module[];
  currentId: string;
  onChange: (id: string) => void;
};

export const ModuleSwitcher = ({
  modules,
  currentId,
  onChange,
}: ModuleSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const current = useMemo(
    () => modules.find((m) => m.id === currentId)!,
    [modules, currentId]
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer"
      >
        <Image src="/module-switcher.svg" alt="switch module" width={48} height={48} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl bg-white p-1 shadow-xl ring-1 ring-black/5">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                onChange(m.id);
                setOpen(false);
              }}
              className={`flex cursor-pointer w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50 ${
                m.id === current.id ? "bg-slate-50" : ""
              }`}
            >
              <div>
                <div className="font-semibold text-slate-800">{m.name}</div>
                <div className="text-xs text-slate-500">
                  Level {m.level} • Module {m.index}
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                {m.chapters.length}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
