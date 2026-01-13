"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";


export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Link href={"/"}>
          <CardTitle className="text-2xl font-bold">
            EndPoint
          </CardTitle>
          </Link>
          <p className="text-sm text-muted-foreground">
            Sign in to continue
          </p>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Google */}
          <Button
            variant="outline"
            className="w-full"
            onClick={()=> signIn.social({
              provider: 'google',
              callbackURL: "/"
            })}
          >
            Continue with Google
          </Button>

          {/* GitHub */}
          <Button
            className="w-full"
            onClick={()=> signIn.social({
              provider: 'github',
              callbackURL: "/"
            })}
          >
            Continue with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
