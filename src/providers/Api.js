
class Api {

  static url = "http://dev.localhost/upload-lumen/public/"

  static http(url,params){
    return fetch(url,params).then(res => res.json())
          .catch(err => console.log("error while parsing "+url+" => ",err))
  }

  static uploadFile(file){

    /* building params */
    const data = new FormData()
    data.append('file',file,file.name)
    let params = {method: 'post',body: data}
    //FETCH
    return Api.http(Api.url+'uploadFile',params)
  }

  static authenticate(login,password){

    /* building params */
    const data = new FormData()
    data.append('email',login)
    data.append('password',password)
    let params = {method: 'post',body: data}
    //FETCH
    return Api.http(Api.url+'auth/login',params)
  }

  static getFilesForUser(email){
    console.log(email)
  }


}

export default Api
