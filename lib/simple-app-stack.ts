import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class SimpleAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // create an s3 bucket
    const bucket = new Bucket(this, 'MySimpleAppBucket', {
      encryption: BucketEncryption.S3_MANAGED,
    });

    new cdk.CfnOutput(this, 'MySimpleAppBucketNameExport', {
      value: bucket.bucketName,
      exportName: 'MySimpleAppBucketName'
    });
  }
}
