// import React from "react"
// import { Link } from "react-router-dom"
// import { Button } from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFolder } from "@fortawesome/free-solid-svg-icons"

// export default function Folder({ folder }) {
//   return (
//     <Button
//       to={{
//         pathname: `/folder/${folder.id}`,
//         state: { folder: folder },
//       }}
//       variant="outline-dark"
//       className="text-truncate w-100"
//       as={Link}
//     >
//       <FontAwesomeIcon icon={faFolder} className="mr-2" />
//       {folder.name}
//     </Button>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const Folder = ({ folder }) => {
    return (
        <Button
            as={Link}
            to={`/folder/${folder.id}`}
            state={{folder: folder}}
            variant="outline-dark"
            className="text-truncate w-100"
        >
            <FontAwesomeIcon icon={faFolder} className="me-2" />
            {folder.name}
        </Button>
    );
}

export default Folder