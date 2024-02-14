const express =require("express")

const app =express()



const PORT= 3000;
app.get('/home',(req,res)=>{
    res.send('hello gyus')
})



app.get('/api/jokes',(req,res)=>{
   const jokes=[
    {
        id:1,
        title:'new',
        content:'laugh'
    },
    {
        id:2,
        title:'new',
        content:'laugh'
    },
    {
        id:3,
        title:'new',
        content:'laugh'
    },
    {
        id:4,
        title:'new',
        content:'laugh'
    },
    {
        id:5,
        title:'new',
        content:'laugh'
    },
    {
        id:6,
        title:'new',
        content:'laugh'
    },
    {
        id:1,
        title:'new',
        content:'laugh'
    }
   ]


   res.send(jokes);
})
app.listen(PORT,(req,res)=>{
    console.log("go to 3000");
})