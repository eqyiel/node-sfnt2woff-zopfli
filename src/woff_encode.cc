#include <nan.h>
#include "../sfnt2woff-zopfli/woff.h"

namespace v8 {
NAN_METHOD(encode) {
  Local<Object> input_buffer = info[0]->ToObject();

  if (!node::Buffer::HasInstance(input_buffer)) {
    Nan::ThrowError(Nan::TypeError("First argument should be a Buffer."));
    return;
  }

  size_t input_length = node::Buffer::Length(input_buffer);
  char* input_data = node::Buffer::Data(input_buffer);
  unsigned int maj = 0, min = 0;
  uint32_t wofflen;
  uint32_t status = eWOFF_ok;

  const uint8_t* woffdata =
      woffEncode(reinterpret_cast<const uint8_t*>(input_data),
                 ((uint32_t)input_length), maj, min, &wofflen, &status);

  Nan::MaybeLocal<v8::Object> output_buffer =
      Nan::NewBuffer(const_cast<char*>(reinterpret_cast<const char*>(woffdata)),
                     wofflen);

  info.GetReturnValue().Set(output_buffer.ToLocalChecked());
}

NAN_MODULE_INIT(Init) {
  Nan::Set(target, Nan::New("encode").ToLocalChecked(),
           Nan::GetFunction(
               Nan::New<FunctionTemplate>(encode)).ToLocalChecked());
}

NODE_MODULE(woff_encode, Init)
}  // namespace v8
