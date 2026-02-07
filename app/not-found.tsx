export default function NotFound() {
  return (
    <main className="min-h-screen px-10 py-16 bg-[var(--page)]">
      <section
        className="
          mx-auto max-w-2xl
          rounded-xl p-10
          bg-[var(--section)]
          shadow-card
          text-center
        "
      >
        <h1 className="text-4xl font-semibold text-[var(--section-text)]">
          404 – Not Found
        </h1>

        <p className="mt-4 text-[var(--section-muted)]">
          This route doesn’t exist. Only <code>/store</code> is available.
        </p>

        <a
          href="/store"
          className="
            inline-block mt-8
            rounded-md px-6 py-3
            bg-[var(--primary)]
            text-[var(--primaryText)]
            font-semibold
            border-2 border-[var(--ink)]
            shadow-[3px_3px_0_var(--ink)]
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
