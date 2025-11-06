import type { ModelInitializer } from "./initializer";
import { Siglip2CpuInitializer, Siglip2GpuInitializer } from "./siglip2";

export class ModelInitializers {
  public static cpu(): ModelInitializer {
    return new Siglip2CpuInitializer();
  }

  public static gpu(): ModelInitializer {
    return new Siglip2GpuInitializer();
  }
}
