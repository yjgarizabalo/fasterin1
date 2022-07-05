import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <!-- ICON --> */}
                <link rel="icon" type="image/x-icon" href="/img/favicon-yweb.ico" sizes="32" />
                <title>Yweb</title>

                {/* <!-- OPEN GRAPH --> */}
                <meta property="og:title" content="Yweb 🚀" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Agencia de desarrollo web en Barranquilla, contruyamos tu idea juntos, hacemos tu proyecto realidad." />
                <meta property="og:url" content="yweeb.com" />
                <meta property="og:image" content="https://raw.githubusercontent.com/yjgarizabalo/Yweb/master/src/public/img/hero__yweb_04.jpg" />
                {/* <!-- META DATOS --> */}
                <meta name="description" content="Agencia de desarrollo web en Barranquilla, contruyamos tu idea juntos, hacemos tu proyecto realidad." />
                <meta name="keywords" content="Paginas Web Barranquilla, Dessarrollo Web Barranquilla, Diseño Web Barranquilla, Fotografo Barranquilla" />
                <meta name="author" content="Yweb" />
                {/* <!-- MANIFIESTO PWA --> */}
                <link rel="manifest" href="/json/manifest.json" />
                <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/yjgarizabalo/Yweb/master/src/public/img/favicon__yweb.png" />
                <meta name="theme-color" content="#130A17" />
            </Head>
            <body>
                <Main />
                <NextScript />

                <script src="../public/js/main.js"></script>
            </body>
        </Html>
    )
}