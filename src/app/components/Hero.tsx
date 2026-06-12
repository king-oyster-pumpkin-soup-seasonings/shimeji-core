export default function Hero() {
  return (
    <section>
      <p className="text-center mt-4 text-xl">Hi, I&apos;m</p>
      <h1 className="font-heading text-7xl text-center tracking-widest">
        RICKY CUENZA
      </h1>
      <p className="text-3xl text-center mb-6">
        a programmer of web
        <span className="text-xl"> ...and mobile :)</span>
      </p>
      <div className="flex gap-x-0.5 justify-center my-2">
        <a
          className="border-mauve-100 rounded tracking-widest border-2 bg-mauve-50/25 hover:bg-green-100/33 min-w-1/4 min-h-14 flex items-center justify-center"
          href="https://docs.google.com/document/d/1zQAHWC5higpZhQSNbUzHbXXIyTSgo2aL/preview"
          target="_blank"
          rel="noopener noreferrer">
          📄 Resume
        </a>
        <a
          className="border-mauve-100 rounded tracking-widest border-2 bg-mauve-50/25 hover:bg-blue-100/33 min-w-1/4 min-h-14 flex items-center justify-center"
          href="https://github.com/king-oyster-pumpkin-soup-seasonings"
          target="_blank"
          rel="noopener noreferrer">
          😺 GitHub
        </a>
        <a
          className="border-mauve-100 rounded tracking-widest border-2 bg-mauve-50/25 hover:bg-red-100/33 min-w-1/4 min-h-14 flex items-center justify-center"
          href="https://www.linkedin.com/in/ricky-cuenza-b05a2332a/"
          target="_blank"
          rel="noopener noreferrer">
          💼 LinkedIn
        </a>
        <a
          className="border-mauve-100 rounded tracking-widest border-2 bg-mauve-50/25 hover:bg-yellow-100/33 min-w-1/4 min-h-14 flex items-center justify-center"
          href="mailto:rickycuenza3399@gmail.com">
          ✉️ Email
        </a>
      </div>
    </section>
  );
}
