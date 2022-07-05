import Layout from "../components/Layout";

// IMAGENES
import Image from 'next/image'
import hero__yweb_09 from "../public/img/hero__yweb_09.jpg"
import proyecto__yweb_01 from "../public/img/proyecto__yweb_01.webp"
import proyecto__yweb_02 from "../public/img/proyecto__yweb_02.webp"
import proyecto__yweb_03 from "../public/img/proyecto__yweb_03.webp"
import proyecto__yweb_04 from "../public/img/proyecto__yweb_04.webp"



const Proyectos = () => (
    <Layout>
        {/* <!-- CONTENTS --> */}
        <main className="main">

            {/* <!-- HERO - NOSOTROS --> */}
            <section className="hero__yweb">
                <div className="item__hero">
                    <h1 className="yweb__title">Proyectos 👨‍💻</h1>
                    <p className="yweb__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam excepturi quam facilis laborum ipsam magnam ut corporis commodi natus, dolore maiores a quaerat dolorum veritatis non reprehenderit repellat quod sit?</p>
                    <p className="yweb__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odit!</p>
                </div>
                <div className="item__hero">
                    <Image loading="lazy" className="hero__img" src={hero__yweb_09} width="400" height="250" alt="Desarrollo web Barranquilla" title="Desarrollo web Barranquilla"/>
                </div>
            </section>


            {/* <!-- PROYECTOS --> */}
            <section className="proyecto__yweb">
                <h2 className="yweb__subtitle">Poyectos⭐</h2>
                {/* <!-- <h2 className="yweb__subtitle">Poyectos <i className='bx bx-star' ></i></h2> --> */}
                <div className="item__proyectos">

                    <a rel="noopener" href="http://dolmenusa.com/" target="_blank" className="proyecto__card" title="Dolmen USA">
                        <Image loading="lazy" className="img__proyecto" src={proyecto__yweb_01} alt="Dolmen USA" width="285" height="190"/>
                    </a>

                    <a rel="noopener" href="https://controlt.com.co/" target="_blank" className="proyecto__card" title="controlT">
                        <Image loading="lazy" className="img__proyecto" src={proyecto__yweb_02} alt="ControlT" width="285" height="190"/>
                    </a>

                    <a rel="noopener" href="https://multillantascolombia.com/" target="_blank" className="proyecto__card" title="Multillantas">
                        <Image loading="lazy" className="img__proyecto" src={proyecto__yweb_03} alt="Multillantas" width="285" height="190"/>
                    </a>

                    <a rel="noopener" href="https://corp.recursoconfiable.com/" target="_blank" className="proyecto__card" title="Recursos confiables">
                        <Image loading="lazy" className="img__proyecto" src={proyecto__yweb_04} alt="Recursos confiables" width="285" height="190"/>
                    </a>

                </div>
            </section>

        </main>
    </Layout>
)

export default Proyectos;