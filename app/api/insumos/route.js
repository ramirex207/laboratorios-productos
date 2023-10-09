import connectMongoDB from "@/libs/mongodb";
import Insumo from "@/models/insumo";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {

  const { nombre, descripcion, precio_unitario, unidad_medida, proveedor, existencia } = await request.json();
  const numero =+ 1;
  await connectMongoDB();
  await Insumo.create({ nombre,descripcion,precio_unitario,unidad_medida,proveedor,existencia, numero});
  return NextResponse.json({ message: "Insumo creado" }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function GET() {
  try {

  await connectMongoDB();
  const insumos = await Insumo.find();
  return NextResponse.json({ insumos });
    
  } catch (error) {
    return NextResponse.json({ error });
  }

}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Insumo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Proveedor borrado" }, { status: 200 });
}
