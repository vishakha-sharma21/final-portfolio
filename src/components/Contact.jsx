export default function Contact() {
  // Resolve a handshake image from src/assets named like 'handshake.(png|jpg|jpeg|webp|svg)'
  const assetMap = import.meta.glob("../assets/*.{png,jpg,jpeg,webp,svg}", { eager: true, as: "url" });
  const handshakeUrl = Object.entries(assetMap).find(([p]) => /handshake\.(png|jpe?g|webp|svg)$/i.test(p))?.[1];

  return (
    <section id="contact" className="py-16 scroll-mt-24">
      <div className="neutral-section p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Let's Connect</h2>
            <p className="text-gray-600 mt-2">Have a project or idea? Let’s talk.</p>
            <form className="mt-6 grid gap-4 max-w-xl">
              <input className="border rounded-md px-4 py-3" type="text" placeholder="Your name" />
              <input className="border rounded-md px-4 py-3" type="email" placeholder="Your email" />
              <textarea className="border rounded-md px-4 py-3" rows="5" placeholder="Tell me about your project"></textarea>
              <button type="submit" className="bg-orange-900 text-white px-5 py-3 rounded-md hover:bg-orange-600 w-fit">Send message</button>
            </form>
          </div>
          <div className="hidden sm:block">
            {handshakeUrl && (
              <img
                src={handshakeUrl}
                alt="Handshake"
                className="w-full max-h-[420px] object-contain rounded-xl border shadow-sm"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
