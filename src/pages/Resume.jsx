import resumePdf from "../assets/vishakha resume.pdf";
export default function Resume() {
  return (
    <section className="py-16 scroll-mt-24">
      <div className="neutral-section p-4 sm:p-6">
        <div className="flex items-center justify-between px-4 sm:px-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-900">Resume</h1>
          <a href={resumePdf} target="_blank" rel="noreferrer" className="bg-orange-700 hover:bg-orange-600 text-white px-3 py-2 text-sm rounded-md shadow">Download PDF</a>
        </div>
        <div className="mt-4 rounded-xl overflow-hidden border" style={{borderColor:'var(--neutral-border)'}}>
          <iframe
            title="Resume PDF"
            src={resumePdf}
            className="w-full"
            style={{ height: '80vh', background: '#fff' }}
          />
        </div>
        <p className="mt-3 text-center text-sm text-[var(--neutral-muted)]">If the preview doesn’t load, use the Download button above.</p>
      </div>
    </section>
  );
}
