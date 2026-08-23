import * as Minio from 'minio';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('file') || 'registro_software_agritrack.pdf';

  try {
    let endPoint = process.env.MINIO_ENDPOINT || 'localhost';
    let useSSL = process.env.MINIO_USE_SSL === 'true';
    let port = process.env.MINIO_PORT ? parseInt(process.env.MINIO_PORT) : (useSSL ? 443 : 9000);
    const accessKey = process.env.MINIO_ACCESS_KEY;
    const secretKey = process.env.MINIO_SECRET_KEY;
    const bucketName = process.env.MINIO_BUCKET_NAME || 'public';
    const prefix = process.env.MINIO_PREFIX || 'portifolio/';
    const objectName = `${prefix}${fileName}`;

    // Auto-parse endpoint if protocol (http:// or https://) is present
    if (endPoint.includes('://')) {
      try {
        const urlObj = new URL(endPoint);
        endPoint = urlObj.hostname;

        // S3 client protocol configuration
        useSSL = urlObj.protocol === 'https:';

        if (urlObj.port) {
          port = parseInt(urlObj.port);
        } else if (!process.env.MINIO_PORT) {
          port = useSSL ? 443 : 80;
        }
      } catch (e) {
        console.error('Failed to parse MINIO_ENDPOINT as URL, falling back to manual cleanup:', e);
        useSSL = endPoint.startsWith('https://');
        endPoint = endPoint.replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
        if (!process.env.MINIO_PORT) {
          port = useSSL ? 443 : 9000;
        }
      }
    }

    // If credentials are not set, return a user-friendly error message or fallback to the local assets (for images)
    if (!accessKey || !secretKey) {
      console.warn("MinIO credentials not set. Falling back to local preview.");
      if (fileName.endsWith('.gif') || fileName.endsWith('.png') || fileName.endsWith('.jpg')) {
        return NextResponse.redirect(new URL(`/img/${fileName}`, request.url));
      }
      return NextResponse.json({ error: 'MinIO credentials not configured' }, { status: 500 });
    }

    const minioClient = new Minio.Client({
      endPoint,
      port,
      useSSL,
      accessKey,
      secretKey,
    });

    // Generate a secure temporary URL valid for 5 minutes (300 seconds)
    const presignedUrl = await minioClient.presignedGetObject(bucketName, objectName, 300);

    // Redirect user to the secure URL
    return NextResponse.redirect(presignedUrl);
  } catch (error: any) {
    console.error('Error generating MinIO presigned URL:', error);
    // Fallback to local image assets on error if requesting an image
    if (fileName.endsWith('.gif') || fileName.endsWith('.png') || fileName.endsWith('.jpg')) {
      return NextResponse.redirect(new URL(`/img/${fileName}`, request.url));
    }
    return NextResponse.json({ error: 'Failed to generate secure URL' }, { status: 500 });
  }
}
