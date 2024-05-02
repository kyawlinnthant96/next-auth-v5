import { auth } from "@/auth";
import AuthButtonServer from "@/app/AuthButton.server";



export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
        <AuthButtonServer />
    </main>
  );
}
