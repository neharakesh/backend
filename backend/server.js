import express from 'express';

const app=express();
app.get('/',(req,res) => {
    res.send('server is ready');
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:'this is a joke'
        },
        {
            id:1,
            title:'a joke',
            content:'this is a joke'
        },
        {
            id:1,
            title:'a joke',
            content:'this is a joke'
        },
        {
            id:1,
            title:'a joke',
            content:'this is a joke'
        }
    ];
    res.send(jokes);
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("hello")
})
