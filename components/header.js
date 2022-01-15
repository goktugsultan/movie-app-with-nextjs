import Link from 'next/link'

export default function Header() {
    return <header className="header">
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Homepage</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            .header {
                background:#fff;
                border-bottom:1px solid #ccc;

               ul {
                 display:flex;
                 justify-content:center;

                  li{
                      a{     
                          height:60px;
                          display:flex;
                          align-items:center;
                          color:#333;
                          text-decoration:none;
                          padding:0 20px;

                      }
                  }

               } 
            }
        `}</style>
    </header>
}