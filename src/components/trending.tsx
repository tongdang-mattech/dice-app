import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card } from 'antd';

const { Meta } = Card;

const Trending = () => {


    const items = [

        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-07-18/812c826f-7df3-438c-bfdc-7f3f85e725ec.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >
            <Meta title="Cosmo dj set | Spring Attitude Waves " description="sam. 14 oct." />
            <Meta description="Cieloterra" />
            <Meta description="17,50 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-09-01/8f25172b-c997-43a7-8234-a2d61a4dcf5a.jpg?rect=0%2C0%2C2000%2C2000&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >
            <Meta title="Karaoke Indie Roma + INDIE CLUB party " description="ven. 22 sept." />
            <Meta description="Monk - Sala Teatro" />
            <Meta description="14,99 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-09-05/a26f9888-deb4-4d1b-ae06-d3d689fdc7bf.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >

            <Meta title="Stella Bossi" description="ven. 22 sept." />
            <Meta description="Rashõmon Club" />
            <Meta description="20 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-09-05/b6d5d560-2f88-42da-9083-e6ae6b93a4c8.jpg?rect=1029%2C0%2C1262%2C1262&auto=format%2Ccompress&q=40&w=204&fit=max&dpr=2" />}
        >

            <Meta title="Trio Mandili" description="sam. 23 sept." />
            <Meta description="Largo Vennue" />
            <Meta description="23 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-05-12/de82353e-7103-4090-80cf-1fe94b498dbf.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=40&w=204&fit=max&dpr=2" />}
        >

            <Meta title="Spring Attitude Festival 2023 - Sartuday" description=" sam.24 sept." />
            <Meta description="Studi di Cinecittà" />
            <Meta description="À partir de 49 €" />
        </Card>,

        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-05-12/b22b5253-73ba-4e71-acf8-0f8caebbfe3b.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=40&w=204&fit=max&dpr=2" />}
        >

            <Meta title="Spring Attitude Festival 2023 - Sunday" description=" dim.24 sept." />
            <Meta description="Studi di Cinecittà" />
            <Meta description="À partir de 49 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-04-20/d15e1453-716c-47a6-8cda-ea33f3606334.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >

            <Meta title="Spring Attitude Festival 2023 - Full Pass" description=" dim.24 sept." />
            <Meta description="Studi di Cinecittà" />
            <Meta description="À partir de 49 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-08-18/1eea50f2-59dd-4fdf-94c8-491a340a620d.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >
            <Meta title="Vokalfest 2023" description="jeu. 21 sept." />
            <Meta description="Testaccio Estate" />
            <Meta description="À partir de 9,20 €" />
        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-08-31/67df2617-7454-44c9-9c75-a5d773671504.jpg?rect=0%2C0%2C2048%2C2048&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >
            <Meta title="Teen Age Dream" description=" ven.17 nov." />
            <Meta description="ORION LIVE CLUB" />
            <Meta description="18 €" />
        </Card>,
        ,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-09-04/9001924c-bf14-406a-aaed-c50cc7e55ec1.jpg?rect=0%2C0%2C768%2C768&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >
            <Meta title="Romadiffusa | Planet Opal Live" description="sam. 30 sept." />
            <Meta description="Spazio Fontanella" />
            <Meta description="22 €" />

        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-09-15/2a58efcf-ae9a-4724-b339-f8a908c81b87.jpg?rect=0%2C0%2C1080%2C1080&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >

            <Meta title="Tekno Ravers vol.11" description="ven. 22 sept." />
            <Meta description="Cieloterra" />
            <Meta description="6 €" />

        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-08-31/fbab5241-7c25-4e37-a0c3-6f099be504d5.jpg?rect=0%2C135%2C1080%2C1080&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >

            <Meta title="Yngwie Malmsteen + Limberlost + Steve Ramone" description="jeu. 9 nov" />
            <Meta description="ORION LIVE CLUB" />
            <Meta description="34,50 €" />

        </Card>,
        <Card
            hoverable
            style={{ width: 250, margin: 30 }}
            cover={<img alt="example" src="https://dice-media.imgix.net/attachments/2023-09-15/2a58efcf-ae9a-4724-b339-f8a908c81b87.jpg?rect=0%2C0%2C1080%2C1080&auto=format%2Ccompress&q=80&w=204&fit=max&dpr=1" />}
        >

            <Meta title="Tekno Ravers vol.11" description="ven. 22 sept." />
            <Meta description="Cieloterra" />
            <Meta description="6 €" />

        </Card>

    ];







    return (
        <section className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12'>
            <div className='col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-5'>TRENDING</div>
            <AliceCarousel
                autoPlay
                autoPlayInterval={2000}
                autoPlayDirection='ltr'
                autoPlayStrategy='action'
                responsive={{
                    576: {
                        items: 2,
                        itemsFit: 'contain'
                    },
                    768: {
                        items: 3,
                        itemsFit: 'contain',
                    },
                    992: {
                        items: 4,
                        itemsFit: 'contain',
                    },
                    1200: {
                        items: 5,
                        itemsFit: 'contain',
                    },
                    1400: {
                        items: 5,
                        itemsFit: 'contain',
                    }
                }
                }

                animationType='slide'
                animationDuration={10000}
                disableButtonsControls={true}
                disableDotsControls={true}

                items={items} />
        </section>
    );

}
export default Trending;

