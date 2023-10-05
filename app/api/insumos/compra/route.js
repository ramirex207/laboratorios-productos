import connectMongoDB from "@/libs/mongodb";
import CompraInsumo from "@/models/compraInsumo";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    const { almacen, procedencia, solicitante, fecha_solicitud, fecha_requerida, nombreDepartamento,insumos,precio_unitario,cantidad,total} = await request.json();

    await connectMongoDB();
    
    await CompraInsumo.create({ almacen, procedencia, solicitante, fecha_solicitud, fecha_requerida, nombreDepartamento,insumos,precio_unitario,cantidad,total});
    
    return NextResponse.json({ message: "Solicitud de compra realizada" }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error });
  }

}

export async function GET() {
  try {

  await connectMongoDB();
  const insumos = await CompraInsumo.find();
  return NextResponse.json({ insumos });
    
  } catch (error) {
    return NextResponse.json({ error });
  }

}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await CompraInsumo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Compra borrada" }, { status: 200 });
}
