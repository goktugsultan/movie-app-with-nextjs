import Link from 'next/link'
import Head from 'next/head'


export default function About() {
    return <div>
        <Head>
            <title>About Page</title>
        </Head>
        <h3>This is About Page</h3>
        <Link href="/">
            Back to Homepage
        </Link>

        <style jsx>{`
            h3 {
                font-size:20px;
                font-weight:500px;
                color:orangered;
            }
        `}
        </style>
    </div>
}