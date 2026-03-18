"use server"
export async function SaveName(prevSate,formData) {
    const name =formData.get("name");
    if(name.trim()===""){ console.log("error on server ") ;return{eror:"name is required"}};
     await new Promise(res => setTimeout(res, 1000));
    console.log("server recived",name)
    return {msg:"save"+name}
}