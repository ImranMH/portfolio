import React, { useState, useEffect } from 'react'
import ReactPageScroller from "react-page-scroller";
// import { Pagination } from 'react-bootstrap';
import classnames from 'classnames';
// import { Link, animateScroll as scroll } from "react-scroll";
// import { useScrollPosition } from './scrollPosition'
// import { Loader, Nav, Page1, Page2, Page3, Page4, Page5, Page6 } from './components'
import { bg1, bg2, bg3, bg4 } from '../assets/images'

// import './index.css';
import './App.css';
import { Loader, Menu, Header, Success, Error, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8 } from './component'





function Home() {

  // useScrollPosition(({ prevPoos, currPos }) => {
  //   console.log('here');
  //   console.log(currPos.x, currPos.y)
  // })
  const [currentPage, setCurrentPage] = useState(0)
  const [isOpen, setIsopen] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    // console.log('object')
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  // const scrollTop = () => {
  //   console.log('here');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  window.addEventListener('scroll', checkScrollTop)

  // useEffect(() => {


  // })
  const getPagesNumbers = () => {
    const pageNumbers = [];
    // const ct = React.Children.count(props.children)
    // console.log(ct)

    for (let i = 1; i <= 8; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage + 1 === i ? 'active' : ''}
          onClick={() => { handleNuberChange(i) }} onSelect={() => { handlePageChange(i) }}>
          <small> <span></span></small>
        </li>
      );
    }

    return [...pageNumbers];
  };
  const handleNuberChange = number => {
    const nn = number - 1
    setCurrentPage(nn)
  }
  const handlePageChange = number => {
    setCurrentPage(number) // set currentPage number, to reset it from the previous selected.
  };

  const handleMenuClickEvent = (data) => {
    setIsopen(data.isOpen)
  }


  return (
    <>
      <div className={classnames("body-full-page", isOpen ? 'menu-is-opened' : 'menu-is-closed')}>

        <Menu menuStatus={handleMenuClickEvent} />
        <div onClick={() => {
          setIsopen(false)
        }} className="click-capture"></div>
        <Header menuStatus={handleMenuClickEvent} />

        <main className="pagepiling">
          <ReactPageScroller renderAllPagesOnFirstRender={false} animationTimer={2000} pageOnChange={handlePageChange}
            customPageNumber={currentPage}>
            <Page1 activeClassName={currentPage === 0 ? 'active-section' : ''} img={bg1} />
            <Page2 activeClassName={currentPage === 1 ? 'active-section' : ''} img={bg2} />
            <Page3 activeClassName={currentPage === 2 ? 'active-section' : ''} />
            <Page4 activeClassName={currentPage === 3 ? 'active-section' : ''} img={bg3} />
            <Page5 activeClassName={currentPage === 4 ? 'active-section' : ''} />
            <Page6 activeClassName={currentPage === 5 ? 'active-section' : ''} />
            <Page7 activeClassName={currentPage === 6 ? 'active-section' : ''} />
            <Page8 activeClassName={currentPage === 7 ? 'active-section' : ''} />
          </ReactPageScroller>
        </main>


      </div>
      <ul className="s-nav right white right-boxed hidden-xs ">{getPagesNumbers()}</ul>
      {currentPage > 0 && <div onClick={() => {
        handlePageChange(0)
      }} className="fixed-scroll_top">
        <i className="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i>
      </div>}
    </>

  );
}
export default Home;


