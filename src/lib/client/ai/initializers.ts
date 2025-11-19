import type { ModelInitializer } from "$lib/client/ai/initializer";
import {
  Siglip2CpuInitializer,
  Siglip2GpuInitializer,
} from "$lib/client/ai/siglip2";

export class ModelInitializers {
  public static cpu(): ModelInitializer {
    return new Siglip2CpuInitializer();
  }

  public static gpu(): ModelInitializer {
    return new Siglip2GpuInitializer();
  }
}
