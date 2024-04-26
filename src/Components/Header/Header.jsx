import './Header.css';
const Header = () =>{
    return(
        <>
        <header className="header">
            <div className="header-container">
            <div className="header-info">
            <i className="fa-solid fa-envelope"></i>&nbsp;
            <a href="mailto:deeparavi2403@gmail.com">deeparavi2403@gmail.com</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <i className="fa-solid fa-phone phone"></i>&nbsp;
            <a href='tel:+91 9566821649'>+91 9566821649</a>
            </div>
            </div>
        </header>
        </>
    )
}
export default Header;