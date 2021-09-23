import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DemoWebsocketApigwEks from '../src/demo-websocket-apigw-eks-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DemoWebsocketApigwEks.DemoWebsocketApigwEksStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
