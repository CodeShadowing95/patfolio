import { useRef } from "react"

const GlowCard = ({ card, children, index }: { card: any, children: React.ReactNode, index: number }) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (index: number) => (e: MouseEvent) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Calculate the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(y, x) * (180 / Math.PI);

    angle = (angle + 360) % 360;
    
    card.style.setProperty('--start', angle + 60 + '');
  }

  return (
    <div ref={(el: HTMLDivElement) => { cardRefs.current[index] = el }} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({length: 5}, (_, i) => (
          <img src="/images/star.png" alt="star" key={i} className="size-5" />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  )
}

export default GlowCard