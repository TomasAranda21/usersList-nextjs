import Link from 'next/link'


const Navigation = () => {
  return (
    

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">


                <Link href="/">             
                    <a className="navbar-brand font-weight-bold text-uppercase">
                        User List 
                    </a>
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item p-2">
                        <Link href="/">             
                            <a className="nav-link">
                                Home <span className="sr-only"></span>
                            </a>
                        </Link>
                        </li>

                        <li className="nav-item  p-2">
                            
                            <Link href="/services">             
                                <a className="nav-link">
                                    Services <span className="sr-only"></span>
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item  p-2">
                            <Link href="/about">             
                                <a className="nav-link">
                                    About <span className="sr-only"></span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

  )
}

export default Navigation

