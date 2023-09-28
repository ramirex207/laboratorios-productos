import { Schema, models, model } from "mongoose";


const ingredientSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "nombre es requerido"],
        minlength: [3, "Nombre debe tener al menos 3 caracteres"],
        maxlength: [50, "Nombre debe tener menos de 50 caracteres"],
    },
    descripcion: {
        type: String,
        required: [true, "descripcion es requerido"],
        minlength: [3, "descripcion debe tener al menos 3 caracteres"],
        maxlength: [100, "descripcion debe tener menos de 50 caracteres"],
    },
    precio_unitario: {
        type: Number,
        required: [true, "precio es requerido"],
        min: [0, "precio debe ser mayor a 0"],
    },
    unidad_medida:{
        type: String,
        required: [true, "unidad de medida es requerido"],
        minlength: [3, "unidad de medida debe tener al menos 3 caracteres"],
        maxlength: [50, "unidad de medida debe tener menos de 50 caracteres"],
    },
    proveedor:{
        type: Schema.Types.ObjectId,
        ref: "Proveedor",
        required: [true, "proveedor es requerido"],
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    cantidad:{
        type: Number,
    },    
});

export default models.Ingredient || model("Ingredient", ingredientSchema);