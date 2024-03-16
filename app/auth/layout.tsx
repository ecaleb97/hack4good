import { Footer } from "@/components/footer/footer"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout ({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100
    px-5">
      {children}
      <Footer />
    </div>
  )
}