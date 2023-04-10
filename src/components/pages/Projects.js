import Message from "../layout/Message"
import styles from './Projects.module.css'
import { useLocation } from "react-router-dom"

export default function Project() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <>
            <h1>Meus projetos</h1>
            {message && <Message type="seccess" msg={message} />}
        </>
    )
}