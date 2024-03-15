import { raleway } from "../ui/fonts";

interface SectionHeadingProps {
  name: string;
}

export function SectionHeading ({ name }: SectionHeadingProps) {
  return (
    <h2 
      className={`text-xl font-semibold text-[#424b54] ${raleway.className}`}
    >
      {name}
    </h2>
  )
}