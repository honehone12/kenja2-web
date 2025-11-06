import {
  AutoProcessor,
  PreTrainedModel,
  Processor,
  SiglipVisionModel,
} from "@huggingface/transformers";
import type { ModelInitializer } from "$lib/client/ai/initializer";

export class Siglip2GpuInitializer implements ModelInitializer {
  public display() {
    return "siglip2-base-patch16-512-gpu";
  }

  public name(): string {
    return "onnx-community/siglip2-base-patch16-512-ONNX";
  }

  public device(): string {
    return "GPU";
  }

  public model(): Promise<PreTrainedModel> {
    return SiglipVisionModel.from_pretrained(this.name(), {
      device: "webgpu",
      dtype: "fp32",
    });
  }

  public processor(): Promise<Processor> {
    return AutoProcessor.from_pretrained(this.name(), { device: "webgpu" });
  }
}

export class Siglip2CpuInitializer implements ModelInitializer {
  public display(): string {
    return "siglip2-base-patch16-512-cpu";
  }

  public name(): string {
    return "onnx-community/siglip2-base-patch16-512-ONNX";
  }

  public device(): string {
    return "CPU";
  }

  public model(): Promise<PreTrainedModel> {
    return SiglipVisionModel.from_pretrained(this.name(), { dtype: "fp32" });
  }

  public processor(): Promise<Processor> {
    return AutoProcessor.from_pretrained(this.name());
  }
}
