import connectMongoDB from "@/libs/mongodb";
import Ingredient from "@/models/ingrediente";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { nombre, descripcion, precio_unitario, unidad_medida, proveedor } = await request.json();
  await connectMongoDB();
  await Ingredient.create({ nombre,descripcion,precio_unitario,unidad_medida,proveedor});
  return NextResponse.json({ message: "Proveedor creado" }, { status: 201 });
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
