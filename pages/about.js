import Link from 'next/link'
import Head from 'next/head'


export default function About() {
    return <div>
        <Head>
            <title>About Page</title>
        </Head>
        <h3>TMDB</h3>
        <p>Our API is available for everyone to use. A TMDB user account is required to request an API key. Professional users are approved on a per application basis.
As always, you must attribute TMDB as the source of your data.</p>
        <p>The API service is for those of you interested in using our movie, TV show or actor images and/or data in your application. Our API is a system we provide for you and
    your team to programmatically fetch and use our data and/or images.</p>
        <p>A commercial API is for commercial projects and a developer API is for developers. Your project is considered commercial if the primary
        purpose is to create revenue for the benefit of the owner.</p>


        <style jsx>{`
            h3 {
                font-size:20px;
                font-weight:500px;
                text-align:center;
                margin-top:20px;
            }
            p{
                text-align:justifty;
                padding:10px 100px;
            }
        `}
        </style>
    </div>
}