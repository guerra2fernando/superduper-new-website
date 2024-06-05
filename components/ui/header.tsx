import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li className="relative group">
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Solutions
                </Link>
                <ul className="absolute top-full left-0 bg-slate-900 rounded shadow-lg pt-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out">
                  <li>
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/key-value">Key Value</Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/vector-search">Vector Search</Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out" href="/solutions/in-database-rag">In-Database RAG</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/enterprise">Enterprise</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://blog.superduperdb.com/">Blog</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="https://docs.superduperdb.com/">Docs</Link>
              </li>
            </ul>

          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li className="ml-6">
              <Link className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="https://github.com/SuperDuperDB/superduperdb">
                <span className="relative inline-flex items-center">
                  Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
