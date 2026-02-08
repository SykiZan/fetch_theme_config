export default function NotFound() {
  return (
    <main className="min-h-screen px-10 py-16 bg-page">
      <section
        className="
          mx-auto max-w-2xl
          rounded-xl p-10
          bg-section
          shadow-card
          text-center
        "
      >
        <h1 className="text-4xl font-semibold text-sectionText">
          404 – Not Found
        </h1>

        <p className="mt-4 text-sectionMuted">
          This route doesn’t exist. Only <code>/store</code> is available.
        </p>

        <a
          href="/store"
          className="
            inline-block mt-8
            rounded-md px-6 py-3
            bg-primary
            text-primaryText
            font-semibold
            border-2 border-ink
            shadow-inkSm
            active:translate-x-[1px]
            active:translate-y-[1px]
            active:shadow-none
          "
        >
          Go to Store
        </a>
      </section>
    </main>
  );
}
