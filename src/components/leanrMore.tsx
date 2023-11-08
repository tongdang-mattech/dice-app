import { Button } from 'antd';
import '../styles/footer.css';
interface props {
    desktop: boolean
}
const LeanrMore: React.FC<props> = ({ desktop }) => {
    return (<div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 LeanrMore">
        <img id='bgLeanr' className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 ' src='https://images.prismic.io/dicewebsite/ff3c5646-8c83-4972-a2df-ccd88fe4d48e_Vibrations.png?auto=compress,format' alt=''></img>
        <div id='helpLeanr' className='col-10 col-sm-10 col-md-10 col-xl-10 col-lg-10 col-xxl-10 py-5 d-flex flex-wrap justify-content-center' style={{ textAlign: 'center' }} >
            <h1 className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12" style={desktop ? { fontSize: '3rem' } : { fontSize: '6rem' }}><b>SELLING TICKETS ONLINE?WE CAN HELP</b></h1>
            <Button className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 px-4 rounded-pill text-white bg-dark border border-dark' type="primary" shape='round' icon={< span >LEANR MORE</span>} />
        </div>
    </div>)
}
export default LeanrMore;
