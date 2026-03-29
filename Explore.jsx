const items = [
  { title: "Glow Flower", desc: "Emits magical light" },
  { title: "Fairy Dust", desc: "Grants hidden vision" },
  { title: "Ancient Tree", desc: "Whispers secrets" }
];

export default function Explore() {
  return (
    <section className="min-h-screen p-10 grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-6 bg-green-900/30 rounded-xl hover:scale-105 transition cursor-pointer"
        >
          <h3 className="text-xl text-yellow-300">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
