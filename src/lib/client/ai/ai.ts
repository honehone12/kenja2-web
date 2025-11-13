import type { AiDevice } from "$lib/client/ai/device";
import { GpuAi } from "$lib/client/ai/gpu";
import { CpuAi } from "$lib/client/ai/cpu";

class Ai {
  private _device: AiDevice | null = null;

  public async init(): Promise<void> {
    if (this.initialized()) {
      return;
    }

    try {
      const gpu = new GpuAi();
      await gpu.init();
      this._device = gpu;
      return;
    } catch {
      console.info("using cpu");
    }

    const cpu = new CpuAi();
    await cpu.init();
    this._device = cpu;
  }

  public initialized(): boolean {
    return this._device ? this._device.initialized() : false;
  }

  public display(): string | null {
    return this._device ? this._device.display() : null;
  }

  public device(): string | null {
    return this._device ? this._device.device() : null;
  }

  public async generateVector(file: File): Promise<string> {
    if (!this._device) {
      throw new Error("ai device is not initialized");
    }

    return this._device.generateVector(file);
  }
}

const ai = new Ai();

export default ai;
