export default async function AddTask(prvData,formData){
 const task=formData.get("text");
 // here do validation
 if(task.trim()===""){return [...prvData];}
 console.log("sucess of optmistci");
   await new Promise(res => setTimeout(res, 1000));
 return [
    ...prvData,{text:task,opt:false}
 ];

}