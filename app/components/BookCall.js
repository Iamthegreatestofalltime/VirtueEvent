import Image from "next/image"

export default function BookCall() {
    return (
        <div className="my-20 items-center mx-48">
            <div className="flex p-20 bg-gray-100" style={{maxWidth: '1300px', borderRadius: '20px'}}>
                <div className="pr-16">
                    <h1 className="mx-6 mt-16 mb-20" style={{fontSize: '40px', fontWeight: '700'}}>
                        Need or help or have questions?
                    </h1>
                    <div className="mb-10">
                        <button className="mx-5" style={{backgroundColor: '#007bff', color: 'white', borderRadius: '15px', padding: '15px', fontSize: '20px', fontWeight: '700', width: '200px'}}>
                            Live Chat
                        </button>
                        <button className="mx-5" style={{backgroundColor: 'black', color: 'white', borderRadius: '15px', padding: '15px', fontSize: '20px', fontWeight: '700', width: '200px'}}>
                            Schedule Call
                        </button>
                    </div>
                </div>
                <div>
                    <Image width={350} height={350} src='https://media.istockphoto.com/vectors/cartoon-boy-gamer-playing-games-vector-id525973066?k=6&m=525973066&s=612x612&w=0&h=VvXDX7vSS1H29jB1IOVmliPD_yc3-xorqpvO9OxztBo=' alt='person tingy' />
                </div>
            </div>
        </div>
    )
}