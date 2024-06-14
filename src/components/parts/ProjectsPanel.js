// Core Imports
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthContext";

// Component Imports
import BS_Badge from "./BS_Badge";

// Bootstrap Imports
import { Stack, Table, Button } from "react-bootstrap";

const ProjectsPanel = () => {
    const { currentUser } = useAuth();
    const { projects, setProjects, getProjects, deleteProject } = useAuth();

    useEffect(() => {
        getProjects();
    }, []);

    function handleDeleteProject(project_id) {
        deleteProject(project_id);
    }

    return (
        <>
            {currentUser ? (
                <div className="projects-panel-container">
                    <Table>
                        <thead>
                            <tr>
                                <th><p>#</p></th>
                                <th><p>Header</p></th>
                                <th><p>Description</p></th>
                                <th><p>Meta</p></th>
                                <th><p>Category</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {projects.length > 0 ? (
                                    projects.map((project, id) => (
                                        <tr key={project.id}>
                                            <td className="id"><p>{project.id}</p></td>
                                            <td className="header"><p>{project.header}</p></td>
                                            <td className="description"><p>{project.description}</p></td>
                                            <td className="meta"><p>{project.meta}</p></td>
                                            <td className="category_owner">
                                                <Stack direction="horizontal" gap={2}>
                                                    <BS_Badge badgeStyle={"primary bg-" + project.category_owner.toLowerCase()} text={project.category_owner} />
                                                </Stack>
                                            </td>
                                        </tr>
                                    ))
                                ) : ('')}
                            </>
                        </tbody>
                    </Table>
                </div>
            ) : ('')}
        </>
    )
}

export default ProjectsPanel;