export interface AiDevice {
  init(): Promise<void>;
  initialized(): boolean;
  display(): string | null;
  device(): string | null;
  generateVector(file: File): Promise<string>;
}
