import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-50 h-screen bg-fixed bg-cover bg-center"  style={{backgroundImage: "url('thecloud.webp')" }}>
      <section className="flex justify-center items-center h-full ">
        <div className="flex flex-col justify-center items-center w-10/12 h-full gap-4">
          <h1 className="text-6xl font-bold text-black">Kevin Llanos</h1>
          <p>I am SoftWar</p>
        </div>
      </section>
      <section id="about"></section>
      <section id="work_highlights"></section>
      <section id="projects"></section>
      <section id="education"></section>
      <section id="certifications"></section>
      <section id="contact"></section>
    </main>
  );
}
