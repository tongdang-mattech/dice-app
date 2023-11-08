
import '../styles/menu.css';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
interface props {
    mobile?: boolean,
    desktop?: boolean,
    large?: boolean
}


const MenuHome: React.FC<props> = ({ mobile, desktop }) => {

    return (<nav id='menu' className={desktop ? 'col-12 col-sm-12 col-md-12 py-2 px-3 d-flex  justify-content-between ' : 'col-lg-12 col-xl-12 col-xxl-12 py-2 px-5 d-flex'} >
        <div className="my-2"><svg style={{ width: '50px', height: '30px' }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1082.24 518.03" fill="currentColor" className="Logo__LogoIcon-u3iuma-0 jZwxex"><path d="M811.1 333c0-17-2.6-38.61-22.47-38.61h-86.92c-11.8 0-11.55 7.62-11.37 10.4.37 3.58 1 11 1 17.24 0 60.65-18.37 68.43-34.38 68.43-19.08 0-40.71 0-40.71-137.9 0-123.35 16.35-132.88 39.44-132.88 18.82 0 34.39 4.91 34.39 65.29 0 6.87-.35 17.73-.53 22.76 0 2.68-.29 10.51 11.6 10.51h86.28c16.91 0 21.31-16.31 22.23-31.09.16-4.26 7.49-91.52-34.44-137C750.24 23 711.89 9.35 657 9.35c-119.18 0-165.62 68.38-165.62 243.88 0 95.21 12.61 158.27 39.67 198.44 26.05 38.69 65.67 56.7 124.68 56.7 51.74 0 91-15.09 116.79-44.84 25.37-29.31 38-72.08 38.64-130.53zM465.61 15.61H359.14a8.66 8.66 0 00-8.65 8.73v469.9a7.94 7.94 0 008 7.87h107.8a8 8 0 008-7.87V24.34a8.67 8.67 0 00-8.68-8.73zM953.74 309h106.11a8.71 8.71 0 008.76-8.66v-88.73a8.71 8.71 0 00-8.76-8.66H953.74a3.48 3.48 0 01-3.5-3.47V128a3.48 3.48 0 013.5-3.46h110.49a8.71 8.71 0 008.76-8.67v-91.6a8.71 8.71 0 00-8.76-8.66h-229a8.71 8.71 0 00-8.76 8.66v469.18a8.7 8.7 0 008.76 8.66h229a8.7 8.7 0 008.76-8.66v-98.22a8.71 8.71 0 00-8.76-8.67H953.74a3.48 3.48 0 01-3.5-3.46v-70.63a3.48 3.48 0 013.5-3.47zM292.29 60.91c-18.15-22.4-47.67-45.3-129-45.3H21a8.71 8.71 0 00-8.76 8.66v469.18a8.71 8.71 0 008.76 8.67h140.4c67.13 0 107-15.8 133.12-52.86 26.85-38 38.82-100 38.82-201 .01-94.54-12.65-152.32-41.05-187.35zM155.11 386.56h-15.59a3.48 3.48 0 01-3.52-3.46V128a3.48 3.48 0 013.51-3.46h16.2c39.82 0 55.11 12.18 55.11 129.34.01 118.9-14.13 132.68-55.71 132.68z"></path>
            <path d="M811.1 333c0-17-2.6-38.61-22.47-38.61h-86.92c-11.8 0-11.55 7.62-11.37 10.4.37 3.58 1 11 1 17.24 0 60.65-18.37 68.43-34.38 68.43-19.08 0-40.71 0-40.71-137.9 0-123.35 16.35-132.88 39.44-132.88 18.82 0 34.39 4.91 34.39 65.29 0 6.87-.35 17.73-.53 22.76 0 2.68-.29 10.51 11.6 10.51h86.28c16.91 0 21.31-16.31 22.23-31.09.16-4.26 7.49-91.52-34.44-137C750.24 23 711.89 9.35 657 9.35c-119.18 0-165.62 68.38-165.62 243.88 0 95.21 12.61 158.27 39.67 198.44 26.05 38.69 65.67 56.7 124.68 56.7 51.74 0 91-15.09 116.79-44.84 25.37-29.31 38-72.08 38.64-130.53zM465.61 15.61H359.14a8.66 8.66 0 00-8.65 8.73v469.9a7.94 7.94 0 008 7.87h107.8a8 8 0 008-7.87V24.34a8.67 8.67 0 00-8.68-8.73zM953.74 309h106.11a8.71 8.71 0 008.76-8.66v-88.73a8.71 8.71 0 00-8.76-8.66H953.74a3.48 3.48 0 01-3.5-3.47V128a3.48 3.48 0 013.5-3.46h110.49a8.71 8.71 0 008.76-8.67v-91.6a8.71 8.71 0 00-8.76-8.66h-229a8.71 8.71 0 00-8.76 8.66v469.18a8.7 8.7 0 008.76 8.66h229a8.7 8.7 0 008.76-8.66v-98.22a8.71 8.71 0 00-8.76-8.67H953.74a3.48 3.48 0 01-3.5-3.46v-70.63a3.48 3.48 0 013.5-3.47zM292.29 60.91c-18.15-22.4-47.67-45.3-129-45.3H21a8.71 8.71 0 00-8.76 8.66v469.18a8.71 8.71 0 008.76 8.67h140.4c67.13 0 107-15.8 133.12-52.86 26.85-38 38.82-100 38.82-201 .01-94.54-12.65-152.32-41.05-187.35zM155.11 386.56h-15.59a3.48 3.48 0 01-3.52-3.46V128a3.48 3.48 0 013.51-3.46h16.2c39.82 0 55.11 12.18 55.11 129.34.01 118.9-14.13 132.68-55.71 132.68z"></path>
        </svg></div>
        <span className=' col-lg-1 col-xl-2 col-xxl-2 '></span>
        {!mobile && <div style={desktop ? { fontSize: '0.7rem' } : { fontSize: '1rem' }} className='col-md-6 col-lg-7 col-xl-7 col-xxl-7 d-flex justify-content-around '>
            <span className='btnMenu mx-3  my-1'><p>Au programme</p></span>
            <span className='btnMenu mx-3 my-1'><p>À propos</p></span>
            <span className='btnMenu mx-3 my-1'><p>Jobs</p></span>
            <span className='btnMenu mx-3 my-1'><p>Contenu</p></span>
            <span className='btnMenu mx-3 my-1'><p>Blog</p></span>
            <span className='btnMenu mx-3 my-1'><p>Se connecter</p></span>
        </div>}

        <div className='col-md-3 col-lg-4 col-xl-4 col-xxl-4 d-flex '>
            <Button className='text-white bg-dark border border-dark' style={mobile ? { width: '30px', height: '30px' } : { width: '40px', height: '40px' }} shape="circle" icon={<SearchOutlined />} />
            <Button className={mobile ? "appli mx-3 px-1 rounded-pill text-white bg-dark border border-dark" : 'appli mx-4 px-4 rounded-pill text-white bg-dark border border-dark'} shape="round" style={mobile ? { width: '30px', height: '30px' } : { height: '40px' }} icon={mobile ? <MenuOutlined /> : <span>Télécharge l'appli</span>} />
        </div>

    </nav >
    )
};

export default MenuHome;