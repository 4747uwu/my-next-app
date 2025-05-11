import { ShoppingCart, MapPin, IndianRupee } from "lucide-react"
import rupeeImg from '@/assets/15a5af365dc6e08dc89fd843ec044b68e88c1b31.png';


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
          Start Earning, <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-600">Within 4 Days</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Getting started with DeCharge is simple - we handle the technical details while you earn
        </p>
      </div>

      {/* Process steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl my-10">
        {/* Step 1 */}
        <div className="bg-gray-900/60 rounded-lg p-6 backdrop-blur-sm">
          <div className="bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <ShoppingCart className="text-cyan-400 h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-3">Order Your Bundle</h3>
          <p className="text-gray-400 text-sm">
            Secure Your E-Charge Bundle With A Pre-Order Deposit And Join The DeCharge India Community.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900/60 rounded-lg p-6 backdrop-blur-sm">
          <div className="bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <MapPin className="text-cyan-400 h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-3">Location Assessment & Installation</h3>
          <p className="text-gray-400 text-sm">
            Our Team Will Work With You To Identify Optimal Installation Location & Installation.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900/60 rounded-lg p-6 backdrop-blur-sm">
          <div className="bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <IndianRupee className="text-cyan-400 h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-3">Start Earning</h3>
          <p className="text-gray-400 text-sm">
            As EVs Charge At Your Locations, You Earn Passive Income Automatically Deposited To Your Bank Account.
          </p>
        </div>
      </div>

      {/* Earning potential section */}
      <div className="w-full max-w-6xl">
        <div className="text-center mb-10  bg-cover bg-center bg-no-repeat py-[5rem] bgimage" style={{
        backgroundImage: `url(${rupeeImg.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
       
      }}>
          <h2 className="text-3xl font-bold mb-4">Earning Potential</h2>
          <p className="text-gray-400">Based on current EV charging patterns in India's urban centers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* Low usage tier */}
          <div className="bg-gray-900/60 rounded-lg p-6 backdrop-blur-sm">
            <div className="mb-8 mt-4 ">
                
              <p className="border-2  p-3 inline border-gray-500 rounded-lg bg-[#34B2F60F]"><span className="text-cyan-400 text-2xl font-bold ">₹ 8,000/m</span></p>
            </div>
            <h3 className="text-xl font-medium mb-4">Low Usage</h3>
            <p className="text-gray-400 text-sm">2 Hours/Day Per 5-Charge Bundle</p>
          </div>

          {/* Average usage tier */}
          <div className="bg-gray-900/60 rounded-lg p-6 backdrop-blur-sm">
            <div className="mb-8 mt-4">
              <p className="border-2  p-3 inline border-gray-500 rounded-lg bg-[#34B2F60F]"><span className="text-yellow-400 text-2xl font-bold">₹ 15,000/m</span></p>
            </div>
            <h3 className="text-xl font-medium mb-4">Average Usage</h3>
            <p className="text-gray-400 text-sm">4 Hours/Day Per 5-Charge Bundle</p>
          </div>

          {/* High usage tier */}
          <div className="bg-gray-900/60 rounded-lg p-6 backdrop-blur-sm">
            <div className="mb-8 mt-4">
              <p className="border-2  p-3 inline border-gray-500 rounded-lg bg-[#34B2F60F]"><span className="text-green-400 text-2xl font-bold">₹ 22,000/m</span></p>
            </div>
            <h3 className="text-xl font-medium mb-4">High Usage</h3>
            <p className="text-gray-400 text-sm">6+ Hours/Day Per 5-Charge Bundle</p>
          </div>
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