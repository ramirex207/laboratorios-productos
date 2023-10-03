import connectMongoDB from "@/libs/mongodb";
import Proveedor from "@/models/proveedor";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { nombre, direccion, telefono, email } = await request.json();
    await connectMongoDB();
    await Proveedor.create({ nombre, direccion,telefono,email });
    return NextResponse.json({ message: "Proveedor creado" }, { status: 201 });  
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function GET() {
  try {
  await connectMongoDB();
  const proveedores = await Proveedor.find();
  return NextResponse.json({ proveedores });
    
  } catch (error) {
    return NextResponse.json({ error });
  }

}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Proveedor.findByIdAndDelete(id);
  return NextResponse.json({ message: "Proveedor borrado" }, { status: 200 });
}
