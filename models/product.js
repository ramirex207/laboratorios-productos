import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
    nombre:{
        type: String,
        required: [true, "nombre es requerido"],
        minlength: [3, "Nombre debe tener al menos 3 caracteres"],
        maxlength: [50, "Nombre debe tener menos de 50 caracteres"],
    },
    descripcion:{
        type: String,
        required: [true, "descripcion es requerido"],
        minlength: [3, "descripcion debe tener al menos 3 caracteres"],
        maxlength: [100, "descripcion debe tener menos de 50 caracteres"],
    },
    fecha_creacion:{
        type: Date,
        required: [true, "fecha es requerido"],
    },
    fecha_caducidad:{
        type: Date,
        required: [true, "fecha es requerido"],
    },
    stock_actual:{
        type: Number,
    },
    precio:{
        type: Number,
    },
    categoria:{
        type: String,
    },
    fabricante:{
        type: String,
    },
    ingredientes:[Schema.Types.ObjectId],
    ref: "Ingredient",

    lote:Schema.Types.ObjectId,
    ref: "Lote",
});

export default models.Product || model("Product", productSchema);