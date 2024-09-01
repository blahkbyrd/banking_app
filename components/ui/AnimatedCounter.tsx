'use client';


import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div className="w-full">
      <CountUp 
      separator=" "
      decimals={2}
      decimal=","
      suffix=" €"
      end={amount}/>
    </div>
  )
}

export default AnimatedCounter
