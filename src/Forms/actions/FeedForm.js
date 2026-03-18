export default async function FeedForm(prev,formData) {
    const feed=formData.get("text");
    //validation
    if (!feed || feed.trim() === "") return prev;

    
    await new Promise(r=>setTimeout(r,1000));
    console.log(feed,"smartform sucess")
    return {text:feed,optim:false}

}