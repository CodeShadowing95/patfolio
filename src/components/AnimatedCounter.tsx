import { counterItems } from "../constants"
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item: { value: number, suffix: string, label: string }) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div key={item.label} className="counter-number text-white text-5xl font-bold mb-2">
              {/* 0 {item.suffix} */}
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter