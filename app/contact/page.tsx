export const metadata = { title: "Contact • Shooom" };

export default function Page(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <div className="glass p-6 space-y-4">
        <p>Email: <a href="mailto:hello@shooom.app" className="underline">hello@shooom.app</a></p>
        <p>Instagram: <a className="underline" href="https://instagram.com/shooom.app">instagram.com/shooom.app</a></p>
        <p>Twitter/X: <a className="underline" href="https://x.com/shooomapp">x.com/shooomapp</a></p>
      </div>
    </main>
  );
}
