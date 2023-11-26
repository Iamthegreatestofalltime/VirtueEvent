export default function Pricing() {
    return (
      <div className="bg-white w-full py-12 flex justify-center items-center flex-col" style={{ height: 'auto' }}>
        <h2 className="text-4xl font-bold mb-10">Pricing</h2>
        <h4>Free 2-week trial</h4>
        <div className="flex flex-col sm:flex-row justify-around w-full max-w-6xl sm:mx-3">
          {/* Basic Plan */}
          <div className="w-full sm:w-1/4 px-4 py-8 border rounded-lg text-center mb-4 sm:mb-0 md:mt-5">
            <h3 className="text-2xl font-semibold mb-6">Basic</h3>
            <p className="text-6xl font-bold mb-6">$99</p>
            <p className="text-xl font-semibold mb-6">per month</p>
            <ul className="mb-6">
              <li className="mb-4">Customizable Events</li>
              <li className="mb-4">Up to 50 People</li>
              <li className="mb-4">Up to 20 Events per month</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Choose Plan</button>
          </div>
  
          {/* Standard Plan */}
          <div className="w-full sm:w-1/4 px-4 py-8 border rounded-lg text-center bg-gray-100 mb-4 sm:mb-0 sm:px-2">
            <h3 className="text-2xl font-semibold mb-6">Standard</h3>
            <p className="text-6xl font-bold mb-6">$299</p>
            <p className="text-xl font-semibold mb-6">per month</p>
            <ul className="mb-6">
              <li className="mb-4">Everything in Basic</li>
              <li className="mb-4">Up to 500 People</li>
              <li className="mb-4">Data Analysis of Event</li>
              <li className="mb-4">24/7 Support</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Choose Plan</button>
          </div>
  
          {/* Premium Plan */}
          <div className="w-full sm:w-1/4 px-4 py-8 border rounded-lg text-center mb-4 sm:mb-0 md:mt-5">
            <h3 className="text-2xl font-semibold mb-6">Premium</h3>
            <p className="text-6xl font-bold mb-6">$499</p>
            <p className="text-xl font-semibold mb-6">per month</p>
            <ul className="mb-6">
              <li className="mb-4">Everything in Standard</li>
              <li className="mb-4">Infinite Amount of Participants</li>
              <li className="mb-4">Infinite Amount of Events</li>
              <li className="mb-4">Fully Custom Tailored Events</li>
            </ul>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg">Choose Plan</button>
          </div>
        </div>
      </div>
    );
  }
  