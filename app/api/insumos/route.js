import connectMongoDB from "@/libs/mongodb";
import Ingredient from "@/models/ingrediente";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {

  const { nombre, descripcion, precio_unitario, unidad_medida, proveedor, existencia } = await request.json();
  const numero =+ 1;
  await connectMongoDB();
  await Ingredient.create({ nombre,descripcion,precio_unitario,unidad_medida,proveedor,existencia, numero});
  return NextResponse.json({ message: "Insumo creado" }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function GET() {
  try {

  await connectMongoDB();
  const insumos = await Ingredient.find();
  return NextResponse.json({ insumos });
    
  } catch (error) {
    return NextResponse.json({ error });
  }

}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Ingredient.findByIdAndDelete(id);
  return NextResponse.json({ message: "Proveedor borrado" }, { status: 200 });
}
