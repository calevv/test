import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('검색어:', searchTerm);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>도서관</h1>
            </div>
            <form className="search-bar" onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="검색어를 입력하세요" value={searchTerm} onChange={handleSearchChange} />
                <button type="submit">검색</button>
            </form>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to={'/'}>메인</Link>
                    </li>
                    <li>
                        <Link to={'/book'}>나의 책</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
