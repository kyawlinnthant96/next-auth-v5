import {auth, BASE_PATH} from "@/auth";
import {SessionProvider} from "next-auth/react";
import AuthButton from "@/app/AuthButton.client";


export default async function AuthButtonServer() {
    const session = await auth();

    if (session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
        }
    }

    return (
        <SessionProvider basePath={BASE_PATH} session={session}>
            <AuthButton />
        </SessionProvider>
    )
}
