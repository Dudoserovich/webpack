import {createContainer, requestClientPath, sendRequest} from './Post'
import './styles/style.css'

sendRequest('GET', requestClientPath)
    .then(data => {
        console.log(data)

        createContainer (data.length, data);
    })
    .catch(err => console.log(err))