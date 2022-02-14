const { Router } = require('express');
const router = Router();


//POST'S

router.post('/crearproducto', (req, res) =>{
    console.log(req.body)
    const nombre = req.body.nombre
   const etiquetas = req.body.etiquetas

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

       conn.query('INSERT INTO productos set ?',  [{"nombre":nombre}], (err, rows)=>{
           let proId =  rows.insertId
            if(err) {
                return res.send(err)
            }
            else if(etiquetas && proId){
              for(let i =0; i<etiquetas.length ; i++){


                        conn.query('INSERT INTO etiquetas set ?',  [{"nombre":etiquetas[i],"id_producto":proId}], (err, rows)=>{
                            if(err) return res.send(err)
                            })
                    }  
            
                    res.send('producto creado')
                } 
            else{
                res.send('producto creado')

                }
         
              
        })
        
    })

})

router.post('/crearetiqueta', (req, res) =>{

    const nombre = req.body.nombre
    const proId = req.body.id_producto

   

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

                 conn.query('INSERT INTO etiquetas set ?',  [{"nombre":nombre,"id_producto":proId}], (err, rows)=>{
                    if(err) return res.send(err)
                    res.send('etiqueta cargada')
                    })
         })

})

//GET'S

router.get('/', (req, res)=>{

     req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM productos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

router.get('/detalle/:id', (req, res)=>{

    console.log(req.params)
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT productos.Nombre, etiquetas.Nombre ,etiquetas.Id_etiqueta FROM productos INNER JOIN etiquetas ON etiquetas.Id_producto = productos.Id_producto WHERE productos.Id_producto = ?' ,[req.params.id] ,(err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


//DELETE'S

router.delete('/etiquetasdelete/:id', (req, res) =>{

    
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)


        conn.query('DELETE FROM etiquetas WHERE Id_etiqueta = ?' ,[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('etiqueta borrada')
            
        })
    })

})




router.delete('/productodelete/:id', (req, res)=>{

    

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM etiquetas WHERE Id_producto = ?' ,[req.params.id] ,(err, rows)=>{
            if(err) return res.send(err)

            conn.query('DELETE FROM productos WHERE Id_producto = ?' ,[req.params.id] ,(err, rows)=>{
                if(err) return res.send(err)
    
                
    
                res.send('producto borrado')
            })


            
        })
    })
})


    


module.exports = router;
