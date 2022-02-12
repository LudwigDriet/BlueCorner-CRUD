const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/', (req, res) =>{

    const nombre = req.body.nombre
   const etiquetas = req.body.etiquetas

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

       conn.query('INSERT INTO productos set ?',  [{"nombre":nombre}], (err, rows)=>{
            if(err) return res.send(err)
            
           
            

           let proId =  rows.insertId
           
          if(etiquetas && proId){
              for(let i =0; i<etiquetas.length ; i++){


                  conn.query('INSERT INTO etiquetas set ?',  [{"nombre":etiquetas[i],"id_producto":proId}], (err, rows)=>{
                    if(err) return res.send(err)
                    
                    
                })
            }
            res.send('producto guardado')
        } 
        else{
            res.send('producto guardado')
        }
         
              
        
        })
        
    })

})

router.delete('/deleetiqueta/:id', (req, res) =>{

    // const {nombre, id_producto} = req.body
    
    
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)


        conn.query('DELETE FROM etiquetas WHERE Id_etiqueta = ?' ,[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('etiqueta borrada')
            
        })
    })

})


router.get('/', (req, res)=>{

    

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM productos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

router.get('/et/:id', (req, res)=>{

    

    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT productos.Nombre, etiquetas.Nombre FROM productos INNER JOIN etiquetas ON etiquetas.Id_producto = productos.Id_producto WHERE productos.Id_producto = ?' ,[req.params.id] ,(err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

router.delete('/product/:id', (req, res)=>{

    

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
