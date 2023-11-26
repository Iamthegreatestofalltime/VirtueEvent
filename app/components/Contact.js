export default function Contact() {
    return (
        <div className="flex justify-evenly p-64" style={{height: '800px'}}>
            <div>
                 <h1 style={{fontSize: '50px', fontWeight: '600'}}>
                    Phone
                </h1>
                <h3>
                    (317) - 789 - 5564
                </h3>
            </div>
            <div>
                <h1 style={{fontSize: '50px', fontWeight: '600'}}>Email</h1>
                <h3>alexlotkov124@gmail.com</h3>
            </div>
            <div>
                <h1 style={{fontSize: '50px', fontWeight: '600'}}>
                    Social
                </h1>
                <h1 style={{fontSize: '20px',}}>
                    @VirtueEvent
                </h1>
            </div>
        </div>
    );
}