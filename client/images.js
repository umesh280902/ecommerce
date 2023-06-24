const product=[
    {
        productid:3,
        image:'allensolly1.jpg',
    },
    {
        productid:4,
        image:'vanheusen1.jpg',
    },
    
]

function renderproduct(product){
    const id=document.createElement('h1')
    id.innerText=product.productid
    const image=document.createElement('img')
    image.src=product.image
    const productdiv=document.createElement('div')
    productdiv.appendChild(id)
    productdiv.appendChild(image)
    return productdiv
}
root=document.getElementById('root')
for(let i=0;i<product.length;i++){
    const products=product[i]
    const productDiv=renderproduct(products)
    root.appendChild(productDiv)
}
module.exports=product