import { Schema, models, model } from "mongoose";

const loteSchema = new Schema({
    fecha_produccion:{
        type: Date,
        required: [true, "fecha es requerido"],
    },
    fecha_caducidad:{
        type: Date,
        required: [true, "fecha es requerido"],
    },
    cantidad_producida:{
        type: Number,
    },
    detalles_calidad:{
        type: String,
    },
    estado:{
        type: String,
    },

    producto:{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "producto es requerido"],
    },
});

export default models.Lote || model("Lote", loteSchema);