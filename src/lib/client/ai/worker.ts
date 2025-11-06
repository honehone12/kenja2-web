import { PreTrainedModel, Processor } from "@huggingface/transformers";
import {
  WorkerCommand,
  type WorkerParams,
  type WorkerResult,
} from "$lib/client/ai/message";
import { vectorProcess } from "$lib/client/ai/vector-process";
import { ModelInitializers } from "./initializers";

let __model: PreTrainedModel | null = null;
let __processor: Processor | null = null;

self.onmessage = async (event: MessageEvent<WorkerParams>) => {
  const msg = event.data;
  try {
    switch (msg.command) {
      case WorkerCommand.initialize:
        {
          const initializer = ModelInitializers.cpu();
          __model = await initializer.model();
          __processor = await initializer.processor();
          const result: WorkerResult = {
            id: msg.id,
            command: msg.command,
          };
          self.postMessage(result);
        }
        break;
      case WorkerCommand.generate:
        {
          if (!__model || !__processor) {
            throw new Error("worker is not initialized");
          }
          if (!msg.file) {
            throw new Error("empty message");
          }

          const vector = await vectorProcess(
            __model,
            __processor,
            msg.file,
            false,
          );

          const result: WorkerResult = {
            id: msg.id,
            command: msg.command,
            vector,
          };
          self.postMessage(result);
        }
        break;
      default:
        throw new Error("unexpected command");
    }
  } catch (e) {
    const result: WorkerResult = {
      id: msg.id,
      command: msg.command,
      error: `${e}`,
    };
    self.postMessage(result);
  }
};
