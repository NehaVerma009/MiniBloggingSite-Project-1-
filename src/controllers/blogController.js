const blog=require("../models/blogModel")
const authorModel=require("../models/authorModel")



const createBlog= async function (req, res) {
    try{
    let Blog = req.body
    let published= req.body.published
   

    if(!Blog.authorId){
        res.status(400).send({msg:"AuthorId is not present"})
    }
    let authorId = await authorModel.findById({_id:Blog.authorId})
    if(!authorId){
        res.status(400).send({msg:"AuthorId is Invalid"})
    }
    
    // if(published== true){
    //    console.log({publishedAt:Date()})
    //  }else res.send({msg:"Blog not published"})

    //  if(Blog.Deleted== true){
    //     console.log({deletedAt:Date()})
    //   }else res.send({msg:"Blog is not Deleted"})
     
    let BlogCreated = await blog.create(Blog)
    res.status(201).send({data: BlogCreated})
    if(!Blog){
        res.status(404).send({msg:"This is Invalid Request",status:false})
    }
    

}
catch(err){
    console.log(err.message)
    res.status(500).send({msg:err.message})

}
}

const getblog =async function (req,res){
    try{
        let authorId=req.query.authorId
        if(!authorId) res.status(400).send({msg:"authorId should be present"})

        let data=await blog.find()
    console.log(data)
    if (data) res.status(200).send({msg:data,condition :true})
    if(!data) res.status(404).send({msg:"data not found",status:false})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({msg:err.message})
    
    }
}



module.exports.createBlog=createBlog
module.exports.getblog=getblog
