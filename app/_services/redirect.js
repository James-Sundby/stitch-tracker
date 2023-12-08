import Link from "next/link";

export default function Redirect() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Sorry</h1>
          <p className="py-6">
            You must be signed in to view this page. Please sign in with GitHub
            on the main page.
          </p>
          <button className="btn btn-primary">
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
