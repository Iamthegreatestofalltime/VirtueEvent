import Image from 'next/image'
export default function WhyUs() {
    return (
        <div className="bg-gray-50 w-full py-12">
          <h1 className="text-center text-4xl font-bold text-blue-600 mb-12">Why Choose Us?</h1>
          <div className="space-y-12 px-8 md:px-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-lg">
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Tailored Experiences
                </h2>
                <p className="mb-4">
                  We customize your events to fit your needs, offering custom activities at no extra charge.
                </p>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="">
                <Image width={250} height={250} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="game" layout="responsive" />
              </div>
            </div>
    
            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-gray-50 rounded-lg">
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Engaging Activities
                </h2>
                <p className="mb-4">
                  Each of our activities is designed to keep your team engaged and entertained.
                </p>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
                  Discover More
                </button>
              </div>
              <div className="">
                <Image width={250} height={250} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="activity" layout="responsive" />
              </div>
            </div>
    
            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-lg">
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Expert Hosts
                </h2>
                <p className="mb-4">
                  Our expert hosts ensure that your team building experience is top-notch.
                </p>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
                  Meet the Hosts
                </button>
              </div>
              <div className="">
                <Image width={250} height={250} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="host" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      );
}