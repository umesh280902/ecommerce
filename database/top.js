/**
 * This is a module that exports a router with various functions to handle requests related to men's
 * and women's tops, including retrieving top details, retrieving single top details, and rendering
 * views for top products.
 * @returns The code exports a router object that contains several routes for handling HTTP requests
 * related to men's and women's tops. The functions being returned are asynchronous functions that
 * query the database for top details, single top details, and single top images. These functions are
 * used in the route handlers to retrieve data from the database and render the appropriate views.
 */
const express=require('express')
const router=express.Router()
const pool=require('./database')
router.use(express.urlencoded({extended:true}))
router.use(express.json())
const path=require('path')
const imagePath='https://shoptacle.onrender.com/image'
//man part

async function topdetailsdesc(){
    const [top]=await pool.query("SELECT * FROM top where gender='men' and type='top' ORDER BY price DESC ");
    top.map((img)=>{
        const mainPath='/men/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top

}
async function topdetailsasec(){
    const [top]=await pool.query("SELECT * FROM top where gender='men' and type='top' ORDER BY price ASC ");
    top.map((img)=>{
        const mainPath='/men/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top
}
async function topdetails(){
    const [top]=await pool.query("SELECT * FROM top where gender='men' and type='top'");
    top.map((img)=>{
        const mainPath='/men/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top

}
topdetails()

async function topdetailsbrand(brand){
    const [top]=await pool.query("SELECT * FROM top where gender='men' and type='top' and brand_name=?",brand);
    top.map((img)=>{
        const mainPath='/men/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top
}



async function singletop(id){
    const top=await pool.query("SELECT * FROM top WHERE productid=?",id)
    if(top.length>0)
    {
        return top[0]
        
    }
    else{
        console.log("not found")
    }   
    
    
}

async function singletopimages(id)
{
    const images=await pool.query("SELECT * FROM topproduct WHERE productid=?",id)
    
    images[0].map((img)=>{
        const mainPath='/men/'+img.images
        const finalImagePath=imagePath+mainPath
        img.images=finalImagePath
    })
    return images[0]
}
singletopimages(4)


router.get('/men/top', async (req, res) => {
    const details=req.query
    const {Ascending,Descending,brandName}=details
    let product;
    if(Ascending==='Increasing'){
        product=await topdetailsasec()
    }else if(Descending==='Decreasing'){
        product=await topdetailsdesc()
    }else if(Ascending==='null'||Descending==='null'&&brandName!=='null'){
        product=await topdetailsbrand(brandName)
    }
    else{
        product=await topdetails()
    }
    res.render("top.ejs", {
      product,
    });
});



router.get('/men/top/:id',async(req,res)=>{
    id=req.params.id
    const top=await singletop(id)
    const image=await singletopimages(id)
    console.log(top[0])
    console.log(image.length)
    res.render("topproduct.ejs",{
        top,image
    })
    // res.send({top,image})
})

//women part

async function womantopdetailsdesc(){
    const [top]=await pool.query("SELECT * FROM top where gender='women' and type='top' ORDER BY price DESC");
    top.map((img)=>{
        const mainPath='/women/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top
}



async function womantopdetailsasec(){
    const [top]=await pool.query("SELECT * FROM top where gender='women' and type='top' ORDER BY price ASC");
    top.map((img)=>{
        const mainPath='/women/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top
}

async function womantopdetails(){
    const [top]=await pool.query("SELECT * FROM top where gender='women' and type='top' ");
    top.map((img)=>{
        const mainPath='/women/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top
}
async function womantopdetailsbrand(brand){
    const [top]=await pool.query("SELECT * FROM top where gender='women' and type='top' and brand_name=? ",brand);
    top.map((img)=>{
        const mainPath='/women/'+img.image
        const finalImagePath=imagePath+mainPath
        img.image=finalImagePath
    })
    return top
}


async function womansingletop(id){
    const top=await pool.query("SELECT * FROM top WHERE productid=?",id)
    if(top.length>0)
    {
        return top[0]
        
    }
    else{
        console.log("not found")
    }   
    
    
}

async function womansingletopimages(id)
{
    const images=await pool.query("SELECT * FROM topproduct WHERE productid=?",id)
    images[0].map((img)=>{
        const mainPath='/women/'+img.images
        const finalImagePath=imagePath+mainPath
        img.images=finalImagePath
    })
    return images[0]
}
womansingletopimages(21)

router.get('/women/top',async (req,res)=>{
    const details=req.query
    const {Ascending,Descending,brandName}=details
    let product;
    if(Ascending==='Increasing'){
        product=await womantopdetailsasec()
    }else if(Descending==='Decreasing'){
        product=await womantopdetailsdesc()
    }else if(Ascending==='null'||Descending==='null'&&brandName!=='null'){
        product=await womantopdetailsbrand(brandName)
    }
    else{
        product=await womantopdetails()
    }
    res.render("top.ejs", {
      product,
    });
})

router.get('/women/top/:id',async(req,res)=>{
    id=req.params.id
    const top=await womansingletop(id)
    const image=await womansingletopimages(id)

    res.render("topproduct.ejs",{
        top,image
    })
})


module.exports=router