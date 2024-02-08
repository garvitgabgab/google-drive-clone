// import React from "react"
// import { Navbar, Nav } from "react-bootstrap"
// import { Link } from "react-router-dom"

// export default function NavbarComponent() {
//   return (
//     <Navbar bg="light" expand="sm">
//       <Navbar.Brand as={Link} to="/">
//         WDS Drive
//       </Navbar.Brand>
//       <Nav>
//         <Nav.Link as={Link} to="/user">
//           Profile
//         </Nav.Link>
//       </Nav>
//     </Navbar>
//   )
// }

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar  bg="light" expanded="sm" className="justify-content-between" > {/* Add container="fluid" */}
      <Navbar.Brand as={Link} to="/">
        WDS Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}


// // fixed = "top"

// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function NavbarComponent() {
//   return (
//     <Navbar bg="light" expand="sm" fixed="top" className="justify-content-between">
//       <Navbar.Brand as={Link} to="/">
//         WDS Drive
//       </Navbar.Brand>
//       <Nav>
//         <Nav.Link as={Link} to="/user">
//           Profile
//         </Nav.Link>
//       </Nav>
//     </Navbar>
//   );
// }
