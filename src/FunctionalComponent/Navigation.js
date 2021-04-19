import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



const Navigation = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="/Main">
            <img src="https://iesa.org.il/wp-content/uploads/2020/04/newlogosite.png" alt="alttext" ></img>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="Navigationlink" href="/Main" >ראשי</Nav.Link> 
            <NavDropdown.Divider/>   
            <Nav.Link className="Navigationlink"href="/IsraelsNationalTeam"> נבחרת ישראל</Nav.Link>        
            <NavDropdown.Divider/>         
            <Nav.Link className="Navigationlink" href="/AllCompetitions" > תחרויות </Nav.Link> 
            <NavDropdown.Divider/>         
            <Nav.Link className="Navigationlink" href="/About" > אודות </Nav.Link> 
            <NavDropdown.Divider/>                                  
            <Nav.Link className="Navigationlink" href="/Ranks" > דירוגים </Nav.Link> 
            <NavDropdown.Divider/>
            <Nav.Link className="Navigationlink"  href="/ContactUs" > צור קשר </Nav.Link>
            </Nav> 
            </Navbar.Collapse> 
            </Navbar> 
            
            </div>
                                                       
                                                           
                                                        
        
                                                          
      
      
     
       
    );
}

export default Navigation;