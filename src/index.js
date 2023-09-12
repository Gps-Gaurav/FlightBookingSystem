const express = require('express')

const setupAndStartServer = async ()=>{

    const app = express();

    app.listen(PORT , ()=>{
        console.log('server ')
    })

}

setupAndStartServer();