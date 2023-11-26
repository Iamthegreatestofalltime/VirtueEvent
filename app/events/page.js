import Navigation from "../components/Navigation"
import AllEvents from "../components/AllEvents";
import Bottom from "../components/Bottom";
import BookCall from "../components/BookCall";

export default function Events() {
    return(
        <div className="bg-white">
            <Navigation />
            <AllEvents style={{alignSelf: 'center'}}/>
            <BookCall />
            <Bottom/>
        </div>
    );
}