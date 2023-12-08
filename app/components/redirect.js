import Link from "next/link";

export default function Redirect() {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Sorry</h1>
          <p class="py-6">
            You must be signed in to view this page. Please sign in with GitHub
            on the main page.
          </p>
          <button class="btn btn-primary">
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
