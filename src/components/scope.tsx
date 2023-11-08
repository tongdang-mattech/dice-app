
import '../styles/video.css';
interface progs {
    image: string,
    title: string,
    button: string,
    text: string,
    mobile: boolean

}
const Scope: React.FC<progs> = ({ image, title, button, text, mobile }) => {
    return mobile ? <div className="col-12 col-sm-12 col-md-12 p-3 ">
        <h4 className="col-12 col-sm-12 col-md-12 "> {title}</h4>
        <div className='col-12 col-sm-12 col-md-12 d-flex'>
            <div className='col-8 col-sm-9 col-md-9 p-2 d-flex flex-wrap'> <p className="col-12 col-sm-12 col-md-12 ">{text}</p>
                <button className='btnCard'>{button}</button></div>
            <img className="col-4 col-sm-3 col-md-3  rounded" src={image} alt={title} />
        </div>
    </div > : <div className=" col-md-6 col-xl-4 col-lg-4 col-xxl-4 p-3 scope">
        <img className=" col-md-12 col-xl-12 col-lg-12 col-xxl-12 rounded" src={image} alt={title} />
        <h4 className=" col-md-12 col-xl-12 col-lg-12 col-xxl-12"> {title}</h4>
        <p className=" col-md-12 col-xl-12 col-lg-12 col-xxl-12">{text}</p>
        <button className='btnCard'>{button}</button>
    </div >
}
export default Scope;