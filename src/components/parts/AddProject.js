// Core Imports
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../providers/AuthContext";

// Component Imports

// Bootstrap Imports
import { Stack, Table, Form, Button } from "react-bootstrap";

const AddProject = () => {

    const { currentUser } = useAuth();
    const { project, setProject, addProject } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const idRef = useRef();
    const headerRef = useRef();
    const descriptionZeroRef = useRef();
    const descriptionOneRef = useRef();
    const descriptionTwoRef = useRef();
    const excerptRef = useRef();
    const metaRef = useRef();
    const categoryOwnerRef = useRef();

    async function handleProjectSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const p = {
            id: parseInt(idRef.current.value),
            header: headerRef.current.value,
            description: [
                descriptionZeroRef.current.value,
                descriptionOneRef.current.value,
                descriptionTwoRef.current.value
            ],
            excerpt: excerptRef.current.value,
            meta: metaRef.current.value,
            category_owner: categoryOwnerRef.current.value
        }

        try {
            await addProject(p);
            setLoading(false);
            idRef.current.value = '';
            headerRef.current.value = '';
            descriptionZeroRef.current.value = '';
            descriptionOneRef.current.value = '';
            descriptionTwoRef.current.value = '';
            excerptRef.current.value = '';
            metaRef.current.value = '';
            categoryOwnerRef.current.value = '';
        } catch (error) {
            setError("Failed to add project: " + error.message);
            setLoading(false);
        }
    }

    return (
        <>
            {currentUser ? (
                <>
                    <div className="add-project-container">
 
                        <Form onSubmit={handleProjectSubmit}>
 
                            <Form.Group id="id">
                                <Form.Label>#</Form.Label>
                                <Form.Control
                                    type="number"
                                    ref={idRef}
                                    placeholder="ID"
                                    required
                                />
                            </Form.Group>
 
                            <Form.Group id="header">
                                <Form.Label>Header</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={headerRef}
                                    placeholder="Header"
                                    required
                                />
                            </Form.Group>
 
                            <div id="description">
                                <Form.Group id="description_zero">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea" rows={3}
                                        placeholder="Description one"
                                        ref={descriptionZeroRef}
                                    />
                                </Form.Group>
                                <Form.Group id="description_one">
                                    <Form.Control
                                        as="textarea" rows={3}
                                        placeholder="Description two"
                                        ref={descriptionOneRef}
                                    />
                                </Form.Group>
                                <Form.Group id="description_two">
                                    <Form.Control
                                        as="textarea" rows={3}
                                        placeholder="Description three"
                                        ref={descriptionTwoRef}
                                    />
                                </Form.Group>
                            </div>
 
                            <Form.Group id="excerpt">
                                <Form.Label>Excerpt</Form.Label>
                                <Form.Control
                                    as="textarea" rows={3}
                                    ref={excerptRef}
                                    placeholder="Excerpt"
                                    required
                                />
                            </Form.Group>
 
                            <Form.Group id="meta">
                                <Form.Label>Meta</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={metaRef}
                                    placeholder="Meta"
                                    required
                                />
                            </Form.Group>
 
                            <Form.Group id="category_owner">
                                <Form.Label>Category (Owner)</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={categoryOwnerRef}
                                    placeholder="Category (Agency, Freelance)"
                                    required
                                />
                            </Form.Group>
 
                            <div className="submit-container">
                                <p><Button disabled={loading} type="submit" className="btn">Add Project</Button></p>
                            </div>
                        </Form>






                    </div >
                </>
            ) : ('')}
        </>
    )
}

export default AddProject;