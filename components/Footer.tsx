export default function Footer(){
  return (
    <footer className="mt-24 mb-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 opacity-80">
        <p>© {new Date().getFullYear()} Shooom</p>
        <nav className="flex gap-5">
          <a className="underline" href="/privacy">Privacy</a>
          <a className="underline" href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
