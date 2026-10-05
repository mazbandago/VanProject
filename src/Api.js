
export  async function getVan(){
    const response = await fetch("/api/vans")
    if(!response.ok){
        throw{
            message: "The page can not be found"
        }
    }
    const data = await response.json()
    return data.vans
}