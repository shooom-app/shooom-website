export const metadata = { title: "Privacy • Shooom" };

export default function Page(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <div className="glass p-6 leading-relaxed">
        <p className="opacity-90">
          We collect minimal data for verification and booking. We do not sell your personal data.
          Payments will be processed securely by our partners when in-app payments launch.
        </p>
        <p className="opacity-80 mt-4">
          For questions: <a href="mailto:privacy@shooom.app" className="underline">privacy@shooom.app</a>.
        </p>
      </div>
    </main>
  );
}
