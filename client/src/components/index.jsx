import Header from "./Header";
import '../css/index.css'
import work from '../images/work.png'

function index(){
    return(
        <>
        <Header />
        <div className="index">
            <div className="left">
                <h1>Your next opportunity is waiting.</h1>
                <p>Build your career, one click at a time.</p>

            </div>

            <div className="right">
                <img src={work} alt="work" />


            </div>

        


        </div>
        </>

    );
}
export default index;