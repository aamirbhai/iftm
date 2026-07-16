"use client";

import { useState } from "react";

interface Programme {
  sno: number;
  name: string;
  eligibility: string;
  fee: string;
  examFee: string;
  duration: string;
  school: string;
  phones: string[];
}

function ProgrammeTable({ data }: { data: Programme[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-iftm-navy text-white">
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">#</th>
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Programme</th>
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell">Eligibility</th>
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Fee/Year</th>
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider hidden lg:table-cell">Exam Fee</th>
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Duration</th>
            <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider hidden lg:table-cell">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={p.sno} className={"border-b border-gray-100 " + (i % 2 === 0 ? "bg-white" : "bg-gray-50") + " hover:bg-iftm-gold/5 transition-colors"}>
              <td className="px-3 py-3 font-bold text-iftm-navy">{p.sno}</td>
              <td className="px-3 py-3">
                <p className="font-bold text-iftm-navy text-sm">{p.name}</p>
                <p className="text-gray-400 text-[11px] mt-0.5 md:hidden">{p.eligibility}</p>
              </td>
              <td className="px-3 py-3 text-gray-500 text-xs hidden md:table-cell">{p.eligibility}</td>
              <td className="px-3 py-3 font-bold text-iftm-primary whitespace-nowrap">{p.fee}</td>
              <td className="px-3 py-3 text-gray-500 hidden lg:table-cell">{p.examFee}</td>
              <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{p.duration}</td>
              <td className="px-3 py-3 hidden lg:table-cell">
                <div className="flex flex-wrap gap-1">
                  {p.phones.map((ph) => (
                    <a key={ph} href={"tel:+91" + ph} className="text-iftm-primary text-[11px] hover:underline block">{ph}</a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FeeTableSection({ ugProgrammes, pgProgrammes }: { ugProgrammes: Programme[]; pgProgrammes: Programme[] }) {
  const [tab, setTab] = useState<"ug" | "pg">("ug");

  return (
    <div>
      <div className="flex gap-2 mb-6 justify-center">
        <button onClick={() => setTab("ug")} className={"px-6 py-2.5 rounded-lg font-bold text-sm transition-all " + (tab === "ug" ? "bg-iftm-primary text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200")}>
          UG Programmes ({ugProgrammes.length})
        </button>
        <button onClick={() => setTab("pg")} className={"px-6 py-2.5 rounded-lg font-bold text-sm transition-all " + (tab === "pg" ? "bg-iftm-primary text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200")}>
          PG Programmes ({pgProgrammes.length})
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {tab === "ug" ? <ProgrammeTable data={ugProgrammes} /> : <ProgrammeTable data={pgProgrammes} />}
      </div>
    </div>
  );
}
