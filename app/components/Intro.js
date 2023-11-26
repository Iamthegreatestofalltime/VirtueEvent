import Link from "next/link";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full flex flex-col md:flex-row" style={{ backgroundColor: '#007bff', minHeight: '400px' }}>
      <div className="p-4 mt-28 md:mt-10 md:ml-48 text-white space-y-4 md:w-1/2">
        <h2 className="text-4xl font-bold" style={{ maxWidth: '600px' }}>
          Book <span className="text-yellow-300">wildly fun</span> team building experiences with expert hosts
        </h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Choose from pre-made experiences</li>
          <li>30 to 120 minutes each</li>
          <li>Customize your own experience</li>
        </ul>
        <div className="mt-4">
          <Link href='/events'>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300">
              See All Events
            </button>
          </Link>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mt-6">Reviews</h3>
          {/* Consider adding review elements here */}
        </div>
      </div>
      <div className="flex justify-center md:justify-start md:ml-10 mt-16 md:mt-0 pb-8">
        <div className="space-y-2 p-2">
          <Link href="/events/event1">
              <Image className="mb-2 sm:w-56" style={{ borderRadius: "5px" }} width={200} height={200} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="event" />
          </Link>
          <Link href="/events/event2">
              <Image style={{ borderRadius: "5px" }} className="sm:w-56" width={200} height={200} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="event" />
          </Link>
        </div>
        <div className="space-y-2 p-2">
          <Link href="/events/event3">
              <Image className="mb-2 sm:w-56" width={200} height={200} style={{ borderRadius: "5px" }} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="event" />
          </Link>
          <Link href="/events/event4">
              <Image width={200} height={200} className="sm:w-56" style={{ borderRadius: "5px" }} src="https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=" alt="event" />
          </Link>
        </div>
      </div>
    </div>
  );
}
