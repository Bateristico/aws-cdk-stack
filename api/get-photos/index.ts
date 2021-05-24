import { APIGatewayProxyEventV2, Context, APIGatewayProxyResultV2 } from 'aws-lambda';

const bucketName = process.env.PHOTO_BUCKET_NAME;


async function getPhotos(event: APIGatewayProxyEventV2, context: Context):Promise<APIGatewayProxyResultV2>{
    console.log("I got the bucket name: "+bucketName);
    return {
        statusCode: 200,
        body: 'Hello from lambda, it is alive!',
    };
}

export {getPhotos}