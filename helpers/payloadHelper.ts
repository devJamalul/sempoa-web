import Payload from "App/Models/Payload"

export const  requestSave = async function(url:string,create_by:string,updated_by:string,payload:object){
    const request = new Payload
    request.status = 'request'
    request.url = url
    request.payload = JSON.stringify(payload)
    request.created_by = create_by
    request.updated_by = updated_by
    await request.save()
}

export const responseSave =async function(url:string,create_by:string,updated_by:string,payload:object,isError :boolean = false){
    const response = new Payload
    response.status = isError ? 'response - failed' : 'response'
    response.url = url
    response.payload = JSON.stringify(payload)
    response.created_by = create_by
    response.updated_by = updated_by
    await response.save()
}