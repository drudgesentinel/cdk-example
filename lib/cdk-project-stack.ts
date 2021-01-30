import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class CdkProjectStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X, //execution environment
      code: lambda.Code.fromAsset('lambda'),// load from 'lambda' directory
      handler: 'hello.handler' //file is "hello" function is "handler"
    });
   
  }
}
