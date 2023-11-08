
import Video from './video';
import { Button } from 'antd';
import '../styles/video.css';
interface props {
    text?: string,
    button?: string
    name?: string
    url?: string
    title?: string,
    desktop?: boolean,
    large?: boolean,
    more?: string,
    help?: string,
    content?: string,
    image?: string,
    widthLeft?: string,
    widthRight?: string,

}

const VideoList: React.FC<props> = ({ text, button, name, url, title, desktop, large, more, help, content, image, widthRight, widthLeft }) => {

    return (<div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-5 d-flex flex-wrap  content">
        {widthLeft && <div className={title ? widthLeft : 'col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12  d-flex'}>
            <div className=' vertical-letters ' ><p >{name}</p></div>
            <div className={title ? 'col-10 col-sm-10 col-md-10 col-xl-10 col-lg-10' : 'col-11 col-sm-11 col-md-11 col-xl-11 col-lg-11 col-xxl-11 '} style={{ marginLeft: '30px' }}>
                {more ? <div className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12'><h3>{more}</h3></div> : <></>}
                {image && <img className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12' src={image} alt={name}></img>}
                {url && <div className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-2'><Video url={url} /></div>}
                {content && <p style={desktop ? { fontSize: '2rem', lineHeight: '40px' } : { fontSize: '5rem', lineHeight: '70px' }}>{content}</p>}
            </div>

        </ div>
        }
        {help && <div className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 px-5 py-2'>{help}</div>}

        {title ? <div className={widthRight}>
            {large ? <></> : <div className=' col-xl-6 col-lg-6 col-xxl-6 '></div>}
            <h3>{title}</h3>
            <p className="col-12 col-sm-12 col-md-12 col-xl-8 col-lg-8 col-xxl-8">{text}</p>
            <div className={desktop ? 'col-12 col-sm-12 d-flex justify-content-end' : 'col-md-6 col-xl-5 col-lg-5 col-xxl-4 col-xl-12'}>{button && <Button className=' mx-4 px-4 rounded-pill text-white bg-dark border border-dark ' shape="round" icon={< span > {button}</span>} />}</div>
        </div>
            : <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-4 d-flex flex-wrap">
                {text && <p className="col-12 col-sm-12 col-md-7 col-xl-8 col-lg-8 col-xxl-8">{text}</p>}
                {button && <div className='col-12 col-ms-12 col-md-5 col-xl-4 col-lg-4 col-xxl-4 d-flex justify-content-end'><Button className=' mx-4 px-4 rounded-pill text-white bg-dark border border-dark ' shape="round" icon={< span > {button}</span>} /></div>}
            </div >}


    </div >);
}
export default VideoList;