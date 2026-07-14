"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ugProgrammes = [
  { sno: 1, name: "BBA (Hons. with Research)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹50,000 (3 Yrs) / ₹1,10,000 (4th Yr)", examFee: "₹10,000", duration: "3/4 Years", school: "School of Business Management", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { sno: 2, name: "B.Com. (Hons. with Research)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹15,000 (3 Yrs) / ₹20,000 (4th Yr)", examFee: "₹10,000", duration: "3/4 Years", school: "School of Business Management", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { sno: 3, name: "Bachelor of Hotel Mgmt. & Catering Technology", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 or Diploma in HM", fee: "₹80,000", examFee: "₹10,000", duration: "4 Years", school: "School of Business Management", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { sno: 4, name: "B.Pharm.", eligibility: "10+2 pass with Physics Chemistry Maths/Biology", fee: "₹1,25,000", examFee: "₹10,000", duration: "4 Years", school: "School of Pharmaceutical Sciences", phones: ["9451751810", "7060251066"] },
  { sno: 5, name: "B.Sc. (Hons. with Research) Home Science", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹15,000 (3 Yrs) / ₹25,000 (4th Yr)", examFee: "₹10,000", duration: "3 Years", school: "School of Sciences", phones: ["9412391675", "9259410042", "8077580771", "9669625244"] },
  { sno: 6, name: "B.Sc. (Hons. with Research) P/C/M/Z/B", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM/PCB", fee: "₹20,000 (3 Yrs) / ₹25,000 (4th Yr)", examFee: "₹10,000", duration: "3/4 Years", school: "School of Sciences", phones: ["9412391675", "9259410042", "8077580771", "9669625244"] },
  { sno: 7, name: "B.Tech (Civil Engineering)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Engineering & Technology", phones: ["9997998354", "9458526285"] },
  { sno: 8, name: "B.Tech (Mechanical Engineering)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Engineering & Technology", phones: ["9997998354", "9458526285"] },
  { sno: 9, name: "B.Tech (Electrical Engineering)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Engineering & Technology", phones: ["9997998354", "9458526285"] },
  { sno: 10, name: "B.Tech (Electronics & Communication)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Engineering & Technology", phones: ["9997998354", "9458526285"] },
  { sno: 11, name: "B.Tech (Computer Sc. & Engg.)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Computer Science & Applications", phones: ["9412809445", "9927048126", "9410013261", "9410457759"] },
  { sno: 12, name: "B.Tech (Artificial Intelligence)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM", fee: "₹1,15,000", examFee: "₹10,000", duration: "4 Years", school: "School of Computer Science & Applications", phones: ["9412809445", "9927048126", "9410013261", "9410457759"] },
  { sno: 13, name: "BCA (Hons. with Research)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with Maths on 10th", fee: "₹50,000 (3 Yrs) / ₹70,000 (4th Yr)", examFee: "₹10,000", duration: "3/4 Years", school: "School of Computer Science & Applications", phones: ["9412809445", "9927048126", "9410013261", "9410457759"] },
  { sno: 14, name: "B.Tech (Biotechnology)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM/PCB", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Biotechnology", phones: ["9837612666", "9760353953"] },
  { sno: 15, name: "B.Sc. (Food Technology)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCB", fee: "₹45,000", examFee: "₹10,000", duration: "3 Years", school: "School of Biotechnology", phones: ["9837612666", "9760353953"] },
  { sno: 16, name: "B.Sc. (Hons. with Research) Biotechnology", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCB/PCM", fee: "₹45,000", examFee: "₹10,000", duration: "3/4 Years", school: "School of Biotechnology", phones: ["9837612666", "9760353953"] },
  { sno: 17, name: "B.Sc. (Hons. with Research) Microbiology", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCB/PCM", fee: "₹45,000", examFee: "₹10,000", duration: "3/4 Years", school: "School of Biotechnology", phones: ["9837612666", "9760353953"] },
  { sno: 18, name: "LL.B", eligibility: "Pass with min 45% (40% SC/ST) at Graduation", fee: "₹45,000", examFee: "₹10,000", duration: "3 Years", school: "School of Law", phones: ["9837589666", "8791491123"] },
  { sno: 19, name: "Integrated Law (B.B.A. LL.B)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹60,000", examFee: "₹10,000", duration: "5 Years", school: "School of Law", phones: ["9837589666", "8791491123"] },
  { sno: 20, name: "Integrated Law (B.A. LL.B)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹60,000", examFee: "₹10,000", duration: "5 Years", school: "School of Law", phones: ["9837589666", "8791491123"] },
  { sno: 21, name: "B.Tech (Agriculture Engineering)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM/PCB/Agriculture", fee: "₹92,000", examFee: "₹10,000", duration: "4 Years", school: "School of Agricultural Sciences", phones: ["8477061540", "9758531198"] },
  { sno: 22, name: "B.Sc. (Hons.) AG", eligibility: "Pass with min 45% (40% SC/ST) in 10+2 with PCM/PCB/Agriculture", fee: "₹50,000", examFee: "₹10,000", duration: "4 Years", school: "School of Agricultural Sciences", phones: ["8477061540", "9758531198"] },
  { sno: 23, name: "BA (Hons. with Research) English/Hindi/Economics/History/Geography/Sociology/Political Science/Sanskrit/Education/Home Science", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹10,000 (3 Yrs) / ₹12,000 (4th Yr)", examFee: "₹2,500", duration: "3/4 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 24, name: "BA-B.Ed.-ITEP", eligibility: "Pass with min 50% (45% SC/ST) in 10+2", fee: "₹50,000", examFee: "₹10,000", duration: "4 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 25, name: "B.Sc.-B.Ed.-ITEP", eligibility: "Pass with min 50% (45% SC/ST) in 10+2 with PCM/PCB", fee: "₹55,000", examFee: "₹10,000", duration: "4 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 26, name: "B.Ed.", eligibility: "Pass with min 50% (45% SC/ST) in Graduation", fee: "₹65,000", examFee: "₹10,000", duration: "2 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 27, name: "BA (Journalism)", eligibility: "Pass with min 45% (40% SC/ST) in 10+2", fee: "₹35,000", examFee: "₹10,000", duration: "3 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 28, name: "B.Lib. & Information Science", eligibility: "Pass with min 45% (40% SC/ST) in Graduation", fee: "₹10,000", examFee: "₹5,000", duration: "1 Year", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
];

const pgProgrammes = [
  { sno: 1, name: "MBA", eligibility: "Pass with min 45% (40% SC/ST) in Graduation or valid MAT/CAT Score", fee: "₹1,10,000", examFee: "₹10,000", duration: "2 Years", school: "School of Business Management", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { sno: 2, name: "M.Com.", eligibility: "Pass with min 45% (40% SC/ST) in Graduation with Commerce", fee: "₹20,000", examFee: "₹10,000", duration: "2 Years", school: "School of Business Management", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { sno: 3, name: "Master of Hotel Management (MHM)", eligibility: "Pass with min 45% (40% SC/ST) in Graduation", fee: "₹85,000", examFee: "₹10,000", duration: "2 Years", school: "School of Business Management", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { sno: 4, name: "M.Pharm (Pharmaceutics/Pharma Chemistry/Pharmacology/Pharmacognosy)", eligibility: "Pass with min 55% in B.Pharm or valid GPAT Score", fee: "₹1,15,000", examFee: "₹10,000", duration: "2 Years", school: "School of Pharmaceutical Sciences", phones: ["9451751810", "7060251066"] },
  { sno: 5, name: "M.Sc. (Botany/Zoology/Physics/Chemistry/Maths/Home Science)", eligibility: "Pass with min 45% (40% SC/ST) in B.Sc.", fee: "₹25,000", examFee: "₹10,000", duration: "2 Years", school: "School of Sciences", phones: ["9412391675", "9259410042", "8077580771", "9669625244"] },
  { sno: 6, name: "M.Tech (Civil/Mechanical/Electrical/ECE)", eligibility: "Pass with min 55% in relevant B.Tech branch", fee: "₹87,000", examFee: "₹10,000", duration: "2 Years", school: "School of Engineering & Technology", phones: ["9997998354", "9458526285"] },
  { sno: 7, name: "M.Tech (Computer Sc. & Engg.)", eligibility: "Pass with min 55% in B.Tech(CS) or min 55% in MCA", fee: "₹87,000", examFee: "₹10,000", duration: "2 Years", school: "School of Computer Science & Applications", phones: ["9412809445", "9927048126", "9410013261", "9410457759"] },
  { sno: 8, name: "MCA", eligibility: "Pass with min 45% (40% SC/ST) in Graduation with Maths at 10+2 or BCA", fee: "₹70,000", examFee: "₹10,000", duration: "2 Years", school: "School of Computer Science & Applications", phones: ["9412809445", "9927048126", "9410013261", "9410457759"] },
  { sno: 9, name: "M.Sc. (Biotechnology/Microbiology/Food Technology)", eligibility: "Pass with min 50% (45% SC/ST) in B.Sc. Life Sciences", fee: "₹45,000", examFee: "₹10,000", duration: "2 Years", school: "School of Biotechnology", phones: ["9837612666", "9760353953"] },
  { sno: 10, name: "M.Tech (Biotechnology)", eligibility: "Pass with min 55% in B.Tech Biotechnology", fee: "₹87,000", examFee: "₹10,000", duration: "2 Years", school: "School of Biotechnology", phones: ["9837612666", "9760353953"] },
  { sno: 11, name: "LLM", eligibility: "Pass with min 45% (40% SC/ST) in LLB", fee: "₹60,000", examFee: "₹10,000", duration: "2 Years", school: "School of Law", phones: ["9837589666", "8791491123"] },
  { sno: 12, name: "M.Ed.", eligibility: "Pass with min 50% (45% SC/ST) in B.Ed.", fee: "₹55,000", examFee: "₹10,000", duration: "2 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 13, name: "MA (English/Hindi/Economics/Geography/Sociology/Education)", eligibility: "Pass with min 45% (40% SC/ST) in Graduation", fee: "₹12,000", examFee: "₹2,500", duration: "2 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 14, name: "MA (Journalism)", eligibility: "Pass with min 45% (40% SC/ST) in Graduation", fee: "₹40,000", examFee: "₹5,000", duration: "2 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 15, name: "M.Lib. & Information Science", eligibility: "Pass with min 45% (40% SC/ST) in B.Lib", fee: "₹15,000", examFee: "₹5,000", duration: "1 Year", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 16, name: "Master of Social Work (MSW)", eligibility: "Pass with min 45% (40% SC/ST) in Graduation", fee: "₹35,000", examFee: "₹5,000", duration: "2 Years", school: "School of Education and Humanities", phones: ["8126543884", "7906392179", "7906512226"] },
  { sno: 17, name: "M.Tech (Agriculture - Soil/Water/Farm Machinery/Process & Food)", eligibility: "Pass with min 55% in B.Tech Agricultural", fee: "₹87,000", examFee: "₹10,000", duration: "2 Years", school: "School of Agricultural Sciences", phones: ["8477061540", "9758531198"] },
  { sno: 18, name: "M.Sc. (Agronomy/Horticulture/Genetics & Plant Breeding)", eligibility: "Pass with min 45% (40% SC/ST) in B.Sc. Agriculture", fee: "₹50,000", examFee: "₹10,000", duration: "2 Years", school: "School of Agricultural Sciences", phones: ["8477061540", "9758531198"] },
];

const schools = [
  { name: "School of Business Management", short: "SBM", phones: ["9410071506", "9897093192", "9457269572", "9760200575"] },
  { name: "School of Pharmaceutical Sciences", short: "SPS", phones: ["9451751810", "7060251066"] },
  { name: "School of Sciences", short: "SOS", phones: ["9412391675", "9259410042", "8077580771", "9669625244"] },
  { name: "School of Engineering & Technology", short: "SET", phones: ["9997998354", "9458526285"] },
  { name: "School of Computer Science & Applications", short: "SCA", phones: ["9412809445", "9927048126", "9410013261", "9410457759"] },
  { name: "School of Biotechnology", short: "SBT", phones: ["9837612666", "9760353953"] },
  { name: "School of Law", short: "SOL", phones: ["9837589666", "8791491123"] },
  { name: "School of Education and Humanities", short: "SEH", phones: ["8126543884", "7906392179", "7906512226"] },
  { name: "School of Agricultural Sciences", short: "SASE", phones: ["8477061540", "9758531198"] },
];

function ProgrammeTable({ data }: { data: typeof ugProgrammes }) {
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

export default function FeePage() {
  const [tab, setTab] = useState<"ug" | "pg">("ug");

  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-iftm-gold/15 blur-[100px] animate-pulse" />
        <div className="relative z-10 pt-[120px] md:pt-[130px] pb-16 max-w-[1200px] mx-auto px-4 md:px-6">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-white/50 text-sm">
              <li><a href="/" className="hover:text-iftm-gold transition-colors">Home</a></li>
              <li>/</li>
              <li className="text-iftm-gold">Fee Structure 2026-27</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Fee <span className="text-iftm-gold">Structure</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-6">
            Complete fee details for all UG, PG, Diploma & Doctoral programmes for session 2026-27.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:1800121066666" className="px-5 py-2.5 bg-iftm-gold text-iftm-dark font-bold text-sm rounded-lg hover:bg-yellow-400 transition-all">
              <i className="fas fa-phone-alt mr-2" /> 1800-121-066666 (Toll Free)
            </a>
            <a href="tel:+919639004077" className="px-5 py-2.5 bg-green-500 text-white font-bold text-sm rounded-lg hover:bg-green-600 transition-all">
              <i className="fab fa-whatsapp mr-2" /> 9639004077
            </a>
            <a href="mailto:info@iftmuniversity.ac.in" className="px-5 py-2.5 bg-white/10 text-white border border-white/30 font-semibold text-sm rounded-lg hover:bg-white/20 transition-all">
              <i className="fas fa-envelope mr-2" /> info@iftmuniversity.ac.in
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 28C672 36 768 42 864 40C960 38 1056 28 1152 22C1248 16 1344 14 1392 13L1440 12V60H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* PROGRAMME TABLES */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Session 2026-27</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Programmes & <span className="text-iftm-gold">Fees</span></h2>
          </div>

          {/* Tabs */}
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

          <p className="text-center text-gray-400 text-xs mt-4">* Fees for admission session 2026-27. Exam fee is per annum.</p>
        </div>
      </section>

      {/* OTHER FEES */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Additional Charges</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">Other <span className="text-iftm-gold">Fees</span></h2>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-bold text-iftm-navy">Processing Charge (One Time)</td>
                  <td className="px-6 py-4 font-bold text-iftm-primary text-right">₹5,000/-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-bold text-iftm-navy">Hostel Fee (Fooding & Lodging)</td>
                  <td className="px-6 py-4 font-bold text-iftm-primary text-right">₹45,000/- p.a.</td>
                </tr>
                <tr className="border-b border-gray-100 bg-green-50">
                  <td className="px-6 py-4 font-bold text-iftm-navy">Bus Transport</td>
                  <td className="px-6 py-4 font-bold text-green-600 text-right">FREE</td>
                </tr>
                <tr className="border-b border-gray-100 bg-green-50">
                  <td className="px-6 py-4 font-bold text-iftm-navy">Uniform (Summers & Winters)</td>
                  <td className="px-6 py-4 font-bold text-green-600 text-right">FREE</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-bold text-iftm-navy">ID Card Cum Library Card</td>
                  <td className="px-6 py-4 font-bold text-green-600 text-right">FREE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SCHOOL WISE CONTACTS */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">Admission Enquiry</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-iftm-navy mb-3">School Wise <span className="text-iftm-gold">Contacts</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">Contact the respective school directly for programme-specific admission queries.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schools.map((s) => (
              <div key={s.short} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-iftm-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">{s.short}</div>
                  <p className="font-bold text-iftm-navy text-sm">{s.name}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.phones.map((ph) => (
                    <a key={ph} href={"tel:+91" + ph} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-lg border border-gray-100 text-iftm-primary text-xs font-medium hover:bg-iftm-primary hover:text-white transition-all">
                      <i className="fas fa-phone text-[9px]" /> {ph}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Toll Free */}
          <div className="mt-8 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark rounded-2xl p-6 text-center">
            <p className="text-white/70 text-sm mb-2">General Admission Helpline</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:1800121066666" className="text-iftm-gold text-2xl font-extrabold hover:underline">1800-121-066666</a>
              <a href="tel:+919639004077" className="text-white text-2xl font-extrabold hover:underline">9639004077</a>
              <a href="tel:+919837243666" className="text-white text-2xl font-extrabold hover:underline">9837243666</a>
            </div>
            <p className="text-white/50 text-xs mt-2">Mon-Sat 9AM-6PM | <a href="mailto:info@iftmuniversity.ac.in" className="text-iftm-gold hover:underline">info@iftmuniversity.ac.in</a></p>
          </div>
        </div>
      </section>

      {/* LOAN + SCHOLARSHIP */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Loan */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <i className="fas fa-university text-blue-600 text-xl" />
              </div>
              <h3 className="font-bold text-iftm-navy text-lg mb-2">Education Loan Facility</h3>
              <p className="text-gray-500 text-sm mb-4">IFTM University has tie-ups with leading banks for easy education loan processing. Students can avail loans at concessional rates.</p>
              <a href="/admissions" className="inline-flex items-center gap-1.5 text-iftm-primary text-sm font-bold hover:underline">
                Know More <i className="fas fa-arrow-right text-xs" />
              </a>
            </div>

            {/* Scholarship */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-iftm-gold/20 flex items-center justify-center mb-4">
                <i className="fas fa-award text-iftm-gold text-xl" />
              </div>
              <h3 className="font-bold text-iftm-navy text-lg mb-2">Scholarship Scheme</h3>
              <p className="text-gray-500 text-sm mb-4">Merit-based scholarships up to 100% fee waiver for deserving students. Sports scholarships and need-based financial aid also available.</p>
              <a href="/admissions" className="inline-flex items-center gap-1.5 text-iftm-primary text-sm font-bold hover:underline">
                Know More <i className="fas fa-arrow-right text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px]" />
        <div className="relative max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">Apply online for session 2026-27 or call our toll-free helpline for admission guidance.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://uni.edulip.com/UI/Website/IFTM/StudentRegistration.php" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-iftm-gold text-iftm-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-all">
              Apply Online <i className="fas fa-arrow-right ml-2" />
            </a>
            <a href="tel:1800121066666" className="px-8 py-3.5 bg-white/10 text-white border-2 border-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-white hover:text-iftm-primary transition-all">
              <i className="fas fa-phone-alt mr-2" /> 1800-121-066666
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
