import { Schema, models, model } from "mongoose";

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
        type: Date.now(),
        required: [true, "fecha es requerido"],
    },
    fecha_caducidad:{
        type: Date,
        required: [true, "fecha es requerido"],
    },
    nombreDepartamento:{
        type: String,
    },
    insumo:{
        type: Schema.Types.ObjectId,
        ref: "Ingrediente",
    },
    lote:Schema.Types.ObjectId,
    ref: "Lote",
});

export default models.Insumo || model("Insumo", CompraInsumoSchema);