interface OllamaModelDetails {
  parent_model: string;
  format: string;
  family: string;
  families: string[];
  parameter_size: string;
  quantization_level: string;
}

export interface OllamaModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;
  details: OllamaModelDetails;
}

export interface OllamaApiResponse {
  models: OllamaModel[];
}

export interface ModelInfo {
  name: string;
  label: string;
  provider: string;
  maxTokenAllowed: number;
}


export interface ProviderInfo {
  staticModels: ModelInfo[];
  name: string;
  getDynamicModels?: () => Promise<ModelInfo[]>;
  getApiKeyLink?: string;
  labelForGetApiKey?: string;
  icon?: string;
}

export type NovitaModelsResponse = {
  data: {
    created: number;
    id: string;
    object: string;
    owned_by: string;
    permission: string | null;
    root: string;
    parent: string;
    input_token_price_per_m: number;
    output_token_price_per_m: number;
    title: string;
    description: string;
    tags: string[];
    context_size: number;
    status: number;
  }[];
};
