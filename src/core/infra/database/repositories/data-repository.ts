import { Optional } from "../../../domain/optional";

export interface DataRepository<Model, Type> {
  findAll(): Promise<Model[]>;
  findById(id: Type): Promise<Optional<Model>>;
  create(model: Model): Promise<Model>;
}
