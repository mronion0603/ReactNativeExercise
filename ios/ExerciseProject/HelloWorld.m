#import "HelloWorld.h"
#import "RCTLog.h"

@implementation HelloWorld

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(hello:(NSString *)name)
{
  RCTLogInfo(@"Hello %@ from IOS", name);
}
@end
