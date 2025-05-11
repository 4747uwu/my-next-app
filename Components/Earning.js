import { ShoppingCart, MapPin, IndianRupee } from "lucide-react"
import rupeeImg from '@/assets/15a5af365dc6e08dc89fd843ec044b68e88c1b31.png';

// Waves animation component for the cards
const Waves = ({ 
  lineColor = "rgba(79, 128, 232, 0.4)", 
  backgroundColor = "transparent",
  waveSpeedX = 0.0075,
  waveSpeedY = 0.003,
  waveAmpX = 20,
  waveAmpY = 10,
  xGap = 15,
  yGap = 20,
  maxCursorMove = 50
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* This is just a placeholder for the animation that would be implemented with JS/Canvas */}
      <div className="w-full h-full opacity-30" style={{background: `repeating-linear-gradient(45deg, ${lineColor} 0px, transparent 5px, transparent ${xGap}px)`}}></div>
    </div>
  )
}

// TechSpecCard component
const TechSpecCard = ({ title, description, icon }) => (
  <div className="bg-[#10151D] p-5 rounded-xl h-[200px] w-full flex flex-col relative overflow-hidden group">
    {/* Waves background animation */}
    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
      <Waves 
        lineColor="rgba(79, 128, 232, 0.4)"
        backgroundColor="transparent"
      />
    </div>
    
    {/* Left border with sharper fade effect at top and bottom */}
    <div className="absolute left-0 top-0 w-1 h-full">
      {/* Glowing border */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600
                    shadow-[0_0_12px_4px_rgba(79,128,232,0.4)] group-hover:shadow-[0_0_16px_6px_rgba(79,128,232,0.5)] 
                    transition-all duration-500"></div>
      
      {/* More aggressive fade mask for thinner appearance */}
      <div className="absolute inset-0 bg-gradient-to-b 
                    from-[#10151D] from-0% 
                    via-[#10151D] via-15% 
                    to-[#10151D] to-85%">
        <div className="absolute inset-0 bg-gradient-to-b 
                      from-transparent from-15% 
                      via-transparent via-40% 
                      to-transparent to-60%"></div>
      </div>
    </div>
    
    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-400 via-transparent to-transparent 
                  transition-opacity duration-700 pointer-events-none"></div>
    
    {/* Content */}
    <div className="pl-4 relative z-10">
      {/* Icon */}
      <div className="mb-4">
        <div className="bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-cyan-800/40 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{title}</h4>
      <p className="text-xs text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
    
    {/* Corner accent */}
    <div className="absolute bottom-2 right-2 w-6 h-6 opacity-20 border-b border-r border-blue-400 rounded-br"></div>
  </div>
);

// EarningTierCard component
const EarningTierCard = ({ amount, tier, description, colorClass }) => (
  <div className="bg-[#10151D] p-5 rounded-xl h-[200px] w-full flex flex-col relative overflow-hidden group">
    {/* Waves background animation */}
    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
      <Waves 
        lineColor="rgba(79, 128, 232, 0.4)"
        backgroundColor="transparent"
      />
    </div>
    
    {/* Left border with sharper fade effect at top and bottom */}
    <div className="absolute left-0 top-0 w-1 h-full">
      {/* Glowing border */}
      <div className={`absolute inset-0 bg-gradient-to-b ${colorClass === "text-cyan-400" ? "from-cyan-500 via-cyan-600 to-cyan-500" : 
                                                           colorClass === "text-yellow-400" ? "from-yellow-500 via-yellow-600 to-yellow-500" : 
                                                           "from-green-500 via-green-600 to-green-500"}
                    shadow-[0_0_12px_4px_rgba(79,128,232,0.4)] group-hover:shadow-[0_0_16px_6px_rgba(79,128,232,0.5)] 
                    transition-all duration-500`}></div>
      
      {/* More aggressive fade mask for thinner appearance */}
      <div className="absolute inset-0 bg-gradient-to-b 
                    from-[#10151D] from-0% 
                    via-[#10151D] via-15% 
                    to-[#10151D] to-85%">
        <div className="absolute inset-0 bg-gradient-to-b 
                      from-transparent from-15% 
                      via-transparent via-40% 
                      to-transparent to-60%"></div>
      </div>
    </div>
    
    {/* Hover glow effect */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${colorClass === "text-cyan-400" ? "from-cyan-400" : 
                                                                                          colorClass === "text-yellow-400" ? "from-yellow-400" : 
                                                                                          "from-green-400"} via-transparent to-transparent 
                  transition-opacity duration-700 pointer-events-none`}></div>
    
    {/* Content */}
    <div className="pl-4 relative z-10">
      {/* Amount */}
      <div className="mb-6 mt-2">
        <p className="inline-flex items-center justify-center border-2 p-3 border-gray-700 rounded-lg bg-[#10151D] shadow-[0_0_8px_rgba(79,128,232,0.2)] group-hover:shadow-[0_0_12px_rgba(79,128,232,0.3)] transition-all duration-300">
          <span className={`${colorClass} text-2xl font-bold`}>{amount}</span>
        </p>
      </div>
      
      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{tier}</h4>
      <p className="text-xs text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
    
    {/* Corner accent */}
    <div className="absolute bottom-2 right-2 w-6 h-6 opacity-20 border-b border-r border-blue-400 rounded-br"></div>
  </div>
);

export default function Earning() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col items-center mt-10 w-[98%] rounded-3xl m-auto">
      {/* How it works header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-8">
          <div className="h-px w-8 bg-gray-700 gradient-div"></div>
          <span className="mx-3 text-xs uppercase tracking-widest text-gray-400 border-2 border-gray-500 p-2 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.9)]">HOW IT WORKS</span>
          <div className="h-px w-8 bg-gray-700 gradient-div"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Start Earning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-600">Within 4 Days</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Getting started with DeCharge is simple - we handle the technical details while you earn
        </p>
      </div>

      {/* Process steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl my-10">
        {/* Step 1 */}
        <TechSpecCard 
          title="Order Your Bundle"
          description="Secure Your E-Charge Bundle With A Pre-Order Deposit And Join The DeCharge India Community."
          icon={<ShoppingCart className="text-cyan-400 h-6 w-6" />}
        />

        {/* Step 2 */}
        <TechSpecCard 
          title="Location Assessment & Installation"
          description="Our Team Will Work With You To Identify Optimal Installation Location & Installation."
          icon={<MapPin className="text-cyan-400 h-6 w-6" />}
        />

        {/* Step 3 */}
        <TechSpecCard 
          title="Start Earning"
          description="As EVs Charge At Your Locations, You Earn Passive Income Automatically Deposited To Your Bank Account."
          icon={<IndianRupee className="text-cyan-400 h-6 w-6" />}
        />
      </div>

      {/* Earning potential section */}
      <div className="w-full max-w-6xl">
        <div className="text-center mb-10 bg-cover bg-center bg-no-repeat py-[5rem] bgimage" style={{
          backgroundImage: `url(${rupeeImg.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}>
          <h2 className="text-3xl font-bold mb-4">Earning Potential</h2>
          <p className="text-gray-400">Based on current EV charging patterns in India's urban centers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Low usage tier */}
          <EarningTierCard 
            amount="₹ 8,000/m"
            tier="Low Usage"
            description="2 Hours/Day Per 5-Charge Bundle"
            colorClass="text-cyan-400"
          />

          {/* Average usage tier */}
          <EarningTierCard 
            amount="₹ 15,000/m"
            tier="Average Usage"
            description="4 Hours/Day Per 5-Charge Bundle"
            colorClass="text-yellow-400"
          />

          {/* High usage tier */}
          <EarningTierCard 
            amount="₹ 22,000/m"
            tier="High Usage"
            description="6+ Hours/Day Per 5-Charge Bundle"
            colorClass="text-green-400"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.9)]"
          >
            Reserve Your Bundle Now
          </a>
        </div>
      </div>
    </div>
  )
}