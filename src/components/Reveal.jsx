import { useScrollReveal } from '../hooks/useAnimations'

export default function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
