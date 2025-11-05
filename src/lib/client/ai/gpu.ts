import { PreTrainedModel, Processor } from "@huggingface/transformers";
import type { ModelInitializer } from "$lib/client/ai/initializer";
import type { AiDevice } from "$lib/client/ai/device";
import { vectorProcess } from "$lib/client/ai/vector-process";
import { ModelInitializers } from "./initializers";

export class GpuAi implements AiDevice {
  private _initializer: ModelInitializer | null = null;
  private _model: PreTrainedModel | null = null;
  private _processor: Processor | null = null;

  public async init(): Promise<void> {
    if (this.initialized()) {
      return;
    }

    this._initializer = ModelInitializers.gpu();
    this._model = await this._initializer.model();
    this._processor = await this._initializer.processor();
  }

  public initialized(): boolean {
    return (
      this._initializer !== null &&
      this._model !== null &&
      this._processor !== null
    );
  }

  public device(): string | null {
    return this._initializer ? this._initializer.device() : null;
  }

  public display(): string | null {
    return this._initializer ? this._initializer.display() : null;
  }

  public async generateVector(file: File): Promise<string> {
    if (!this._initializer || !this._model || !this._processor) {
      throw new Error("gpu ai is not initialized");
    }

    return vectorProcess(this._model, this._processor, file, true);
  }
}
