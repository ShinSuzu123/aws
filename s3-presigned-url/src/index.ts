import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// S3クライエントを初期化
const s3Client = new S3Client({ region: 'ap-northeast-1'});

async function generatePresignedUrl(bucketName: string, objectKey: string, expiration: number, operation: 'getObject' | 'putObject'): Promise<string | null> {
  try{


  } catch (error){
  }
}
