import Navigation from "../components/Navigation"
import Bottom from "../components/Bottom";
import Contact from "../components/Contact";

//comment for commit

export default function Page() {
    return(
        <div>
            <Navigation/>
            <Contact />
            <div>
                <p>Add the bottom here</p>
            </div>
        </div>
    );
}