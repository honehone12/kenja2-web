import { AutoProcessor, SiglipVisionModel } from "@huggingface/transformers";
import type { ModelInitializer } from "$lib/client/ai/initializer";

export class Siglip2GpuInitializer implements ModelInitializer {
  public display() {
    return "siglip2-base-patch16-512-gpu";
  }

  public name() {
    return "onnx-community/siglip2-base-patch16-512-ONNX";
  }

  public model() {
    return SiglipVisionModel.from_pretrained(this.name(), {
      device: "webgpu",
      dtype: "fp32",
    });
  }

  public processor() {
    return AutoProcessor.from_pretrained(this.name(), { device: "webgpu" });
  }
}

export class Siglip2CpuInitializer implements ModelInitializer {
  public display() {
    return "siglip2-base-patch16-512-cpu";
  }

  public name() {
    return "onnx-community/siglip2-base-patch16-512-ONNX";
  }

  public model() {
    return SiglipVisionModel.from_pretrained(this.name(), { dtype: "fp32" });
  }

  public processor() {
    return AutoProcessor.from_pretrained(this.name());
  }
}
