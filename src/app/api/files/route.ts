import * as Minio from "minio";
import { NextRequest, NextResponse } from "next/server";

const allowedFiles = new Set(["certificados/registro_software_agritrack.pdf"]);

export async function GET(request: NextRequest) {
  const fileName = request.nextUrl.searchParams.get("file");

  if (!fileName || !allowedFiles.has(fileName)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const accessKey = process.env.MINIO_ACCESS_KEY;
  const secretKey = process.env.MINIO_SECRET_KEY;
  if (!accessKey || !secretKey) {
    return NextResponse.json({ error: "File service is not configured" }, { status: 503 });
  }

  try {
    const endpointUrl = new URL(process.env.MINIO_ENDPOINT ?? "http://localhost:9000");
    const client = new Minio.Client({
      endPoint: endpointUrl.hostname,
      port: Number(endpointUrl.port || (endpointUrl.protocol === "https:" ? 443 : 80)),
      useSSL: endpointUrl.protocol === "https:",
      accessKey,
      secretKey,
    });
    const bucket = process.env.MINIO_BUCKET_NAME ?? "public";
    const prefix = process.env.MINIO_PREFIX ?? "portifolio/";
    const url = await client.presignedGetObject(bucket, `${prefix}${fileName}`, 300);
    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Unable to create temporary file URL", error);
    return NextResponse.json({ error: "File temporarily unavailable" }, { status: 503 });
  }
}
