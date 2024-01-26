import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
    <>
            <Navbar style={{ backgroundColor: '#f333', color: '#fff' }} expand="lg" collapseOnSelect>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{ padding: '10px' }}>
                        <Nav.Link active style={{ color: 'white',textDecoration:'none' }} href="/login">Admin</Nav.Link>
                        <Nav.Link active style={{ color: 'white', marginLeft: '1em', marginTop:'50em' ,textDecoration:'none'}} href="/tlogin">Teacher</Nav.Link>
                        <Nav.Link active style={{ color: 'white', marginLeft: '1em',textDecoration:'none' }} href="/slogin" className="mr-3">Student</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;