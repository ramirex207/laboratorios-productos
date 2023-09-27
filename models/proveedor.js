import { Schema, models, model } from "mongoose";

const proveedorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "nombre es requerido"],
        minlength: [3, "Nombre debe tener al menos 3 caracteres"],
        maxlength: [50, "Nombre debe tener menos de 50 caracteres"],
    },
    direccion: {
        type: String,
        required: [true, "direccion es requerido"],
        minlength: [3, "direccion debe tener al menos 3 caracteres"],
        maxlength: [100, "direccion debe tener menos de 50 caracteres"],
    },
    telefono: {
        type: Number,
        required: [true, "telefono es requerido"],
        min: [0, "telefono debe ser mayor a 0"],
    },
});

export default models.Proveedor || model("Proveedor", proveedorSchema);