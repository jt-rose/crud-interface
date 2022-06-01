// define interface with a databse id present
interface RecordId {
  id: number;
}

// define type that of record that includes everything except the id
type RecordWithoutId<T extends RecordId> = Omit<T, "id">;

// define generic crud operations
// findMany can vary a lot based on pagination setup
// so these aren't included and should be set up for each unique model
// ! NOTE: may replace Error with null | undefined
export interface CrudOperations<T extends RecordId> {
  save(newRecord: RecordWithoutId<T>): T | Error;
  remove(id: number): true | Error;
  find(id: number): T | Error;
  update(id: number, updatedRecord: RecordWithoutId<T>): T | Error;
}

// interface for CRUD operations mapped to a generated object
// similar to the ActiveRecord pattern
// find is omitted since these operations are connected to a single record
export interface CrudModel<T extends RecordId> {
  save(): T | Error;
  remove(): true | Error;
  update(updatedRecord: RecordWithoutId<T>): T | Error;
}
