import React from 'react';

function Footer() {
    return (
        <footer className="bg-light text-dark py-3 fixed-bottom">
        <div className="container text-center">
            푸~터
          <p>&copy; {new Date().getFullYear()} 숙명여대 SOLUX. All rights reserved.</p>

        </div>
      </footer>
    )
}

export default Footer;