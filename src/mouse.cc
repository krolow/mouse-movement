#include <node.h>
#include "mouse_position.h"

using namespace v8;

Handle<Value> RunCallback(const Arguments& args) {
  HandleScope scope;
  struct Point latestPosition;
  struct Point position;

  Local<Function> cb = Local<Function>::Cast(args[0]);
  const unsigned argc = 2;

  while (1 == 1) {
    position = mousePosition();
    if (position.x != latestPosition.x || position.y != latestPosition.y) {
      Local<Value> argv[argc] = {
        Local<Value>::New(Number::New(position.x)),
        Local<Value>::New(Number::New(position.y))
      };

      cb->Call(Context::GetCurrent()->Global(), argc, argv);
      latestPosition = position;
    }
  }

  return scope.Close(Undefined());
}

void Init(Handle<Object> exports, Handle<Object> module) {
  module->Set(String::NewSymbol("exports"),
      FunctionTemplate::New(RunCallback)->GetFunction());
}

NODE_MODULE(mouse, Init)
