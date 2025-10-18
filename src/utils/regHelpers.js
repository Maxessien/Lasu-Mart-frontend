const formatFormData = (data)=>{
    const formData = new FormData()
    for(let key in data){
        if (key !== "images")formData.append(key, data[key])
    }
	for (const image of data.images)formData.append("images", image)
    return formData
}

export {formatFormData}