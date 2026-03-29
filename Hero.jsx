export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')] bg-cover opacity-40"></div>

      <div className="z-10">
        <h1 className="text-7xl font-bold text-yellow-300">LUMINA</h1>
        <p className="mt-4 text-xl reveal">
          The Whispering Forest Fairy
        </p>
      </div>
    </section>
  );
}
