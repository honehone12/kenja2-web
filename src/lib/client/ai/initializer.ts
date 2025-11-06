import type { PreTrainedModel, Processor } from "@huggingface/transformers";

export interface ModelInitializer {
  display(): string;
  name(): string;
  device(): string;
  model(): Promise<PreTrainedModel>;
  processor(): Promise<Processor>;
}
