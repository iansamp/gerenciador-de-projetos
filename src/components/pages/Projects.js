import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"
import styles from './Projects.module.css'
import { useLocation } from "react-router-dom"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"

export default function Project() {
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="seccess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                projects.map((project) =>(
                    <ProjectCard
                    id={project.id}
                    budget={project.budget}
                    name={project.name}
                    category={project.category}
                    key={project.id}
                    />
                ))}
            </Container>
        </div>
    )
}