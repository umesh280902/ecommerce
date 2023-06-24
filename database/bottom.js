/**
 * This is a module that exports a router with various functions to handle requests related to men's
 * and women's bottom wear products, including retrieving details of all products, retrieving details
 * of a single product, and rendering views for displaying the products.
 * @returns The code exports a router object that contains several routes for handling requests related
 * to men's and women's bottom products. The functions being returned are asynchronous functions that
 * query the database for information about the products, such as their details, images, and sorting
 * order. The routes use these functions to render the appropriate views and pass the necessary data to
 * them.
 */
const express=require('express')
const router=express.Router()
const pool=require('./database')
router.use(express.urlencoded({extended:true}))
// man
async function bottomdetailsdesc(){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='men' ORDER BY price DESC");
    return bottom
}
async function bottomdetailsasec(){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='men' ORDER BY price ASC");
    return bottom
}
bottomdetails()
async function bottomdetails(){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='men'");
    return bottom
}
async function bottomdetailsbrand(brand){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='men' and brand_name=?",brand);
    return bottom
}
async function singlebottom(id){
    const bottom=await pool.query("SELECT * FROM top where type='bottom' and gender='men' and productid=?",id)
    if(bottom.length>0)
    {
        return bottom[0]
        
    }
    else{
        console.log("not found")
    }   
    
    
}
singlebottom(18)

async function singlebottomimages(id)
{
    const images=await pool.query("SELECT * FROM topproduct WHERE productid=?",id)
    return images[0]
}
singlebottomimages(4)


router.get('/men/bottom',async (req,res)=>{
    const details=req.query
    const {Ascending,Descending,brandName}=details
    let product;
    if(Ascending==='Increasing'){
        product=await bottomdetailsasec()
    }else if(Descending==='Decreasing'){
        product=await bottomdetailsdesc()
    }else if(Ascending==='null'||Descending==='null'&&brandName!=='null'){
        product=await bottomdetailsbrand(brandName)
    }
    else{
        product=await bottomdetails()
    }
    res.render("top.ejs", {
      product,
    });
})

router.get('/men/bottom/:id',async(req,res)=>{
    id=req.params.id
    const bottom=await singlebottom(id)
    const image=await singlebottomimages(id)
    console.log(bottom[0])
    console.log(image.length)
    res.render("topproduct.ejs",{
        top,image
    })
})
// woman
async function womanbottomdetailsdesc(){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='women' ORDER BY price DESC");
    return bottom
}
womanbottomdetails()

async function womanbottomdetailsasec(){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='women' ORDER BY price ASC");
    return bottom
}

async function womanbottomdetails(){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='women'");
    return bottom
}
async function womanbottomdetailsbrand(brand){
    const [bottom]=await pool.query("SELECT * FROM top where type='bottom' and gender='women' and brand_name=?",brand);
    return bottom
}

async function womansinglebottom(id){
    const bottom=await pool.query("SELECT * FROM top WHERE productid=?",id)
    if(bottom.length>0)
    {
        return bottom[0]
        
    }
    else{
        console.log("not found")
    }   
    
    
}

async function womansinglebottomimages(id)
{
    const images=await pool.query("SELECT * FROM topproduct WHERE productid=?",id)
    return images[0]
}



router.get('/women/bottom',async (req,res)=>{
    const details=req.query
    const {Ascending,Descending,brandName}=details
    let product;
    if(Ascending==='Increasing'){
        product=await womanbottomdetailsasec()
    }else if(Descending==='Decreasing'){
        product=await womanbottomdetailsdesc()
    }else if(Ascending==='null'||Descending==='null'&&brandName!=='null'){
        product=await womanbottomdetailsbrand(brandName)
    }
    else{
        product=await womanbottomdetails()
    }
    res.render("top.ejs", {
      product,
    });
})

router.get('/women/bottom/:id',async(req,res)=>{
    id=req.params.id
    const bottom=await womansinglebottom(id)
    const image=await womansinglebottomimages(id)
    console.log(bottom[0])
    console.log(image.length)
    res.render("topproduct.ejs",{
        top,image
    })
})

module.exports=router