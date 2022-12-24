import exp from 'constants';
import Link from 'next/link';

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <Link style={{ color: 'purple' }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: 'purple' }} href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default header;
