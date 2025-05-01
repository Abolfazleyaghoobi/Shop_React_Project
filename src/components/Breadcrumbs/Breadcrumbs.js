import { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa'; // آیکون فلش
import './Breadcrumbs.css'; // استایل کامپوننت
import { Link } from 'react-router-dom';
export default function Breadcrumbs() {
  const [pathSegments, setPathSegments] = useState([]);

  useEffect(() => {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment);
    setPathSegments(segments);
  }, []);

  const generatePath = (index) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      {pathSegments.map((segment, index) => (
        <span key={index} className="breadcrumb-segment">
          <FaChevronRight className="breadcrumb-icon" />
          <Link to={generatePath(index)} className="breadcrumb-link">
            {decodeURIComponent(segment.replace(/-/g, ' '))}
          </Link>
        </span>
      ))}
    </nav>
  );
}
