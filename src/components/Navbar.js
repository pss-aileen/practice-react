import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Book } from 'react-bootstrap-icons';

const Navbar = ({isAuth}) => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="site-title">
          <Book />
          単語帳
        </h1>
      <nav className="global-nav">
        <ul className="global-nav-list">
          <li><Link to="/">単語一覧</Link></li>
          {!isAuth ?
            (
              <li><Link to="/login">ログイン</Link></li>
            )
            :
            (
              <>
                <li><Link to="/createword">単語帳追加</Link></li>
                <li><Link to="/logout">ログアウト</Link></li>
              </>
            )
          }
        </ul>
      </nav>
      </div>{/* header-inner */}
    </header>
  )
}

export default Navbar