export const getProjects = (req,res) =>{
    res.send('getting projects')
}

export const createProjects =(req,res)=>{
    console.log(req.body)
    res.send('creating projects')
}