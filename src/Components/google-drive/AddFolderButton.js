// import React, { useState } from "react"
// import { Button, Modal, Form } from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
// import { database, db } from "../../firebase"
// import { useAuth } from "../../contexts/AuthContext"
// import {
//     getFirestore,
//     collection,
//     getDocs,
//     addDoc,

//   } from "firebase/firestore";


// export default function AddFolderButton() {
//     const [open, setOpen] = useState(false)
//     const [name, setName] = useState("")
//     const { currentUser } = useAuth()

//     function openModal() {
//     setOpen(true)
//   }

//   function closeModal() {
//     setOpen(false)
//   }

// //   function handleSubmit(e) {
// //     e.preventDefault()

// //     database.folders.add({
// //         name: name,
// //         // parentId: currentFolder.id,
// //         userId: currentUser.uid,
// //         // path: path,
// //         // createdAt: database.getCurrentTimestamp(),
// //       })

// //     setName("")
// //     closeModal()
// //   }

// async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const folderRef = await addDoc(collection(db, "folders"),// Use db reference here
//        {
//         name: name,
//         userId: currentUser.uid,
//       });
//       console.log(folderRef.id);

//       setName("");
//       closeModal();
//     } catch (error) {
//       console.error("Error adding folder to Firestore:", error.message);
//     }
//   }

//   return (
//     <>
//     <Button onClick={openModal} variant="outline-success" size="sm">
//         <FontAwesomeIcon icon={faFolderPlus} />

//       </Button>
//       <Modal show={open} onHide={closeModal}>
//       <Form onSubmit={handleSubmit}>
//           <Modal.Body>
//             <Form.Group>
//               <Form.Label>Folder Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 required
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//               />
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={closeModal}>
//               Close
//             </Button>
//             <Button variant="success" type="submit">
//               Add Folder
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>

//     </>
//   )
// }


// AddFolderButton.js
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { database, db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { ROOT_FOLDER } from '../../hooks/useFolder';


export default function AddFolderButton({ currentFolder }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const { currentUser } = useAuth();

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        try {
            // if (currentFolder == null) return;
            // const parentId = currentFolder?.id || null;
            if (!currentFolder) {
                console.error("Current folder is undefined.");
                return;
            }

            // if (currentFolder == null) return;

            const path = currentFolder.path ? [...currentFolder.path] : [];

            if (currentFolder !== ROOT_FOLDER) {
                path.push({ name: currentFolder.name, id: currentFolder.id })
            }

            console.log("Database folders:", database.folders);
            const folderRef = addDoc((database.folders), {
                name: name,
                parentId: currentFolder.id,
                userId: currentUser.uid,
                path: path,
                createdAt: serverTimestamp()
            });

            console.log(folderRef.id);
            setName("");
            closeModal();
        } catch (error) {
            console.error("Error adding folder to Firestore:", error.message);
            closeModal();
        }
    }

    return (
        <>
            <Button onClick={openModal} variant="outline-success" size="sm">
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>
            <Modal show={open} onHide={closeModal}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="success" type="submit">
                            Add Folder
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

