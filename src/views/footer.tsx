
import '../styles/footer.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { DownOutlined, AppleOutlined, AndroidOutlined, CopyrightOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Button } from 'antd';
interface props {
    desktop: boolean
}

const Footer: React.FC<props> = ({ desktop }) => {
    return (<div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-3 d-flex flex-wrap">
        <div className='col-12 col-sm-12 col-md-3 col-xl-4 col-lg-4 col-xxl-4 py-5'>
            <img className='col-2 col-sm-2 col-md-3 col-xl-3 col-lg-3 col-xxl-3 ' src='https://dice.fm/static/images/dice-fan.gif' alt='' />

        </div>
        {desktop ? <div className='col-12 col-sm-12 col-md-12 d-flex border-bottom '>
            <div className='col-6 col-sm-6 col-md-6'>
                <p className='col-12 col-sm-12 col-md-12 mx-3'>DICE</p>
                <p className='col-12 col-sm-12 col-md-12 mx-3'>Soutien</p>
                <p className='col-12 col-sm-12 col-md-12 mx-3'>Bosse avec nous</p>
            </div>
            <div className='col-6 col-sm-6 col-md-6'>
                <div className='col-12 col-sm-12 col-md-12 py-2 d-flex justify-content-end'><DownOutlined /> </div>
                <div className='col-12 col-sm-12 col-md-12 py-3 d-flex justify-content-end'><DownOutlined /> </div>
                <div className='col-12 col-sm-12 col-md-12 py-2 d-flex justify-content-end'><DownOutlined /> </div>
            </div>

        </div>
            : <div className=' col-md-9 col-xl-8 col-lg-8 col-xxl-8 py-5 d-flex'>
                <div className='col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4 col-xxl-4 p-2'>
                    <h5 className='mx-3'>DICE</h5>
                    <ListGroup >
                        <ListGroup.Item className='border border-white text-muted'>À propos</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Jobs</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Diversité, Équitéet Inclusion</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Presse</ListGroup.Item>

                    </ListGroup>
                </div>
                <div className='col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4 col-xxl-4 p-2'>
                    <h5 className='mx-3'>Soutien</h5>
                    <ListGroup >
                        <ListGroup.Item className='border border-white text-muted'>Centre d'Assistance</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Contacte-nous</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Demander un remboursement</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className='col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4 col-xxl-4 p-2'>
                    <h5 className='mx-3'>Bosse avec nous</h5>
                    <ListGroup >
                        <ListGroup.Item className='border border-white text-muted'>Artistes</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Salles</ListGroup.Item>
                        <ListGroup.Item className='border border-white text-muted'>Promoteurs</ListGroup.Item>
                    </ListGroup>
                </div>

            </div>}
        {desktop ? <div className='col-12  col-sm-12 col-md-12 p-3' style={{ fontSize: '0.8rem' }}>
            <div className=' col-12  col-sm-12 col-md-12 py-2'>Français <DownOutlined /></div>
            <div className=' col-12  col-sm-12 col-md-12 py-2'>Politique de Confidentialité</div>

            <div className=' col-12  col-sm-12 col-md-12 py-2'> Conditions Générales d'Utilisation </div>
            <div className=' col-12  col-sm-12 col-md-12 py-2'>Conditions d'Achat</div>
            <div className=' col-12  col-sm-12 col-md-12 py-2'>Paramètres des cookies</div>
            <div className='col-12  col-sm-12 col-md-12' style={{ fontSize: '1.5rem' }}><InstagramOutlined /> <LinkedinOutlined className='mx-2' /> <TwitterOutlined /></div>
            <div className=' col-xl-12 col-lg-12 col-xxl-12 py-4 '>
                <Button className=' px-4 rounded-pill text-white bg-dark border border-dark ' shape="round" icon={< span ><AppleOutlined /> iOS</span>} />
                <Button className=' mx-4 px-4 rounded-pill text-white bg-dark border border-dark ' shape="round" icon={< span > <AndroidOutlined /> ANDROID</span>} />
            </div>
            <div className='col-12  col-sm-12 col-md-12 py-2'><CopyrightOutlined /> DICE FM Ltd</div>
            <div className='col-xl-12 col-lg-12 col-xxl-12  text-muted'>DICE et le logo The Fan sont des marques déposées de DICE FM, Ltd.</div>
        </div> : <div className='col-xl-12 col-lg-12 col-xxl-12'>
            <div className=' col-xl-12 col-lg-12 col-xxl-12 py-4 border-bottom'>
                <Button className=' mx-4 px-4 rounded-pill text-white bg-dark border border-dark ' shape="round" icon={< span ><AppleOutlined /> iOS</span>} />
                <Button className=' mx-4 px-4 rounded-pill text-white bg-dark border border-dark ' shape="round" icon={< span > <AndroidOutlined /> ANDROID</span>} />
            </div>
            <div className=' col-xl-12 col-lg-12 col-xxl-12 p-2 d-flex' style={{ fontSize: '0.8rem' }}>
                <div className='m-2 my-2'><CopyrightOutlined /> DICE FM Ltd</div>
                <div className='mx-5 my-2'>Français <DownOutlined /></div>
                <div className='m-3 my-2'>Politique de Confidentialité</div>

                <div className='mx-3 my-2'> Conditions Générales d'Utilisation </div>
                <div className='mx-3 my-2'>Conditions d'Achat</div>
                <div className='mx-2 my-2'>Paramètres des cookies</div>
                <div className='mx-5 d-flex' style={{ fontSize: '1.5rem' }}><InstagramOutlined /> <LinkedinOutlined className='mx-2' /> <TwitterOutlined /></div>
            </div>
            <div className='col-xl-12 col-lg-12 col-xxl-12 px-3 text-muted'>DICE et le logo The Fan sont des marques déposées de DICE FM, Ltd.</div>
        </div>}
    </div >)
}
export default Footer;