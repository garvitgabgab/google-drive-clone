// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { useFolder } from "../../hooks/useFolder"
// import Navbar from "./Navbar"
// import { useParams, useLocation } from 'react-router-dom';
// import Folder from "./Folder"
// import { db, database } from '../../firebase'
// import AddFolderButton from "./AddFolderButton"
// import { doc, getDoc } from "firebase/firestore";
// import FolderBreadcrumbs from './FolderBreadcrumbs';
// import AddFileButton from './AddFileButton';

// import File from './File';

// export default function Dashboard() {
//   const { folderId } = useParams();
//   let { state } = useLocation();
//   if (state === null) {
//     state = {}
//   };
//   const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)
//   console.log(childFolders)
//   return (<>
//     <Navbar />
//     <Container fluid >
//       <div className="d-flex align-items-center">
//         <FolderBreadcrumbs currentFolder={folder} />
//         <AddFileButton currentFolder={folder} />
//         <AddFolderButton currentFolder={folder} />
//       </div>
//       <AddFolderButton currentFolder={folder} />
//       {childFolders.length > 0 && (
//         <div className="d-flex flex-wrap">
//           {childFolders.map(childFolder => (
//             <div
//               key={childFolder.id}
//               style={{ maxWidth: "250px" }}
//               className="p-2"
//             >
//               <Folder folder={childFolder} />
//             </div>

//           ))}
//           </div>
//         )}
//         {childFolders.length > 0 && childFiles.length > 0 && <hr/>}
//         {childFiles.length > 0 && (
//           <div className="d-flex flex-wrap">
//             {childFiles.map(childFile => (
//               <div
//                 key={childFile.id}
//                 style={{ maxWidth: '250px' }}
//                 className="p-2">
//                 <File file={childFile} />
//               </div>
//             ))}


//         </div>
//       )}
//     </Container>

//   </>


//   )
// }


import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { useFolder } from '../../hooks/useFolder';
import AddFolderButton from './AddFolderButton';
import Folder from './Folder';
import File from './File';
import FolderBreadcrumbs from './FolderBreadcrumbs';
import AddFileButton from './AddFileButton';

const Dashboard = () => {
  const { folderId } = useParams();
  let { state } = useLocation();
  if (state === null) {
    state = {}
  };



  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder);

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: '250px' }}
                className="p-2">
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr/>}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: '250px' }}
                className="p-2">
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default Dashboard;

