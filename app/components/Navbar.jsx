import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/sobre" className="text-gray-600 hover:text-gray-900">
          Sobre nós
        </Link>
        <a
          href="https://wa.link/txu832"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          Contato
        </a>
      </div>
    </div>
  )
}

export default Navbar 