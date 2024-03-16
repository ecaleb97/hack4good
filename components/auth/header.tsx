import { raleway } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string,
  title?: string
}

export function Header ({ label }: HeaderProps) {
  return (
    <header className="w-full flex flex-col gap-y-4 items-center
    justify-center">
      <h1 
        className={cn("text-3xl font-semibold", `${raleway.className} antialiased`)}
      >
        Autentícate
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </header>
  )
}