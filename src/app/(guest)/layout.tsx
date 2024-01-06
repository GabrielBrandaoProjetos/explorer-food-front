import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body >
        <div className="bg-dark-400 h-screen flex flex-col items-center justify-center p-16">
          <h1 className="text-white text-4xl font-bold mb-16">Food explorer</h1>
          {children}
        </div>
      </body>
    </html>
  )
}