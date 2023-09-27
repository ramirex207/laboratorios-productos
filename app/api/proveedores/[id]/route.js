import connectMongoDB from "@/libs/mongodb";
import Proveedor from "@/models/proveedor";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {

    const { id } = params;
  const { newNombre: nombre, newDireccion: direccion, newTelefono:telefono } = await request.json();
  await connectMongoDB();
  await Proveedor.findByIdAndUpdate(id, { nombre, direccion,telefono });
  return NextResponse.json({ message: "Proveedor Actualizado" }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const proveedor = await Proveedor.findOne({ _id: id });
  return NextResponse.json({ proveedor }, { status: 200 });
}
