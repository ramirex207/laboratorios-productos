import { Schema, models, model } from "mongoose";

const loteSchema = new Schema({
    numeroLote: String,
    fechaVencimiento: Date,
    cantidad: Number,
  });
const CompraInsumoSchema = new Schema({
    
    almacen:{
        type: String,
        required: [true, "nombre del almacen es requerido"],
        minlength: [3, "El Nombre debe tener al menos 3 caracteres"],
        maxlength: [50, "Nombre debe tener menos de 50 caracteres"],
    },
    procedencia:{
        type: String,
        required: [true, "La procedencia es requerido"],
        minlength: [3, "descripcion debe tener al menos 3 caracteres"],
        maxlength: [100, "descripcion debe tener menos de 50 caracteres"],
    },
    solicitante:{
        type: String,
        required: [true, "nombre del solicitante es requerido"],
        minlength: [3, "descripcion debe tener al menos 3 caracteres"],
        maxlength: [100, "descripcion debe tener menos de 50 caracteres"],
    },
    
    fecha_solicitud:{
        type: Date,
        
    },
    fecha_requerida:{
        type: Date,
        
    },
    nombreDepartamento:{
        type: String,
    },
    insumos: [
        {
            insumo: {
                type: Schema.Types.ObjectId,
                ref: 'Insumo',
            },
            cantidad: Number,
            precioUnitario: Number,
        },
    ],
    lote:[loteSchema],
    existencia:{
        type: Number,
    },  
});

export default models.CompraInsumo || model("CompraInsumo", CompraInsumoSchema);