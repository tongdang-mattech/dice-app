import Scope from '../components/scope';
import MenuHome from './menu';
import { useEffect, useState } from 'react';
import BannerHome from './banner';
import Trending from '../components/trending';
import VideoList from '../components/videoComponent';
import LeanrMore from '../components/leanrMore';
import Footer from './footer';

const Main: React.FC = () => {
    const [desktop, setDestktop] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [large, setLarge] = useState(false);
    const [windowDimention, setWindowDimention] = useState({
        windowWidth: window.innerWidth
    });
    const [statusMenu, setStatusMenu] = useState(true);
    const [windowCroll, setWindowCroll] = useState({
        windowScroll: window.scrollY
    });
    const textBannerMobile = {
        text: 'Going out makes us feel good. With DICE’s personalised event picks, it’s easy to tap into your scene, whatever your taste.',
        button: 'DOWLOA DICE',
        more: undefined,
        paddingHeight: 0,
        name: undefined,
        image: undefined,
        url: undefined,
        title: undefined,
        help: undefined,
        content: undefined,
        widthLeft: undefined,
        widthRight: 'col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12  p-2'
    }
    const list = [

        {
            text: 'Check out some of the most popular events coming up in your city, from club nights and gigs to artist signings and comedy shows',
            button: 'SEE MORE',
            more: undefined,
            paddingHeight: 0,
            name: undefined,
            image: undefined,
            url: undefined,
            title: undefined,
            help: undefined,
            content: undefined,
            widthLeft: undefined,
            widthRight: 'col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12  p-2'
        }, {
            more: undefined,
            text: 'Your DICE feed is as unique as your taste in music. Connect your Spotify or Apple Music, and we’ll show you relevant events based on your favourite artists.',
            button: 'GET STARTED',
            name: 'JUST FOR YOU',

            image: undefined,
            url: 'https://player.vimeo.com/progressive_redirect/playback/832220696/rendition/1080p/file.mp4?loc=external&signature=71d266777265d3c45185171736014e8d679c2d0b19ba03633970872b09400e2c',
            title: 'Discover shows that match your tastes',
            help: undefined,
            content: undefined,
            widthLeft: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6 d-flex',
            widthRight: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6  p-5  d-flex flex-column justify-content-end'
        }, {
            text: undefined,
            button: undefined,
            name: 'JUST FOR YOU',

            image: undefined,
            url: 'https://player.vimeo.com/progressive_redirect/playback/838288626/rendition/1080p/file.mp4?loc=external&signature=f766663f703e5962d04395b145a1ca2f560244c2cc7eb65c375f358c4e0c7aa0',
            title: undefined,
            more: 'Find more',
            help: 'Want more? Get the app.',
            content: undefined,
            widthLeft: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6 d-flex',
            widthRight: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6   d-flex flex-column justify-content-end'
        }, {
            text: undefined,
            button: undefined,
            name: 'WHAT OUR FANS SAY',
            image: undefined,
            paddingHeight: 0,
            url: undefined,
            title: undefined,
            more: undefined,
            help: 'Simon Goddard, London',
            content: '“LOVE DICE – GREAT  APP AND EVEN BETTER STAFF”',
            widthLeft: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6 p-4',
            widthRight: undefined
        },
        {
            text: 'Partnering with DICE makes it easier to find your fans, sell tickets online, and grow your business.',
            button: 'BECOME A PARTNER',
            name: 'WHO WE PARTNER WITH',
            image: 'https://images.prismic.io/dicewebsite/1507d455-5f22-41b7-959e-38dc8468ae34_GraphicLanguage_PinkPurpleOrange_Variation+%280-00-08-25%29+copy2+1.png?auto=compress,format',
            url: undefined,

            title: 'We’re proud to work with a global network of promoters, venues and artists',
            more: undefined,
            help: undefined,
            content: undefined,
            widthLeft: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6 d-flex',
            widthRight: 'col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 col-xxl-6   d-flex flex-column justify-content-end'

        },
        {

            text: 'Partnering with DICE makes it easier to find your fans, sell tickets online, and grow your business.',
            button: 'VOIR PLUS',
            name: 'UPDATES FROM DICE HQ',
            image: 'https://images.prismic.io/dicewebsite/7dc78bbb-ec62-4889-95d9-3bc4d393e6c2_4x6_Landscape_02.png?auto=compress,format',
            url: undefined,

            title: 'A new door opens: the queer security shake - up',
            more: 'Who we are, what we do, and why we do it',
            help: undefined,
            content: undefined,
            widthLeft: 'col-12 col-sm-12 col-md-8 col-xl-8 col-lg-8 col-xxl-8 d-flex',
            widthRight: 'col-12 col-sm-12 col-md-4 col-xl-4 col-lg-4 col-xxl-4  d-flex flex-column justify-content-end'
        }
    ]
    const list2 = [
        {
            text: 'Learn more about life at DICE, new product features, and the great work of our global partners.',
            button: 'Explore the blog',
            more: undefined,

            name: undefined,
            image: undefined,
            url: undefined,
            title: undefined,
            help: undefined,
            content: undefined,
            widthLeft: undefined,
            widthRight: 'col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12'
        },
        {
            title: 'You’re encouraged to take your time to produce the best work you possibly can. It’s about doing everything with intention rather than just doing',
            button: undefined,
            more: 'Help us build a better industry',

            name: 'JOIN THE TEAM',
            image: 'https://images.prismic.io/dicewebsite/b5e8ad0d-1e77-4c7c-af28-eba9fd22dabc_222_DICE_NINE__2021_008.jpg?auto=compress,format',
            url: undefined,
            text: 'Emma JenningsSenior Product Designer',
            help: undefined,
            content: undefined,
            widthLeft: 'col-12 col-sm-12 col-md-8 col-xl-8 col-lg-8 col-xxl-8 d-flex',
            widthRight: 'col-12 col-sm-12 col-md-4 col-xl-4 col-lg-4 col-xxl-4   d-flex flex-column justify-content-end'
        },
        {
            text: 'From Product Designers and Data Engineers to Creative Directors and Account Managers, everyone at DICE works to make going out easier for fans – and we’re looking for talented people to join the team.',
            button: 'VIEW JOBS',
            more: undefined,
            name: undefined,
            image: undefined,
            url: undefined,
            title: undefined,
            help: undefined,
            content: undefined,
            widthLeft: undefined,
            widthRight: 'col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12  p-2'
        }
    ]
    const scope = [{
        image: 'https://images.prismic.io/dicewebsite/255c2139-642f-4c92-a897-890e3a277fc9_4-ERIC.jpg?auto=compress,format',
        button: "VOIR PLUS",
        title: 'The next generation: work experience with ERIC',
        text: 'What we learnt from our workshops and mentoring sessions in our London office'

    },
    {
        image: 'https://images.prismic.io/dicewebsite/f3b3fd2c-7992-44c7-b8aa-fdb17847c3a0_GT_220616_SONAR22_R5_8105.jpg?auto=compress,format',
        button: "VOIR PLUS",
        title: 'Unlocking potential for our employees',
        text: 'How we’re empowering our people through learning and development'

    },
    {
        image: 'https://images.prismic.io/dicewebsite/70a5a3dc-1fcb-4bd8-a037-bd691b6503df_22Folk-BLima-jonijam_DSC3889.jpg?auto=compress,format',
        button: "VOIR PLUS",
        title: 'A new era for Newport Jazz and Folk festivals',
        text: 'Why the historic music festivals made the switch to digital ticketing with DICE'

    }
    ]
    const detectSize = () => {

        setWindowDimention({
            windowWidth: window.innerWidth
        });
        if (windowDimention.windowWidth < 1200) {
            setLarge(true);
        } else {
            setLarge(false);
        }

        if (windowDimention.windowWidth < 992) {
            setDestktop(true);
        } else {
            setDestktop(false);
        }
        if (windowDimention.windowWidth < 576) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    const handleScroll = () => {
        if (windowCroll.windowScroll > window.scrollY) {
            setStatusMenu(true);
        }

        if (windowCroll.windowScroll < window.scrollY) {
            setStatusMenu(false);
        }
        setWindowCroll({
            windowScroll: window.scrollY
        });

    }
    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', detectSize);
        if (windowDimention.windowWidth < 1200) {
            setLarge(true);
        } else {
            setLarge(false);
        }
        if (windowDimention.windowWidth < 992) {
            setDestktop(true);
        } else {
            setDestktop(false);
        }
        if (windowDimention.windowWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        return () => {

            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimention, windowCroll, statusMenu, mobile, desktop, large]);
    return <>
        {statusMenu ? <MenuHome mobile={mobile} desktop={desktop} large={large} /> : <></>}

        <BannerHome mobile={mobile} desktop={desktop} large={large} />
        {mobile && <VideoList text={textBannerMobile.text} button={textBannerMobile.button} name={textBannerMobile.name} title={textBannerMobile.title} url={textBannerMobile.url} desktop={desktop} large={large} more={textBannerMobile.more} help={textBannerMobile.help} content={textBannerMobile.content} image={textBannerMobile.image} widthLeft={textBannerMobile.widthLeft} widthRight={textBannerMobile.widthRight} />}
        <Trending></Trending>
        {list.map(item => <VideoList text={item.text} button={item.button} name={item.name} title={item.title} url={item.url} desktop={desktop} large={large} more={item.more} help={item.help} content={item.content} image={item.image} widthLeft={item.widthLeft} widthRight={item.widthRight} />)}
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-5 d-flex flex-wrap">
            {scope.map(item => <Scope title={item.title} text={item.text} image={item.image} button={item.button} mobile={mobile} />)}
        </div>
        {list2.map(item => <VideoList text={item.text} button={item.button} name={item.name} title={item.title} url={item.url} desktop={desktop} large={large} more={item.more} help={item.help} content={item.content} image={item.image} widthLeft={item.widthLeft} widthRight={item.widthRight} />)}
        <LeanrMore desktop={desktop} />
        <Footer desktop={desktop} />
    </>
}
export default Main;