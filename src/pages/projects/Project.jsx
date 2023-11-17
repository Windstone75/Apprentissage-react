// @ts-nocheck
import {useDocumentTitle} from "../../hooks/useDocumentTitle.js";
import {useFetch} from "../../hooks/useFetch.js";
import {Spinner} from "../../components/Spinner.jsx";
import {Button} from "../../components/Button.jsx";
import {useToggle} from "../../hooks/useToggle.js";
import {EditProjectModal} from "./EditProjectModal.jsx";
import { Alert } from "../../components/Alert.jsx";

export function Project({projectId}){

    const {data: project, loading, error, setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${projectId}`)
    useDocumentTitle('My Personal Projects')

    const [isEditing, toggleEditing] = useToggle(false)

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Alert type="danger">{error.toString()}</Alert>
    }

    const handleSave = (data) => {
        setData({
            ...project,
            ...data
        })
        toggleEditing()
    }

    return <>
        <h1 className="mb-3">{project.title}</h1>
        <img src={`https://picsum.photos/id/${project.id}/800/600`} alt="" className="img-fluid img-thumbnail my-3"/>
        <p>{project.body}</p>   

        {isEditing && <EditProjectModal
            project={project}
            onClose={toggleEditing}
            onSave={handleSave}
        />}
         
        <Button variant="secondary" onClick={toggleEditing}>Edit project</Button>
        <p>
            <a href={`#project:${project.id + 1}`}>Next projet</a>
        </p>    
    </>
}