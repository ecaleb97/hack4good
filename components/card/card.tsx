interface CardProps {
  time: string
  description: string,
  icon: React.ReactNode
  message?: string
  className: string
}

export function Card ({ className, time, description, icon, message }: CardProps) {
  return (
    <div className={`${className} my-6 
      rounded-xl p-4 opacity-80`}
    >
      <span className="flex items-center gap-1
      font-light text-white">
        {icon}
        {time}
      </span>
      <p
        className="text-center text-balance
        text-lg p-4 text-[#fefefe] z-50"
      >
        {description}
      </p>
      <p className="text-center text-white underline">{message}</p>
    </div>
  )
}