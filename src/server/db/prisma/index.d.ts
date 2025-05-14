
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model grammar_file_test_links
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type grammar_file_test_links = $Result.DefaultSelection<Prisma.$grammar_file_test_linksPayload>
/**
 * Model grammar_files
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type grammar_files = $Result.DefaultSelection<Prisma.$grammar_filesPayload>
/**
 * Model grammar_folders
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type grammar_folders = $Result.DefaultSelection<Prisma.$grammar_foldersPayload>
/**
 * Model grammar_test_folders
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type grammar_test_folders = $Result.DefaultSelection<Prisma.$grammar_test_foldersPayload>
/**
 * Model grammar_tests
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type grammar_tests = $Result.DefaultSelection<Prisma.$grammar_testsPayload>
/**
 * Model voca_file_test_links
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type voca_file_test_links = $Result.DefaultSelection<Prisma.$voca_file_test_linksPayload>
/**
 * Model voca_files
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type voca_files = $Result.DefaultSelection<Prisma.$voca_filesPayload>
/**
 * Model voca_folders
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type voca_folders = $Result.DefaultSelection<Prisma.$voca_foldersPayload>
/**
 * Model voca_test_folders
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type voca_test_folders = $Result.DefaultSelection<Prisma.$voca_test_foldersPayload>
/**
 * Model voca_tests
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type voca_tests = $Result.DefaultSelection<Prisma.$voca_testsPayload>
/**
 * Model users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Grammar_file_test_links
 * const grammar_file_test_links = await prisma.grammar_file_test_links.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Grammar_file_test_links
   * const grammar_file_test_links = await prisma.grammar_file_test_links.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.grammar_file_test_links`: Exposes CRUD operations for the **grammar_file_test_links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grammar_file_test_links
    * const grammar_file_test_links = await prisma.grammar_file_test_links.findMany()
    * ```
    */
  get grammar_file_test_links(): Prisma.grammar_file_test_linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammar_files`: Exposes CRUD operations for the **grammar_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grammar_files
    * const grammar_files = await prisma.grammar_files.findMany()
    * ```
    */
  get grammar_files(): Prisma.grammar_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammar_folders`: Exposes CRUD operations for the **grammar_folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grammar_folders
    * const grammar_folders = await prisma.grammar_folders.findMany()
    * ```
    */
  get grammar_folders(): Prisma.grammar_foldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammar_test_folders`: Exposes CRUD operations for the **grammar_test_folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grammar_test_folders
    * const grammar_test_folders = await prisma.grammar_test_folders.findMany()
    * ```
    */
  get grammar_test_folders(): Prisma.grammar_test_foldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammar_tests`: Exposes CRUD operations for the **grammar_tests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grammar_tests
    * const grammar_tests = await prisma.grammar_tests.findMany()
    * ```
    */
  get grammar_tests(): Prisma.grammar_testsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voca_file_test_links`: Exposes CRUD operations for the **voca_file_test_links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voca_file_test_links
    * const voca_file_test_links = await prisma.voca_file_test_links.findMany()
    * ```
    */
  get voca_file_test_links(): Prisma.voca_file_test_linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voca_files`: Exposes CRUD operations for the **voca_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voca_files
    * const voca_files = await prisma.voca_files.findMany()
    * ```
    */
  get voca_files(): Prisma.voca_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voca_folders`: Exposes CRUD operations for the **voca_folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voca_folders
    * const voca_folders = await prisma.voca_folders.findMany()
    * ```
    */
  get voca_folders(): Prisma.voca_foldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voca_test_folders`: Exposes CRUD operations for the **voca_test_folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voca_test_folders
    * const voca_test_folders = await prisma.voca_test_folders.findMany()
    * ```
    */
  get voca_test_folders(): Prisma.voca_test_foldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voca_tests`: Exposes CRUD operations for the **voca_tests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voca_tests
    * const voca_tests = await prisma.voca_tests.findMany()
    * ```
    */
  get voca_tests(): Prisma.voca_testsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    grammar_file_test_links: 'grammar_file_test_links',
    grammar_files: 'grammar_files',
    grammar_folders: 'grammar_folders',
    grammar_test_folders: 'grammar_test_folders',
    grammar_tests: 'grammar_tests',
    voca_file_test_links: 'voca_file_test_links',
    voca_files: 'voca_files',
    voca_folders: 'voca_folders',
    voca_test_folders: 'voca_test_folders',
    voca_tests: 'voca_tests',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "grammar_file_test_links" | "grammar_files" | "grammar_folders" | "grammar_test_folders" | "grammar_tests" | "voca_file_test_links" | "voca_files" | "voca_folders" | "voca_test_folders" | "voca_tests" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      grammar_file_test_links: {
        payload: Prisma.$grammar_file_test_linksPayload<ExtArgs>
        fields: Prisma.grammar_file_test_linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grammar_file_test_linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grammar_file_test_linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>
          }
          findFirst: {
            args: Prisma.grammar_file_test_linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grammar_file_test_linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>
          }
          findMany: {
            args: Prisma.grammar_file_test_linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>[]
          }
          create: {
            args: Prisma.grammar_file_test_linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>
          }
          createMany: {
            args: Prisma.grammar_file_test_linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.grammar_file_test_linksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>[]
          }
          delete: {
            args: Prisma.grammar_file_test_linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>
          }
          update: {
            args: Prisma.grammar_file_test_linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>
          }
          deleteMany: {
            args: Prisma.grammar_file_test_linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grammar_file_test_linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.grammar_file_test_linksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>[]
          }
          upsert: {
            args: Prisma.grammar_file_test_linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_file_test_linksPayload>
          }
          aggregate: {
            args: Prisma.Grammar_file_test_linksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammar_file_test_links>
          }
          groupBy: {
            args: Prisma.grammar_file_test_linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Grammar_file_test_linksGroupByOutputType>[]
          }
          count: {
            args: Prisma.grammar_file_test_linksCountArgs<ExtArgs>
            result: $Utils.Optional<Grammar_file_test_linksCountAggregateOutputType> | number
          }
        }
      }
      grammar_files: {
        payload: Prisma.$grammar_filesPayload<ExtArgs>
        fields: Prisma.grammar_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grammar_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grammar_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>
          }
          findFirst: {
            args: Prisma.grammar_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grammar_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>
          }
          findMany: {
            args: Prisma.grammar_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>[]
          }
          create: {
            args: Prisma.grammar_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>
          }
          createMany: {
            args: Prisma.grammar_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.grammar_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>[]
          }
          delete: {
            args: Prisma.grammar_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>
          }
          update: {
            args: Prisma.grammar_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>
          }
          deleteMany: {
            args: Prisma.grammar_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grammar_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.grammar_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>[]
          }
          upsert: {
            args: Prisma.grammar_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_filesPayload>
          }
          aggregate: {
            args: Prisma.Grammar_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammar_files>
          }
          groupBy: {
            args: Prisma.grammar_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Grammar_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.grammar_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Grammar_filesCountAggregateOutputType> | number
          }
        }
      }
      grammar_folders: {
        payload: Prisma.$grammar_foldersPayload<ExtArgs>
        fields: Prisma.grammar_foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grammar_foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grammar_foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>
          }
          findFirst: {
            args: Prisma.grammar_foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grammar_foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>
          }
          findMany: {
            args: Prisma.grammar_foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>[]
          }
          create: {
            args: Prisma.grammar_foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>
          }
          createMany: {
            args: Prisma.grammar_foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.grammar_foldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>[]
          }
          delete: {
            args: Prisma.grammar_foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>
          }
          update: {
            args: Prisma.grammar_foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>
          }
          deleteMany: {
            args: Prisma.grammar_foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grammar_foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.grammar_foldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>[]
          }
          upsert: {
            args: Prisma.grammar_foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_foldersPayload>
          }
          aggregate: {
            args: Prisma.Grammar_foldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammar_folders>
          }
          groupBy: {
            args: Prisma.grammar_foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Grammar_foldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.grammar_foldersCountArgs<ExtArgs>
            result: $Utils.Optional<Grammar_foldersCountAggregateOutputType> | number
          }
        }
      }
      grammar_test_folders: {
        payload: Prisma.$grammar_test_foldersPayload<ExtArgs>
        fields: Prisma.grammar_test_foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grammar_test_foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grammar_test_foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>
          }
          findFirst: {
            args: Prisma.grammar_test_foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grammar_test_foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>
          }
          findMany: {
            args: Prisma.grammar_test_foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>[]
          }
          create: {
            args: Prisma.grammar_test_foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>
          }
          createMany: {
            args: Prisma.grammar_test_foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.grammar_test_foldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>[]
          }
          delete: {
            args: Prisma.grammar_test_foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>
          }
          update: {
            args: Prisma.grammar_test_foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>
          }
          deleteMany: {
            args: Prisma.grammar_test_foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grammar_test_foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.grammar_test_foldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>[]
          }
          upsert: {
            args: Prisma.grammar_test_foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_test_foldersPayload>
          }
          aggregate: {
            args: Prisma.Grammar_test_foldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammar_test_folders>
          }
          groupBy: {
            args: Prisma.grammar_test_foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Grammar_test_foldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.grammar_test_foldersCountArgs<ExtArgs>
            result: $Utils.Optional<Grammar_test_foldersCountAggregateOutputType> | number
          }
        }
      }
      grammar_tests: {
        payload: Prisma.$grammar_testsPayload<ExtArgs>
        fields: Prisma.grammar_testsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grammar_testsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grammar_testsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>
          }
          findFirst: {
            args: Prisma.grammar_testsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grammar_testsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>
          }
          findMany: {
            args: Prisma.grammar_testsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>[]
          }
          create: {
            args: Prisma.grammar_testsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>
          }
          createMany: {
            args: Prisma.grammar_testsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.grammar_testsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>[]
          }
          delete: {
            args: Prisma.grammar_testsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>
          }
          update: {
            args: Prisma.grammar_testsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>
          }
          deleteMany: {
            args: Prisma.grammar_testsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grammar_testsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.grammar_testsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>[]
          }
          upsert: {
            args: Prisma.grammar_testsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grammar_testsPayload>
          }
          aggregate: {
            args: Prisma.Grammar_testsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammar_tests>
          }
          groupBy: {
            args: Prisma.grammar_testsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Grammar_testsGroupByOutputType>[]
          }
          count: {
            args: Prisma.grammar_testsCountArgs<ExtArgs>
            result: $Utils.Optional<Grammar_testsCountAggregateOutputType> | number
          }
        }
      }
      voca_file_test_links: {
        payload: Prisma.$voca_file_test_linksPayload<ExtArgs>
        fields: Prisma.voca_file_test_linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voca_file_test_linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voca_file_test_linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>
          }
          findFirst: {
            args: Prisma.voca_file_test_linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voca_file_test_linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>
          }
          findMany: {
            args: Prisma.voca_file_test_linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>[]
          }
          create: {
            args: Prisma.voca_file_test_linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>
          }
          createMany: {
            args: Prisma.voca_file_test_linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voca_file_test_linksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>[]
          }
          delete: {
            args: Prisma.voca_file_test_linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>
          }
          update: {
            args: Prisma.voca_file_test_linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>
          }
          deleteMany: {
            args: Prisma.voca_file_test_linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voca_file_test_linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voca_file_test_linksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>[]
          }
          upsert: {
            args: Prisma.voca_file_test_linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_file_test_linksPayload>
          }
          aggregate: {
            args: Prisma.Voca_file_test_linksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoca_file_test_links>
          }
          groupBy: {
            args: Prisma.voca_file_test_linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Voca_file_test_linksGroupByOutputType>[]
          }
          count: {
            args: Prisma.voca_file_test_linksCountArgs<ExtArgs>
            result: $Utils.Optional<Voca_file_test_linksCountAggregateOutputType> | number
          }
        }
      }
      voca_files: {
        payload: Prisma.$voca_filesPayload<ExtArgs>
        fields: Prisma.voca_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voca_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voca_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>
          }
          findFirst: {
            args: Prisma.voca_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voca_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>
          }
          findMany: {
            args: Prisma.voca_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>[]
          }
          create: {
            args: Prisma.voca_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>
          }
          createMany: {
            args: Prisma.voca_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voca_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>[]
          }
          delete: {
            args: Prisma.voca_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>
          }
          update: {
            args: Prisma.voca_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>
          }
          deleteMany: {
            args: Prisma.voca_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voca_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voca_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>[]
          }
          upsert: {
            args: Prisma.voca_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_filesPayload>
          }
          aggregate: {
            args: Prisma.Voca_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoca_files>
          }
          groupBy: {
            args: Prisma.voca_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Voca_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.voca_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Voca_filesCountAggregateOutputType> | number
          }
        }
      }
      voca_folders: {
        payload: Prisma.$voca_foldersPayload<ExtArgs>
        fields: Prisma.voca_foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voca_foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voca_foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>
          }
          findFirst: {
            args: Prisma.voca_foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voca_foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>
          }
          findMany: {
            args: Prisma.voca_foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>[]
          }
          create: {
            args: Prisma.voca_foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>
          }
          createMany: {
            args: Prisma.voca_foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voca_foldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>[]
          }
          delete: {
            args: Prisma.voca_foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>
          }
          update: {
            args: Prisma.voca_foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>
          }
          deleteMany: {
            args: Prisma.voca_foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voca_foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voca_foldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>[]
          }
          upsert: {
            args: Prisma.voca_foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_foldersPayload>
          }
          aggregate: {
            args: Prisma.Voca_foldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoca_folders>
          }
          groupBy: {
            args: Prisma.voca_foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Voca_foldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.voca_foldersCountArgs<ExtArgs>
            result: $Utils.Optional<Voca_foldersCountAggregateOutputType> | number
          }
        }
      }
      voca_test_folders: {
        payload: Prisma.$voca_test_foldersPayload<ExtArgs>
        fields: Prisma.voca_test_foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voca_test_foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voca_test_foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>
          }
          findFirst: {
            args: Prisma.voca_test_foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voca_test_foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>
          }
          findMany: {
            args: Prisma.voca_test_foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>[]
          }
          create: {
            args: Prisma.voca_test_foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>
          }
          createMany: {
            args: Prisma.voca_test_foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voca_test_foldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>[]
          }
          delete: {
            args: Prisma.voca_test_foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>
          }
          update: {
            args: Prisma.voca_test_foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>
          }
          deleteMany: {
            args: Prisma.voca_test_foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voca_test_foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voca_test_foldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>[]
          }
          upsert: {
            args: Prisma.voca_test_foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_test_foldersPayload>
          }
          aggregate: {
            args: Prisma.Voca_test_foldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoca_test_folders>
          }
          groupBy: {
            args: Prisma.voca_test_foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Voca_test_foldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.voca_test_foldersCountArgs<ExtArgs>
            result: $Utils.Optional<Voca_test_foldersCountAggregateOutputType> | number
          }
        }
      }
      voca_tests: {
        payload: Prisma.$voca_testsPayload<ExtArgs>
        fields: Prisma.voca_testsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voca_testsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voca_testsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>
          }
          findFirst: {
            args: Prisma.voca_testsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voca_testsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>
          }
          findMany: {
            args: Prisma.voca_testsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>[]
          }
          create: {
            args: Prisma.voca_testsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>
          }
          createMany: {
            args: Prisma.voca_testsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voca_testsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>[]
          }
          delete: {
            args: Prisma.voca_testsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>
          }
          update: {
            args: Prisma.voca_testsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>
          }
          deleteMany: {
            args: Prisma.voca_testsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voca_testsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voca_testsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>[]
          }
          upsert: {
            args: Prisma.voca_testsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voca_testsPayload>
          }
          aggregate: {
            args: Prisma.Voca_testsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoca_tests>
          }
          groupBy: {
            args: Prisma.voca_testsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Voca_testsGroupByOutputType>[]
          }
          count: {
            args: Prisma.voca_testsCountArgs<ExtArgs>
            result: $Utils.Optional<Voca_testsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    grammar_file_test_links?: grammar_file_test_linksOmit
    grammar_files?: grammar_filesOmit
    grammar_folders?: grammar_foldersOmit
    grammar_test_folders?: grammar_test_foldersOmit
    grammar_tests?: grammar_testsOmit
    voca_file_test_links?: voca_file_test_linksOmit
    voca_files?: voca_filesOmit
    voca_folders?: voca_foldersOmit
    voca_test_folders?: voca_test_foldersOmit
    voca_tests?: voca_testsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Grammar_filesCountOutputType
   */

  export type Grammar_filesCountOutputType = {
    grammar_file_test_links: number
  }

  export type Grammar_filesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_file_test_links?: boolean | Grammar_filesCountOutputTypeCountGrammar_file_test_linksArgs
  }

  // Custom InputTypes
  /**
   * Grammar_filesCountOutputType without action
   */
  export type Grammar_filesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar_filesCountOutputType
     */
    select?: Grammar_filesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Grammar_filesCountOutputType without action
   */
  export type Grammar_filesCountOutputTypeCountGrammar_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_file_test_linksWhereInput
  }


  /**
   * Count Type Grammar_foldersCountOutputType
   */

  export type Grammar_foldersCountOutputType = {
    grammar_files: number
  }

  export type Grammar_foldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_files?: boolean | Grammar_foldersCountOutputTypeCountGrammar_filesArgs
  }

  // Custom InputTypes
  /**
   * Grammar_foldersCountOutputType without action
   */
  export type Grammar_foldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar_foldersCountOutputType
     */
    select?: Grammar_foldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Grammar_foldersCountOutputType without action
   */
  export type Grammar_foldersCountOutputTypeCountGrammar_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_filesWhereInput
  }


  /**
   * Count Type Grammar_test_foldersCountOutputType
   */

  export type Grammar_test_foldersCountOutputType = {
    grammar_tests: number
  }

  export type Grammar_test_foldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_tests?: boolean | Grammar_test_foldersCountOutputTypeCountGrammar_testsArgs
  }

  // Custom InputTypes
  /**
   * Grammar_test_foldersCountOutputType without action
   */
  export type Grammar_test_foldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar_test_foldersCountOutputType
     */
    select?: Grammar_test_foldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Grammar_test_foldersCountOutputType without action
   */
  export type Grammar_test_foldersCountOutputTypeCountGrammar_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_testsWhereInput
  }


  /**
   * Count Type Grammar_testsCountOutputType
   */

  export type Grammar_testsCountOutputType = {
    grammar_file_test_links: number
  }

  export type Grammar_testsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_file_test_links?: boolean | Grammar_testsCountOutputTypeCountGrammar_file_test_linksArgs
  }

  // Custom InputTypes
  /**
   * Grammar_testsCountOutputType without action
   */
  export type Grammar_testsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar_testsCountOutputType
     */
    select?: Grammar_testsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Grammar_testsCountOutputType without action
   */
  export type Grammar_testsCountOutputTypeCountGrammar_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_file_test_linksWhereInput
  }


  /**
   * Count Type Voca_filesCountOutputType
   */

  export type Voca_filesCountOutputType = {
    voca_file_test_links: number
  }

  export type Voca_filesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_file_test_links?: boolean | Voca_filesCountOutputTypeCountVoca_file_test_linksArgs
  }

  // Custom InputTypes
  /**
   * Voca_filesCountOutputType without action
   */
  export type Voca_filesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voca_filesCountOutputType
     */
    select?: Voca_filesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Voca_filesCountOutputType without action
   */
  export type Voca_filesCountOutputTypeCountVoca_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_file_test_linksWhereInput
  }


  /**
   * Count Type Voca_foldersCountOutputType
   */

  export type Voca_foldersCountOutputType = {
    voca_files: number
  }

  export type Voca_foldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_files?: boolean | Voca_foldersCountOutputTypeCountVoca_filesArgs
  }

  // Custom InputTypes
  /**
   * Voca_foldersCountOutputType without action
   */
  export type Voca_foldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voca_foldersCountOutputType
     */
    select?: Voca_foldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Voca_foldersCountOutputType without action
   */
  export type Voca_foldersCountOutputTypeCountVoca_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_filesWhereInput
  }


  /**
   * Count Type Voca_test_foldersCountOutputType
   */

  export type Voca_test_foldersCountOutputType = {
    voca_tests: number
  }

  export type Voca_test_foldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_tests?: boolean | Voca_test_foldersCountOutputTypeCountVoca_testsArgs
  }

  // Custom InputTypes
  /**
   * Voca_test_foldersCountOutputType without action
   */
  export type Voca_test_foldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voca_test_foldersCountOutputType
     */
    select?: Voca_test_foldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Voca_test_foldersCountOutputType without action
   */
  export type Voca_test_foldersCountOutputTypeCountVoca_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_testsWhereInput
  }


  /**
   * Count Type Voca_testsCountOutputType
   */

  export type Voca_testsCountOutputType = {
    voca_file_test_links: number
  }

  export type Voca_testsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_file_test_links?: boolean | Voca_testsCountOutputTypeCountVoca_file_test_linksArgs
  }

  // Custom InputTypes
  /**
   * Voca_testsCountOutputType without action
   */
  export type Voca_testsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voca_testsCountOutputType
     */
    select?: Voca_testsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Voca_testsCountOutputType without action
   */
  export type Voca_testsCountOutputTypeCountVoca_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_file_test_linksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model grammar_file_test_links
   */

  export type AggregateGrammar_file_test_links = {
    _count: Grammar_file_test_linksCountAggregateOutputType | null
    _min: Grammar_file_test_linksMinAggregateOutputType | null
    _max: Grammar_file_test_linksMaxAggregateOutputType | null
  }

  export type Grammar_file_test_linksMinAggregateOutputType = {
    file_id: string | null
    test_id: string | null
  }

  export type Grammar_file_test_linksMaxAggregateOutputType = {
    file_id: string | null
    test_id: string | null
  }

  export type Grammar_file_test_linksCountAggregateOutputType = {
    file_id: number
    test_id: number
    _all: number
  }


  export type Grammar_file_test_linksMinAggregateInputType = {
    file_id?: true
    test_id?: true
  }

  export type Grammar_file_test_linksMaxAggregateInputType = {
    file_id?: true
    test_id?: true
  }

  export type Grammar_file_test_linksCountAggregateInputType = {
    file_id?: true
    test_id?: true
    _all?: true
  }

  export type Grammar_file_test_linksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_file_test_links to aggregate.
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_file_test_links to fetch.
     */
    orderBy?: grammar_file_test_linksOrderByWithRelationInput | grammar_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grammar_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_file_test_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grammar_file_test_links
    **/
    _count?: true | Grammar_file_test_linksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Grammar_file_test_linksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Grammar_file_test_linksMaxAggregateInputType
  }

  export type GetGrammar_file_test_linksAggregateType<T extends Grammar_file_test_linksAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammar_file_test_links]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammar_file_test_links[P]>
      : GetScalarType<T[P], AggregateGrammar_file_test_links[P]>
  }




  export type grammar_file_test_linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_file_test_linksWhereInput
    orderBy?: grammar_file_test_linksOrderByWithAggregationInput | grammar_file_test_linksOrderByWithAggregationInput[]
    by: Grammar_file_test_linksScalarFieldEnum[] | Grammar_file_test_linksScalarFieldEnum
    having?: grammar_file_test_linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Grammar_file_test_linksCountAggregateInputType | true
    _min?: Grammar_file_test_linksMinAggregateInputType
    _max?: Grammar_file_test_linksMaxAggregateInputType
  }

  export type Grammar_file_test_linksGroupByOutputType = {
    file_id: string
    test_id: string
    _count: Grammar_file_test_linksCountAggregateOutputType | null
    _min: Grammar_file_test_linksMinAggregateOutputType | null
    _max: Grammar_file_test_linksMaxAggregateOutputType | null
  }

  type GetGrammar_file_test_linksGroupByPayload<T extends grammar_file_test_linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Grammar_file_test_linksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Grammar_file_test_linksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Grammar_file_test_linksGroupByOutputType[P]>
            : GetScalarType<T[P], Grammar_file_test_linksGroupByOutputType[P]>
        }
      >
    >


  export type grammar_file_test_linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    test_id?: boolean
    grammar_files?: boolean | grammar_filesDefaultArgs<ExtArgs>
    grammar_tests?: boolean | grammar_testsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_file_test_links"]>

  export type grammar_file_test_linksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    test_id?: boolean
    grammar_files?: boolean | grammar_filesDefaultArgs<ExtArgs>
    grammar_tests?: boolean | grammar_testsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_file_test_links"]>

  export type grammar_file_test_linksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    test_id?: boolean
    grammar_files?: boolean | grammar_filesDefaultArgs<ExtArgs>
    grammar_tests?: boolean | grammar_testsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_file_test_links"]>

  export type grammar_file_test_linksSelectScalar = {
    file_id?: boolean
    test_id?: boolean
  }

  export type grammar_file_test_linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "test_id", ExtArgs["result"]["grammar_file_test_links"]>
  export type grammar_file_test_linksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_files?: boolean | grammar_filesDefaultArgs<ExtArgs>
    grammar_tests?: boolean | grammar_testsDefaultArgs<ExtArgs>
  }
  export type grammar_file_test_linksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_files?: boolean | grammar_filesDefaultArgs<ExtArgs>
    grammar_tests?: boolean | grammar_testsDefaultArgs<ExtArgs>
  }
  export type grammar_file_test_linksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_files?: boolean | grammar_filesDefaultArgs<ExtArgs>
    grammar_tests?: boolean | grammar_testsDefaultArgs<ExtArgs>
  }

  export type $grammar_file_test_linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grammar_file_test_links"
    objects: {
      grammar_files: Prisma.$grammar_filesPayload<ExtArgs>
      grammar_tests: Prisma.$grammar_testsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: string
      test_id: string
    }, ExtArgs["result"]["grammar_file_test_links"]>
    composites: {}
  }

  type grammar_file_test_linksGetPayload<S extends boolean | null | undefined | grammar_file_test_linksDefaultArgs> = $Result.GetResult<Prisma.$grammar_file_test_linksPayload, S>

  type grammar_file_test_linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<grammar_file_test_linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Grammar_file_test_linksCountAggregateInputType | true
    }

  export interface grammar_file_test_linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grammar_file_test_links'], meta: { name: 'grammar_file_test_links' } }
    /**
     * Find zero or one Grammar_file_test_links that matches the filter.
     * @param {grammar_file_test_linksFindUniqueArgs} args - Arguments to find a Grammar_file_test_links
     * @example
     * // Get one Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grammar_file_test_linksFindUniqueArgs>(args: SelectSubset<T, grammar_file_test_linksFindUniqueArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grammar_file_test_links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {grammar_file_test_linksFindUniqueOrThrowArgs} args - Arguments to find a Grammar_file_test_links
     * @example
     * // Get one Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grammar_file_test_linksFindUniqueOrThrowArgs>(args: SelectSubset<T, grammar_file_test_linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_file_test_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_file_test_linksFindFirstArgs} args - Arguments to find a Grammar_file_test_links
     * @example
     * // Get one Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grammar_file_test_linksFindFirstArgs>(args?: SelectSubset<T, grammar_file_test_linksFindFirstArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_file_test_links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_file_test_linksFindFirstOrThrowArgs} args - Arguments to find a Grammar_file_test_links
     * @example
     * // Get one Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grammar_file_test_linksFindFirstOrThrowArgs>(args?: SelectSubset<T, grammar_file_test_linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grammar_file_test_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_file_test_linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.findMany()
     * 
     * // Get first 10 Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const grammar_file_test_linksWithFile_idOnly = await prisma.grammar_file_test_links.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends grammar_file_test_linksFindManyArgs>(args?: SelectSubset<T, grammar_file_test_linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grammar_file_test_links.
     * @param {grammar_file_test_linksCreateArgs} args - Arguments to create a Grammar_file_test_links.
     * @example
     * // Create one Grammar_file_test_links
     * const Grammar_file_test_links = await prisma.grammar_file_test_links.create({
     *   data: {
     *     // ... data to create a Grammar_file_test_links
     *   }
     * })
     * 
     */
    create<T extends grammar_file_test_linksCreateArgs>(args: SelectSubset<T, grammar_file_test_linksCreateArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grammar_file_test_links.
     * @param {grammar_file_test_linksCreateManyArgs} args - Arguments to create many Grammar_file_test_links.
     * @example
     * // Create many Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grammar_file_test_linksCreateManyArgs>(args?: SelectSubset<T, grammar_file_test_linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grammar_file_test_links and returns the data saved in the database.
     * @param {grammar_file_test_linksCreateManyAndReturnArgs} args - Arguments to create many Grammar_file_test_links.
     * @example
     * // Create many Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grammar_file_test_links and only return the `file_id`
     * const grammar_file_test_linksWithFile_idOnly = await prisma.grammar_file_test_links.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends grammar_file_test_linksCreateManyAndReturnArgs>(args?: SelectSubset<T, grammar_file_test_linksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grammar_file_test_links.
     * @param {grammar_file_test_linksDeleteArgs} args - Arguments to delete one Grammar_file_test_links.
     * @example
     * // Delete one Grammar_file_test_links
     * const Grammar_file_test_links = await prisma.grammar_file_test_links.delete({
     *   where: {
     *     // ... filter to delete one Grammar_file_test_links
     *   }
     * })
     * 
     */
    delete<T extends grammar_file_test_linksDeleteArgs>(args: SelectSubset<T, grammar_file_test_linksDeleteArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grammar_file_test_links.
     * @param {grammar_file_test_linksUpdateArgs} args - Arguments to update one Grammar_file_test_links.
     * @example
     * // Update one Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grammar_file_test_linksUpdateArgs>(args: SelectSubset<T, grammar_file_test_linksUpdateArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grammar_file_test_links.
     * @param {grammar_file_test_linksDeleteManyArgs} args - Arguments to filter Grammar_file_test_links to delete.
     * @example
     * // Delete a few Grammar_file_test_links
     * const { count } = await prisma.grammar_file_test_links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grammar_file_test_linksDeleteManyArgs>(args?: SelectSubset<T, grammar_file_test_linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_file_test_linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grammar_file_test_linksUpdateManyArgs>(args: SelectSubset<T, grammar_file_test_linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_file_test_links and returns the data updated in the database.
     * @param {grammar_file_test_linksUpdateManyAndReturnArgs} args - Arguments to update many Grammar_file_test_links.
     * @example
     * // Update many Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grammar_file_test_links and only return the `file_id`
     * const grammar_file_test_linksWithFile_idOnly = await prisma.grammar_file_test_links.updateManyAndReturn({
     *   select: { file_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends grammar_file_test_linksUpdateManyAndReturnArgs>(args: SelectSubset<T, grammar_file_test_linksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grammar_file_test_links.
     * @param {grammar_file_test_linksUpsertArgs} args - Arguments to update or create a Grammar_file_test_links.
     * @example
     * // Update or create a Grammar_file_test_links
     * const grammar_file_test_links = await prisma.grammar_file_test_links.upsert({
     *   create: {
     *     // ... data to create a Grammar_file_test_links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grammar_file_test_links we want to update
     *   }
     * })
     */
    upsert<T extends grammar_file_test_linksUpsertArgs>(args: SelectSubset<T, grammar_file_test_linksUpsertArgs<ExtArgs>>): Prisma__grammar_file_test_linksClient<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grammar_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_file_test_linksCountArgs} args - Arguments to filter Grammar_file_test_links to count.
     * @example
     * // Count the number of Grammar_file_test_links
     * const count = await prisma.grammar_file_test_links.count({
     *   where: {
     *     // ... the filter for the Grammar_file_test_links we want to count
     *   }
     * })
    **/
    count<T extends grammar_file_test_linksCountArgs>(
      args?: Subset<T, grammar_file_test_linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Grammar_file_test_linksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grammar_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Grammar_file_test_linksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Grammar_file_test_linksAggregateArgs>(args: Subset<T, Grammar_file_test_linksAggregateArgs>): Prisma.PrismaPromise<GetGrammar_file_test_linksAggregateType<T>>

    /**
     * Group by Grammar_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_file_test_linksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grammar_file_test_linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grammar_file_test_linksGroupByArgs['orderBy'] }
        : { orderBy?: grammar_file_test_linksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grammar_file_test_linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammar_file_test_linksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grammar_file_test_links model
   */
  readonly fields: grammar_file_test_linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grammar_file_test_links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grammar_file_test_linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar_files<T extends grammar_filesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, grammar_filesDefaultArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grammar_tests<T extends grammar_testsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, grammar_testsDefaultArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grammar_file_test_links model
   */
  interface grammar_file_test_linksFieldRefs {
    readonly file_id: FieldRef<"grammar_file_test_links", 'String'>
    readonly test_id: FieldRef<"grammar_file_test_links", 'String'>
  }
    

  // Custom InputTypes
  /**
   * grammar_file_test_links findUnique
   */
  export type grammar_file_test_linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which grammar_file_test_links to fetch.
     */
    where: grammar_file_test_linksWhereUniqueInput
  }

  /**
   * grammar_file_test_links findUniqueOrThrow
   */
  export type grammar_file_test_linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which grammar_file_test_links to fetch.
     */
    where: grammar_file_test_linksWhereUniqueInput
  }

  /**
   * grammar_file_test_links findFirst
   */
  export type grammar_file_test_linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which grammar_file_test_links to fetch.
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_file_test_links to fetch.
     */
    orderBy?: grammar_file_test_linksOrderByWithRelationInput | grammar_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_file_test_links.
     */
    cursor?: grammar_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_file_test_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_file_test_links.
     */
    distinct?: Grammar_file_test_linksScalarFieldEnum | Grammar_file_test_linksScalarFieldEnum[]
  }

  /**
   * grammar_file_test_links findFirstOrThrow
   */
  export type grammar_file_test_linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which grammar_file_test_links to fetch.
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_file_test_links to fetch.
     */
    orderBy?: grammar_file_test_linksOrderByWithRelationInput | grammar_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_file_test_links.
     */
    cursor?: grammar_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_file_test_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_file_test_links.
     */
    distinct?: Grammar_file_test_linksScalarFieldEnum | Grammar_file_test_linksScalarFieldEnum[]
  }

  /**
   * grammar_file_test_links findMany
   */
  export type grammar_file_test_linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which grammar_file_test_links to fetch.
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_file_test_links to fetch.
     */
    orderBy?: grammar_file_test_linksOrderByWithRelationInput | grammar_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grammar_file_test_links.
     */
    cursor?: grammar_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_file_test_links.
     */
    skip?: number
    distinct?: Grammar_file_test_linksScalarFieldEnum | Grammar_file_test_linksScalarFieldEnum[]
  }

  /**
   * grammar_file_test_links create
   */
  export type grammar_file_test_linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * The data needed to create a grammar_file_test_links.
     */
    data: XOR<grammar_file_test_linksCreateInput, grammar_file_test_linksUncheckedCreateInput>
  }

  /**
   * grammar_file_test_links createMany
   */
  export type grammar_file_test_linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grammar_file_test_links.
     */
    data: grammar_file_test_linksCreateManyInput | grammar_file_test_linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_file_test_links createManyAndReturn
   */
  export type grammar_file_test_linksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * The data used to create many grammar_file_test_links.
     */
    data: grammar_file_test_linksCreateManyInput | grammar_file_test_linksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * grammar_file_test_links update
   */
  export type grammar_file_test_linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * The data needed to update a grammar_file_test_links.
     */
    data: XOR<grammar_file_test_linksUpdateInput, grammar_file_test_linksUncheckedUpdateInput>
    /**
     * Choose, which grammar_file_test_links to update.
     */
    where: grammar_file_test_linksWhereUniqueInput
  }

  /**
   * grammar_file_test_links updateMany
   */
  export type grammar_file_test_linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grammar_file_test_links.
     */
    data: XOR<grammar_file_test_linksUpdateManyMutationInput, grammar_file_test_linksUncheckedUpdateManyInput>
    /**
     * Filter which grammar_file_test_links to update
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * Limit how many grammar_file_test_links to update.
     */
    limit?: number
  }

  /**
   * grammar_file_test_links updateManyAndReturn
   */
  export type grammar_file_test_linksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * The data used to update grammar_file_test_links.
     */
    data: XOR<grammar_file_test_linksUpdateManyMutationInput, grammar_file_test_linksUncheckedUpdateManyInput>
    /**
     * Filter which grammar_file_test_links to update
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * Limit how many grammar_file_test_links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * grammar_file_test_links upsert
   */
  export type grammar_file_test_linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * The filter to search for the grammar_file_test_links to update in case it exists.
     */
    where: grammar_file_test_linksWhereUniqueInput
    /**
     * In case the grammar_file_test_links found by the `where` argument doesn't exist, create a new grammar_file_test_links with this data.
     */
    create: XOR<grammar_file_test_linksCreateInput, grammar_file_test_linksUncheckedCreateInput>
    /**
     * In case the grammar_file_test_links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grammar_file_test_linksUpdateInput, grammar_file_test_linksUncheckedUpdateInput>
  }

  /**
   * grammar_file_test_links delete
   */
  export type grammar_file_test_linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter which grammar_file_test_links to delete.
     */
    where: grammar_file_test_linksWhereUniqueInput
  }

  /**
   * grammar_file_test_links deleteMany
   */
  export type grammar_file_test_linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_file_test_links to delete
     */
    where?: grammar_file_test_linksWhereInput
    /**
     * Limit how many grammar_file_test_links to delete.
     */
    limit?: number
  }

  /**
   * grammar_file_test_links without action
   */
  export type grammar_file_test_linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
  }


  /**
   * Model grammar_files
   */

  export type AggregateGrammar_files = {
    _count: Grammar_filesCountAggregateOutputType | null
    _min: Grammar_filesMinAggregateOutputType | null
    _max: Grammar_filesMaxAggregateOutputType | null
  }

  export type Grammar_filesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_filesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_filesCountAggregateOutputType = {
    id: number
    user_id: number
    folder_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Grammar_filesMinAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_filesMaxAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_filesCountAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Grammar_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_files to aggregate.
     */
    where?: grammar_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_files to fetch.
     */
    orderBy?: grammar_filesOrderByWithRelationInput | grammar_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grammar_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grammar_files
    **/
    _count?: true | Grammar_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Grammar_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Grammar_filesMaxAggregateInputType
  }

  export type GetGrammar_filesAggregateType<T extends Grammar_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammar_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammar_files[P]>
      : GetScalarType<T[P], AggregateGrammar_files[P]>
  }




  export type grammar_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_filesWhereInput
    orderBy?: grammar_filesOrderByWithAggregationInput | grammar_filesOrderByWithAggregationInput[]
    by: Grammar_filesScalarFieldEnum[] | Grammar_filesScalarFieldEnum
    having?: grammar_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Grammar_filesCountAggregateInputType | true
    _min?: Grammar_filesMinAggregateInputType
    _max?: Grammar_filesMaxAggregateInputType
  }

  export type Grammar_filesGroupByOutputType = {
    id: string
    user_id: string
    folder_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Grammar_filesCountAggregateOutputType | null
    _min: Grammar_filesMinAggregateOutputType | null
    _max: Grammar_filesMaxAggregateOutputType | null
  }

  type GetGrammar_filesGroupByPayload<T extends grammar_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Grammar_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Grammar_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Grammar_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Grammar_filesGroupByOutputType[P]>
        }
      >
    >


  export type grammar_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_file_test_links?: boolean | grammar_files$grammar_file_test_linksArgs<ExtArgs>
    grammar_folders?: boolean | grammar_files$grammar_foldersArgs<ExtArgs>
    _count?: boolean | Grammar_filesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_files"]>

  export type grammar_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_folders?: boolean | grammar_files$grammar_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_files"]>

  export type grammar_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_folders?: boolean | grammar_files$grammar_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_files"]>

  export type grammar_filesSelectScalar = {
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type grammar_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "folder_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["grammar_files"]>
  export type grammar_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_file_test_links?: boolean | grammar_files$grammar_file_test_linksArgs<ExtArgs>
    grammar_folders?: boolean | grammar_files$grammar_foldersArgs<ExtArgs>
    _count?: boolean | Grammar_filesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type grammar_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_folders?: boolean | grammar_files$grammar_foldersArgs<ExtArgs>
  }
  export type grammar_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_folders?: boolean | grammar_files$grammar_foldersArgs<ExtArgs>
  }

  export type $grammar_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grammar_files"
    objects: {
      grammar_file_test_links: Prisma.$grammar_file_test_linksPayload<ExtArgs>[]
      grammar_folders: Prisma.$grammar_foldersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      folder_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["grammar_files"]>
    composites: {}
  }

  type grammar_filesGetPayload<S extends boolean | null | undefined | grammar_filesDefaultArgs> = $Result.GetResult<Prisma.$grammar_filesPayload, S>

  type grammar_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<grammar_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Grammar_filesCountAggregateInputType | true
    }

  export interface grammar_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grammar_files'], meta: { name: 'grammar_files' } }
    /**
     * Find zero or one Grammar_files that matches the filter.
     * @param {grammar_filesFindUniqueArgs} args - Arguments to find a Grammar_files
     * @example
     * // Get one Grammar_files
     * const grammar_files = await prisma.grammar_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grammar_filesFindUniqueArgs>(args: SelectSubset<T, grammar_filesFindUniqueArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grammar_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {grammar_filesFindUniqueOrThrowArgs} args - Arguments to find a Grammar_files
     * @example
     * // Get one Grammar_files
     * const grammar_files = await prisma.grammar_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grammar_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, grammar_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_filesFindFirstArgs} args - Arguments to find a Grammar_files
     * @example
     * // Get one Grammar_files
     * const grammar_files = await prisma.grammar_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grammar_filesFindFirstArgs>(args?: SelectSubset<T, grammar_filesFindFirstArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_filesFindFirstOrThrowArgs} args - Arguments to find a Grammar_files
     * @example
     * // Get one Grammar_files
     * const grammar_files = await prisma.grammar_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grammar_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, grammar_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grammar_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grammar_files
     * const grammar_files = await prisma.grammar_files.findMany()
     * 
     * // Get first 10 Grammar_files
     * const grammar_files = await prisma.grammar_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammar_filesWithIdOnly = await prisma.grammar_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends grammar_filesFindManyArgs>(args?: SelectSubset<T, grammar_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grammar_files.
     * @param {grammar_filesCreateArgs} args - Arguments to create a Grammar_files.
     * @example
     * // Create one Grammar_files
     * const Grammar_files = await prisma.grammar_files.create({
     *   data: {
     *     // ... data to create a Grammar_files
     *   }
     * })
     * 
     */
    create<T extends grammar_filesCreateArgs>(args: SelectSubset<T, grammar_filesCreateArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grammar_files.
     * @param {grammar_filesCreateManyArgs} args - Arguments to create many Grammar_files.
     * @example
     * // Create many Grammar_files
     * const grammar_files = await prisma.grammar_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grammar_filesCreateManyArgs>(args?: SelectSubset<T, grammar_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grammar_files and returns the data saved in the database.
     * @param {grammar_filesCreateManyAndReturnArgs} args - Arguments to create many Grammar_files.
     * @example
     * // Create many Grammar_files
     * const grammar_files = await prisma.grammar_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grammar_files and only return the `id`
     * const grammar_filesWithIdOnly = await prisma.grammar_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends grammar_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, grammar_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grammar_files.
     * @param {grammar_filesDeleteArgs} args - Arguments to delete one Grammar_files.
     * @example
     * // Delete one Grammar_files
     * const Grammar_files = await prisma.grammar_files.delete({
     *   where: {
     *     // ... filter to delete one Grammar_files
     *   }
     * })
     * 
     */
    delete<T extends grammar_filesDeleteArgs>(args: SelectSubset<T, grammar_filesDeleteArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grammar_files.
     * @param {grammar_filesUpdateArgs} args - Arguments to update one Grammar_files.
     * @example
     * // Update one Grammar_files
     * const grammar_files = await prisma.grammar_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grammar_filesUpdateArgs>(args: SelectSubset<T, grammar_filesUpdateArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grammar_files.
     * @param {grammar_filesDeleteManyArgs} args - Arguments to filter Grammar_files to delete.
     * @example
     * // Delete a few Grammar_files
     * const { count } = await prisma.grammar_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grammar_filesDeleteManyArgs>(args?: SelectSubset<T, grammar_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grammar_files
     * const grammar_files = await prisma.grammar_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grammar_filesUpdateManyArgs>(args: SelectSubset<T, grammar_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_files and returns the data updated in the database.
     * @param {grammar_filesUpdateManyAndReturnArgs} args - Arguments to update many Grammar_files.
     * @example
     * // Update many Grammar_files
     * const grammar_files = await prisma.grammar_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grammar_files and only return the `id`
     * const grammar_filesWithIdOnly = await prisma.grammar_files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends grammar_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, grammar_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grammar_files.
     * @param {grammar_filesUpsertArgs} args - Arguments to update or create a Grammar_files.
     * @example
     * // Update or create a Grammar_files
     * const grammar_files = await prisma.grammar_files.upsert({
     *   create: {
     *     // ... data to create a Grammar_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grammar_files we want to update
     *   }
     * })
     */
    upsert<T extends grammar_filesUpsertArgs>(args: SelectSubset<T, grammar_filesUpsertArgs<ExtArgs>>): Prisma__grammar_filesClient<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grammar_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_filesCountArgs} args - Arguments to filter Grammar_files to count.
     * @example
     * // Count the number of Grammar_files
     * const count = await prisma.grammar_files.count({
     *   where: {
     *     // ... the filter for the Grammar_files we want to count
     *   }
     * })
    **/
    count<T extends grammar_filesCountArgs>(
      args?: Subset<T, grammar_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Grammar_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grammar_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Grammar_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Grammar_filesAggregateArgs>(args: Subset<T, Grammar_filesAggregateArgs>): Prisma.PrismaPromise<GetGrammar_filesAggregateType<T>>

    /**
     * Group by Grammar_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_filesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grammar_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grammar_filesGroupByArgs['orderBy'] }
        : { orderBy?: grammar_filesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grammar_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammar_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grammar_files model
   */
  readonly fields: grammar_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grammar_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grammar_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar_file_test_links<T extends grammar_files$grammar_file_test_linksArgs<ExtArgs> = {}>(args?: Subset<T, grammar_files$grammar_file_test_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grammar_folders<T extends grammar_files$grammar_foldersArgs<ExtArgs> = {}>(args?: Subset<T, grammar_files$grammar_foldersArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grammar_files model
   */
  interface grammar_filesFieldRefs {
    readonly id: FieldRef<"grammar_files", 'String'>
    readonly user_id: FieldRef<"grammar_files", 'String'>
    readonly folder_id: FieldRef<"grammar_files", 'String'>
    readonly name: FieldRef<"grammar_files", 'String'>
    readonly is_favorited: FieldRef<"grammar_files", 'Boolean'>
    readonly is_published: FieldRef<"grammar_files", 'Boolean'>
    readonly tags: FieldRef<"grammar_files", 'String[]'>
    readonly created_at: FieldRef<"grammar_files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * grammar_files findUnique
   */
  export type grammar_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * Filter, which grammar_files to fetch.
     */
    where: grammar_filesWhereUniqueInput
  }

  /**
   * grammar_files findUniqueOrThrow
   */
  export type grammar_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * Filter, which grammar_files to fetch.
     */
    where: grammar_filesWhereUniqueInput
  }

  /**
   * grammar_files findFirst
   */
  export type grammar_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * Filter, which grammar_files to fetch.
     */
    where?: grammar_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_files to fetch.
     */
    orderBy?: grammar_filesOrderByWithRelationInput | grammar_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_files.
     */
    cursor?: grammar_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_files.
     */
    distinct?: Grammar_filesScalarFieldEnum | Grammar_filesScalarFieldEnum[]
  }

  /**
   * grammar_files findFirstOrThrow
   */
  export type grammar_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * Filter, which grammar_files to fetch.
     */
    where?: grammar_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_files to fetch.
     */
    orderBy?: grammar_filesOrderByWithRelationInput | grammar_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_files.
     */
    cursor?: grammar_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_files.
     */
    distinct?: Grammar_filesScalarFieldEnum | Grammar_filesScalarFieldEnum[]
  }

  /**
   * grammar_files findMany
   */
  export type grammar_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * Filter, which grammar_files to fetch.
     */
    where?: grammar_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_files to fetch.
     */
    orderBy?: grammar_filesOrderByWithRelationInput | grammar_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grammar_files.
     */
    cursor?: grammar_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_files.
     */
    skip?: number
    distinct?: Grammar_filesScalarFieldEnum | Grammar_filesScalarFieldEnum[]
  }

  /**
   * grammar_files create
   */
  export type grammar_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a grammar_files.
     */
    data: XOR<grammar_filesCreateInput, grammar_filesUncheckedCreateInput>
  }

  /**
   * grammar_files createMany
   */
  export type grammar_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grammar_files.
     */
    data: grammar_filesCreateManyInput | grammar_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_files createManyAndReturn
   */
  export type grammar_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * The data used to create many grammar_files.
     */
    data: grammar_filesCreateManyInput | grammar_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * grammar_files update
   */
  export type grammar_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a grammar_files.
     */
    data: XOR<grammar_filesUpdateInput, grammar_filesUncheckedUpdateInput>
    /**
     * Choose, which grammar_files to update.
     */
    where: grammar_filesWhereUniqueInput
  }

  /**
   * grammar_files updateMany
   */
  export type grammar_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grammar_files.
     */
    data: XOR<grammar_filesUpdateManyMutationInput, grammar_filesUncheckedUpdateManyInput>
    /**
     * Filter which grammar_files to update
     */
    where?: grammar_filesWhereInput
    /**
     * Limit how many grammar_files to update.
     */
    limit?: number
  }

  /**
   * grammar_files updateManyAndReturn
   */
  export type grammar_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * The data used to update grammar_files.
     */
    data: XOR<grammar_filesUpdateManyMutationInput, grammar_filesUncheckedUpdateManyInput>
    /**
     * Filter which grammar_files to update
     */
    where?: grammar_filesWhereInput
    /**
     * Limit how many grammar_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * grammar_files upsert
   */
  export type grammar_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the grammar_files to update in case it exists.
     */
    where: grammar_filesWhereUniqueInput
    /**
     * In case the grammar_files found by the `where` argument doesn't exist, create a new grammar_files with this data.
     */
    create: XOR<grammar_filesCreateInput, grammar_filesUncheckedCreateInput>
    /**
     * In case the grammar_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grammar_filesUpdateInput, grammar_filesUncheckedUpdateInput>
  }

  /**
   * grammar_files delete
   */
  export type grammar_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    /**
     * Filter which grammar_files to delete.
     */
    where: grammar_filesWhereUniqueInput
  }

  /**
   * grammar_files deleteMany
   */
  export type grammar_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_files to delete
     */
    where?: grammar_filesWhereInput
    /**
     * Limit how many grammar_files to delete.
     */
    limit?: number
  }

  /**
   * grammar_files.grammar_file_test_links
   */
  export type grammar_files$grammar_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    where?: grammar_file_test_linksWhereInput
    orderBy?: grammar_file_test_linksOrderByWithRelationInput | grammar_file_test_linksOrderByWithRelationInput[]
    cursor?: grammar_file_test_linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Grammar_file_test_linksScalarFieldEnum | Grammar_file_test_linksScalarFieldEnum[]
  }

  /**
   * grammar_files.grammar_folders
   */
  export type grammar_files$grammar_foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    where?: grammar_foldersWhereInput
  }

  /**
   * grammar_files without action
   */
  export type grammar_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
  }


  /**
   * Model grammar_folders
   */

  export type AggregateGrammar_folders = {
    _count: Grammar_foldersCountAggregateOutputType | null
    _min: Grammar_foldersMinAggregateOutputType | null
    _max: Grammar_foldersMaxAggregateOutputType | null
  }

  export type Grammar_foldersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_foldersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_foldersCountAggregateOutputType = {
    id: number
    user_id: number
    parent_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Grammar_foldersMinAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_foldersMaxAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_foldersCountAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Grammar_foldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_folders to aggregate.
     */
    where?: grammar_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_folders to fetch.
     */
    orderBy?: grammar_foldersOrderByWithRelationInput | grammar_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grammar_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grammar_folders
    **/
    _count?: true | Grammar_foldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Grammar_foldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Grammar_foldersMaxAggregateInputType
  }

  export type GetGrammar_foldersAggregateType<T extends Grammar_foldersAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammar_folders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammar_folders[P]>
      : GetScalarType<T[P], AggregateGrammar_folders[P]>
  }




  export type grammar_foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_foldersWhereInput
    orderBy?: grammar_foldersOrderByWithAggregationInput | grammar_foldersOrderByWithAggregationInput[]
    by: Grammar_foldersScalarFieldEnum[] | Grammar_foldersScalarFieldEnum
    having?: grammar_foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Grammar_foldersCountAggregateInputType | true
    _min?: Grammar_foldersMinAggregateInputType
    _max?: Grammar_foldersMaxAggregateInputType
  }

  export type Grammar_foldersGroupByOutputType = {
    id: string
    user_id: string
    parent_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Grammar_foldersCountAggregateOutputType | null
    _min: Grammar_foldersMinAggregateOutputType | null
    _max: Grammar_foldersMaxAggregateOutputType | null
  }

  type GetGrammar_foldersGroupByPayload<T extends grammar_foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Grammar_foldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Grammar_foldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Grammar_foldersGroupByOutputType[P]>
            : GetScalarType<T[P], Grammar_foldersGroupByOutputType[P]>
        }
      >
    >


  export type grammar_foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_files?: boolean | grammar_folders$grammar_filesArgs<ExtArgs>
    _count?: boolean | Grammar_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_folders"]>

  export type grammar_foldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["grammar_folders"]>

  export type grammar_foldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["grammar_folders"]>

  export type grammar_foldersSelectScalar = {
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type grammar_foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "parent_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["grammar_folders"]>
  export type grammar_foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_files?: boolean | grammar_folders$grammar_filesArgs<ExtArgs>
    _count?: boolean | Grammar_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type grammar_foldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type grammar_foldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $grammar_foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grammar_folders"
    objects: {
      grammar_files: Prisma.$grammar_filesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      parent_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["grammar_folders"]>
    composites: {}
  }

  type grammar_foldersGetPayload<S extends boolean | null | undefined | grammar_foldersDefaultArgs> = $Result.GetResult<Prisma.$grammar_foldersPayload, S>

  type grammar_foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<grammar_foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Grammar_foldersCountAggregateInputType | true
    }

  export interface grammar_foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grammar_folders'], meta: { name: 'grammar_folders' } }
    /**
     * Find zero or one Grammar_folders that matches the filter.
     * @param {grammar_foldersFindUniqueArgs} args - Arguments to find a Grammar_folders
     * @example
     * // Get one Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grammar_foldersFindUniqueArgs>(args: SelectSubset<T, grammar_foldersFindUniqueArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grammar_folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {grammar_foldersFindUniqueOrThrowArgs} args - Arguments to find a Grammar_folders
     * @example
     * // Get one Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grammar_foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, grammar_foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_foldersFindFirstArgs} args - Arguments to find a Grammar_folders
     * @example
     * // Get one Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grammar_foldersFindFirstArgs>(args?: SelectSubset<T, grammar_foldersFindFirstArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_foldersFindFirstOrThrowArgs} args - Arguments to find a Grammar_folders
     * @example
     * // Get one Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grammar_foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, grammar_foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grammar_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.findMany()
     * 
     * // Get first 10 Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammar_foldersWithIdOnly = await prisma.grammar_folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends grammar_foldersFindManyArgs>(args?: SelectSubset<T, grammar_foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grammar_folders.
     * @param {grammar_foldersCreateArgs} args - Arguments to create a Grammar_folders.
     * @example
     * // Create one Grammar_folders
     * const Grammar_folders = await prisma.grammar_folders.create({
     *   data: {
     *     // ... data to create a Grammar_folders
     *   }
     * })
     * 
     */
    create<T extends grammar_foldersCreateArgs>(args: SelectSubset<T, grammar_foldersCreateArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grammar_folders.
     * @param {grammar_foldersCreateManyArgs} args - Arguments to create many Grammar_folders.
     * @example
     * // Create many Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grammar_foldersCreateManyArgs>(args?: SelectSubset<T, grammar_foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grammar_folders and returns the data saved in the database.
     * @param {grammar_foldersCreateManyAndReturnArgs} args - Arguments to create many Grammar_folders.
     * @example
     * // Create many Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grammar_folders and only return the `id`
     * const grammar_foldersWithIdOnly = await prisma.grammar_folders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends grammar_foldersCreateManyAndReturnArgs>(args?: SelectSubset<T, grammar_foldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grammar_folders.
     * @param {grammar_foldersDeleteArgs} args - Arguments to delete one Grammar_folders.
     * @example
     * // Delete one Grammar_folders
     * const Grammar_folders = await prisma.grammar_folders.delete({
     *   where: {
     *     // ... filter to delete one Grammar_folders
     *   }
     * })
     * 
     */
    delete<T extends grammar_foldersDeleteArgs>(args: SelectSubset<T, grammar_foldersDeleteArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grammar_folders.
     * @param {grammar_foldersUpdateArgs} args - Arguments to update one Grammar_folders.
     * @example
     * // Update one Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grammar_foldersUpdateArgs>(args: SelectSubset<T, grammar_foldersUpdateArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grammar_folders.
     * @param {grammar_foldersDeleteManyArgs} args - Arguments to filter Grammar_folders to delete.
     * @example
     * // Delete a few Grammar_folders
     * const { count } = await prisma.grammar_folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grammar_foldersDeleteManyArgs>(args?: SelectSubset<T, grammar_foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grammar_foldersUpdateManyArgs>(args: SelectSubset<T, grammar_foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_folders and returns the data updated in the database.
     * @param {grammar_foldersUpdateManyAndReturnArgs} args - Arguments to update many Grammar_folders.
     * @example
     * // Update many Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grammar_folders and only return the `id`
     * const grammar_foldersWithIdOnly = await prisma.grammar_folders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends grammar_foldersUpdateManyAndReturnArgs>(args: SelectSubset<T, grammar_foldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grammar_folders.
     * @param {grammar_foldersUpsertArgs} args - Arguments to update or create a Grammar_folders.
     * @example
     * // Update or create a Grammar_folders
     * const grammar_folders = await prisma.grammar_folders.upsert({
     *   create: {
     *     // ... data to create a Grammar_folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grammar_folders we want to update
     *   }
     * })
     */
    upsert<T extends grammar_foldersUpsertArgs>(args: SelectSubset<T, grammar_foldersUpsertArgs<ExtArgs>>): Prisma__grammar_foldersClient<$Result.GetResult<Prisma.$grammar_foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grammar_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_foldersCountArgs} args - Arguments to filter Grammar_folders to count.
     * @example
     * // Count the number of Grammar_folders
     * const count = await prisma.grammar_folders.count({
     *   where: {
     *     // ... the filter for the Grammar_folders we want to count
     *   }
     * })
    **/
    count<T extends grammar_foldersCountArgs>(
      args?: Subset<T, grammar_foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Grammar_foldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grammar_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Grammar_foldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Grammar_foldersAggregateArgs>(args: Subset<T, Grammar_foldersAggregateArgs>): Prisma.PrismaPromise<GetGrammar_foldersAggregateType<T>>

    /**
     * Group by Grammar_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_foldersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grammar_foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grammar_foldersGroupByArgs['orderBy'] }
        : { orderBy?: grammar_foldersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grammar_foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammar_foldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grammar_folders model
   */
  readonly fields: grammar_foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grammar_folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grammar_foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar_files<T extends grammar_folders$grammar_filesArgs<ExtArgs> = {}>(args?: Subset<T, grammar_folders$grammar_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grammar_folders model
   */
  interface grammar_foldersFieldRefs {
    readonly id: FieldRef<"grammar_folders", 'String'>
    readonly user_id: FieldRef<"grammar_folders", 'String'>
    readonly parent_id: FieldRef<"grammar_folders", 'String'>
    readonly name: FieldRef<"grammar_folders", 'String'>
    readonly is_favorited: FieldRef<"grammar_folders", 'Boolean'>
    readonly is_published: FieldRef<"grammar_folders", 'Boolean'>
    readonly tags: FieldRef<"grammar_folders", 'String[]'>
    readonly created_at: FieldRef<"grammar_folders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * grammar_folders findUnique
   */
  export type grammar_foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_folders to fetch.
     */
    where: grammar_foldersWhereUniqueInput
  }

  /**
   * grammar_folders findUniqueOrThrow
   */
  export type grammar_foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_folders to fetch.
     */
    where: grammar_foldersWhereUniqueInput
  }

  /**
   * grammar_folders findFirst
   */
  export type grammar_foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_folders to fetch.
     */
    where?: grammar_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_folders to fetch.
     */
    orderBy?: grammar_foldersOrderByWithRelationInput | grammar_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_folders.
     */
    cursor?: grammar_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_folders.
     */
    distinct?: Grammar_foldersScalarFieldEnum | Grammar_foldersScalarFieldEnum[]
  }

  /**
   * grammar_folders findFirstOrThrow
   */
  export type grammar_foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_folders to fetch.
     */
    where?: grammar_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_folders to fetch.
     */
    orderBy?: grammar_foldersOrderByWithRelationInput | grammar_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_folders.
     */
    cursor?: grammar_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_folders.
     */
    distinct?: Grammar_foldersScalarFieldEnum | Grammar_foldersScalarFieldEnum[]
  }

  /**
   * grammar_folders findMany
   */
  export type grammar_foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_folders to fetch.
     */
    where?: grammar_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_folders to fetch.
     */
    orderBy?: grammar_foldersOrderByWithRelationInput | grammar_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grammar_folders.
     */
    cursor?: grammar_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_folders.
     */
    skip?: number
    distinct?: Grammar_foldersScalarFieldEnum | Grammar_foldersScalarFieldEnum[]
  }

  /**
   * grammar_folders create
   */
  export type grammar_foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a grammar_folders.
     */
    data: XOR<grammar_foldersCreateInput, grammar_foldersUncheckedCreateInput>
  }

  /**
   * grammar_folders createMany
   */
  export type grammar_foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grammar_folders.
     */
    data: grammar_foldersCreateManyInput | grammar_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_folders createManyAndReturn
   */
  export type grammar_foldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * The data used to create many grammar_folders.
     */
    data: grammar_foldersCreateManyInput | grammar_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_folders update
   */
  export type grammar_foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a grammar_folders.
     */
    data: XOR<grammar_foldersUpdateInput, grammar_foldersUncheckedUpdateInput>
    /**
     * Choose, which grammar_folders to update.
     */
    where: grammar_foldersWhereUniqueInput
  }

  /**
   * grammar_folders updateMany
   */
  export type grammar_foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grammar_folders.
     */
    data: XOR<grammar_foldersUpdateManyMutationInput, grammar_foldersUncheckedUpdateManyInput>
    /**
     * Filter which grammar_folders to update
     */
    where?: grammar_foldersWhereInput
    /**
     * Limit how many grammar_folders to update.
     */
    limit?: number
  }

  /**
   * grammar_folders updateManyAndReturn
   */
  export type grammar_foldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * The data used to update grammar_folders.
     */
    data: XOR<grammar_foldersUpdateManyMutationInput, grammar_foldersUncheckedUpdateManyInput>
    /**
     * Filter which grammar_folders to update
     */
    where?: grammar_foldersWhereInput
    /**
     * Limit how many grammar_folders to update.
     */
    limit?: number
  }

  /**
   * grammar_folders upsert
   */
  export type grammar_foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the grammar_folders to update in case it exists.
     */
    where: grammar_foldersWhereUniqueInput
    /**
     * In case the grammar_folders found by the `where` argument doesn't exist, create a new grammar_folders with this data.
     */
    create: XOR<grammar_foldersCreateInput, grammar_foldersUncheckedCreateInput>
    /**
     * In case the grammar_folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grammar_foldersUpdateInput, grammar_foldersUncheckedUpdateInput>
  }

  /**
   * grammar_folders delete
   */
  export type grammar_foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
    /**
     * Filter which grammar_folders to delete.
     */
    where: grammar_foldersWhereUniqueInput
  }

  /**
   * grammar_folders deleteMany
   */
  export type grammar_foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_folders to delete
     */
    where?: grammar_foldersWhereInput
    /**
     * Limit how many grammar_folders to delete.
     */
    limit?: number
  }

  /**
   * grammar_folders.grammar_files
   */
  export type grammar_folders$grammar_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_files
     */
    select?: grammar_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_files
     */
    omit?: grammar_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_filesInclude<ExtArgs> | null
    where?: grammar_filesWhereInput
    orderBy?: grammar_filesOrderByWithRelationInput | grammar_filesOrderByWithRelationInput[]
    cursor?: grammar_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Grammar_filesScalarFieldEnum | Grammar_filesScalarFieldEnum[]
  }

  /**
   * grammar_folders without action
   */
  export type grammar_foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_folders
     */
    select?: grammar_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_folders
     */
    omit?: grammar_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_foldersInclude<ExtArgs> | null
  }


  /**
   * Model grammar_test_folders
   */

  export type AggregateGrammar_test_folders = {
    _count: Grammar_test_foldersCountAggregateOutputType | null
    _min: Grammar_test_foldersMinAggregateOutputType | null
    _max: Grammar_test_foldersMaxAggregateOutputType | null
  }

  export type Grammar_test_foldersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_test_foldersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_test_foldersCountAggregateOutputType = {
    id: number
    user_id: number
    parent_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Grammar_test_foldersMinAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_test_foldersMaxAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_test_foldersCountAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Grammar_test_foldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_test_folders to aggregate.
     */
    where?: grammar_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_test_folders to fetch.
     */
    orderBy?: grammar_test_foldersOrderByWithRelationInput | grammar_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grammar_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_test_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grammar_test_folders
    **/
    _count?: true | Grammar_test_foldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Grammar_test_foldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Grammar_test_foldersMaxAggregateInputType
  }

  export type GetGrammar_test_foldersAggregateType<T extends Grammar_test_foldersAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammar_test_folders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammar_test_folders[P]>
      : GetScalarType<T[P], AggregateGrammar_test_folders[P]>
  }




  export type grammar_test_foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_test_foldersWhereInput
    orderBy?: grammar_test_foldersOrderByWithAggregationInput | grammar_test_foldersOrderByWithAggregationInput[]
    by: Grammar_test_foldersScalarFieldEnum[] | Grammar_test_foldersScalarFieldEnum
    having?: grammar_test_foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Grammar_test_foldersCountAggregateInputType | true
    _min?: Grammar_test_foldersMinAggregateInputType
    _max?: Grammar_test_foldersMaxAggregateInputType
  }

  export type Grammar_test_foldersGroupByOutputType = {
    id: string
    user_id: string
    parent_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Grammar_test_foldersCountAggregateOutputType | null
    _min: Grammar_test_foldersMinAggregateOutputType | null
    _max: Grammar_test_foldersMaxAggregateOutputType | null
  }

  type GetGrammar_test_foldersGroupByPayload<T extends grammar_test_foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Grammar_test_foldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Grammar_test_foldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Grammar_test_foldersGroupByOutputType[P]>
            : GetScalarType<T[P], Grammar_test_foldersGroupByOutputType[P]>
        }
      >
    >


  export type grammar_test_foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_tests?: boolean | grammar_test_folders$grammar_testsArgs<ExtArgs>
    _count?: boolean | Grammar_test_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_test_folders"]>

  export type grammar_test_foldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["grammar_test_folders"]>

  export type grammar_test_foldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["grammar_test_folders"]>

  export type grammar_test_foldersSelectScalar = {
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type grammar_test_foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "parent_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["grammar_test_folders"]>
  export type grammar_test_foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_tests?: boolean | grammar_test_folders$grammar_testsArgs<ExtArgs>
    _count?: boolean | Grammar_test_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type grammar_test_foldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type grammar_test_foldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $grammar_test_foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grammar_test_folders"
    objects: {
      grammar_tests: Prisma.$grammar_testsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      parent_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["grammar_test_folders"]>
    composites: {}
  }

  type grammar_test_foldersGetPayload<S extends boolean | null | undefined | grammar_test_foldersDefaultArgs> = $Result.GetResult<Prisma.$grammar_test_foldersPayload, S>

  type grammar_test_foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<grammar_test_foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Grammar_test_foldersCountAggregateInputType | true
    }

  export interface grammar_test_foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grammar_test_folders'], meta: { name: 'grammar_test_folders' } }
    /**
     * Find zero or one Grammar_test_folders that matches the filter.
     * @param {grammar_test_foldersFindUniqueArgs} args - Arguments to find a Grammar_test_folders
     * @example
     * // Get one Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grammar_test_foldersFindUniqueArgs>(args: SelectSubset<T, grammar_test_foldersFindUniqueArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grammar_test_folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {grammar_test_foldersFindUniqueOrThrowArgs} args - Arguments to find a Grammar_test_folders
     * @example
     * // Get one Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grammar_test_foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, grammar_test_foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_test_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_test_foldersFindFirstArgs} args - Arguments to find a Grammar_test_folders
     * @example
     * // Get one Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grammar_test_foldersFindFirstArgs>(args?: SelectSubset<T, grammar_test_foldersFindFirstArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_test_folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_test_foldersFindFirstOrThrowArgs} args - Arguments to find a Grammar_test_folders
     * @example
     * // Get one Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grammar_test_foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, grammar_test_foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grammar_test_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_test_foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.findMany()
     * 
     * // Get first 10 Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammar_test_foldersWithIdOnly = await prisma.grammar_test_folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends grammar_test_foldersFindManyArgs>(args?: SelectSubset<T, grammar_test_foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grammar_test_folders.
     * @param {grammar_test_foldersCreateArgs} args - Arguments to create a Grammar_test_folders.
     * @example
     * // Create one Grammar_test_folders
     * const Grammar_test_folders = await prisma.grammar_test_folders.create({
     *   data: {
     *     // ... data to create a Grammar_test_folders
     *   }
     * })
     * 
     */
    create<T extends grammar_test_foldersCreateArgs>(args: SelectSubset<T, grammar_test_foldersCreateArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grammar_test_folders.
     * @param {grammar_test_foldersCreateManyArgs} args - Arguments to create many Grammar_test_folders.
     * @example
     * // Create many Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grammar_test_foldersCreateManyArgs>(args?: SelectSubset<T, grammar_test_foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grammar_test_folders and returns the data saved in the database.
     * @param {grammar_test_foldersCreateManyAndReturnArgs} args - Arguments to create many Grammar_test_folders.
     * @example
     * // Create many Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grammar_test_folders and only return the `id`
     * const grammar_test_foldersWithIdOnly = await prisma.grammar_test_folders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends grammar_test_foldersCreateManyAndReturnArgs>(args?: SelectSubset<T, grammar_test_foldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grammar_test_folders.
     * @param {grammar_test_foldersDeleteArgs} args - Arguments to delete one Grammar_test_folders.
     * @example
     * // Delete one Grammar_test_folders
     * const Grammar_test_folders = await prisma.grammar_test_folders.delete({
     *   where: {
     *     // ... filter to delete one Grammar_test_folders
     *   }
     * })
     * 
     */
    delete<T extends grammar_test_foldersDeleteArgs>(args: SelectSubset<T, grammar_test_foldersDeleteArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grammar_test_folders.
     * @param {grammar_test_foldersUpdateArgs} args - Arguments to update one Grammar_test_folders.
     * @example
     * // Update one Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grammar_test_foldersUpdateArgs>(args: SelectSubset<T, grammar_test_foldersUpdateArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grammar_test_folders.
     * @param {grammar_test_foldersDeleteManyArgs} args - Arguments to filter Grammar_test_folders to delete.
     * @example
     * // Delete a few Grammar_test_folders
     * const { count } = await prisma.grammar_test_folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grammar_test_foldersDeleteManyArgs>(args?: SelectSubset<T, grammar_test_foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_test_foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grammar_test_foldersUpdateManyArgs>(args: SelectSubset<T, grammar_test_foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_test_folders and returns the data updated in the database.
     * @param {grammar_test_foldersUpdateManyAndReturnArgs} args - Arguments to update many Grammar_test_folders.
     * @example
     * // Update many Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grammar_test_folders and only return the `id`
     * const grammar_test_foldersWithIdOnly = await prisma.grammar_test_folders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends grammar_test_foldersUpdateManyAndReturnArgs>(args: SelectSubset<T, grammar_test_foldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grammar_test_folders.
     * @param {grammar_test_foldersUpsertArgs} args - Arguments to update or create a Grammar_test_folders.
     * @example
     * // Update or create a Grammar_test_folders
     * const grammar_test_folders = await prisma.grammar_test_folders.upsert({
     *   create: {
     *     // ... data to create a Grammar_test_folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grammar_test_folders we want to update
     *   }
     * })
     */
    upsert<T extends grammar_test_foldersUpsertArgs>(args: SelectSubset<T, grammar_test_foldersUpsertArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grammar_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_test_foldersCountArgs} args - Arguments to filter Grammar_test_folders to count.
     * @example
     * // Count the number of Grammar_test_folders
     * const count = await prisma.grammar_test_folders.count({
     *   where: {
     *     // ... the filter for the Grammar_test_folders we want to count
     *   }
     * })
    **/
    count<T extends grammar_test_foldersCountArgs>(
      args?: Subset<T, grammar_test_foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Grammar_test_foldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grammar_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Grammar_test_foldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Grammar_test_foldersAggregateArgs>(args: Subset<T, Grammar_test_foldersAggregateArgs>): Prisma.PrismaPromise<GetGrammar_test_foldersAggregateType<T>>

    /**
     * Group by Grammar_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_test_foldersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grammar_test_foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grammar_test_foldersGroupByArgs['orderBy'] }
        : { orderBy?: grammar_test_foldersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grammar_test_foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammar_test_foldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grammar_test_folders model
   */
  readonly fields: grammar_test_foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grammar_test_folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grammar_test_foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar_tests<T extends grammar_test_folders$grammar_testsArgs<ExtArgs> = {}>(args?: Subset<T, grammar_test_folders$grammar_testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grammar_test_folders model
   */
  interface grammar_test_foldersFieldRefs {
    readonly id: FieldRef<"grammar_test_folders", 'String'>
    readonly user_id: FieldRef<"grammar_test_folders", 'String'>
    readonly parent_id: FieldRef<"grammar_test_folders", 'String'>
    readonly name: FieldRef<"grammar_test_folders", 'String'>
    readonly is_favorited: FieldRef<"grammar_test_folders", 'Boolean'>
    readonly is_published: FieldRef<"grammar_test_folders", 'Boolean'>
    readonly tags: FieldRef<"grammar_test_folders", 'String[]'>
    readonly created_at: FieldRef<"grammar_test_folders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * grammar_test_folders findUnique
   */
  export type grammar_test_foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_test_folders to fetch.
     */
    where: grammar_test_foldersWhereUniqueInput
  }

  /**
   * grammar_test_folders findUniqueOrThrow
   */
  export type grammar_test_foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_test_folders to fetch.
     */
    where: grammar_test_foldersWhereUniqueInput
  }

  /**
   * grammar_test_folders findFirst
   */
  export type grammar_test_foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_test_folders to fetch.
     */
    where?: grammar_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_test_folders to fetch.
     */
    orderBy?: grammar_test_foldersOrderByWithRelationInput | grammar_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_test_folders.
     */
    cursor?: grammar_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_test_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_test_folders.
     */
    distinct?: Grammar_test_foldersScalarFieldEnum | Grammar_test_foldersScalarFieldEnum[]
  }

  /**
   * grammar_test_folders findFirstOrThrow
   */
  export type grammar_test_foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_test_folders to fetch.
     */
    where?: grammar_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_test_folders to fetch.
     */
    orderBy?: grammar_test_foldersOrderByWithRelationInput | grammar_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_test_folders.
     */
    cursor?: grammar_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_test_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_test_folders.
     */
    distinct?: Grammar_test_foldersScalarFieldEnum | Grammar_test_foldersScalarFieldEnum[]
  }

  /**
   * grammar_test_folders findMany
   */
  export type grammar_test_foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which grammar_test_folders to fetch.
     */
    where?: grammar_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_test_folders to fetch.
     */
    orderBy?: grammar_test_foldersOrderByWithRelationInput | grammar_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grammar_test_folders.
     */
    cursor?: grammar_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_test_folders.
     */
    skip?: number
    distinct?: Grammar_test_foldersScalarFieldEnum | Grammar_test_foldersScalarFieldEnum[]
  }

  /**
   * grammar_test_folders create
   */
  export type grammar_test_foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a grammar_test_folders.
     */
    data: XOR<grammar_test_foldersCreateInput, grammar_test_foldersUncheckedCreateInput>
  }

  /**
   * grammar_test_folders createMany
   */
  export type grammar_test_foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grammar_test_folders.
     */
    data: grammar_test_foldersCreateManyInput | grammar_test_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_test_folders createManyAndReturn
   */
  export type grammar_test_foldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * The data used to create many grammar_test_folders.
     */
    data: grammar_test_foldersCreateManyInput | grammar_test_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_test_folders update
   */
  export type grammar_test_foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a grammar_test_folders.
     */
    data: XOR<grammar_test_foldersUpdateInput, grammar_test_foldersUncheckedUpdateInput>
    /**
     * Choose, which grammar_test_folders to update.
     */
    where: grammar_test_foldersWhereUniqueInput
  }

  /**
   * grammar_test_folders updateMany
   */
  export type grammar_test_foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grammar_test_folders.
     */
    data: XOR<grammar_test_foldersUpdateManyMutationInput, grammar_test_foldersUncheckedUpdateManyInput>
    /**
     * Filter which grammar_test_folders to update
     */
    where?: grammar_test_foldersWhereInput
    /**
     * Limit how many grammar_test_folders to update.
     */
    limit?: number
  }

  /**
   * grammar_test_folders updateManyAndReturn
   */
  export type grammar_test_foldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * The data used to update grammar_test_folders.
     */
    data: XOR<grammar_test_foldersUpdateManyMutationInput, grammar_test_foldersUncheckedUpdateManyInput>
    /**
     * Filter which grammar_test_folders to update
     */
    where?: grammar_test_foldersWhereInput
    /**
     * Limit how many grammar_test_folders to update.
     */
    limit?: number
  }

  /**
   * grammar_test_folders upsert
   */
  export type grammar_test_foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the grammar_test_folders to update in case it exists.
     */
    where: grammar_test_foldersWhereUniqueInput
    /**
     * In case the grammar_test_folders found by the `where` argument doesn't exist, create a new grammar_test_folders with this data.
     */
    create: XOR<grammar_test_foldersCreateInput, grammar_test_foldersUncheckedCreateInput>
    /**
     * In case the grammar_test_folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grammar_test_foldersUpdateInput, grammar_test_foldersUncheckedUpdateInput>
  }

  /**
   * grammar_test_folders delete
   */
  export type grammar_test_foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    /**
     * Filter which grammar_test_folders to delete.
     */
    where: grammar_test_foldersWhereUniqueInput
  }

  /**
   * grammar_test_folders deleteMany
   */
  export type grammar_test_foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_test_folders to delete
     */
    where?: grammar_test_foldersWhereInput
    /**
     * Limit how many grammar_test_folders to delete.
     */
    limit?: number
  }

  /**
   * grammar_test_folders.grammar_tests
   */
  export type grammar_test_folders$grammar_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    where?: grammar_testsWhereInput
    orderBy?: grammar_testsOrderByWithRelationInput | grammar_testsOrderByWithRelationInput[]
    cursor?: grammar_testsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Grammar_testsScalarFieldEnum | Grammar_testsScalarFieldEnum[]
  }

  /**
   * grammar_test_folders without action
   */
  export type grammar_test_foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
  }


  /**
   * Model grammar_tests
   */

  export type AggregateGrammar_tests = {
    _count: Grammar_testsCountAggregateOutputType | null
    _min: Grammar_testsMinAggregateOutputType | null
    _max: Grammar_testsMaxAggregateOutputType | null
  }

  export type Grammar_testsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_testsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Grammar_testsCountAggregateOutputType = {
    id: number
    user_id: number
    folder_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Grammar_testsMinAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_testsMaxAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Grammar_testsCountAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Grammar_testsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_tests to aggregate.
     */
    where?: grammar_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_tests to fetch.
     */
    orderBy?: grammar_testsOrderByWithRelationInput | grammar_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grammar_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grammar_tests
    **/
    _count?: true | Grammar_testsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Grammar_testsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Grammar_testsMaxAggregateInputType
  }

  export type GetGrammar_testsAggregateType<T extends Grammar_testsAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammar_tests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammar_tests[P]>
      : GetScalarType<T[P], AggregateGrammar_tests[P]>
  }




  export type grammar_testsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grammar_testsWhereInput
    orderBy?: grammar_testsOrderByWithAggregationInput | grammar_testsOrderByWithAggregationInput[]
    by: Grammar_testsScalarFieldEnum[] | Grammar_testsScalarFieldEnum
    having?: grammar_testsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Grammar_testsCountAggregateInputType | true
    _min?: Grammar_testsMinAggregateInputType
    _max?: Grammar_testsMaxAggregateInputType
  }

  export type Grammar_testsGroupByOutputType = {
    id: string
    user_id: string
    folder_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Grammar_testsCountAggregateOutputType | null
    _min: Grammar_testsMinAggregateOutputType | null
    _max: Grammar_testsMaxAggregateOutputType | null
  }

  type GetGrammar_testsGroupByPayload<T extends grammar_testsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Grammar_testsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Grammar_testsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Grammar_testsGroupByOutputType[P]>
            : GetScalarType<T[P], Grammar_testsGroupByOutputType[P]>
        }
      >
    >


  export type grammar_testsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_file_test_links?: boolean | grammar_tests$grammar_file_test_linksArgs<ExtArgs>
    grammar_test_folders?: boolean | grammar_tests$grammar_test_foldersArgs<ExtArgs>
    _count?: boolean | Grammar_testsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_tests"]>

  export type grammar_testsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_test_folders?: boolean | grammar_tests$grammar_test_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_tests"]>

  export type grammar_testsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    grammar_test_folders?: boolean | grammar_tests$grammar_test_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["grammar_tests"]>

  export type grammar_testsSelectScalar = {
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type grammar_testsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "folder_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["grammar_tests"]>
  export type grammar_testsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_file_test_links?: boolean | grammar_tests$grammar_file_test_linksArgs<ExtArgs>
    grammar_test_folders?: boolean | grammar_tests$grammar_test_foldersArgs<ExtArgs>
    _count?: boolean | Grammar_testsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type grammar_testsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_test_folders?: boolean | grammar_tests$grammar_test_foldersArgs<ExtArgs>
  }
  export type grammar_testsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar_test_folders?: boolean | grammar_tests$grammar_test_foldersArgs<ExtArgs>
  }

  export type $grammar_testsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grammar_tests"
    objects: {
      grammar_file_test_links: Prisma.$grammar_file_test_linksPayload<ExtArgs>[]
      grammar_test_folders: Prisma.$grammar_test_foldersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      folder_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["grammar_tests"]>
    composites: {}
  }

  type grammar_testsGetPayload<S extends boolean | null | undefined | grammar_testsDefaultArgs> = $Result.GetResult<Prisma.$grammar_testsPayload, S>

  type grammar_testsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<grammar_testsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Grammar_testsCountAggregateInputType | true
    }

  export interface grammar_testsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grammar_tests'], meta: { name: 'grammar_tests' } }
    /**
     * Find zero or one Grammar_tests that matches the filter.
     * @param {grammar_testsFindUniqueArgs} args - Arguments to find a Grammar_tests
     * @example
     * // Get one Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grammar_testsFindUniqueArgs>(args: SelectSubset<T, grammar_testsFindUniqueArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grammar_tests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {grammar_testsFindUniqueOrThrowArgs} args - Arguments to find a Grammar_tests
     * @example
     * // Get one Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grammar_testsFindUniqueOrThrowArgs>(args: SelectSubset<T, grammar_testsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_testsFindFirstArgs} args - Arguments to find a Grammar_tests
     * @example
     * // Get one Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grammar_testsFindFirstArgs>(args?: SelectSubset<T, grammar_testsFindFirstArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar_tests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_testsFindFirstOrThrowArgs} args - Arguments to find a Grammar_tests
     * @example
     * // Get one Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grammar_testsFindFirstOrThrowArgs>(args?: SelectSubset<T, grammar_testsFindFirstOrThrowArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grammar_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_testsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.findMany()
     * 
     * // Get first 10 Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammar_testsWithIdOnly = await prisma.grammar_tests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends grammar_testsFindManyArgs>(args?: SelectSubset<T, grammar_testsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grammar_tests.
     * @param {grammar_testsCreateArgs} args - Arguments to create a Grammar_tests.
     * @example
     * // Create one Grammar_tests
     * const Grammar_tests = await prisma.grammar_tests.create({
     *   data: {
     *     // ... data to create a Grammar_tests
     *   }
     * })
     * 
     */
    create<T extends grammar_testsCreateArgs>(args: SelectSubset<T, grammar_testsCreateArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grammar_tests.
     * @param {grammar_testsCreateManyArgs} args - Arguments to create many Grammar_tests.
     * @example
     * // Create many Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grammar_testsCreateManyArgs>(args?: SelectSubset<T, grammar_testsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grammar_tests and returns the data saved in the database.
     * @param {grammar_testsCreateManyAndReturnArgs} args - Arguments to create many Grammar_tests.
     * @example
     * // Create many Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grammar_tests and only return the `id`
     * const grammar_testsWithIdOnly = await prisma.grammar_tests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends grammar_testsCreateManyAndReturnArgs>(args?: SelectSubset<T, grammar_testsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grammar_tests.
     * @param {grammar_testsDeleteArgs} args - Arguments to delete one Grammar_tests.
     * @example
     * // Delete one Grammar_tests
     * const Grammar_tests = await prisma.grammar_tests.delete({
     *   where: {
     *     // ... filter to delete one Grammar_tests
     *   }
     * })
     * 
     */
    delete<T extends grammar_testsDeleteArgs>(args: SelectSubset<T, grammar_testsDeleteArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grammar_tests.
     * @param {grammar_testsUpdateArgs} args - Arguments to update one Grammar_tests.
     * @example
     * // Update one Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grammar_testsUpdateArgs>(args: SelectSubset<T, grammar_testsUpdateArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grammar_tests.
     * @param {grammar_testsDeleteManyArgs} args - Arguments to filter Grammar_tests to delete.
     * @example
     * // Delete a few Grammar_tests
     * const { count } = await prisma.grammar_tests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grammar_testsDeleteManyArgs>(args?: SelectSubset<T, grammar_testsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_testsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grammar_testsUpdateManyArgs>(args: SelectSubset<T, grammar_testsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammar_tests and returns the data updated in the database.
     * @param {grammar_testsUpdateManyAndReturnArgs} args - Arguments to update many Grammar_tests.
     * @example
     * // Update many Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grammar_tests and only return the `id`
     * const grammar_testsWithIdOnly = await prisma.grammar_tests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends grammar_testsUpdateManyAndReturnArgs>(args: SelectSubset<T, grammar_testsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grammar_tests.
     * @param {grammar_testsUpsertArgs} args - Arguments to update or create a Grammar_tests.
     * @example
     * // Update or create a Grammar_tests
     * const grammar_tests = await prisma.grammar_tests.upsert({
     *   create: {
     *     // ... data to create a Grammar_tests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grammar_tests we want to update
     *   }
     * })
     */
    upsert<T extends grammar_testsUpsertArgs>(args: SelectSubset<T, grammar_testsUpsertArgs<ExtArgs>>): Prisma__grammar_testsClient<$Result.GetResult<Prisma.$grammar_testsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grammar_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_testsCountArgs} args - Arguments to filter Grammar_tests to count.
     * @example
     * // Count the number of Grammar_tests
     * const count = await prisma.grammar_tests.count({
     *   where: {
     *     // ... the filter for the Grammar_tests we want to count
     *   }
     * })
    **/
    count<T extends grammar_testsCountArgs>(
      args?: Subset<T, grammar_testsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Grammar_testsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grammar_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Grammar_testsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Grammar_testsAggregateArgs>(args: Subset<T, Grammar_testsAggregateArgs>): Prisma.PrismaPromise<GetGrammar_testsAggregateType<T>>

    /**
     * Group by Grammar_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grammar_testsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grammar_testsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grammar_testsGroupByArgs['orderBy'] }
        : { orderBy?: grammar_testsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grammar_testsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammar_testsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grammar_tests model
   */
  readonly fields: grammar_testsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grammar_tests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grammar_testsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar_file_test_links<T extends grammar_tests$grammar_file_test_linksArgs<ExtArgs> = {}>(args?: Subset<T, grammar_tests$grammar_file_test_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grammar_file_test_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grammar_test_folders<T extends grammar_tests$grammar_test_foldersArgs<ExtArgs> = {}>(args?: Subset<T, grammar_tests$grammar_test_foldersArgs<ExtArgs>>): Prisma__grammar_test_foldersClient<$Result.GetResult<Prisma.$grammar_test_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grammar_tests model
   */
  interface grammar_testsFieldRefs {
    readonly id: FieldRef<"grammar_tests", 'String'>
    readonly user_id: FieldRef<"grammar_tests", 'String'>
    readonly folder_id: FieldRef<"grammar_tests", 'String'>
    readonly name: FieldRef<"grammar_tests", 'String'>
    readonly is_favorited: FieldRef<"grammar_tests", 'Boolean'>
    readonly is_published: FieldRef<"grammar_tests", 'Boolean'>
    readonly tags: FieldRef<"grammar_tests", 'String[]'>
    readonly created_at: FieldRef<"grammar_tests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * grammar_tests findUnique
   */
  export type grammar_testsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * Filter, which grammar_tests to fetch.
     */
    where: grammar_testsWhereUniqueInput
  }

  /**
   * grammar_tests findUniqueOrThrow
   */
  export type grammar_testsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * Filter, which grammar_tests to fetch.
     */
    where: grammar_testsWhereUniqueInput
  }

  /**
   * grammar_tests findFirst
   */
  export type grammar_testsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * Filter, which grammar_tests to fetch.
     */
    where?: grammar_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_tests to fetch.
     */
    orderBy?: grammar_testsOrderByWithRelationInput | grammar_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_tests.
     */
    cursor?: grammar_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_tests.
     */
    distinct?: Grammar_testsScalarFieldEnum | Grammar_testsScalarFieldEnum[]
  }

  /**
   * grammar_tests findFirstOrThrow
   */
  export type grammar_testsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * Filter, which grammar_tests to fetch.
     */
    where?: grammar_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_tests to fetch.
     */
    orderBy?: grammar_testsOrderByWithRelationInput | grammar_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grammar_tests.
     */
    cursor?: grammar_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grammar_tests.
     */
    distinct?: Grammar_testsScalarFieldEnum | Grammar_testsScalarFieldEnum[]
  }

  /**
   * grammar_tests findMany
   */
  export type grammar_testsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * Filter, which grammar_tests to fetch.
     */
    where?: grammar_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grammar_tests to fetch.
     */
    orderBy?: grammar_testsOrderByWithRelationInput | grammar_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grammar_tests.
     */
    cursor?: grammar_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grammar_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grammar_tests.
     */
    skip?: number
    distinct?: Grammar_testsScalarFieldEnum | Grammar_testsScalarFieldEnum[]
  }

  /**
   * grammar_tests create
   */
  export type grammar_testsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * The data needed to create a grammar_tests.
     */
    data: XOR<grammar_testsCreateInput, grammar_testsUncheckedCreateInput>
  }

  /**
   * grammar_tests createMany
   */
  export type grammar_testsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grammar_tests.
     */
    data: grammar_testsCreateManyInput | grammar_testsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grammar_tests createManyAndReturn
   */
  export type grammar_testsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * The data used to create many grammar_tests.
     */
    data: grammar_testsCreateManyInput | grammar_testsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * grammar_tests update
   */
  export type grammar_testsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * The data needed to update a grammar_tests.
     */
    data: XOR<grammar_testsUpdateInput, grammar_testsUncheckedUpdateInput>
    /**
     * Choose, which grammar_tests to update.
     */
    where: grammar_testsWhereUniqueInput
  }

  /**
   * grammar_tests updateMany
   */
  export type grammar_testsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grammar_tests.
     */
    data: XOR<grammar_testsUpdateManyMutationInput, grammar_testsUncheckedUpdateManyInput>
    /**
     * Filter which grammar_tests to update
     */
    where?: grammar_testsWhereInput
    /**
     * Limit how many grammar_tests to update.
     */
    limit?: number
  }

  /**
   * grammar_tests updateManyAndReturn
   */
  export type grammar_testsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * The data used to update grammar_tests.
     */
    data: XOR<grammar_testsUpdateManyMutationInput, grammar_testsUncheckedUpdateManyInput>
    /**
     * Filter which grammar_tests to update
     */
    where?: grammar_testsWhereInput
    /**
     * Limit how many grammar_tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * grammar_tests upsert
   */
  export type grammar_testsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * The filter to search for the grammar_tests to update in case it exists.
     */
    where: grammar_testsWhereUniqueInput
    /**
     * In case the grammar_tests found by the `where` argument doesn't exist, create a new grammar_tests with this data.
     */
    create: XOR<grammar_testsCreateInput, grammar_testsUncheckedCreateInput>
    /**
     * In case the grammar_tests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grammar_testsUpdateInput, grammar_testsUncheckedUpdateInput>
  }

  /**
   * grammar_tests delete
   */
  export type grammar_testsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
    /**
     * Filter which grammar_tests to delete.
     */
    where: grammar_testsWhereUniqueInput
  }

  /**
   * grammar_tests deleteMany
   */
  export type grammar_testsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grammar_tests to delete
     */
    where?: grammar_testsWhereInput
    /**
     * Limit how many grammar_tests to delete.
     */
    limit?: number
  }

  /**
   * grammar_tests.grammar_file_test_links
   */
  export type grammar_tests$grammar_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_file_test_links
     */
    select?: grammar_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_file_test_links
     */
    omit?: grammar_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_file_test_linksInclude<ExtArgs> | null
    where?: grammar_file_test_linksWhereInput
    orderBy?: grammar_file_test_linksOrderByWithRelationInput | grammar_file_test_linksOrderByWithRelationInput[]
    cursor?: grammar_file_test_linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Grammar_file_test_linksScalarFieldEnum | Grammar_file_test_linksScalarFieldEnum[]
  }

  /**
   * grammar_tests.grammar_test_folders
   */
  export type grammar_tests$grammar_test_foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_test_folders
     */
    select?: grammar_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_test_folders
     */
    omit?: grammar_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_test_foldersInclude<ExtArgs> | null
    where?: grammar_test_foldersWhereInput
  }

  /**
   * grammar_tests without action
   */
  export type grammar_testsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grammar_tests
     */
    select?: grammar_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grammar_tests
     */
    omit?: grammar_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grammar_testsInclude<ExtArgs> | null
  }


  /**
   * Model voca_file_test_links
   */

  export type AggregateVoca_file_test_links = {
    _count: Voca_file_test_linksCountAggregateOutputType | null
    _min: Voca_file_test_linksMinAggregateOutputType | null
    _max: Voca_file_test_linksMaxAggregateOutputType | null
  }

  export type Voca_file_test_linksMinAggregateOutputType = {
    file_id: string | null
    test_id: string | null
  }

  export type Voca_file_test_linksMaxAggregateOutputType = {
    file_id: string | null
    test_id: string | null
  }

  export type Voca_file_test_linksCountAggregateOutputType = {
    file_id: number
    test_id: number
    _all: number
  }


  export type Voca_file_test_linksMinAggregateInputType = {
    file_id?: true
    test_id?: true
  }

  export type Voca_file_test_linksMaxAggregateInputType = {
    file_id?: true
    test_id?: true
  }

  export type Voca_file_test_linksCountAggregateInputType = {
    file_id?: true
    test_id?: true
    _all?: true
  }

  export type Voca_file_test_linksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_file_test_links to aggregate.
     */
    where?: voca_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_file_test_links to fetch.
     */
    orderBy?: voca_file_test_linksOrderByWithRelationInput | voca_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voca_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_file_test_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voca_file_test_links
    **/
    _count?: true | Voca_file_test_linksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Voca_file_test_linksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Voca_file_test_linksMaxAggregateInputType
  }

  export type GetVoca_file_test_linksAggregateType<T extends Voca_file_test_linksAggregateArgs> = {
        [P in keyof T & keyof AggregateVoca_file_test_links]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoca_file_test_links[P]>
      : GetScalarType<T[P], AggregateVoca_file_test_links[P]>
  }




  export type voca_file_test_linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_file_test_linksWhereInput
    orderBy?: voca_file_test_linksOrderByWithAggregationInput | voca_file_test_linksOrderByWithAggregationInput[]
    by: Voca_file_test_linksScalarFieldEnum[] | Voca_file_test_linksScalarFieldEnum
    having?: voca_file_test_linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Voca_file_test_linksCountAggregateInputType | true
    _min?: Voca_file_test_linksMinAggregateInputType
    _max?: Voca_file_test_linksMaxAggregateInputType
  }

  export type Voca_file_test_linksGroupByOutputType = {
    file_id: string
    test_id: string
    _count: Voca_file_test_linksCountAggregateOutputType | null
    _min: Voca_file_test_linksMinAggregateOutputType | null
    _max: Voca_file_test_linksMaxAggregateOutputType | null
  }

  type GetVoca_file_test_linksGroupByPayload<T extends voca_file_test_linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Voca_file_test_linksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Voca_file_test_linksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Voca_file_test_linksGroupByOutputType[P]>
            : GetScalarType<T[P], Voca_file_test_linksGroupByOutputType[P]>
        }
      >
    >


  export type voca_file_test_linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    test_id?: boolean
    voca_tests?: boolean | voca_testsDefaultArgs<ExtArgs>
    voca_files?: boolean | voca_filesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_file_test_links"]>

  export type voca_file_test_linksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    test_id?: boolean
    voca_tests?: boolean | voca_testsDefaultArgs<ExtArgs>
    voca_files?: boolean | voca_filesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_file_test_links"]>

  export type voca_file_test_linksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    test_id?: boolean
    voca_tests?: boolean | voca_testsDefaultArgs<ExtArgs>
    voca_files?: boolean | voca_filesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_file_test_links"]>

  export type voca_file_test_linksSelectScalar = {
    file_id?: boolean
    test_id?: boolean
  }

  export type voca_file_test_linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "test_id", ExtArgs["result"]["voca_file_test_links"]>
  export type voca_file_test_linksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_tests?: boolean | voca_testsDefaultArgs<ExtArgs>
    voca_files?: boolean | voca_filesDefaultArgs<ExtArgs>
  }
  export type voca_file_test_linksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_tests?: boolean | voca_testsDefaultArgs<ExtArgs>
    voca_files?: boolean | voca_filesDefaultArgs<ExtArgs>
  }
  export type voca_file_test_linksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_tests?: boolean | voca_testsDefaultArgs<ExtArgs>
    voca_files?: boolean | voca_filesDefaultArgs<ExtArgs>
  }

  export type $voca_file_test_linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voca_file_test_links"
    objects: {
      voca_tests: Prisma.$voca_testsPayload<ExtArgs>
      voca_files: Prisma.$voca_filesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: string
      test_id: string
    }, ExtArgs["result"]["voca_file_test_links"]>
    composites: {}
  }

  type voca_file_test_linksGetPayload<S extends boolean | null | undefined | voca_file_test_linksDefaultArgs> = $Result.GetResult<Prisma.$voca_file_test_linksPayload, S>

  type voca_file_test_linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voca_file_test_linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Voca_file_test_linksCountAggregateInputType | true
    }

  export interface voca_file_test_linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voca_file_test_links'], meta: { name: 'voca_file_test_links' } }
    /**
     * Find zero or one Voca_file_test_links that matches the filter.
     * @param {voca_file_test_linksFindUniqueArgs} args - Arguments to find a Voca_file_test_links
     * @example
     * // Get one Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voca_file_test_linksFindUniqueArgs>(args: SelectSubset<T, voca_file_test_linksFindUniqueArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voca_file_test_links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voca_file_test_linksFindUniqueOrThrowArgs} args - Arguments to find a Voca_file_test_links
     * @example
     * // Get one Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voca_file_test_linksFindUniqueOrThrowArgs>(args: SelectSubset<T, voca_file_test_linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_file_test_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_file_test_linksFindFirstArgs} args - Arguments to find a Voca_file_test_links
     * @example
     * // Get one Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voca_file_test_linksFindFirstArgs>(args?: SelectSubset<T, voca_file_test_linksFindFirstArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_file_test_links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_file_test_linksFindFirstOrThrowArgs} args - Arguments to find a Voca_file_test_links
     * @example
     * // Get one Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voca_file_test_linksFindFirstOrThrowArgs>(args?: SelectSubset<T, voca_file_test_linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voca_file_test_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_file_test_linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.findMany()
     * 
     * // Get first 10 Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const voca_file_test_linksWithFile_idOnly = await prisma.voca_file_test_links.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends voca_file_test_linksFindManyArgs>(args?: SelectSubset<T, voca_file_test_linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voca_file_test_links.
     * @param {voca_file_test_linksCreateArgs} args - Arguments to create a Voca_file_test_links.
     * @example
     * // Create one Voca_file_test_links
     * const Voca_file_test_links = await prisma.voca_file_test_links.create({
     *   data: {
     *     // ... data to create a Voca_file_test_links
     *   }
     * })
     * 
     */
    create<T extends voca_file_test_linksCreateArgs>(args: SelectSubset<T, voca_file_test_linksCreateArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voca_file_test_links.
     * @param {voca_file_test_linksCreateManyArgs} args - Arguments to create many Voca_file_test_links.
     * @example
     * // Create many Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voca_file_test_linksCreateManyArgs>(args?: SelectSubset<T, voca_file_test_linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voca_file_test_links and returns the data saved in the database.
     * @param {voca_file_test_linksCreateManyAndReturnArgs} args - Arguments to create many Voca_file_test_links.
     * @example
     * // Create many Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voca_file_test_links and only return the `file_id`
     * const voca_file_test_linksWithFile_idOnly = await prisma.voca_file_test_links.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voca_file_test_linksCreateManyAndReturnArgs>(args?: SelectSubset<T, voca_file_test_linksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voca_file_test_links.
     * @param {voca_file_test_linksDeleteArgs} args - Arguments to delete one Voca_file_test_links.
     * @example
     * // Delete one Voca_file_test_links
     * const Voca_file_test_links = await prisma.voca_file_test_links.delete({
     *   where: {
     *     // ... filter to delete one Voca_file_test_links
     *   }
     * })
     * 
     */
    delete<T extends voca_file_test_linksDeleteArgs>(args: SelectSubset<T, voca_file_test_linksDeleteArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voca_file_test_links.
     * @param {voca_file_test_linksUpdateArgs} args - Arguments to update one Voca_file_test_links.
     * @example
     * // Update one Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voca_file_test_linksUpdateArgs>(args: SelectSubset<T, voca_file_test_linksUpdateArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voca_file_test_links.
     * @param {voca_file_test_linksDeleteManyArgs} args - Arguments to filter Voca_file_test_links to delete.
     * @example
     * // Delete a few Voca_file_test_links
     * const { count } = await prisma.voca_file_test_links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voca_file_test_linksDeleteManyArgs>(args?: SelectSubset<T, voca_file_test_linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_file_test_linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voca_file_test_linksUpdateManyArgs>(args: SelectSubset<T, voca_file_test_linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_file_test_links and returns the data updated in the database.
     * @param {voca_file_test_linksUpdateManyAndReturnArgs} args - Arguments to update many Voca_file_test_links.
     * @example
     * // Update many Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voca_file_test_links and only return the `file_id`
     * const voca_file_test_linksWithFile_idOnly = await prisma.voca_file_test_links.updateManyAndReturn({
     *   select: { file_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voca_file_test_linksUpdateManyAndReturnArgs>(args: SelectSubset<T, voca_file_test_linksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voca_file_test_links.
     * @param {voca_file_test_linksUpsertArgs} args - Arguments to update or create a Voca_file_test_links.
     * @example
     * // Update or create a Voca_file_test_links
     * const voca_file_test_links = await prisma.voca_file_test_links.upsert({
     *   create: {
     *     // ... data to create a Voca_file_test_links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voca_file_test_links we want to update
     *   }
     * })
     */
    upsert<T extends voca_file_test_linksUpsertArgs>(args: SelectSubset<T, voca_file_test_linksUpsertArgs<ExtArgs>>): Prisma__voca_file_test_linksClient<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voca_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_file_test_linksCountArgs} args - Arguments to filter Voca_file_test_links to count.
     * @example
     * // Count the number of Voca_file_test_links
     * const count = await prisma.voca_file_test_links.count({
     *   where: {
     *     // ... the filter for the Voca_file_test_links we want to count
     *   }
     * })
    **/
    count<T extends voca_file_test_linksCountArgs>(
      args?: Subset<T, voca_file_test_linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Voca_file_test_linksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voca_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Voca_file_test_linksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Voca_file_test_linksAggregateArgs>(args: Subset<T, Voca_file_test_linksAggregateArgs>): Prisma.PrismaPromise<GetVoca_file_test_linksAggregateType<T>>

    /**
     * Group by Voca_file_test_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_file_test_linksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voca_file_test_linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voca_file_test_linksGroupByArgs['orderBy'] }
        : { orderBy?: voca_file_test_linksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voca_file_test_linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoca_file_test_linksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voca_file_test_links model
   */
  readonly fields: voca_file_test_linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voca_file_test_links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voca_file_test_linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voca_tests<T extends voca_testsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, voca_testsDefaultArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voca_files<T extends voca_filesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, voca_filesDefaultArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voca_file_test_links model
   */
  interface voca_file_test_linksFieldRefs {
    readonly file_id: FieldRef<"voca_file_test_links", 'String'>
    readonly test_id: FieldRef<"voca_file_test_links", 'String'>
  }
    

  // Custom InputTypes
  /**
   * voca_file_test_links findUnique
   */
  export type voca_file_test_linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which voca_file_test_links to fetch.
     */
    where: voca_file_test_linksWhereUniqueInput
  }

  /**
   * voca_file_test_links findUniqueOrThrow
   */
  export type voca_file_test_linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which voca_file_test_links to fetch.
     */
    where: voca_file_test_linksWhereUniqueInput
  }

  /**
   * voca_file_test_links findFirst
   */
  export type voca_file_test_linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which voca_file_test_links to fetch.
     */
    where?: voca_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_file_test_links to fetch.
     */
    orderBy?: voca_file_test_linksOrderByWithRelationInput | voca_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_file_test_links.
     */
    cursor?: voca_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_file_test_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_file_test_links.
     */
    distinct?: Voca_file_test_linksScalarFieldEnum | Voca_file_test_linksScalarFieldEnum[]
  }

  /**
   * voca_file_test_links findFirstOrThrow
   */
  export type voca_file_test_linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which voca_file_test_links to fetch.
     */
    where?: voca_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_file_test_links to fetch.
     */
    orderBy?: voca_file_test_linksOrderByWithRelationInput | voca_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_file_test_links.
     */
    cursor?: voca_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_file_test_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_file_test_links.
     */
    distinct?: Voca_file_test_linksScalarFieldEnum | Voca_file_test_linksScalarFieldEnum[]
  }

  /**
   * voca_file_test_links findMany
   */
  export type voca_file_test_linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter, which voca_file_test_links to fetch.
     */
    where?: voca_file_test_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_file_test_links to fetch.
     */
    orderBy?: voca_file_test_linksOrderByWithRelationInput | voca_file_test_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voca_file_test_links.
     */
    cursor?: voca_file_test_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_file_test_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_file_test_links.
     */
    skip?: number
    distinct?: Voca_file_test_linksScalarFieldEnum | Voca_file_test_linksScalarFieldEnum[]
  }

  /**
   * voca_file_test_links create
   */
  export type voca_file_test_linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * The data needed to create a voca_file_test_links.
     */
    data: XOR<voca_file_test_linksCreateInput, voca_file_test_linksUncheckedCreateInput>
  }

  /**
   * voca_file_test_links createMany
   */
  export type voca_file_test_linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voca_file_test_links.
     */
    data: voca_file_test_linksCreateManyInput | voca_file_test_linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_file_test_links createManyAndReturn
   */
  export type voca_file_test_linksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * The data used to create many voca_file_test_links.
     */
    data: voca_file_test_linksCreateManyInput | voca_file_test_linksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * voca_file_test_links update
   */
  export type voca_file_test_linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * The data needed to update a voca_file_test_links.
     */
    data: XOR<voca_file_test_linksUpdateInput, voca_file_test_linksUncheckedUpdateInput>
    /**
     * Choose, which voca_file_test_links to update.
     */
    where: voca_file_test_linksWhereUniqueInput
  }

  /**
   * voca_file_test_links updateMany
   */
  export type voca_file_test_linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voca_file_test_links.
     */
    data: XOR<voca_file_test_linksUpdateManyMutationInput, voca_file_test_linksUncheckedUpdateManyInput>
    /**
     * Filter which voca_file_test_links to update
     */
    where?: voca_file_test_linksWhereInput
    /**
     * Limit how many voca_file_test_links to update.
     */
    limit?: number
  }

  /**
   * voca_file_test_links updateManyAndReturn
   */
  export type voca_file_test_linksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * The data used to update voca_file_test_links.
     */
    data: XOR<voca_file_test_linksUpdateManyMutationInput, voca_file_test_linksUncheckedUpdateManyInput>
    /**
     * Filter which voca_file_test_links to update
     */
    where?: voca_file_test_linksWhereInput
    /**
     * Limit how many voca_file_test_links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * voca_file_test_links upsert
   */
  export type voca_file_test_linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * The filter to search for the voca_file_test_links to update in case it exists.
     */
    where: voca_file_test_linksWhereUniqueInput
    /**
     * In case the voca_file_test_links found by the `where` argument doesn't exist, create a new voca_file_test_links with this data.
     */
    create: XOR<voca_file_test_linksCreateInput, voca_file_test_linksUncheckedCreateInput>
    /**
     * In case the voca_file_test_links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voca_file_test_linksUpdateInput, voca_file_test_linksUncheckedUpdateInput>
  }

  /**
   * voca_file_test_links delete
   */
  export type voca_file_test_linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    /**
     * Filter which voca_file_test_links to delete.
     */
    where: voca_file_test_linksWhereUniqueInput
  }

  /**
   * voca_file_test_links deleteMany
   */
  export type voca_file_test_linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_file_test_links to delete
     */
    where?: voca_file_test_linksWhereInput
    /**
     * Limit how many voca_file_test_links to delete.
     */
    limit?: number
  }

  /**
   * voca_file_test_links without action
   */
  export type voca_file_test_linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
  }


  /**
   * Model voca_files
   */

  export type AggregateVoca_files = {
    _count: Voca_filesCountAggregateOutputType | null
    _min: Voca_filesMinAggregateOutputType | null
    _max: Voca_filesMaxAggregateOutputType | null
  }

  export type Voca_filesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_filesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_filesCountAggregateOutputType = {
    id: number
    user_id: number
    folder_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Voca_filesMinAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_filesMaxAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_filesCountAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Voca_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_files to aggregate.
     */
    where?: voca_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_files to fetch.
     */
    orderBy?: voca_filesOrderByWithRelationInput | voca_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voca_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voca_files
    **/
    _count?: true | Voca_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Voca_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Voca_filesMaxAggregateInputType
  }

  export type GetVoca_filesAggregateType<T extends Voca_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateVoca_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoca_files[P]>
      : GetScalarType<T[P], AggregateVoca_files[P]>
  }




  export type voca_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_filesWhereInput
    orderBy?: voca_filesOrderByWithAggregationInput | voca_filesOrderByWithAggregationInput[]
    by: Voca_filesScalarFieldEnum[] | Voca_filesScalarFieldEnum
    having?: voca_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Voca_filesCountAggregateInputType | true
    _min?: Voca_filesMinAggregateInputType
    _max?: Voca_filesMaxAggregateInputType
  }

  export type Voca_filesGroupByOutputType = {
    id: string
    user_id: string
    folder_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Voca_filesCountAggregateOutputType | null
    _min: Voca_filesMinAggregateOutputType | null
    _max: Voca_filesMaxAggregateOutputType | null
  }

  type GetVoca_filesGroupByPayload<T extends voca_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Voca_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Voca_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Voca_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Voca_filesGroupByOutputType[P]>
        }
      >
    >


  export type voca_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_file_test_links?: boolean | voca_files$voca_file_test_linksArgs<ExtArgs>
    voca_folders?: boolean | voca_files$voca_foldersArgs<ExtArgs>
    _count?: boolean | Voca_filesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_files"]>

  export type voca_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_folders?: boolean | voca_files$voca_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["voca_files"]>

  export type voca_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_folders?: boolean | voca_files$voca_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["voca_files"]>

  export type voca_filesSelectScalar = {
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type voca_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "folder_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["voca_files"]>
  export type voca_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_file_test_links?: boolean | voca_files$voca_file_test_linksArgs<ExtArgs>
    voca_folders?: boolean | voca_files$voca_foldersArgs<ExtArgs>
    _count?: boolean | Voca_filesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type voca_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_folders?: boolean | voca_files$voca_foldersArgs<ExtArgs>
  }
  export type voca_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_folders?: boolean | voca_files$voca_foldersArgs<ExtArgs>
  }

  export type $voca_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voca_files"
    objects: {
      voca_file_test_links: Prisma.$voca_file_test_linksPayload<ExtArgs>[]
      voca_folders: Prisma.$voca_foldersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      folder_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["voca_files"]>
    composites: {}
  }

  type voca_filesGetPayload<S extends boolean | null | undefined | voca_filesDefaultArgs> = $Result.GetResult<Prisma.$voca_filesPayload, S>

  type voca_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voca_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Voca_filesCountAggregateInputType | true
    }

  export interface voca_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voca_files'], meta: { name: 'voca_files' } }
    /**
     * Find zero or one Voca_files that matches the filter.
     * @param {voca_filesFindUniqueArgs} args - Arguments to find a Voca_files
     * @example
     * // Get one Voca_files
     * const voca_files = await prisma.voca_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voca_filesFindUniqueArgs>(args: SelectSubset<T, voca_filesFindUniqueArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voca_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voca_filesFindUniqueOrThrowArgs} args - Arguments to find a Voca_files
     * @example
     * // Get one Voca_files
     * const voca_files = await prisma.voca_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voca_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, voca_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_filesFindFirstArgs} args - Arguments to find a Voca_files
     * @example
     * // Get one Voca_files
     * const voca_files = await prisma.voca_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voca_filesFindFirstArgs>(args?: SelectSubset<T, voca_filesFindFirstArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_filesFindFirstOrThrowArgs} args - Arguments to find a Voca_files
     * @example
     * // Get one Voca_files
     * const voca_files = await prisma.voca_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voca_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, voca_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voca_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voca_files
     * const voca_files = await prisma.voca_files.findMany()
     * 
     * // Get first 10 Voca_files
     * const voca_files = await prisma.voca_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voca_filesWithIdOnly = await prisma.voca_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voca_filesFindManyArgs>(args?: SelectSubset<T, voca_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voca_files.
     * @param {voca_filesCreateArgs} args - Arguments to create a Voca_files.
     * @example
     * // Create one Voca_files
     * const Voca_files = await prisma.voca_files.create({
     *   data: {
     *     // ... data to create a Voca_files
     *   }
     * })
     * 
     */
    create<T extends voca_filesCreateArgs>(args: SelectSubset<T, voca_filesCreateArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voca_files.
     * @param {voca_filesCreateManyArgs} args - Arguments to create many Voca_files.
     * @example
     * // Create many Voca_files
     * const voca_files = await prisma.voca_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voca_filesCreateManyArgs>(args?: SelectSubset<T, voca_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voca_files and returns the data saved in the database.
     * @param {voca_filesCreateManyAndReturnArgs} args - Arguments to create many Voca_files.
     * @example
     * // Create many Voca_files
     * const voca_files = await prisma.voca_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voca_files and only return the `id`
     * const voca_filesWithIdOnly = await prisma.voca_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voca_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, voca_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voca_files.
     * @param {voca_filesDeleteArgs} args - Arguments to delete one Voca_files.
     * @example
     * // Delete one Voca_files
     * const Voca_files = await prisma.voca_files.delete({
     *   where: {
     *     // ... filter to delete one Voca_files
     *   }
     * })
     * 
     */
    delete<T extends voca_filesDeleteArgs>(args: SelectSubset<T, voca_filesDeleteArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voca_files.
     * @param {voca_filesUpdateArgs} args - Arguments to update one Voca_files.
     * @example
     * // Update one Voca_files
     * const voca_files = await prisma.voca_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voca_filesUpdateArgs>(args: SelectSubset<T, voca_filesUpdateArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voca_files.
     * @param {voca_filesDeleteManyArgs} args - Arguments to filter Voca_files to delete.
     * @example
     * // Delete a few Voca_files
     * const { count } = await prisma.voca_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voca_filesDeleteManyArgs>(args?: SelectSubset<T, voca_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voca_files
     * const voca_files = await prisma.voca_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voca_filesUpdateManyArgs>(args: SelectSubset<T, voca_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_files and returns the data updated in the database.
     * @param {voca_filesUpdateManyAndReturnArgs} args - Arguments to update many Voca_files.
     * @example
     * // Update many Voca_files
     * const voca_files = await prisma.voca_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voca_files and only return the `id`
     * const voca_filesWithIdOnly = await prisma.voca_files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voca_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, voca_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voca_files.
     * @param {voca_filesUpsertArgs} args - Arguments to update or create a Voca_files.
     * @example
     * // Update or create a Voca_files
     * const voca_files = await prisma.voca_files.upsert({
     *   create: {
     *     // ... data to create a Voca_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voca_files we want to update
     *   }
     * })
     */
    upsert<T extends voca_filesUpsertArgs>(args: SelectSubset<T, voca_filesUpsertArgs<ExtArgs>>): Prisma__voca_filesClient<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voca_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_filesCountArgs} args - Arguments to filter Voca_files to count.
     * @example
     * // Count the number of Voca_files
     * const count = await prisma.voca_files.count({
     *   where: {
     *     // ... the filter for the Voca_files we want to count
     *   }
     * })
    **/
    count<T extends voca_filesCountArgs>(
      args?: Subset<T, voca_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Voca_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voca_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Voca_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Voca_filesAggregateArgs>(args: Subset<T, Voca_filesAggregateArgs>): Prisma.PrismaPromise<GetVoca_filesAggregateType<T>>

    /**
     * Group by Voca_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_filesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voca_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voca_filesGroupByArgs['orderBy'] }
        : { orderBy?: voca_filesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voca_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoca_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voca_files model
   */
  readonly fields: voca_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voca_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voca_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voca_file_test_links<T extends voca_files$voca_file_test_linksArgs<ExtArgs> = {}>(args?: Subset<T, voca_files$voca_file_test_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voca_folders<T extends voca_files$voca_foldersArgs<ExtArgs> = {}>(args?: Subset<T, voca_files$voca_foldersArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voca_files model
   */
  interface voca_filesFieldRefs {
    readonly id: FieldRef<"voca_files", 'String'>
    readonly user_id: FieldRef<"voca_files", 'String'>
    readonly folder_id: FieldRef<"voca_files", 'String'>
    readonly name: FieldRef<"voca_files", 'String'>
    readonly is_favorited: FieldRef<"voca_files", 'Boolean'>
    readonly is_published: FieldRef<"voca_files", 'Boolean'>
    readonly tags: FieldRef<"voca_files", 'String[]'>
    readonly created_at: FieldRef<"voca_files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * voca_files findUnique
   */
  export type voca_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * Filter, which voca_files to fetch.
     */
    where: voca_filesWhereUniqueInput
  }

  /**
   * voca_files findUniqueOrThrow
   */
  export type voca_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * Filter, which voca_files to fetch.
     */
    where: voca_filesWhereUniqueInput
  }

  /**
   * voca_files findFirst
   */
  export type voca_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * Filter, which voca_files to fetch.
     */
    where?: voca_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_files to fetch.
     */
    orderBy?: voca_filesOrderByWithRelationInput | voca_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_files.
     */
    cursor?: voca_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_files.
     */
    distinct?: Voca_filesScalarFieldEnum | Voca_filesScalarFieldEnum[]
  }

  /**
   * voca_files findFirstOrThrow
   */
  export type voca_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * Filter, which voca_files to fetch.
     */
    where?: voca_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_files to fetch.
     */
    orderBy?: voca_filesOrderByWithRelationInput | voca_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_files.
     */
    cursor?: voca_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_files.
     */
    distinct?: Voca_filesScalarFieldEnum | Voca_filesScalarFieldEnum[]
  }

  /**
   * voca_files findMany
   */
  export type voca_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * Filter, which voca_files to fetch.
     */
    where?: voca_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_files to fetch.
     */
    orderBy?: voca_filesOrderByWithRelationInput | voca_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voca_files.
     */
    cursor?: voca_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_files.
     */
    skip?: number
    distinct?: Voca_filesScalarFieldEnum | Voca_filesScalarFieldEnum[]
  }

  /**
   * voca_files create
   */
  export type voca_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a voca_files.
     */
    data: XOR<voca_filesCreateInput, voca_filesUncheckedCreateInput>
  }

  /**
   * voca_files createMany
   */
  export type voca_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voca_files.
     */
    data: voca_filesCreateManyInput | voca_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_files createManyAndReturn
   */
  export type voca_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * The data used to create many voca_files.
     */
    data: voca_filesCreateManyInput | voca_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * voca_files update
   */
  export type voca_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a voca_files.
     */
    data: XOR<voca_filesUpdateInput, voca_filesUncheckedUpdateInput>
    /**
     * Choose, which voca_files to update.
     */
    where: voca_filesWhereUniqueInput
  }

  /**
   * voca_files updateMany
   */
  export type voca_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voca_files.
     */
    data: XOR<voca_filesUpdateManyMutationInput, voca_filesUncheckedUpdateManyInput>
    /**
     * Filter which voca_files to update
     */
    where?: voca_filesWhereInput
    /**
     * Limit how many voca_files to update.
     */
    limit?: number
  }

  /**
   * voca_files updateManyAndReturn
   */
  export type voca_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * The data used to update voca_files.
     */
    data: XOR<voca_filesUpdateManyMutationInput, voca_filesUncheckedUpdateManyInput>
    /**
     * Filter which voca_files to update
     */
    where?: voca_filesWhereInput
    /**
     * Limit how many voca_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * voca_files upsert
   */
  export type voca_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the voca_files to update in case it exists.
     */
    where: voca_filesWhereUniqueInput
    /**
     * In case the voca_files found by the `where` argument doesn't exist, create a new voca_files with this data.
     */
    create: XOR<voca_filesCreateInput, voca_filesUncheckedCreateInput>
    /**
     * In case the voca_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voca_filesUpdateInput, voca_filesUncheckedUpdateInput>
  }

  /**
   * voca_files delete
   */
  export type voca_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    /**
     * Filter which voca_files to delete.
     */
    where: voca_filesWhereUniqueInput
  }

  /**
   * voca_files deleteMany
   */
  export type voca_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_files to delete
     */
    where?: voca_filesWhereInput
    /**
     * Limit how many voca_files to delete.
     */
    limit?: number
  }

  /**
   * voca_files.voca_file_test_links
   */
  export type voca_files$voca_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    where?: voca_file_test_linksWhereInput
    orderBy?: voca_file_test_linksOrderByWithRelationInput | voca_file_test_linksOrderByWithRelationInput[]
    cursor?: voca_file_test_linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Voca_file_test_linksScalarFieldEnum | Voca_file_test_linksScalarFieldEnum[]
  }

  /**
   * voca_files.voca_folders
   */
  export type voca_files$voca_foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    where?: voca_foldersWhereInput
  }

  /**
   * voca_files without action
   */
  export type voca_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
  }


  /**
   * Model voca_folders
   */

  export type AggregateVoca_folders = {
    _count: Voca_foldersCountAggregateOutputType | null
    _min: Voca_foldersMinAggregateOutputType | null
    _max: Voca_foldersMaxAggregateOutputType | null
  }

  export type Voca_foldersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_foldersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_foldersCountAggregateOutputType = {
    id: number
    user_id: number
    parent_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Voca_foldersMinAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_foldersMaxAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_foldersCountAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Voca_foldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_folders to aggregate.
     */
    where?: voca_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_folders to fetch.
     */
    orderBy?: voca_foldersOrderByWithRelationInput | voca_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voca_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voca_folders
    **/
    _count?: true | Voca_foldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Voca_foldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Voca_foldersMaxAggregateInputType
  }

  export type GetVoca_foldersAggregateType<T extends Voca_foldersAggregateArgs> = {
        [P in keyof T & keyof AggregateVoca_folders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoca_folders[P]>
      : GetScalarType<T[P], AggregateVoca_folders[P]>
  }




  export type voca_foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_foldersWhereInput
    orderBy?: voca_foldersOrderByWithAggregationInput | voca_foldersOrderByWithAggregationInput[]
    by: Voca_foldersScalarFieldEnum[] | Voca_foldersScalarFieldEnum
    having?: voca_foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Voca_foldersCountAggregateInputType | true
    _min?: Voca_foldersMinAggregateInputType
    _max?: Voca_foldersMaxAggregateInputType
  }

  export type Voca_foldersGroupByOutputType = {
    id: string
    user_id: string
    parent_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Voca_foldersCountAggregateOutputType | null
    _min: Voca_foldersMinAggregateOutputType | null
    _max: Voca_foldersMaxAggregateOutputType | null
  }

  type GetVoca_foldersGroupByPayload<T extends voca_foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Voca_foldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Voca_foldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Voca_foldersGroupByOutputType[P]>
            : GetScalarType<T[P], Voca_foldersGroupByOutputType[P]>
        }
      >
    >


  export type voca_foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_files?: boolean | voca_folders$voca_filesArgs<ExtArgs>
    _count?: boolean | Voca_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_folders"]>

  export type voca_foldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["voca_folders"]>

  export type voca_foldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["voca_folders"]>

  export type voca_foldersSelectScalar = {
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type voca_foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "parent_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["voca_folders"]>
  export type voca_foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_files?: boolean | voca_folders$voca_filesArgs<ExtArgs>
    _count?: boolean | Voca_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type voca_foldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type voca_foldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $voca_foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voca_folders"
    objects: {
      voca_files: Prisma.$voca_filesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      parent_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["voca_folders"]>
    composites: {}
  }

  type voca_foldersGetPayload<S extends boolean | null | undefined | voca_foldersDefaultArgs> = $Result.GetResult<Prisma.$voca_foldersPayload, S>

  type voca_foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voca_foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Voca_foldersCountAggregateInputType | true
    }

  export interface voca_foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voca_folders'], meta: { name: 'voca_folders' } }
    /**
     * Find zero or one Voca_folders that matches the filter.
     * @param {voca_foldersFindUniqueArgs} args - Arguments to find a Voca_folders
     * @example
     * // Get one Voca_folders
     * const voca_folders = await prisma.voca_folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voca_foldersFindUniqueArgs>(args: SelectSubset<T, voca_foldersFindUniqueArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voca_folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voca_foldersFindUniqueOrThrowArgs} args - Arguments to find a Voca_folders
     * @example
     * // Get one Voca_folders
     * const voca_folders = await prisma.voca_folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voca_foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, voca_foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_foldersFindFirstArgs} args - Arguments to find a Voca_folders
     * @example
     * // Get one Voca_folders
     * const voca_folders = await prisma.voca_folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voca_foldersFindFirstArgs>(args?: SelectSubset<T, voca_foldersFindFirstArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_foldersFindFirstOrThrowArgs} args - Arguments to find a Voca_folders
     * @example
     * // Get one Voca_folders
     * const voca_folders = await prisma.voca_folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voca_foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, voca_foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voca_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voca_folders
     * const voca_folders = await prisma.voca_folders.findMany()
     * 
     * // Get first 10 Voca_folders
     * const voca_folders = await prisma.voca_folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voca_foldersWithIdOnly = await prisma.voca_folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voca_foldersFindManyArgs>(args?: SelectSubset<T, voca_foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voca_folders.
     * @param {voca_foldersCreateArgs} args - Arguments to create a Voca_folders.
     * @example
     * // Create one Voca_folders
     * const Voca_folders = await prisma.voca_folders.create({
     *   data: {
     *     // ... data to create a Voca_folders
     *   }
     * })
     * 
     */
    create<T extends voca_foldersCreateArgs>(args: SelectSubset<T, voca_foldersCreateArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voca_folders.
     * @param {voca_foldersCreateManyArgs} args - Arguments to create many Voca_folders.
     * @example
     * // Create many Voca_folders
     * const voca_folders = await prisma.voca_folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voca_foldersCreateManyArgs>(args?: SelectSubset<T, voca_foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voca_folders and returns the data saved in the database.
     * @param {voca_foldersCreateManyAndReturnArgs} args - Arguments to create many Voca_folders.
     * @example
     * // Create many Voca_folders
     * const voca_folders = await prisma.voca_folders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voca_folders and only return the `id`
     * const voca_foldersWithIdOnly = await prisma.voca_folders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voca_foldersCreateManyAndReturnArgs>(args?: SelectSubset<T, voca_foldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voca_folders.
     * @param {voca_foldersDeleteArgs} args - Arguments to delete one Voca_folders.
     * @example
     * // Delete one Voca_folders
     * const Voca_folders = await prisma.voca_folders.delete({
     *   where: {
     *     // ... filter to delete one Voca_folders
     *   }
     * })
     * 
     */
    delete<T extends voca_foldersDeleteArgs>(args: SelectSubset<T, voca_foldersDeleteArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voca_folders.
     * @param {voca_foldersUpdateArgs} args - Arguments to update one Voca_folders.
     * @example
     * // Update one Voca_folders
     * const voca_folders = await prisma.voca_folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voca_foldersUpdateArgs>(args: SelectSubset<T, voca_foldersUpdateArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voca_folders.
     * @param {voca_foldersDeleteManyArgs} args - Arguments to filter Voca_folders to delete.
     * @example
     * // Delete a few Voca_folders
     * const { count } = await prisma.voca_folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voca_foldersDeleteManyArgs>(args?: SelectSubset<T, voca_foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voca_folders
     * const voca_folders = await prisma.voca_folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voca_foldersUpdateManyArgs>(args: SelectSubset<T, voca_foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_folders and returns the data updated in the database.
     * @param {voca_foldersUpdateManyAndReturnArgs} args - Arguments to update many Voca_folders.
     * @example
     * // Update many Voca_folders
     * const voca_folders = await prisma.voca_folders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voca_folders and only return the `id`
     * const voca_foldersWithIdOnly = await prisma.voca_folders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voca_foldersUpdateManyAndReturnArgs>(args: SelectSubset<T, voca_foldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voca_folders.
     * @param {voca_foldersUpsertArgs} args - Arguments to update or create a Voca_folders.
     * @example
     * // Update or create a Voca_folders
     * const voca_folders = await prisma.voca_folders.upsert({
     *   create: {
     *     // ... data to create a Voca_folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voca_folders we want to update
     *   }
     * })
     */
    upsert<T extends voca_foldersUpsertArgs>(args: SelectSubset<T, voca_foldersUpsertArgs<ExtArgs>>): Prisma__voca_foldersClient<$Result.GetResult<Prisma.$voca_foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voca_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_foldersCountArgs} args - Arguments to filter Voca_folders to count.
     * @example
     * // Count the number of Voca_folders
     * const count = await prisma.voca_folders.count({
     *   where: {
     *     // ... the filter for the Voca_folders we want to count
     *   }
     * })
    **/
    count<T extends voca_foldersCountArgs>(
      args?: Subset<T, voca_foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Voca_foldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voca_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Voca_foldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Voca_foldersAggregateArgs>(args: Subset<T, Voca_foldersAggregateArgs>): Prisma.PrismaPromise<GetVoca_foldersAggregateType<T>>

    /**
     * Group by Voca_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_foldersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voca_foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voca_foldersGroupByArgs['orderBy'] }
        : { orderBy?: voca_foldersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voca_foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoca_foldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voca_folders model
   */
  readonly fields: voca_foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voca_folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voca_foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voca_files<T extends voca_folders$voca_filesArgs<ExtArgs> = {}>(args?: Subset<T, voca_folders$voca_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voca_folders model
   */
  interface voca_foldersFieldRefs {
    readonly id: FieldRef<"voca_folders", 'String'>
    readonly user_id: FieldRef<"voca_folders", 'String'>
    readonly parent_id: FieldRef<"voca_folders", 'String'>
    readonly name: FieldRef<"voca_folders", 'String'>
    readonly is_favorited: FieldRef<"voca_folders", 'Boolean'>
    readonly is_published: FieldRef<"voca_folders", 'Boolean'>
    readonly tags: FieldRef<"voca_folders", 'String[]'>
    readonly created_at: FieldRef<"voca_folders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * voca_folders findUnique
   */
  export type voca_foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_folders to fetch.
     */
    where: voca_foldersWhereUniqueInput
  }

  /**
   * voca_folders findUniqueOrThrow
   */
  export type voca_foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_folders to fetch.
     */
    where: voca_foldersWhereUniqueInput
  }

  /**
   * voca_folders findFirst
   */
  export type voca_foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_folders to fetch.
     */
    where?: voca_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_folders to fetch.
     */
    orderBy?: voca_foldersOrderByWithRelationInput | voca_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_folders.
     */
    cursor?: voca_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_folders.
     */
    distinct?: Voca_foldersScalarFieldEnum | Voca_foldersScalarFieldEnum[]
  }

  /**
   * voca_folders findFirstOrThrow
   */
  export type voca_foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_folders to fetch.
     */
    where?: voca_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_folders to fetch.
     */
    orderBy?: voca_foldersOrderByWithRelationInput | voca_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_folders.
     */
    cursor?: voca_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_folders.
     */
    distinct?: Voca_foldersScalarFieldEnum | Voca_foldersScalarFieldEnum[]
  }

  /**
   * voca_folders findMany
   */
  export type voca_foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_folders to fetch.
     */
    where?: voca_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_folders to fetch.
     */
    orderBy?: voca_foldersOrderByWithRelationInput | voca_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voca_folders.
     */
    cursor?: voca_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_folders.
     */
    skip?: number
    distinct?: Voca_foldersScalarFieldEnum | Voca_foldersScalarFieldEnum[]
  }

  /**
   * voca_folders create
   */
  export type voca_foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a voca_folders.
     */
    data: XOR<voca_foldersCreateInput, voca_foldersUncheckedCreateInput>
  }

  /**
   * voca_folders createMany
   */
  export type voca_foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voca_folders.
     */
    data: voca_foldersCreateManyInput | voca_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_folders createManyAndReturn
   */
  export type voca_foldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * The data used to create many voca_folders.
     */
    data: voca_foldersCreateManyInput | voca_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_folders update
   */
  export type voca_foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a voca_folders.
     */
    data: XOR<voca_foldersUpdateInput, voca_foldersUncheckedUpdateInput>
    /**
     * Choose, which voca_folders to update.
     */
    where: voca_foldersWhereUniqueInput
  }

  /**
   * voca_folders updateMany
   */
  export type voca_foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voca_folders.
     */
    data: XOR<voca_foldersUpdateManyMutationInput, voca_foldersUncheckedUpdateManyInput>
    /**
     * Filter which voca_folders to update
     */
    where?: voca_foldersWhereInput
    /**
     * Limit how many voca_folders to update.
     */
    limit?: number
  }

  /**
   * voca_folders updateManyAndReturn
   */
  export type voca_foldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * The data used to update voca_folders.
     */
    data: XOR<voca_foldersUpdateManyMutationInput, voca_foldersUncheckedUpdateManyInput>
    /**
     * Filter which voca_folders to update
     */
    where?: voca_foldersWhereInput
    /**
     * Limit how many voca_folders to update.
     */
    limit?: number
  }

  /**
   * voca_folders upsert
   */
  export type voca_foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the voca_folders to update in case it exists.
     */
    where: voca_foldersWhereUniqueInput
    /**
     * In case the voca_folders found by the `where` argument doesn't exist, create a new voca_folders with this data.
     */
    create: XOR<voca_foldersCreateInput, voca_foldersUncheckedCreateInput>
    /**
     * In case the voca_folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voca_foldersUpdateInput, voca_foldersUncheckedUpdateInput>
  }

  /**
   * voca_folders delete
   */
  export type voca_foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
    /**
     * Filter which voca_folders to delete.
     */
    where: voca_foldersWhereUniqueInput
  }

  /**
   * voca_folders deleteMany
   */
  export type voca_foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_folders to delete
     */
    where?: voca_foldersWhereInput
    /**
     * Limit how many voca_folders to delete.
     */
    limit?: number
  }

  /**
   * voca_folders.voca_files
   */
  export type voca_folders$voca_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_files
     */
    select?: voca_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_files
     */
    omit?: voca_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_filesInclude<ExtArgs> | null
    where?: voca_filesWhereInput
    orderBy?: voca_filesOrderByWithRelationInput | voca_filesOrderByWithRelationInput[]
    cursor?: voca_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Voca_filesScalarFieldEnum | Voca_filesScalarFieldEnum[]
  }

  /**
   * voca_folders without action
   */
  export type voca_foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_folders
     */
    select?: voca_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_folders
     */
    omit?: voca_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_foldersInclude<ExtArgs> | null
  }


  /**
   * Model voca_test_folders
   */

  export type AggregateVoca_test_folders = {
    _count: Voca_test_foldersCountAggregateOutputType | null
    _min: Voca_test_foldersMinAggregateOutputType | null
    _max: Voca_test_foldersMaxAggregateOutputType | null
  }

  export type Voca_test_foldersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_test_foldersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    parent_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_test_foldersCountAggregateOutputType = {
    id: number
    user_id: number
    parent_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Voca_test_foldersMinAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_test_foldersMaxAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_test_foldersCountAggregateInputType = {
    id?: true
    user_id?: true
    parent_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Voca_test_foldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_test_folders to aggregate.
     */
    where?: voca_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_test_folders to fetch.
     */
    orderBy?: voca_test_foldersOrderByWithRelationInput | voca_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voca_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_test_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voca_test_folders
    **/
    _count?: true | Voca_test_foldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Voca_test_foldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Voca_test_foldersMaxAggregateInputType
  }

  export type GetVoca_test_foldersAggregateType<T extends Voca_test_foldersAggregateArgs> = {
        [P in keyof T & keyof AggregateVoca_test_folders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoca_test_folders[P]>
      : GetScalarType<T[P], AggregateVoca_test_folders[P]>
  }




  export type voca_test_foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_test_foldersWhereInput
    orderBy?: voca_test_foldersOrderByWithAggregationInput | voca_test_foldersOrderByWithAggregationInput[]
    by: Voca_test_foldersScalarFieldEnum[] | Voca_test_foldersScalarFieldEnum
    having?: voca_test_foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Voca_test_foldersCountAggregateInputType | true
    _min?: Voca_test_foldersMinAggregateInputType
    _max?: Voca_test_foldersMaxAggregateInputType
  }

  export type Voca_test_foldersGroupByOutputType = {
    id: string
    user_id: string
    parent_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Voca_test_foldersCountAggregateOutputType | null
    _min: Voca_test_foldersMinAggregateOutputType | null
    _max: Voca_test_foldersMaxAggregateOutputType | null
  }

  type GetVoca_test_foldersGroupByPayload<T extends voca_test_foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Voca_test_foldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Voca_test_foldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Voca_test_foldersGroupByOutputType[P]>
            : GetScalarType<T[P], Voca_test_foldersGroupByOutputType[P]>
        }
      >
    >


  export type voca_test_foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_tests?: boolean | voca_test_folders$voca_testsArgs<ExtArgs>
    _count?: boolean | Voca_test_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_test_folders"]>

  export type voca_test_foldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["voca_test_folders"]>

  export type voca_test_foldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["voca_test_folders"]>

  export type voca_test_foldersSelectScalar = {
    id?: boolean
    user_id?: boolean
    parent_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type voca_test_foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "parent_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["voca_test_folders"]>
  export type voca_test_foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_tests?: boolean | voca_test_folders$voca_testsArgs<ExtArgs>
    _count?: boolean | Voca_test_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type voca_test_foldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type voca_test_foldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $voca_test_foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voca_test_folders"
    objects: {
      voca_tests: Prisma.$voca_testsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      parent_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["voca_test_folders"]>
    composites: {}
  }

  type voca_test_foldersGetPayload<S extends boolean | null | undefined | voca_test_foldersDefaultArgs> = $Result.GetResult<Prisma.$voca_test_foldersPayload, S>

  type voca_test_foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voca_test_foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Voca_test_foldersCountAggregateInputType | true
    }

  export interface voca_test_foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voca_test_folders'], meta: { name: 'voca_test_folders' } }
    /**
     * Find zero or one Voca_test_folders that matches the filter.
     * @param {voca_test_foldersFindUniqueArgs} args - Arguments to find a Voca_test_folders
     * @example
     * // Get one Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voca_test_foldersFindUniqueArgs>(args: SelectSubset<T, voca_test_foldersFindUniqueArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voca_test_folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voca_test_foldersFindUniqueOrThrowArgs} args - Arguments to find a Voca_test_folders
     * @example
     * // Get one Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voca_test_foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, voca_test_foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_test_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_test_foldersFindFirstArgs} args - Arguments to find a Voca_test_folders
     * @example
     * // Get one Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voca_test_foldersFindFirstArgs>(args?: SelectSubset<T, voca_test_foldersFindFirstArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_test_folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_test_foldersFindFirstOrThrowArgs} args - Arguments to find a Voca_test_folders
     * @example
     * // Get one Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voca_test_foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, voca_test_foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voca_test_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_test_foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.findMany()
     * 
     * // Get first 10 Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voca_test_foldersWithIdOnly = await prisma.voca_test_folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voca_test_foldersFindManyArgs>(args?: SelectSubset<T, voca_test_foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voca_test_folders.
     * @param {voca_test_foldersCreateArgs} args - Arguments to create a Voca_test_folders.
     * @example
     * // Create one Voca_test_folders
     * const Voca_test_folders = await prisma.voca_test_folders.create({
     *   data: {
     *     // ... data to create a Voca_test_folders
     *   }
     * })
     * 
     */
    create<T extends voca_test_foldersCreateArgs>(args: SelectSubset<T, voca_test_foldersCreateArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voca_test_folders.
     * @param {voca_test_foldersCreateManyArgs} args - Arguments to create many Voca_test_folders.
     * @example
     * // Create many Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voca_test_foldersCreateManyArgs>(args?: SelectSubset<T, voca_test_foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voca_test_folders and returns the data saved in the database.
     * @param {voca_test_foldersCreateManyAndReturnArgs} args - Arguments to create many Voca_test_folders.
     * @example
     * // Create many Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voca_test_folders and only return the `id`
     * const voca_test_foldersWithIdOnly = await prisma.voca_test_folders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voca_test_foldersCreateManyAndReturnArgs>(args?: SelectSubset<T, voca_test_foldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voca_test_folders.
     * @param {voca_test_foldersDeleteArgs} args - Arguments to delete one Voca_test_folders.
     * @example
     * // Delete one Voca_test_folders
     * const Voca_test_folders = await prisma.voca_test_folders.delete({
     *   where: {
     *     // ... filter to delete one Voca_test_folders
     *   }
     * })
     * 
     */
    delete<T extends voca_test_foldersDeleteArgs>(args: SelectSubset<T, voca_test_foldersDeleteArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voca_test_folders.
     * @param {voca_test_foldersUpdateArgs} args - Arguments to update one Voca_test_folders.
     * @example
     * // Update one Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voca_test_foldersUpdateArgs>(args: SelectSubset<T, voca_test_foldersUpdateArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voca_test_folders.
     * @param {voca_test_foldersDeleteManyArgs} args - Arguments to filter Voca_test_folders to delete.
     * @example
     * // Delete a few Voca_test_folders
     * const { count } = await prisma.voca_test_folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voca_test_foldersDeleteManyArgs>(args?: SelectSubset<T, voca_test_foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_test_foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voca_test_foldersUpdateManyArgs>(args: SelectSubset<T, voca_test_foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_test_folders and returns the data updated in the database.
     * @param {voca_test_foldersUpdateManyAndReturnArgs} args - Arguments to update many Voca_test_folders.
     * @example
     * // Update many Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voca_test_folders and only return the `id`
     * const voca_test_foldersWithIdOnly = await prisma.voca_test_folders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voca_test_foldersUpdateManyAndReturnArgs>(args: SelectSubset<T, voca_test_foldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voca_test_folders.
     * @param {voca_test_foldersUpsertArgs} args - Arguments to update or create a Voca_test_folders.
     * @example
     * // Update or create a Voca_test_folders
     * const voca_test_folders = await prisma.voca_test_folders.upsert({
     *   create: {
     *     // ... data to create a Voca_test_folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voca_test_folders we want to update
     *   }
     * })
     */
    upsert<T extends voca_test_foldersUpsertArgs>(args: SelectSubset<T, voca_test_foldersUpsertArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voca_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_test_foldersCountArgs} args - Arguments to filter Voca_test_folders to count.
     * @example
     * // Count the number of Voca_test_folders
     * const count = await prisma.voca_test_folders.count({
     *   where: {
     *     // ... the filter for the Voca_test_folders we want to count
     *   }
     * })
    **/
    count<T extends voca_test_foldersCountArgs>(
      args?: Subset<T, voca_test_foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Voca_test_foldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voca_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Voca_test_foldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Voca_test_foldersAggregateArgs>(args: Subset<T, Voca_test_foldersAggregateArgs>): Prisma.PrismaPromise<GetVoca_test_foldersAggregateType<T>>

    /**
     * Group by Voca_test_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_test_foldersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voca_test_foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voca_test_foldersGroupByArgs['orderBy'] }
        : { orderBy?: voca_test_foldersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voca_test_foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoca_test_foldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voca_test_folders model
   */
  readonly fields: voca_test_foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voca_test_folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voca_test_foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voca_tests<T extends voca_test_folders$voca_testsArgs<ExtArgs> = {}>(args?: Subset<T, voca_test_folders$voca_testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voca_test_folders model
   */
  interface voca_test_foldersFieldRefs {
    readonly id: FieldRef<"voca_test_folders", 'String'>
    readonly user_id: FieldRef<"voca_test_folders", 'String'>
    readonly parent_id: FieldRef<"voca_test_folders", 'String'>
    readonly name: FieldRef<"voca_test_folders", 'String'>
    readonly is_favorited: FieldRef<"voca_test_folders", 'Boolean'>
    readonly is_published: FieldRef<"voca_test_folders", 'Boolean'>
    readonly tags: FieldRef<"voca_test_folders", 'String[]'>
    readonly created_at: FieldRef<"voca_test_folders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * voca_test_folders findUnique
   */
  export type voca_test_foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_test_folders to fetch.
     */
    where: voca_test_foldersWhereUniqueInput
  }

  /**
   * voca_test_folders findUniqueOrThrow
   */
  export type voca_test_foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_test_folders to fetch.
     */
    where: voca_test_foldersWhereUniqueInput
  }

  /**
   * voca_test_folders findFirst
   */
  export type voca_test_foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_test_folders to fetch.
     */
    where?: voca_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_test_folders to fetch.
     */
    orderBy?: voca_test_foldersOrderByWithRelationInput | voca_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_test_folders.
     */
    cursor?: voca_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_test_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_test_folders.
     */
    distinct?: Voca_test_foldersScalarFieldEnum | Voca_test_foldersScalarFieldEnum[]
  }

  /**
   * voca_test_folders findFirstOrThrow
   */
  export type voca_test_foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_test_folders to fetch.
     */
    where?: voca_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_test_folders to fetch.
     */
    orderBy?: voca_test_foldersOrderByWithRelationInput | voca_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_test_folders.
     */
    cursor?: voca_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_test_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_test_folders.
     */
    distinct?: Voca_test_foldersScalarFieldEnum | Voca_test_foldersScalarFieldEnum[]
  }

  /**
   * voca_test_folders findMany
   */
  export type voca_test_foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * Filter, which voca_test_folders to fetch.
     */
    where?: voca_test_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_test_folders to fetch.
     */
    orderBy?: voca_test_foldersOrderByWithRelationInput | voca_test_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voca_test_folders.
     */
    cursor?: voca_test_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_test_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_test_folders.
     */
    skip?: number
    distinct?: Voca_test_foldersScalarFieldEnum | Voca_test_foldersScalarFieldEnum[]
  }

  /**
   * voca_test_folders create
   */
  export type voca_test_foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a voca_test_folders.
     */
    data: XOR<voca_test_foldersCreateInput, voca_test_foldersUncheckedCreateInput>
  }

  /**
   * voca_test_folders createMany
   */
  export type voca_test_foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voca_test_folders.
     */
    data: voca_test_foldersCreateManyInput | voca_test_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_test_folders createManyAndReturn
   */
  export type voca_test_foldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * The data used to create many voca_test_folders.
     */
    data: voca_test_foldersCreateManyInput | voca_test_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_test_folders update
   */
  export type voca_test_foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a voca_test_folders.
     */
    data: XOR<voca_test_foldersUpdateInput, voca_test_foldersUncheckedUpdateInput>
    /**
     * Choose, which voca_test_folders to update.
     */
    where: voca_test_foldersWhereUniqueInput
  }

  /**
   * voca_test_folders updateMany
   */
  export type voca_test_foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voca_test_folders.
     */
    data: XOR<voca_test_foldersUpdateManyMutationInput, voca_test_foldersUncheckedUpdateManyInput>
    /**
     * Filter which voca_test_folders to update
     */
    where?: voca_test_foldersWhereInput
    /**
     * Limit how many voca_test_folders to update.
     */
    limit?: number
  }

  /**
   * voca_test_folders updateManyAndReturn
   */
  export type voca_test_foldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * The data used to update voca_test_folders.
     */
    data: XOR<voca_test_foldersUpdateManyMutationInput, voca_test_foldersUncheckedUpdateManyInput>
    /**
     * Filter which voca_test_folders to update
     */
    where?: voca_test_foldersWhereInput
    /**
     * Limit how many voca_test_folders to update.
     */
    limit?: number
  }

  /**
   * voca_test_folders upsert
   */
  export type voca_test_foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the voca_test_folders to update in case it exists.
     */
    where: voca_test_foldersWhereUniqueInput
    /**
     * In case the voca_test_folders found by the `where` argument doesn't exist, create a new voca_test_folders with this data.
     */
    create: XOR<voca_test_foldersCreateInput, voca_test_foldersUncheckedCreateInput>
    /**
     * In case the voca_test_folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voca_test_foldersUpdateInput, voca_test_foldersUncheckedUpdateInput>
  }

  /**
   * voca_test_folders delete
   */
  export type voca_test_foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    /**
     * Filter which voca_test_folders to delete.
     */
    where: voca_test_foldersWhereUniqueInput
  }

  /**
   * voca_test_folders deleteMany
   */
  export type voca_test_foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_test_folders to delete
     */
    where?: voca_test_foldersWhereInput
    /**
     * Limit how many voca_test_folders to delete.
     */
    limit?: number
  }

  /**
   * voca_test_folders.voca_tests
   */
  export type voca_test_folders$voca_testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    where?: voca_testsWhereInput
    orderBy?: voca_testsOrderByWithRelationInput | voca_testsOrderByWithRelationInput[]
    cursor?: voca_testsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Voca_testsScalarFieldEnum | Voca_testsScalarFieldEnum[]
  }

  /**
   * voca_test_folders without action
   */
  export type voca_test_foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
  }


  /**
   * Model voca_tests
   */

  export type AggregateVoca_tests = {
    _count: Voca_testsCountAggregateOutputType | null
    _min: Voca_testsMinAggregateOutputType | null
    _max: Voca_testsMaxAggregateOutputType | null
  }

  export type Voca_testsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_testsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    folder_id: string | null
    name: string | null
    is_favorited: boolean | null
    is_published: boolean | null
    created_at: Date | null
  }

  export type Voca_testsCountAggregateOutputType = {
    id: number
    user_id: number
    folder_id: number
    name: number
    is_favorited: number
    is_published: number
    tags: number
    created_at: number
    _all: number
  }


  export type Voca_testsMinAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_testsMaxAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    created_at?: true
  }

  export type Voca_testsCountAggregateInputType = {
    id?: true
    user_id?: true
    folder_id?: true
    name?: true
    is_favorited?: true
    is_published?: true
    tags?: true
    created_at?: true
    _all?: true
  }

  export type Voca_testsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_tests to aggregate.
     */
    where?: voca_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_tests to fetch.
     */
    orderBy?: voca_testsOrderByWithRelationInput | voca_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voca_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voca_tests
    **/
    _count?: true | Voca_testsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Voca_testsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Voca_testsMaxAggregateInputType
  }

  export type GetVoca_testsAggregateType<T extends Voca_testsAggregateArgs> = {
        [P in keyof T & keyof AggregateVoca_tests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoca_tests[P]>
      : GetScalarType<T[P], AggregateVoca_tests[P]>
  }




  export type voca_testsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voca_testsWhereInput
    orderBy?: voca_testsOrderByWithAggregationInput | voca_testsOrderByWithAggregationInput[]
    by: Voca_testsScalarFieldEnum[] | Voca_testsScalarFieldEnum
    having?: voca_testsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Voca_testsCountAggregateInputType | true
    _min?: Voca_testsMinAggregateInputType
    _max?: Voca_testsMaxAggregateInputType
  }

  export type Voca_testsGroupByOutputType = {
    id: string
    user_id: string
    folder_id: string | null
    name: string
    is_favorited: boolean
    is_published: boolean
    tags: string[]
    created_at: Date
    _count: Voca_testsCountAggregateOutputType | null
    _min: Voca_testsMinAggregateOutputType | null
    _max: Voca_testsMaxAggregateOutputType | null
  }

  type GetVoca_testsGroupByPayload<T extends voca_testsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Voca_testsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Voca_testsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Voca_testsGroupByOutputType[P]>
            : GetScalarType<T[P], Voca_testsGroupByOutputType[P]>
        }
      >
    >


  export type voca_testsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_file_test_links?: boolean | voca_tests$voca_file_test_linksArgs<ExtArgs>
    voca_test_folders?: boolean | voca_tests$voca_test_foldersArgs<ExtArgs>
    _count?: boolean | Voca_testsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voca_tests"]>

  export type voca_testsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_test_folders?: boolean | voca_tests$voca_test_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["voca_tests"]>

  export type voca_testsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
    voca_test_folders?: boolean | voca_tests$voca_test_foldersArgs<ExtArgs>
  }, ExtArgs["result"]["voca_tests"]>

  export type voca_testsSelectScalar = {
    id?: boolean
    user_id?: boolean
    folder_id?: boolean
    name?: boolean
    is_favorited?: boolean
    is_published?: boolean
    tags?: boolean
    created_at?: boolean
  }

  export type voca_testsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "folder_id" | "name" | "is_favorited" | "is_published" | "tags" | "created_at", ExtArgs["result"]["voca_tests"]>
  export type voca_testsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_file_test_links?: boolean | voca_tests$voca_file_test_linksArgs<ExtArgs>
    voca_test_folders?: boolean | voca_tests$voca_test_foldersArgs<ExtArgs>
    _count?: boolean | Voca_testsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type voca_testsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_test_folders?: boolean | voca_tests$voca_test_foldersArgs<ExtArgs>
  }
  export type voca_testsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voca_test_folders?: boolean | voca_tests$voca_test_foldersArgs<ExtArgs>
  }

  export type $voca_testsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voca_tests"
    objects: {
      voca_file_test_links: Prisma.$voca_file_test_linksPayload<ExtArgs>[]
      voca_test_folders: Prisma.$voca_test_foldersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      folder_id: string | null
      name: string
      is_favorited: boolean
      is_published: boolean
      tags: string[]
      created_at: Date
    }, ExtArgs["result"]["voca_tests"]>
    composites: {}
  }

  type voca_testsGetPayload<S extends boolean | null | undefined | voca_testsDefaultArgs> = $Result.GetResult<Prisma.$voca_testsPayload, S>

  type voca_testsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voca_testsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Voca_testsCountAggregateInputType | true
    }

  export interface voca_testsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voca_tests'], meta: { name: 'voca_tests' } }
    /**
     * Find zero or one Voca_tests that matches the filter.
     * @param {voca_testsFindUniqueArgs} args - Arguments to find a Voca_tests
     * @example
     * // Get one Voca_tests
     * const voca_tests = await prisma.voca_tests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voca_testsFindUniqueArgs>(args: SelectSubset<T, voca_testsFindUniqueArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voca_tests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voca_testsFindUniqueOrThrowArgs} args - Arguments to find a Voca_tests
     * @example
     * // Get one Voca_tests
     * const voca_tests = await prisma.voca_tests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voca_testsFindUniqueOrThrowArgs>(args: SelectSubset<T, voca_testsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_testsFindFirstArgs} args - Arguments to find a Voca_tests
     * @example
     * // Get one Voca_tests
     * const voca_tests = await prisma.voca_tests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voca_testsFindFirstArgs>(args?: SelectSubset<T, voca_testsFindFirstArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voca_tests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_testsFindFirstOrThrowArgs} args - Arguments to find a Voca_tests
     * @example
     * // Get one Voca_tests
     * const voca_tests = await prisma.voca_tests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voca_testsFindFirstOrThrowArgs>(args?: SelectSubset<T, voca_testsFindFirstOrThrowArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voca_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_testsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voca_tests
     * const voca_tests = await prisma.voca_tests.findMany()
     * 
     * // Get first 10 Voca_tests
     * const voca_tests = await prisma.voca_tests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voca_testsWithIdOnly = await prisma.voca_tests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voca_testsFindManyArgs>(args?: SelectSubset<T, voca_testsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voca_tests.
     * @param {voca_testsCreateArgs} args - Arguments to create a Voca_tests.
     * @example
     * // Create one Voca_tests
     * const Voca_tests = await prisma.voca_tests.create({
     *   data: {
     *     // ... data to create a Voca_tests
     *   }
     * })
     * 
     */
    create<T extends voca_testsCreateArgs>(args: SelectSubset<T, voca_testsCreateArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voca_tests.
     * @param {voca_testsCreateManyArgs} args - Arguments to create many Voca_tests.
     * @example
     * // Create many Voca_tests
     * const voca_tests = await prisma.voca_tests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voca_testsCreateManyArgs>(args?: SelectSubset<T, voca_testsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voca_tests and returns the data saved in the database.
     * @param {voca_testsCreateManyAndReturnArgs} args - Arguments to create many Voca_tests.
     * @example
     * // Create many Voca_tests
     * const voca_tests = await prisma.voca_tests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voca_tests and only return the `id`
     * const voca_testsWithIdOnly = await prisma.voca_tests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voca_testsCreateManyAndReturnArgs>(args?: SelectSubset<T, voca_testsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voca_tests.
     * @param {voca_testsDeleteArgs} args - Arguments to delete one Voca_tests.
     * @example
     * // Delete one Voca_tests
     * const Voca_tests = await prisma.voca_tests.delete({
     *   where: {
     *     // ... filter to delete one Voca_tests
     *   }
     * })
     * 
     */
    delete<T extends voca_testsDeleteArgs>(args: SelectSubset<T, voca_testsDeleteArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voca_tests.
     * @param {voca_testsUpdateArgs} args - Arguments to update one Voca_tests.
     * @example
     * // Update one Voca_tests
     * const voca_tests = await prisma.voca_tests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voca_testsUpdateArgs>(args: SelectSubset<T, voca_testsUpdateArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voca_tests.
     * @param {voca_testsDeleteManyArgs} args - Arguments to filter Voca_tests to delete.
     * @example
     * // Delete a few Voca_tests
     * const { count } = await prisma.voca_tests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voca_testsDeleteManyArgs>(args?: SelectSubset<T, voca_testsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_testsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voca_tests
     * const voca_tests = await prisma.voca_tests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voca_testsUpdateManyArgs>(args: SelectSubset<T, voca_testsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voca_tests and returns the data updated in the database.
     * @param {voca_testsUpdateManyAndReturnArgs} args - Arguments to update many Voca_tests.
     * @example
     * // Update many Voca_tests
     * const voca_tests = await prisma.voca_tests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voca_tests and only return the `id`
     * const voca_testsWithIdOnly = await prisma.voca_tests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voca_testsUpdateManyAndReturnArgs>(args: SelectSubset<T, voca_testsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voca_tests.
     * @param {voca_testsUpsertArgs} args - Arguments to update or create a Voca_tests.
     * @example
     * // Update or create a Voca_tests
     * const voca_tests = await prisma.voca_tests.upsert({
     *   create: {
     *     // ... data to create a Voca_tests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voca_tests we want to update
     *   }
     * })
     */
    upsert<T extends voca_testsUpsertArgs>(args: SelectSubset<T, voca_testsUpsertArgs<ExtArgs>>): Prisma__voca_testsClient<$Result.GetResult<Prisma.$voca_testsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voca_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_testsCountArgs} args - Arguments to filter Voca_tests to count.
     * @example
     * // Count the number of Voca_tests
     * const count = await prisma.voca_tests.count({
     *   where: {
     *     // ... the filter for the Voca_tests we want to count
     *   }
     * })
    **/
    count<T extends voca_testsCountArgs>(
      args?: Subset<T, voca_testsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Voca_testsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voca_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Voca_testsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Voca_testsAggregateArgs>(args: Subset<T, Voca_testsAggregateArgs>): Prisma.PrismaPromise<GetVoca_testsAggregateType<T>>

    /**
     * Group by Voca_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voca_testsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voca_testsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voca_testsGroupByArgs['orderBy'] }
        : { orderBy?: voca_testsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voca_testsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoca_testsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voca_tests model
   */
  readonly fields: voca_testsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voca_tests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voca_testsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voca_file_test_links<T extends voca_tests$voca_file_test_linksArgs<ExtArgs> = {}>(args?: Subset<T, voca_tests$voca_file_test_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voca_file_test_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voca_test_folders<T extends voca_tests$voca_test_foldersArgs<ExtArgs> = {}>(args?: Subset<T, voca_tests$voca_test_foldersArgs<ExtArgs>>): Prisma__voca_test_foldersClient<$Result.GetResult<Prisma.$voca_test_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voca_tests model
   */
  interface voca_testsFieldRefs {
    readonly id: FieldRef<"voca_tests", 'String'>
    readonly user_id: FieldRef<"voca_tests", 'String'>
    readonly folder_id: FieldRef<"voca_tests", 'String'>
    readonly name: FieldRef<"voca_tests", 'String'>
    readonly is_favorited: FieldRef<"voca_tests", 'Boolean'>
    readonly is_published: FieldRef<"voca_tests", 'Boolean'>
    readonly tags: FieldRef<"voca_tests", 'String[]'>
    readonly created_at: FieldRef<"voca_tests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * voca_tests findUnique
   */
  export type voca_testsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * Filter, which voca_tests to fetch.
     */
    where: voca_testsWhereUniqueInput
  }

  /**
   * voca_tests findUniqueOrThrow
   */
  export type voca_testsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * Filter, which voca_tests to fetch.
     */
    where: voca_testsWhereUniqueInput
  }

  /**
   * voca_tests findFirst
   */
  export type voca_testsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * Filter, which voca_tests to fetch.
     */
    where?: voca_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_tests to fetch.
     */
    orderBy?: voca_testsOrderByWithRelationInput | voca_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_tests.
     */
    cursor?: voca_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_tests.
     */
    distinct?: Voca_testsScalarFieldEnum | Voca_testsScalarFieldEnum[]
  }

  /**
   * voca_tests findFirstOrThrow
   */
  export type voca_testsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * Filter, which voca_tests to fetch.
     */
    where?: voca_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_tests to fetch.
     */
    orderBy?: voca_testsOrderByWithRelationInput | voca_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voca_tests.
     */
    cursor?: voca_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voca_tests.
     */
    distinct?: Voca_testsScalarFieldEnum | Voca_testsScalarFieldEnum[]
  }

  /**
   * voca_tests findMany
   */
  export type voca_testsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * Filter, which voca_tests to fetch.
     */
    where?: voca_testsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voca_tests to fetch.
     */
    orderBy?: voca_testsOrderByWithRelationInput | voca_testsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voca_tests.
     */
    cursor?: voca_testsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voca_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voca_tests.
     */
    skip?: number
    distinct?: Voca_testsScalarFieldEnum | Voca_testsScalarFieldEnum[]
  }

  /**
   * voca_tests create
   */
  export type voca_testsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * The data needed to create a voca_tests.
     */
    data: XOR<voca_testsCreateInput, voca_testsUncheckedCreateInput>
  }

  /**
   * voca_tests createMany
   */
  export type voca_testsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voca_tests.
     */
    data: voca_testsCreateManyInput | voca_testsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voca_tests createManyAndReturn
   */
  export type voca_testsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * The data used to create many voca_tests.
     */
    data: voca_testsCreateManyInput | voca_testsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * voca_tests update
   */
  export type voca_testsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * The data needed to update a voca_tests.
     */
    data: XOR<voca_testsUpdateInput, voca_testsUncheckedUpdateInput>
    /**
     * Choose, which voca_tests to update.
     */
    where: voca_testsWhereUniqueInput
  }

  /**
   * voca_tests updateMany
   */
  export type voca_testsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voca_tests.
     */
    data: XOR<voca_testsUpdateManyMutationInput, voca_testsUncheckedUpdateManyInput>
    /**
     * Filter which voca_tests to update
     */
    where?: voca_testsWhereInput
    /**
     * Limit how many voca_tests to update.
     */
    limit?: number
  }

  /**
   * voca_tests updateManyAndReturn
   */
  export type voca_testsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * The data used to update voca_tests.
     */
    data: XOR<voca_testsUpdateManyMutationInput, voca_testsUncheckedUpdateManyInput>
    /**
     * Filter which voca_tests to update
     */
    where?: voca_testsWhereInput
    /**
     * Limit how many voca_tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * voca_tests upsert
   */
  export type voca_testsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * The filter to search for the voca_tests to update in case it exists.
     */
    where: voca_testsWhereUniqueInput
    /**
     * In case the voca_tests found by the `where` argument doesn't exist, create a new voca_tests with this data.
     */
    create: XOR<voca_testsCreateInput, voca_testsUncheckedCreateInput>
    /**
     * In case the voca_tests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voca_testsUpdateInput, voca_testsUncheckedUpdateInput>
  }

  /**
   * voca_tests delete
   */
  export type voca_testsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
    /**
     * Filter which voca_tests to delete.
     */
    where: voca_testsWhereUniqueInput
  }

  /**
   * voca_tests deleteMany
   */
  export type voca_testsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voca_tests to delete
     */
    where?: voca_testsWhereInput
    /**
     * Limit how many voca_tests to delete.
     */
    limit?: number
  }

  /**
   * voca_tests.voca_file_test_links
   */
  export type voca_tests$voca_file_test_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_file_test_links
     */
    select?: voca_file_test_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_file_test_links
     */
    omit?: voca_file_test_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_file_test_linksInclude<ExtArgs> | null
    where?: voca_file_test_linksWhereInput
    orderBy?: voca_file_test_linksOrderByWithRelationInput | voca_file_test_linksOrderByWithRelationInput[]
    cursor?: voca_file_test_linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Voca_file_test_linksScalarFieldEnum | Voca_file_test_linksScalarFieldEnum[]
  }

  /**
   * voca_tests.voca_test_folders
   */
  export type voca_tests$voca_test_foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_test_folders
     */
    select?: voca_test_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_test_folders
     */
    omit?: voca_test_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_test_foldersInclude<ExtArgs> | null
    where?: voca_test_foldersWhereInput
  }

  /**
   * voca_tests without action
   */
  export type voca_testsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voca_tests
     */
    select?: voca_testsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voca_tests
     */
    omit?: voca_testsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voca_testsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    nickname: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nickname: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    nickname?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nickname?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nickname?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    nickname: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    nickname?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly nickname: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Grammar_file_test_linksScalarFieldEnum: {
    file_id: 'file_id',
    test_id: 'test_id'
  };

  export type Grammar_file_test_linksScalarFieldEnum = (typeof Grammar_file_test_linksScalarFieldEnum)[keyof typeof Grammar_file_test_linksScalarFieldEnum]


  export const Grammar_filesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    folder_id: 'folder_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Grammar_filesScalarFieldEnum = (typeof Grammar_filesScalarFieldEnum)[keyof typeof Grammar_filesScalarFieldEnum]


  export const Grammar_foldersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    parent_id: 'parent_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Grammar_foldersScalarFieldEnum = (typeof Grammar_foldersScalarFieldEnum)[keyof typeof Grammar_foldersScalarFieldEnum]


  export const Grammar_test_foldersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    parent_id: 'parent_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Grammar_test_foldersScalarFieldEnum = (typeof Grammar_test_foldersScalarFieldEnum)[keyof typeof Grammar_test_foldersScalarFieldEnum]


  export const Grammar_testsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    folder_id: 'folder_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Grammar_testsScalarFieldEnum = (typeof Grammar_testsScalarFieldEnum)[keyof typeof Grammar_testsScalarFieldEnum]


  export const Voca_file_test_linksScalarFieldEnum: {
    file_id: 'file_id',
    test_id: 'test_id'
  };

  export type Voca_file_test_linksScalarFieldEnum = (typeof Voca_file_test_linksScalarFieldEnum)[keyof typeof Voca_file_test_linksScalarFieldEnum]


  export const Voca_filesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    folder_id: 'folder_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Voca_filesScalarFieldEnum = (typeof Voca_filesScalarFieldEnum)[keyof typeof Voca_filesScalarFieldEnum]


  export const Voca_foldersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    parent_id: 'parent_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Voca_foldersScalarFieldEnum = (typeof Voca_foldersScalarFieldEnum)[keyof typeof Voca_foldersScalarFieldEnum]


  export const Voca_test_foldersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    parent_id: 'parent_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Voca_test_foldersScalarFieldEnum = (typeof Voca_test_foldersScalarFieldEnum)[keyof typeof Voca_test_foldersScalarFieldEnum]


  export const Voca_testsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    folder_id: 'folder_id',
    name: 'name',
    is_favorited: 'is_favorited',
    is_published: 'is_published',
    tags: 'tags',
    created_at: 'created_at'
  };

  export type Voca_testsScalarFieldEnum = (typeof Voca_testsScalarFieldEnum)[keyof typeof Voca_testsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type grammar_file_test_linksWhereInput = {
    AND?: grammar_file_test_linksWhereInput | grammar_file_test_linksWhereInput[]
    OR?: grammar_file_test_linksWhereInput[]
    NOT?: grammar_file_test_linksWhereInput | grammar_file_test_linksWhereInput[]
    file_id?: UuidFilter<"grammar_file_test_links"> | string
    test_id?: UuidFilter<"grammar_file_test_links"> | string
    grammar_files?: XOR<Grammar_filesScalarRelationFilter, grammar_filesWhereInput>
    grammar_tests?: XOR<Grammar_testsScalarRelationFilter, grammar_testsWhereInput>
  }

  export type grammar_file_test_linksOrderByWithRelationInput = {
    file_id?: SortOrder
    test_id?: SortOrder
    grammar_files?: grammar_filesOrderByWithRelationInput
    grammar_tests?: grammar_testsOrderByWithRelationInput
  }

  export type grammar_file_test_linksWhereUniqueInput = Prisma.AtLeast<{
    file_id_test_id?: grammar_file_test_linksFile_idTest_idCompoundUniqueInput
    AND?: grammar_file_test_linksWhereInput | grammar_file_test_linksWhereInput[]
    OR?: grammar_file_test_linksWhereInput[]
    NOT?: grammar_file_test_linksWhereInput | grammar_file_test_linksWhereInput[]
    file_id?: UuidFilter<"grammar_file_test_links"> | string
    test_id?: UuidFilter<"grammar_file_test_links"> | string
    grammar_files?: XOR<Grammar_filesScalarRelationFilter, grammar_filesWhereInput>
    grammar_tests?: XOR<Grammar_testsScalarRelationFilter, grammar_testsWhereInput>
  }, "file_id_test_id">

  export type grammar_file_test_linksOrderByWithAggregationInput = {
    file_id?: SortOrder
    test_id?: SortOrder
    _count?: grammar_file_test_linksCountOrderByAggregateInput
    _max?: grammar_file_test_linksMaxOrderByAggregateInput
    _min?: grammar_file_test_linksMinOrderByAggregateInput
  }

  export type grammar_file_test_linksScalarWhereWithAggregatesInput = {
    AND?: grammar_file_test_linksScalarWhereWithAggregatesInput | grammar_file_test_linksScalarWhereWithAggregatesInput[]
    OR?: grammar_file_test_linksScalarWhereWithAggregatesInput[]
    NOT?: grammar_file_test_linksScalarWhereWithAggregatesInput | grammar_file_test_linksScalarWhereWithAggregatesInput[]
    file_id?: UuidWithAggregatesFilter<"grammar_file_test_links"> | string
    test_id?: UuidWithAggregatesFilter<"grammar_file_test_links"> | string
  }

  export type grammar_filesWhereInput = {
    AND?: grammar_filesWhereInput | grammar_filesWhereInput[]
    OR?: grammar_filesWhereInput[]
    NOT?: grammar_filesWhereInput | grammar_filesWhereInput[]
    id?: UuidFilter<"grammar_files"> | string
    user_id?: UuidFilter<"grammar_files"> | string
    folder_id?: UuidNullableFilter<"grammar_files"> | string | null
    name?: StringFilter<"grammar_files"> | string
    is_favorited?: BoolFilter<"grammar_files"> | boolean
    is_published?: BoolFilter<"grammar_files"> | boolean
    tags?: StringNullableListFilter<"grammar_files">
    created_at?: DateTimeFilter<"grammar_files"> | Date | string
    grammar_file_test_links?: Grammar_file_test_linksListRelationFilter
    grammar_folders?: XOR<Grammar_foldersNullableScalarRelationFilter, grammar_foldersWhereInput> | null
  }

  export type grammar_filesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    grammar_file_test_links?: grammar_file_test_linksOrderByRelationAggregateInput
    grammar_folders?: grammar_foldersOrderByWithRelationInput
  }

  export type grammar_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: grammar_filesWhereInput | grammar_filesWhereInput[]
    OR?: grammar_filesWhereInput[]
    NOT?: grammar_filesWhereInput | grammar_filesWhereInput[]
    user_id?: UuidFilter<"grammar_files"> | string
    folder_id?: UuidNullableFilter<"grammar_files"> | string | null
    name?: StringFilter<"grammar_files"> | string
    is_favorited?: BoolFilter<"grammar_files"> | boolean
    is_published?: BoolFilter<"grammar_files"> | boolean
    tags?: StringNullableListFilter<"grammar_files">
    created_at?: DateTimeFilter<"grammar_files"> | Date | string
    grammar_file_test_links?: Grammar_file_test_linksListRelationFilter
    grammar_folders?: XOR<Grammar_foldersNullableScalarRelationFilter, grammar_foldersWhereInput> | null
  }, "id">

  export type grammar_filesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: grammar_filesCountOrderByAggregateInput
    _max?: grammar_filesMaxOrderByAggregateInput
    _min?: grammar_filesMinOrderByAggregateInput
  }

  export type grammar_filesScalarWhereWithAggregatesInput = {
    AND?: grammar_filesScalarWhereWithAggregatesInput | grammar_filesScalarWhereWithAggregatesInput[]
    OR?: grammar_filesScalarWhereWithAggregatesInput[]
    NOT?: grammar_filesScalarWhereWithAggregatesInput | grammar_filesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"grammar_files"> | string
    user_id?: UuidWithAggregatesFilter<"grammar_files"> | string
    folder_id?: UuidNullableWithAggregatesFilter<"grammar_files"> | string | null
    name?: StringWithAggregatesFilter<"grammar_files"> | string
    is_favorited?: BoolWithAggregatesFilter<"grammar_files"> | boolean
    is_published?: BoolWithAggregatesFilter<"grammar_files"> | boolean
    tags?: StringNullableListFilter<"grammar_files">
    created_at?: DateTimeWithAggregatesFilter<"grammar_files"> | Date | string
  }

  export type grammar_foldersWhereInput = {
    AND?: grammar_foldersWhereInput | grammar_foldersWhereInput[]
    OR?: grammar_foldersWhereInput[]
    NOT?: grammar_foldersWhereInput | grammar_foldersWhereInput[]
    id?: UuidFilter<"grammar_folders"> | string
    user_id?: UuidFilter<"grammar_folders"> | string
    parent_id?: UuidNullableFilter<"grammar_folders"> | string | null
    name?: StringFilter<"grammar_folders"> | string
    is_favorited?: BoolFilter<"grammar_folders"> | boolean
    is_published?: BoolFilter<"grammar_folders"> | boolean
    tags?: StringNullableListFilter<"grammar_folders">
    created_at?: DateTimeFilter<"grammar_folders"> | Date | string
    grammar_files?: Grammar_filesListRelationFilter
  }

  export type grammar_foldersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    grammar_files?: grammar_filesOrderByRelationAggregateInput
  }

  export type grammar_foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: grammar_foldersWhereInput | grammar_foldersWhereInput[]
    OR?: grammar_foldersWhereInput[]
    NOT?: grammar_foldersWhereInput | grammar_foldersWhereInput[]
    user_id?: UuidFilter<"grammar_folders"> | string
    parent_id?: UuidNullableFilter<"grammar_folders"> | string | null
    name?: StringFilter<"grammar_folders"> | string
    is_favorited?: BoolFilter<"grammar_folders"> | boolean
    is_published?: BoolFilter<"grammar_folders"> | boolean
    tags?: StringNullableListFilter<"grammar_folders">
    created_at?: DateTimeFilter<"grammar_folders"> | Date | string
    grammar_files?: Grammar_filesListRelationFilter
  }, "id">

  export type grammar_foldersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: grammar_foldersCountOrderByAggregateInput
    _max?: grammar_foldersMaxOrderByAggregateInput
    _min?: grammar_foldersMinOrderByAggregateInput
  }

  export type grammar_foldersScalarWhereWithAggregatesInput = {
    AND?: grammar_foldersScalarWhereWithAggregatesInput | grammar_foldersScalarWhereWithAggregatesInput[]
    OR?: grammar_foldersScalarWhereWithAggregatesInput[]
    NOT?: grammar_foldersScalarWhereWithAggregatesInput | grammar_foldersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"grammar_folders"> | string
    user_id?: UuidWithAggregatesFilter<"grammar_folders"> | string
    parent_id?: UuidNullableWithAggregatesFilter<"grammar_folders"> | string | null
    name?: StringWithAggregatesFilter<"grammar_folders"> | string
    is_favorited?: BoolWithAggregatesFilter<"grammar_folders"> | boolean
    is_published?: BoolWithAggregatesFilter<"grammar_folders"> | boolean
    tags?: StringNullableListFilter<"grammar_folders">
    created_at?: DateTimeWithAggregatesFilter<"grammar_folders"> | Date | string
  }

  export type grammar_test_foldersWhereInput = {
    AND?: grammar_test_foldersWhereInput | grammar_test_foldersWhereInput[]
    OR?: grammar_test_foldersWhereInput[]
    NOT?: grammar_test_foldersWhereInput | grammar_test_foldersWhereInput[]
    id?: UuidFilter<"grammar_test_folders"> | string
    user_id?: UuidFilter<"grammar_test_folders"> | string
    parent_id?: UuidNullableFilter<"grammar_test_folders"> | string | null
    name?: StringFilter<"grammar_test_folders"> | string
    is_favorited?: BoolFilter<"grammar_test_folders"> | boolean
    is_published?: BoolFilter<"grammar_test_folders"> | boolean
    tags?: StringNullableListFilter<"grammar_test_folders">
    created_at?: DateTimeFilter<"grammar_test_folders"> | Date | string
    grammar_tests?: Grammar_testsListRelationFilter
  }

  export type grammar_test_foldersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    grammar_tests?: grammar_testsOrderByRelationAggregateInput
  }

  export type grammar_test_foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: grammar_test_foldersWhereInput | grammar_test_foldersWhereInput[]
    OR?: grammar_test_foldersWhereInput[]
    NOT?: grammar_test_foldersWhereInput | grammar_test_foldersWhereInput[]
    user_id?: UuidFilter<"grammar_test_folders"> | string
    parent_id?: UuidNullableFilter<"grammar_test_folders"> | string | null
    name?: StringFilter<"grammar_test_folders"> | string
    is_favorited?: BoolFilter<"grammar_test_folders"> | boolean
    is_published?: BoolFilter<"grammar_test_folders"> | boolean
    tags?: StringNullableListFilter<"grammar_test_folders">
    created_at?: DateTimeFilter<"grammar_test_folders"> | Date | string
    grammar_tests?: Grammar_testsListRelationFilter
  }, "id">

  export type grammar_test_foldersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: grammar_test_foldersCountOrderByAggregateInput
    _max?: grammar_test_foldersMaxOrderByAggregateInput
    _min?: grammar_test_foldersMinOrderByAggregateInput
  }

  export type grammar_test_foldersScalarWhereWithAggregatesInput = {
    AND?: grammar_test_foldersScalarWhereWithAggregatesInput | grammar_test_foldersScalarWhereWithAggregatesInput[]
    OR?: grammar_test_foldersScalarWhereWithAggregatesInput[]
    NOT?: grammar_test_foldersScalarWhereWithAggregatesInput | grammar_test_foldersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"grammar_test_folders"> | string
    user_id?: UuidWithAggregatesFilter<"grammar_test_folders"> | string
    parent_id?: UuidNullableWithAggregatesFilter<"grammar_test_folders"> | string | null
    name?: StringWithAggregatesFilter<"grammar_test_folders"> | string
    is_favorited?: BoolWithAggregatesFilter<"grammar_test_folders"> | boolean
    is_published?: BoolWithAggregatesFilter<"grammar_test_folders"> | boolean
    tags?: StringNullableListFilter<"grammar_test_folders">
    created_at?: DateTimeWithAggregatesFilter<"grammar_test_folders"> | Date | string
  }

  export type grammar_testsWhereInput = {
    AND?: grammar_testsWhereInput | grammar_testsWhereInput[]
    OR?: grammar_testsWhereInput[]
    NOT?: grammar_testsWhereInput | grammar_testsWhereInput[]
    id?: UuidFilter<"grammar_tests"> | string
    user_id?: UuidFilter<"grammar_tests"> | string
    folder_id?: UuidNullableFilter<"grammar_tests"> | string | null
    name?: StringFilter<"grammar_tests"> | string
    is_favorited?: BoolFilter<"grammar_tests"> | boolean
    is_published?: BoolFilter<"grammar_tests"> | boolean
    tags?: StringNullableListFilter<"grammar_tests">
    created_at?: DateTimeFilter<"grammar_tests"> | Date | string
    grammar_file_test_links?: Grammar_file_test_linksListRelationFilter
    grammar_test_folders?: XOR<Grammar_test_foldersNullableScalarRelationFilter, grammar_test_foldersWhereInput> | null
  }

  export type grammar_testsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    grammar_file_test_links?: grammar_file_test_linksOrderByRelationAggregateInput
    grammar_test_folders?: grammar_test_foldersOrderByWithRelationInput
  }

  export type grammar_testsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: grammar_testsWhereInput | grammar_testsWhereInput[]
    OR?: grammar_testsWhereInput[]
    NOT?: grammar_testsWhereInput | grammar_testsWhereInput[]
    user_id?: UuidFilter<"grammar_tests"> | string
    folder_id?: UuidNullableFilter<"grammar_tests"> | string | null
    name?: StringFilter<"grammar_tests"> | string
    is_favorited?: BoolFilter<"grammar_tests"> | boolean
    is_published?: BoolFilter<"grammar_tests"> | boolean
    tags?: StringNullableListFilter<"grammar_tests">
    created_at?: DateTimeFilter<"grammar_tests"> | Date | string
    grammar_file_test_links?: Grammar_file_test_linksListRelationFilter
    grammar_test_folders?: XOR<Grammar_test_foldersNullableScalarRelationFilter, grammar_test_foldersWhereInput> | null
  }, "id">

  export type grammar_testsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: grammar_testsCountOrderByAggregateInput
    _max?: grammar_testsMaxOrderByAggregateInput
    _min?: grammar_testsMinOrderByAggregateInput
  }

  export type grammar_testsScalarWhereWithAggregatesInput = {
    AND?: grammar_testsScalarWhereWithAggregatesInput | grammar_testsScalarWhereWithAggregatesInput[]
    OR?: grammar_testsScalarWhereWithAggregatesInput[]
    NOT?: grammar_testsScalarWhereWithAggregatesInput | grammar_testsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"grammar_tests"> | string
    user_id?: UuidWithAggregatesFilter<"grammar_tests"> | string
    folder_id?: UuidNullableWithAggregatesFilter<"grammar_tests"> | string | null
    name?: StringWithAggregatesFilter<"grammar_tests"> | string
    is_favorited?: BoolWithAggregatesFilter<"grammar_tests"> | boolean
    is_published?: BoolWithAggregatesFilter<"grammar_tests"> | boolean
    tags?: StringNullableListFilter<"grammar_tests">
    created_at?: DateTimeWithAggregatesFilter<"grammar_tests"> | Date | string
  }

  export type voca_file_test_linksWhereInput = {
    AND?: voca_file_test_linksWhereInput | voca_file_test_linksWhereInput[]
    OR?: voca_file_test_linksWhereInput[]
    NOT?: voca_file_test_linksWhereInput | voca_file_test_linksWhereInput[]
    file_id?: UuidFilter<"voca_file_test_links"> | string
    test_id?: UuidFilter<"voca_file_test_links"> | string
    voca_tests?: XOR<Voca_testsScalarRelationFilter, voca_testsWhereInput>
    voca_files?: XOR<Voca_filesScalarRelationFilter, voca_filesWhereInput>
  }

  export type voca_file_test_linksOrderByWithRelationInput = {
    file_id?: SortOrder
    test_id?: SortOrder
    voca_tests?: voca_testsOrderByWithRelationInput
    voca_files?: voca_filesOrderByWithRelationInput
  }

  export type voca_file_test_linksWhereUniqueInput = Prisma.AtLeast<{
    file_id_test_id?: voca_file_test_linksFile_idTest_idCompoundUniqueInput
    AND?: voca_file_test_linksWhereInput | voca_file_test_linksWhereInput[]
    OR?: voca_file_test_linksWhereInput[]
    NOT?: voca_file_test_linksWhereInput | voca_file_test_linksWhereInput[]
    file_id?: UuidFilter<"voca_file_test_links"> | string
    test_id?: UuidFilter<"voca_file_test_links"> | string
    voca_tests?: XOR<Voca_testsScalarRelationFilter, voca_testsWhereInput>
    voca_files?: XOR<Voca_filesScalarRelationFilter, voca_filesWhereInput>
  }, "file_id_test_id">

  export type voca_file_test_linksOrderByWithAggregationInput = {
    file_id?: SortOrder
    test_id?: SortOrder
    _count?: voca_file_test_linksCountOrderByAggregateInput
    _max?: voca_file_test_linksMaxOrderByAggregateInput
    _min?: voca_file_test_linksMinOrderByAggregateInput
  }

  export type voca_file_test_linksScalarWhereWithAggregatesInput = {
    AND?: voca_file_test_linksScalarWhereWithAggregatesInput | voca_file_test_linksScalarWhereWithAggregatesInput[]
    OR?: voca_file_test_linksScalarWhereWithAggregatesInput[]
    NOT?: voca_file_test_linksScalarWhereWithAggregatesInput | voca_file_test_linksScalarWhereWithAggregatesInput[]
    file_id?: UuidWithAggregatesFilter<"voca_file_test_links"> | string
    test_id?: UuidWithAggregatesFilter<"voca_file_test_links"> | string
  }

  export type voca_filesWhereInput = {
    AND?: voca_filesWhereInput | voca_filesWhereInput[]
    OR?: voca_filesWhereInput[]
    NOT?: voca_filesWhereInput | voca_filesWhereInput[]
    id?: UuidFilter<"voca_files"> | string
    user_id?: UuidFilter<"voca_files"> | string
    folder_id?: UuidNullableFilter<"voca_files"> | string | null
    name?: StringFilter<"voca_files"> | string
    is_favorited?: BoolFilter<"voca_files"> | boolean
    is_published?: BoolFilter<"voca_files"> | boolean
    tags?: StringNullableListFilter<"voca_files">
    created_at?: DateTimeFilter<"voca_files"> | Date | string
    voca_file_test_links?: Voca_file_test_linksListRelationFilter
    voca_folders?: XOR<Voca_foldersNullableScalarRelationFilter, voca_foldersWhereInput> | null
  }

  export type voca_filesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    voca_file_test_links?: voca_file_test_linksOrderByRelationAggregateInput
    voca_folders?: voca_foldersOrderByWithRelationInput
  }

  export type voca_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: voca_filesWhereInput | voca_filesWhereInput[]
    OR?: voca_filesWhereInput[]
    NOT?: voca_filesWhereInput | voca_filesWhereInput[]
    user_id?: UuidFilter<"voca_files"> | string
    folder_id?: UuidNullableFilter<"voca_files"> | string | null
    name?: StringFilter<"voca_files"> | string
    is_favorited?: BoolFilter<"voca_files"> | boolean
    is_published?: BoolFilter<"voca_files"> | boolean
    tags?: StringNullableListFilter<"voca_files">
    created_at?: DateTimeFilter<"voca_files"> | Date | string
    voca_file_test_links?: Voca_file_test_linksListRelationFilter
    voca_folders?: XOR<Voca_foldersNullableScalarRelationFilter, voca_foldersWhereInput> | null
  }, "id">

  export type voca_filesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: voca_filesCountOrderByAggregateInput
    _max?: voca_filesMaxOrderByAggregateInput
    _min?: voca_filesMinOrderByAggregateInput
  }

  export type voca_filesScalarWhereWithAggregatesInput = {
    AND?: voca_filesScalarWhereWithAggregatesInput | voca_filesScalarWhereWithAggregatesInput[]
    OR?: voca_filesScalarWhereWithAggregatesInput[]
    NOT?: voca_filesScalarWhereWithAggregatesInput | voca_filesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"voca_files"> | string
    user_id?: UuidWithAggregatesFilter<"voca_files"> | string
    folder_id?: UuidNullableWithAggregatesFilter<"voca_files"> | string | null
    name?: StringWithAggregatesFilter<"voca_files"> | string
    is_favorited?: BoolWithAggregatesFilter<"voca_files"> | boolean
    is_published?: BoolWithAggregatesFilter<"voca_files"> | boolean
    tags?: StringNullableListFilter<"voca_files">
    created_at?: DateTimeWithAggregatesFilter<"voca_files"> | Date | string
  }

  export type voca_foldersWhereInput = {
    AND?: voca_foldersWhereInput | voca_foldersWhereInput[]
    OR?: voca_foldersWhereInput[]
    NOT?: voca_foldersWhereInput | voca_foldersWhereInput[]
    id?: UuidFilter<"voca_folders"> | string
    user_id?: UuidFilter<"voca_folders"> | string
    parent_id?: UuidNullableFilter<"voca_folders"> | string | null
    name?: StringFilter<"voca_folders"> | string
    is_favorited?: BoolFilter<"voca_folders"> | boolean
    is_published?: BoolFilter<"voca_folders"> | boolean
    tags?: StringNullableListFilter<"voca_folders">
    created_at?: DateTimeFilter<"voca_folders"> | Date | string
    voca_files?: Voca_filesListRelationFilter
  }

  export type voca_foldersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    voca_files?: voca_filesOrderByRelationAggregateInput
  }

  export type voca_foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: voca_foldersWhereInput | voca_foldersWhereInput[]
    OR?: voca_foldersWhereInput[]
    NOT?: voca_foldersWhereInput | voca_foldersWhereInput[]
    user_id?: UuidFilter<"voca_folders"> | string
    parent_id?: UuidNullableFilter<"voca_folders"> | string | null
    name?: StringFilter<"voca_folders"> | string
    is_favorited?: BoolFilter<"voca_folders"> | boolean
    is_published?: BoolFilter<"voca_folders"> | boolean
    tags?: StringNullableListFilter<"voca_folders">
    created_at?: DateTimeFilter<"voca_folders"> | Date | string
    voca_files?: Voca_filesListRelationFilter
  }, "id">

  export type voca_foldersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: voca_foldersCountOrderByAggregateInput
    _max?: voca_foldersMaxOrderByAggregateInput
    _min?: voca_foldersMinOrderByAggregateInput
  }

  export type voca_foldersScalarWhereWithAggregatesInput = {
    AND?: voca_foldersScalarWhereWithAggregatesInput | voca_foldersScalarWhereWithAggregatesInput[]
    OR?: voca_foldersScalarWhereWithAggregatesInput[]
    NOT?: voca_foldersScalarWhereWithAggregatesInput | voca_foldersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"voca_folders"> | string
    user_id?: UuidWithAggregatesFilter<"voca_folders"> | string
    parent_id?: UuidNullableWithAggregatesFilter<"voca_folders"> | string | null
    name?: StringWithAggregatesFilter<"voca_folders"> | string
    is_favorited?: BoolWithAggregatesFilter<"voca_folders"> | boolean
    is_published?: BoolWithAggregatesFilter<"voca_folders"> | boolean
    tags?: StringNullableListFilter<"voca_folders">
    created_at?: DateTimeWithAggregatesFilter<"voca_folders"> | Date | string
  }

  export type voca_test_foldersWhereInput = {
    AND?: voca_test_foldersWhereInput | voca_test_foldersWhereInput[]
    OR?: voca_test_foldersWhereInput[]
    NOT?: voca_test_foldersWhereInput | voca_test_foldersWhereInput[]
    id?: UuidFilter<"voca_test_folders"> | string
    user_id?: UuidFilter<"voca_test_folders"> | string
    parent_id?: UuidNullableFilter<"voca_test_folders"> | string | null
    name?: StringFilter<"voca_test_folders"> | string
    is_favorited?: BoolFilter<"voca_test_folders"> | boolean
    is_published?: BoolFilter<"voca_test_folders"> | boolean
    tags?: StringNullableListFilter<"voca_test_folders">
    created_at?: DateTimeFilter<"voca_test_folders"> | Date | string
    voca_tests?: Voca_testsListRelationFilter
  }

  export type voca_test_foldersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    voca_tests?: voca_testsOrderByRelationAggregateInput
  }

  export type voca_test_foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: voca_test_foldersWhereInput | voca_test_foldersWhereInput[]
    OR?: voca_test_foldersWhereInput[]
    NOT?: voca_test_foldersWhereInput | voca_test_foldersWhereInput[]
    user_id?: UuidFilter<"voca_test_folders"> | string
    parent_id?: UuidNullableFilter<"voca_test_folders"> | string | null
    name?: StringFilter<"voca_test_folders"> | string
    is_favorited?: BoolFilter<"voca_test_folders"> | boolean
    is_published?: BoolFilter<"voca_test_folders"> | boolean
    tags?: StringNullableListFilter<"voca_test_folders">
    created_at?: DateTimeFilter<"voca_test_folders"> | Date | string
    voca_tests?: Voca_testsListRelationFilter
  }, "id">

  export type voca_test_foldersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: voca_test_foldersCountOrderByAggregateInput
    _max?: voca_test_foldersMaxOrderByAggregateInput
    _min?: voca_test_foldersMinOrderByAggregateInput
  }

  export type voca_test_foldersScalarWhereWithAggregatesInput = {
    AND?: voca_test_foldersScalarWhereWithAggregatesInput | voca_test_foldersScalarWhereWithAggregatesInput[]
    OR?: voca_test_foldersScalarWhereWithAggregatesInput[]
    NOT?: voca_test_foldersScalarWhereWithAggregatesInput | voca_test_foldersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"voca_test_folders"> | string
    user_id?: UuidWithAggregatesFilter<"voca_test_folders"> | string
    parent_id?: UuidNullableWithAggregatesFilter<"voca_test_folders"> | string | null
    name?: StringWithAggregatesFilter<"voca_test_folders"> | string
    is_favorited?: BoolWithAggregatesFilter<"voca_test_folders"> | boolean
    is_published?: BoolWithAggregatesFilter<"voca_test_folders"> | boolean
    tags?: StringNullableListFilter<"voca_test_folders">
    created_at?: DateTimeWithAggregatesFilter<"voca_test_folders"> | Date | string
  }

  export type voca_testsWhereInput = {
    AND?: voca_testsWhereInput | voca_testsWhereInput[]
    OR?: voca_testsWhereInput[]
    NOT?: voca_testsWhereInput | voca_testsWhereInput[]
    id?: UuidFilter<"voca_tests"> | string
    user_id?: UuidFilter<"voca_tests"> | string
    folder_id?: UuidNullableFilter<"voca_tests"> | string | null
    name?: StringFilter<"voca_tests"> | string
    is_favorited?: BoolFilter<"voca_tests"> | boolean
    is_published?: BoolFilter<"voca_tests"> | boolean
    tags?: StringNullableListFilter<"voca_tests">
    created_at?: DateTimeFilter<"voca_tests"> | Date | string
    voca_file_test_links?: Voca_file_test_linksListRelationFilter
    voca_test_folders?: XOR<Voca_test_foldersNullableScalarRelationFilter, voca_test_foldersWhereInput> | null
  }

  export type voca_testsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    voca_file_test_links?: voca_file_test_linksOrderByRelationAggregateInput
    voca_test_folders?: voca_test_foldersOrderByWithRelationInput
  }

  export type voca_testsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: voca_testsWhereInput | voca_testsWhereInput[]
    OR?: voca_testsWhereInput[]
    NOT?: voca_testsWhereInput | voca_testsWhereInput[]
    user_id?: UuidFilter<"voca_tests"> | string
    folder_id?: UuidNullableFilter<"voca_tests"> | string | null
    name?: StringFilter<"voca_tests"> | string
    is_favorited?: BoolFilter<"voca_tests"> | boolean
    is_published?: BoolFilter<"voca_tests"> | boolean
    tags?: StringNullableListFilter<"voca_tests">
    created_at?: DateTimeFilter<"voca_tests"> | Date | string
    voca_file_test_links?: Voca_file_test_linksListRelationFilter
    voca_test_folders?: XOR<Voca_test_foldersNullableScalarRelationFilter, voca_test_foldersWhereInput> | null
  }, "id">

  export type voca_testsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    _count?: voca_testsCountOrderByAggregateInput
    _max?: voca_testsMaxOrderByAggregateInput
    _min?: voca_testsMinOrderByAggregateInput
  }

  export type voca_testsScalarWhereWithAggregatesInput = {
    AND?: voca_testsScalarWhereWithAggregatesInput | voca_testsScalarWhereWithAggregatesInput[]
    OR?: voca_testsScalarWhereWithAggregatesInput[]
    NOT?: voca_testsScalarWhereWithAggregatesInput | voca_testsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"voca_tests"> | string
    user_id?: UuidWithAggregatesFilter<"voca_tests"> | string
    folder_id?: UuidNullableWithAggregatesFilter<"voca_tests"> | string | null
    name?: StringWithAggregatesFilter<"voca_tests"> | string
    is_favorited?: BoolWithAggregatesFilter<"voca_tests"> | boolean
    is_published?: BoolWithAggregatesFilter<"voca_tests"> | boolean
    tags?: StringNullableListFilter<"voca_tests">
    created_at?: DateTimeWithAggregatesFilter<"voca_tests"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    nickname?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nickname?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
  }, "id" | "nickname">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    nickname?: StringWithAggregatesFilter<"users"> | string
  }

  export type grammar_file_test_linksCreateInput = {
    grammar_files: grammar_filesCreateNestedOneWithoutGrammar_file_test_linksInput
    grammar_tests: grammar_testsCreateNestedOneWithoutGrammar_file_test_linksInput
  }

  export type grammar_file_test_linksUncheckedCreateInput = {
    file_id: string
    test_id: string
  }

  export type grammar_file_test_linksUpdateInput = {
    grammar_files?: grammar_filesUpdateOneRequiredWithoutGrammar_file_test_linksNestedInput
    grammar_tests?: grammar_testsUpdateOneRequiredWithoutGrammar_file_test_linksNestedInput
  }

  export type grammar_file_test_linksUncheckedUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type grammar_file_test_linksCreateManyInput = {
    file_id: string
    test_id: string
  }

  export type grammar_file_test_linksUpdateManyMutationInput = {

  }

  export type grammar_file_test_linksUncheckedUpdateManyInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type grammar_filesCreateInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksCreateNestedManyWithoutGrammar_filesInput
    grammar_folders?: grammar_foldersCreateNestedOneWithoutGrammar_filesInput
  }

  export type grammar_filesUncheckedCreateInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedCreateNestedManyWithoutGrammar_filesInput
  }

  export type grammar_filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUpdateManyWithoutGrammar_filesNestedInput
    grammar_folders?: grammar_foldersUpdateOneWithoutGrammar_filesNestedInput
  }

  export type grammar_filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_filesNestedInput
  }

  export type grammar_filesCreateManyInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_foldersCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_foldersCreatetagsInput | string[]
    created_at?: Date | string
    grammar_files?: grammar_filesCreateNestedManyWithoutGrammar_foldersInput
  }

  export type grammar_foldersUncheckedCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_foldersCreatetagsInput | string[]
    created_at?: Date | string
    grammar_files?: grammar_filesUncheckedCreateNestedManyWithoutGrammar_foldersInput
  }

  export type grammar_foldersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_files?: grammar_filesUpdateManyWithoutGrammar_foldersNestedInput
  }

  export type grammar_foldersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_files?: grammar_filesUncheckedUpdateManyWithoutGrammar_foldersNestedInput
  }

  export type grammar_foldersCreateManyInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_foldersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_foldersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_test_foldersCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
    grammar_tests?: grammar_testsCreateNestedManyWithoutGrammar_test_foldersInput
  }

  export type grammar_test_foldersUncheckedCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
    grammar_tests?: grammar_testsUncheckedCreateNestedManyWithoutGrammar_test_foldersInput
  }

  export type grammar_test_foldersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_tests?: grammar_testsUpdateManyWithoutGrammar_test_foldersNestedInput
  }

  export type grammar_test_foldersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_tests?: grammar_testsUncheckedUpdateManyWithoutGrammar_test_foldersNestedInput
  }

  export type grammar_test_foldersCreateManyInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_test_foldersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_test_foldersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_testsCreateInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksCreateNestedManyWithoutGrammar_testsInput
    grammar_test_folders?: grammar_test_foldersCreateNestedOneWithoutGrammar_testsInput
  }

  export type grammar_testsUncheckedCreateInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedCreateNestedManyWithoutGrammar_testsInput
  }

  export type grammar_testsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUpdateManyWithoutGrammar_testsNestedInput
    grammar_test_folders?: grammar_test_foldersUpdateOneWithoutGrammar_testsNestedInput
  }

  export type grammar_testsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_testsNestedInput
  }

  export type grammar_testsCreateManyInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_testsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_testsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_file_test_linksCreateInput = {
    voca_tests: voca_testsCreateNestedOneWithoutVoca_file_test_linksInput
    voca_files: voca_filesCreateNestedOneWithoutVoca_file_test_linksInput
  }

  export type voca_file_test_linksUncheckedCreateInput = {
    file_id: string
    test_id: string
  }

  export type voca_file_test_linksUpdateInput = {
    voca_tests?: voca_testsUpdateOneRequiredWithoutVoca_file_test_linksNestedInput
    voca_files?: voca_filesUpdateOneRequiredWithoutVoca_file_test_linksNestedInput
  }

  export type voca_file_test_linksUncheckedUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type voca_file_test_linksCreateManyInput = {
    file_id: string
    test_id: string
  }

  export type voca_file_test_linksUpdateManyMutationInput = {

  }

  export type voca_file_test_linksUncheckedUpdateManyInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type voca_filesCreateInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksCreateNestedManyWithoutVoca_filesInput
    voca_folders?: voca_foldersCreateNestedOneWithoutVoca_filesInput
  }

  export type voca_filesUncheckedCreateInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedCreateNestedManyWithoutVoca_filesInput
  }

  export type voca_filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUpdateManyWithoutVoca_filesNestedInput
    voca_folders?: voca_foldersUpdateOneWithoutVoca_filesNestedInput
  }

  export type voca_filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedUpdateManyWithoutVoca_filesNestedInput
  }

  export type voca_filesCreateManyInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_foldersCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_foldersCreatetagsInput | string[]
    created_at?: Date | string
    voca_files?: voca_filesCreateNestedManyWithoutVoca_foldersInput
  }

  export type voca_foldersUncheckedCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_foldersCreatetagsInput | string[]
    created_at?: Date | string
    voca_files?: voca_filesUncheckedCreateNestedManyWithoutVoca_foldersInput
  }

  export type voca_foldersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_files?: voca_filesUpdateManyWithoutVoca_foldersNestedInput
  }

  export type voca_foldersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_files?: voca_filesUncheckedUpdateManyWithoutVoca_foldersNestedInput
  }

  export type voca_foldersCreateManyInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_foldersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_foldersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_test_foldersCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
    voca_tests?: voca_testsCreateNestedManyWithoutVoca_test_foldersInput
  }

  export type voca_test_foldersUncheckedCreateInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
    voca_tests?: voca_testsUncheckedCreateNestedManyWithoutVoca_test_foldersInput
  }

  export type voca_test_foldersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_tests?: voca_testsUpdateManyWithoutVoca_test_foldersNestedInput
  }

  export type voca_test_foldersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_tests?: voca_testsUncheckedUpdateManyWithoutVoca_test_foldersNestedInput
  }

  export type voca_test_foldersCreateManyInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_test_foldersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_test_foldersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_testsCreateInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksCreateNestedManyWithoutVoca_testsInput
    voca_test_folders?: voca_test_foldersCreateNestedOneWithoutVoca_testsInput
  }

  export type voca_testsUncheckedCreateInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedCreateNestedManyWithoutVoca_testsInput
  }

  export type voca_testsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUpdateManyWithoutVoca_testsNestedInput
    voca_test_folders?: voca_test_foldersUpdateOneWithoutVoca_testsNestedInput
  }

  export type voca_testsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedUpdateManyWithoutVoca_testsNestedInput
  }

  export type voca_testsCreateManyInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_testsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_testsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    nickname: string
  }

  export type usersUncheckedCreateInput = {
    id?: string
    nickname: string
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: string
    nickname: string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type Grammar_filesScalarRelationFilter = {
    is?: grammar_filesWhereInput
    isNot?: grammar_filesWhereInput
  }

  export type Grammar_testsScalarRelationFilter = {
    is?: grammar_testsWhereInput
    isNot?: grammar_testsWhereInput
  }

  export type grammar_file_test_linksFile_idTest_idCompoundUniqueInput = {
    file_id: string
    test_id: string
  }

  export type grammar_file_test_linksCountOrderByAggregateInput = {
    file_id?: SortOrder
    test_id?: SortOrder
  }

  export type grammar_file_test_linksMaxOrderByAggregateInput = {
    file_id?: SortOrder
    test_id?: SortOrder
  }

  export type grammar_file_test_linksMinOrderByAggregateInput = {
    file_id?: SortOrder
    test_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Grammar_file_test_linksListRelationFilter = {
    every?: grammar_file_test_linksWhereInput
    some?: grammar_file_test_linksWhereInput
    none?: grammar_file_test_linksWhereInput
  }

  export type Grammar_foldersNullableScalarRelationFilter = {
    is?: grammar_foldersWhereInput | null
    isNot?: grammar_foldersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type grammar_file_test_linksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type grammar_filesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_filesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Grammar_filesListRelationFilter = {
    every?: grammar_filesWhereInput
    some?: grammar_filesWhereInput
    none?: grammar_filesWhereInput
  }

  export type grammar_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type grammar_foldersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_foldersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type Grammar_testsListRelationFilter = {
    every?: grammar_testsWhereInput
    some?: grammar_testsWhereInput
    none?: grammar_testsWhereInput
  }

  export type grammar_testsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type grammar_test_foldersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_test_foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_test_foldersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type Grammar_test_foldersNullableScalarRelationFilter = {
    is?: grammar_test_foldersWhereInput | null
    isNot?: grammar_test_foldersWhereInput | null
  }

  export type grammar_testsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_testsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type grammar_testsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type Voca_testsScalarRelationFilter = {
    is?: voca_testsWhereInput
    isNot?: voca_testsWhereInput
  }

  export type Voca_filesScalarRelationFilter = {
    is?: voca_filesWhereInput
    isNot?: voca_filesWhereInput
  }

  export type voca_file_test_linksFile_idTest_idCompoundUniqueInput = {
    file_id: string
    test_id: string
  }

  export type voca_file_test_linksCountOrderByAggregateInput = {
    file_id?: SortOrder
    test_id?: SortOrder
  }

  export type voca_file_test_linksMaxOrderByAggregateInput = {
    file_id?: SortOrder
    test_id?: SortOrder
  }

  export type voca_file_test_linksMinOrderByAggregateInput = {
    file_id?: SortOrder
    test_id?: SortOrder
  }

  export type Voca_file_test_linksListRelationFilter = {
    every?: voca_file_test_linksWhereInput
    some?: voca_file_test_linksWhereInput
    none?: voca_file_test_linksWhereInput
  }

  export type Voca_foldersNullableScalarRelationFilter = {
    is?: voca_foldersWhereInput | null
    isNot?: voca_foldersWhereInput | null
  }

  export type voca_file_test_linksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type voca_filesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type voca_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type voca_filesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type Voca_filesListRelationFilter = {
    every?: voca_filesWhereInput
    some?: voca_filesWhereInput
    none?: voca_filesWhereInput
  }

  export type voca_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type voca_foldersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type voca_foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type voca_foldersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type Voca_testsListRelationFilter = {
    every?: voca_testsWhereInput
    some?: voca_testsWhereInput
    none?: voca_testsWhereInput
  }

  export type voca_testsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type voca_test_foldersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type voca_test_foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type voca_test_foldersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type Voca_test_foldersNullableScalarRelationFilter = {
    is?: voca_test_foldersWhereInput | null
    isNot?: voca_test_foldersWhereInput | null
  }

  export type voca_testsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
  }

  export type voca_testsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type voca_testsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    folder_id?: SortOrder
    name?: SortOrder
    is_favorited?: SortOrder
    is_published?: SortOrder
    created_at?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
  }

  export type grammar_filesCreateNestedOneWithoutGrammar_file_test_linksInput = {
    create?: XOR<grammar_filesCreateWithoutGrammar_file_test_linksInput, grammar_filesUncheckedCreateWithoutGrammar_file_test_linksInput>
    connectOrCreate?: grammar_filesCreateOrConnectWithoutGrammar_file_test_linksInput
    connect?: grammar_filesWhereUniqueInput
  }

  export type grammar_testsCreateNestedOneWithoutGrammar_file_test_linksInput = {
    create?: XOR<grammar_testsCreateWithoutGrammar_file_test_linksInput, grammar_testsUncheckedCreateWithoutGrammar_file_test_linksInput>
    connectOrCreate?: grammar_testsCreateOrConnectWithoutGrammar_file_test_linksInput
    connect?: grammar_testsWhereUniqueInput
  }

  export type grammar_filesUpdateOneRequiredWithoutGrammar_file_test_linksNestedInput = {
    create?: XOR<grammar_filesCreateWithoutGrammar_file_test_linksInput, grammar_filesUncheckedCreateWithoutGrammar_file_test_linksInput>
    connectOrCreate?: grammar_filesCreateOrConnectWithoutGrammar_file_test_linksInput
    upsert?: grammar_filesUpsertWithoutGrammar_file_test_linksInput
    connect?: grammar_filesWhereUniqueInput
    update?: XOR<XOR<grammar_filesUpdateToOneWithWhereWithoutGrammar_file_test_linksInput, grammar_filesUpdateWithoutGrammar_file_test_linksInput>, grammar_filesUncheckedUpdateWithoutGrammar_file_test_linksInput>
  }

  export type grammar_testsUpdateOneRequiredWithoutGrammar_file_test_linksNestedInput = {
    create?: XOR<grammar_testsCreateWithoutGrammar_file_test_linksInput, grammar_testsUncheckedCreateWithoutGrammar_file_test_linksInput>
    connectOrCreate?: grammar_testsCreateOrConnectWithoutGrammar_file_test_linksInput
    upsert?: grammar_testsUpsertWithoutGrammar_file_test_linksInput
    connect?: grammar_testsWhereUniqueInput
    update?: XOR<XOR<grammar_testsUpdateToOneWithWhereWithoutGrammar_file_test_linksInput, grammar_testsUpdateWithoutGrammar_file_test_linksInput>, grammar_testsUncheckedUpdateWithoutGrammar_file_test_linksInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type grammar_filesCreatetagsInput = {
    set: string[]
  }

  export type grammar_file_test_linksCreateNestedManyWithoutGrammar_filesInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput> | grammar_file_test_linksCreateWithoutGrammar_filesInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_filesInputEnvelope
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
  }

  export type grammar_foldersCreateNestedOneWithoutGrammar_filesInput = {
    create?: XOR<grammar_foldersCreateWithoutGrammar_filesInput, grammar_foldersUncheckedCreateWithoutGrammar_filesInput>
    connectOrCreate?: grammar_foldersCreateOrConnectWithoutGrammar_filesInput
    connect?: grammar_foldersWhereUniqueInput
  }

  export type grammar_file_test_linksUncheckedCreateNestedManyWithoutGrammar_filesInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput> | grammar_file_test_linksCreateWithoutGrammar_filesInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_filesInputEnvelope
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type grammar_filesUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type grammar_file_test_linksUpdateManyWithoutGrammar_filesNestedInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput> | grammar_file_test_linksCreateWithoutGrammar_filesInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput[]
    upsert?: grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_filesInput | grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_filesInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_filesInputEnvelope
    set?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    disconnect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    delete?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    update?: grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_filesInput | grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_filesInput[]
    updateMany?: grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_filesInput | grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_filesInput[]
    deleteMany?: grammar_file_test_linksScalarWhereInput | grammar_file_test_linksScalarWhereInput[]
  }

  export type grammar_foldersUpdateOneWithoutGrammar_filesNestedInput = {
    create?: XOR<grammar_foldersCreateWithoutGrammar_filesInput, grammar_foldersUncheckedCreateWithoutGrammar_filesInput>
    connectOrCreate?: grammar_foldersCreateOrConnectWithoutGrammar_filesInput
    upsert?: grammar_foldersUpsertWithoutGrammar_filesInput
    disconnect?: grammar_foldersWhereInput | boolean
    delete?: grammar_foldersWhereInput | boolean
    connect?: grammar_foldersWhereUniqueInput
    update?: XOR<XOR<grammar_foldersUpdateToOneWithWhereWithoutGrammar_filesInput, grammar_foldersUpdateWithoutGrammar_filesInput>, grammar_foldersUncheckedUpdateWithoutGrammar_filesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_filesNestedInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput> | grammar_file_test_linksCreateWithoutGrammar_filesInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput[]
    upsert?: grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_filesInput | grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_filesInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_filesInputEnvelope
    set?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    disconnect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    delete?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    update?: grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_filesInput | grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_filesInput[]
    updateMany?: grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_filesInput | grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_filesInput[]
    deleteMany?: grammar_file_test_linksScalarWhereInput | grammar_file_test_linksScalarWhereInput[]
  }

  export type grammar_foldersCreatetagsInput = {
    set: string[]
  }

  export type grammar_filesCreateNestedManyWithoutGrammar_foldersInput = {
    create?: XOR<grammar_filesCreateWithoutGrammar_foldersInput, grammar_filesUncheckedCreateWithoutGrammar_foldersInput> | grammar_filesCreateWithoutGrammar_foldersInput[] | grammar_filesUncheckedCreateWithoutGrammar_foldersInput[]
    connectOrCreate?: grammar_filesCreateOrConnectWithoutGrammar_foldersInput | grammar_filesCreateOrConnectWithoutGrammar_foldersInput[]
    createMany?: grammar_filesCreateManyGrammar_foldersInputEnvelope
    connect?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
  }

  export type grammar_filesUncheckedCreateNestedManyWithoutGrammar_foldersInput = {
    create?: XOR<grammar_filesCreateWithoutGrammar_foldersInput, grammar_filesUncheckedCreateWithoutGrammar_foldersInput> | grammar_filesCreateWithoutGrammar_foldersInput[] | grammar_filesUncheckedCreateWithoutGrammar_foldersInput[]
    connectOrCreate?: grammar_filesCreateOrConnectWithoutGrammar_foldersInput | grammar_filesCreateOrConnectWithoutGrammar_foldersInput[]
    createMany?: grammar_filesCreateManyGrammar_foldersInputEnvelope
    connect?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
  }

  export type grammar_foldersUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type grammar_filesUpdateManyWithoutGrammar_foldersNestedInput = {
    create?: XOR<grammar_filesCreateWithoutGrammar_foldersInput, grammar_filesUncheckedCreateWithoutGrammar_foldersInput> | grammar_filesCreateWithoutGrammar_foldersInput[] | grammar_filesUncheckedCreateWithoutGrammar_foldersInput[]
    connectOrCreate?: grammar_filesCreateOrConnectWithoutGrammar_foldersInput | grammar_filesCreateOrConnectWithoutGrammar_foldersInput[]
    upsert?: grammar_filesUpsertWithWhereUniqueWithoutGrammar_foldersInput | grammar_filesUpsertWithWhereUniqueWithoutGrammar_foldersInput[]
    createMany?: grammar_filesCreateManyGrammar_foldersInputEnvelope
    set?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    disconnect?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    delete?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    connect?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    update?: grammar_filesUpdateWithWhereUniqueWithoutGrammar_foldersInput | grammar_filesUpdateWithWhereUniqueWithoutGrammar_foldersInput[]
    updateMany?: grammar_filesUpdateManyWithWhereWithoutGrammar_foldersInput | grammar_filesUpdateManyWithWhereWithoutGrammar_foldersInput[]
    deleteMany?: grammar_filesScalarWhereInput | grammar_filesScalarWhereInput[]
  }

  export type grammar_filesUncheckedUpdateManyWithoutGrammar_foldersNestedInput = {
    create?: XOR<grammar_filesCreateWithoutGrammar_foldersInput, grammar_filesUncheckedCreateWithoutGrammar_foldersInput> | grammar_filesCreateWithoutGrammar_foldersInput[] | grammar_filesUncheckedCreateWithoutGrammar_foldersInput[]
    connectOrCreate?: grammar_filesCreateOrConnectWithoutGrammar_foldersInput | grammar_filesCreateOrConnectWithoutGrammar_foldersInput[]
    upsert?: grammar_filesUpsertWithWhereUniqueWithoutGrammar_foldersInput | grammar_filesUpsertWithWhereUniqueWithoutGrammar_foldersInput[]
    createMany?: grammar_filesCreateManyGrammar_foldersInputEnvelope
    set?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    disconnect?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    delete?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    connect?: grammar_filesWhereUniqueInput | grammar_filesWhereUniqueInput[]
    update?: grammar_filesUpdateWithWhereUniqueWithoutGrammar_foldersInput | grammar_filesUpdateWithWhereUniqueWithoutGrammar_foldersInput[]
    updateMany?: grammar_filesUpdateManyWithWhereWithoutGrammar_foldersInput | grammar_filesUpdateManyWithWhereWithoutGrammar_foldersInput[]
    deleteMany?: grammar_filesScalarWhereInput | grammar_filesScalarWhereInput[]
  }

  export type grammar_test_foldersCreatetagsInput = {
    set: string[]
  }

  export type grammar_testsCreateNestedManyWithoutGrammar_test_foldersInput = {
    create?: XOR<grammar_testsCreateWithoutGrammar_test_foldersInput, grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput> | grammar_testsCreateWithoutGrammar_test_foldersInput[] | grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput[]
    connectOrCreate?: grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput | grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput[]
    createMany?: grammar_testsCreateManyGrammar_test_foldersInputEnvelope
    connect?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
  }

  export type grammar_testsUncheckedCreateNestedManyWithoutGrammar_test_foldersInput = {
    create?: XOR<grammar_testsCreateWithoutGrammar_test_foldersInput, grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput> | grammar_testsCreateWithoutGrammar_test_foldersInput[] | grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput[]
    connectOrCreate?: grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput | grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput[]
    createMany?: grammar_testsCreateManyGrammar_test_foldersInputEnvelope
    connect?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
  }

  export type grammar_test_foldersUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type grammar_testsUpdateManyWithoutGrammar_test_foldersNestedInput = {
    create?: XOR<grammar_testsCreateWithoutGrammar_test_foldersInput, grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput> | grammar_testsCreateWithoutGrammar_test_foldersInput[] | grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput[]
    connectOrCreate?: grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput | grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput[]
    upsert?: grammar_testsUpsertWithWhereUniqueWithoutGrammar_test_foldersInput | grammar_testsUpsertWithWhereUniqueWithoutGrammar_test_foldersInput[]
    createMany?: grammar_testsCreateManyGrammar_test_foldersInputEnvelope
    set?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    disconnect?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    delete?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    connect?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    update?: grammar_testsUpdateWithWhereUniqueWithoutGrammar_test_foldersInput | grammar_testsUpdateWithWhereUniqueWithoutGrammar_test_foldersInput[]
    updateMany?: grammar_testsUpdateManyWithWhereWithoutGrammar_test_foldersInput | grammar_testsUpdateManyWithWhereWithoutGrammar_test_foldersInput[]
    deleteMany?: grammar_testsScalarWhereInput | grammar_testsScalarWhereInput[]
  }

  export type grammar_testsUncheckedUpdateManyWithoutGrammar_test_foldersNestedInput = {
    create?: XOR<grammar_testsCreateWithoutGrammar_test_foldersInput, grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput> | grammar_testsCreateWithoutGrammar_test_foldersInput[] | grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput[]
    connectOrCreate?: grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput | grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput[]
    upsert?: grammar_testsUpsertWithWhereUniqueWithoutGrammar_test_foldersInput | grammar_testsUpsertWithWhereUniqueWithoutGrammar_test_foldersInput[]
    createMany?: grammar_testsCreateManyGrammar_test_foldersInputEnvelope
    set?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    disconnect?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    delete?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    connect?: grammar_testsWhereUniqueInput | grammar_testsWhereUniqueInput[]
    update?: grammar_testsUpdateWithWhereUniqueWithoutGrammar_test_foldersInput | grammar_testsUpdateWithWhereUniqueWithoutGrammar_test_foldersInput[]
    updateMany?: grammar_testsUpdateManyWithWhereWithoutGrammar_test_foldersInput | grammar_testsUpdateManyWithWhereWithoutGrammar_test_foldersInput[]
    deleteMany?: grammar_testsScalarWhereInput | grammar_testsScalarWhereInput[]
  }

  export type grammar_testsCreatetagsInput = {
    set: string[]
  }

  export type grammar_file_test_linksCreateNestedManyWithoutGrammar_testsInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput> | grammar_file_test_linksCreateWithoutGrammar_testsInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_testsInputEnvelope
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
  }

  export type grammar_test_foldersCreateNestedOneWithoutGrammar_testsInput = {
    create?: XOR<grammar_test_foldersCreateWithoutGrammar_testsInput, grammar_test_foldersUncheckedCreateWithoutGrammar_testsInput>
    connectOrCreate?: grammar_test_foldersCreateOrConnectWithoutGrammar_testsInput
    connect?: grammar_test_foldersWhereUniqueInput
  }

  export type grammar_file_test_linksUncheckedCreateNestedManyWithoutGrammar_testsInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput> | grammar_file_test_linksCreateWithoutGrammar_testsInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_testsInputEnvelope
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
  }

  export type grammar_testsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type grammar_file_test_linksUpdateManyWithoutGrammar_testsNestedInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput> | grammar_file_test_linksCreateWithoutGrammar_testsInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput[]
    upsert?: grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_testsInput | grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_testsInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_testsInputEnvelope
    set?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    disconnect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    delete?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    update?: grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_testsInput | grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_testsInput[]
    updateMany?: grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_testsInput | grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_testsInput[]
    deleteMany?: grammar_file_test_linksScalarWhereInput | grammar_file_test_linksScalarWhereInput[]
  }

  export type grammar_test_foldersUpdateOneWithoutGrammar_testsNestedInput = {
    create?: XOR<grammar_test_foldersCreateWithoutGrammar_testsInput, grammar_test_foldersUncheckedCreateWithoutGrammar_testsInput>
    connectOrCreate?: grammar_test_foldersCreateOrConnectWithoutGrammar_testsInput
    upsert?: grammar_test_foldersUpsertWithoutGrammar_testsInput
    disconnect?: grammar_test_foldersWhereInput | boolean
    delete?: grammar_test_foldersWhereInput | boolean
    connect?: grammar_test_foldersWhereUniqueInput
    update?: XOR<XOR<grammar_test_foldersUpdateToOneWithWhereWithoutGrammar_testsInput, grammar_test_foldersUpdateWithoutGrammar_testsInput>, grammar_test_foldersUncheckedUpdateWithoutGrammar_testsInput>
  }

  export type grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_testsNestedInput = {
    create?: XOR<grammar_file_test_linksCreateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput> | grammar_file_test_linksCreateWithoutGrammar_testsInput[] | grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput[]
    connectOrCreate?: grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput | grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput[]
    upsert?: grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_testsInput | grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_testsInput[]
    createMany?: grammar_file_test_linksCreateManyGrammar_testsInputEnvelope
    set?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    disconnect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    delete?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    connect?: grammar_file_test_linksWhereUniqueInput | grammar_file_test_linksWhereUniqueInput[]
    update?: grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_testsInput | grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_testsInput[]
    updateMany?: grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_testsInput | grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_testsInput[]
    deleteMany?: grammar_file_test_linksScalarWhereInput | grammar_file_test_linksScalarWhereInput[]
  }

  export type voca_testsCreateNestedOneWithoutVoca_file_test_linksInput = {
    create?: XOR<voca_testsCreateWithoutVoca_file_test_linksInput, voca_testsUncheckedCreateWithoutVoca_file_test_linksInput>
    connectOrCreate?: voca_testsCreateOrConnectWithoutVoca_file_test_linksInput
    connect?: voca_testsWhereUniqueInput
  }

  export type voca_filesCreateNestedOneWithoutVoca_file_test_linksInput = {
    create?: XOR<voca_filesCreateWithoutVoca_file_test_linksInput, voca_filesUncheckedCreateWithoutVoca_file_test_linksInput>
    connectOrCreate?: voca_filesCreateOrConnectWithoutVoca_file_test_linksInput
    connect?: voca_filesWhereUniqueInput
  }

  export type voca_testsUpdateOneRequiredWithoutVoca_file_test_linksNestedInput = {
    create?: XOR<voca_testsCreateWithoutVoca_file_test_linksInput, voca_testsUncheckedCreateWithoutVoca_file_test_linksInput>
    connectOrCreate?: voca_testsCreateOrConnectWithoutVoca_file_test_linksInput
    upsert?: voca_testsUpsertWithoutVoca_file_test_linksInput
    connect?: voca_testsWhereUniqueInput
    update?: XOR<XOR<voca_testsUpdateToOneWithWhereWithoutVoca_file_test_linksInput, voca_testsUpdateWithoutVoca_file_test_linksInput>, voca_testsUncheckedUpdateWithoutVoca_file_test_linksInput>
  }

  export type voca_filesUpdateOneRequiredWithoutVoca_file_test_linksNestedInput = {
    create?: XOR<voca_filesCreateWithoutVoca_file_test_linksInput, voca_filesUncheckedCreateWithoutVoca_file_test_linksInput>
    connectOrCreate?: voca_filesCreateOrConnectWithoutVoca_file_test_linksInput
    upsert?: voca_filesUpsertWithoutVoca_file_test_linksInput
    connect?: voca_filesWhereUniqueInput
    update?: XOR<XOR<voca_filesUpdateToOneWithWhereWithoutVoca_file_test_linksInput, voca_filesUpdateWithoutVoca_file_test_linksInput>, voca_filesUncheckedUpdateWithoutVoca_file_test_linksInput>
  }

  export type voca_filesCreatetagsInput = {
    set: string[]
  }

  export type voca_file_test_linksCreateNestedManyWithoutVoca_filesInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_filesInput, voca_file_test_linksUncheckedCreateWithoutVoca_filesInput> | voca_file_test_linksCreateWithoutVoca_filesInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_filesInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_filesInput | voca_file_test_linksCreateOrConnectWithoutVoca_filesInput[]
    createMany?: voca_file_test_linksCreateManyVoca_filesInputEnvelope
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
  }

  export type voca_foldersCreateNestedOneWithoutVoca_filesInput = {
    create?: XOR<voca_foldersCreateWithoutVoca_filesInput, voca_foldersUncheckedCreateWithoutVoca_filesInput>
    connectOrCreate?: voca_foldersCreateOrConnectWithoutVoca_filesInput
    connect?: voca_foldersWhereUniqueInput
  }

  export type voca_file_test_linksUncheckedCreateNestedManyWithoutVoca_filesInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_filesInput, voca_file_test_linksUncheckedCreateWithoutVoca_filesInput> | voca_file_test_linksCreateWithoutVoca_filesInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_filesInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_filesInput | voca_file_test_linksCreateOrConnectWithoutVoca_filesInput[]
    createMany?: voca_file_test_linksCreateManyVoca_filesInputEnvelope
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
  }

  export type voca_filesUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type voca_file_test_linksUpdateManyWithoutVoca_filesNestedInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_filesInput, voca_file_test_linksUncheckedCreateWithoutVoca_filesInput> | voca_file_test_linksCreateWithoutVoca_filesInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_filesInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_filesInput | voca_file_test_linksCreateOrConnectWithoutVoca_filesInput[]
    upsert?: voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_filesInput | voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_filesInput[]
    createMany?: voca_file_test_linksCreateManyVoca_filesInputEnvelope
    set?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    disconnect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    delete?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    update?: voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_filesInput | voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_filesInput[]
    updateMany?: voca_file_test_linksUpdateManyWithWhereWithoutVoca_filesInput | voca_file_test_linksUpdateManyWithWhereWithoutVoca_filesInput[]
    deleteMany?: voca_file_test_linksScalarWhereInput | voca_file_test_linksScalarWhereInput[]
  }

  export type voca_foldersUpdateOneWithoutVoca_filesNestedInput = {
    create?: XOR<voca_foldersCreateWithoutVoca_filesInput, voca_foldersUncheckedCreateWithoutVoca_filesInput>
    connectOrCreate?: voca_foldersCreateOrConnectWithoutVoca_filesInput
    upsert?: voca_foldersUpsertWithoutVoca_filesInput
    disconnect?: voca_foldersWhereInput | boolean
    delete?: voca_foldersWhereInput | boolean
    connect?: voca_foldersWhereUniqueInput
    update?: XOR<XOR<voca_foldersUpdateToOneWithWhereWithoutVoca_filesInput, voca_foldersUpdateWithoutVoca_filesInput>, voca_foldersUncheckedUpdateWithoutVoca_filesInput>
  }

  export type voca_file_test_linksUncheckedUpdateManyWithoutVoca_filesNestedInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_filesInput, voca_file_test_linksUncheckedCreateWithoutVoca_filesInput> | voca_file_test_linksCreateWithoutVoca_filesInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_filesInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_filesInput | voca_file_test_linksCreateOrConnectWithoutVoca_filesInput[]
    upsert?: voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_filesInput | voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_filesInput[]
    createMany?: voca_file_test_linksCreateManyVoca_filesInputEnvelope
    set?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    disconnect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    delete?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    update?: voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_filesInput | voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_filesInput[]
    updateMany?: voca_file_test_linksUpdateManyWithWhereWithoutVoca_filesInput | voca_file_test_linksUpdateManyWithWhereWithoutVoca_filesInput[]
    deleteMany?: voca_file_test_linksScalarWhereInput | voca_file_test_linksScalarWhereInput[]
  }

  export type voca_foldersCreatetagsInput = {
    set: string[]
  }

  export type voca_filesCreateNestedManyWithoutVoca_foldersInput = {
    create?: XOR<voca_filesCreateWithoutVoca_foldersInput, voca_filesUncheckedCreateWithoutVoca_foldersInput> | voca_filesCreateWithoutVoca_foldersInput[] | voca_filesUncheckedCreateWithoutVoca_foldersInput[]
    connectOrCreate?: voca_filesCreateOrConnectWithoutVoca_foldersInput | voca_filesCreateOrConnectWithoutVoca_foldersInput[]
    createMany?: voca_filesCreateManyVoca_foldersInputEnvelope
    connect?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
  }

  export type voca_filesUncheckedCreateNestedManyWithoutVoca_foldersInput = {
    create?: XOR<voca_filesCreateWithoutVoca_foldersInput, voca_filesUncheckedCreateWithoutVoca_foldersInput> | voca_filesCreateWithoutVoca_foldersInput[] | voca_filesUncheckedCreateWithoutVoca_foldersInput[]
    connectOrCreate?: voca_filesCreateOrConnectWithoutVoca_foldersInput | voca_filesCreateOrConnectWithoutVoca_foldersInput[]
    createMany?: voca_filesCreateManyVoca_foldersInputEnvelope
    connect?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
  }

  export type voca_foldersUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type voca_filesUpdateManyWithoutVoca_foldersNestedInput = {
    create?: XOR<voca_filesCreateWithoutVoca_foldersInput, voca_filesUncheckedCreateWithoutVoca_foldersInput> | voca_filesCreateWithoutVoca_foldersInput[] | voca_filesUncheckedCreateWithoutVoca_foldersInput[]
    connectOrCreate?: voca_filesCreateOrConnectWithoutVoca_foldersInput | voca_filesCreateOrConnectWithoutVoca_foldersInput[]
    upsert?: voca_filesUpsertWithWhereUniqueWithoutVoca_foldersInput | voca_filesUpsertWithWhereUniqueWithoutVoca_foldersInput[]
    createMany?: voca_filesCreateManyVoca_foldersInputEnvelope
    set?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    disconnect?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    delete?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    connect?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    update?: voca_filesUpdateWithWhereUniqueWithoutVoca_foldersInput | voca_filesUpdateWithWhereUniqueWithoutVoca_foldersInput[]
    updateMany?: voca_filesUpdateManyWithWhereWithoutVoca_foldersInput | voca_filesUpdateManyWithWhereWithoutVoca_foldersInput[]
    deleteMany?: voca_filesScalarWhereInput | voca_filesScalarWhereInput[]
  }

  export type voca_filesUncheckedUpdateManyWithoutVoca_foldersNestedInput = {
    create?: XOR<voca_filesCreateWithoutVoca_foldersInput, voca_filesUncheckedCreateWithoutVoca_foldersInput> | voca_filesCreateWithoutVoca_foldersInput[] | voca_filesUncheckedCreateWithoutVoca_foldersInput[]
    connectOrCreate?: voca_filesCreateOrConnectWithoutVoca_foldersInput | voca_filesCreateOrConnectWithoutVoca_foldersInput[]
    upsert?: voca_filesUpsertWithWhereUniqueWithoutVoca_foldersInput | voca_filesUpsertWithWhereUniqueWithoutVoca_foldersInput[]
    createMany?: voca_filesCreateManyVoca_foldersInputEnvelope
    set?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    disconnect?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    delete?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    connect?: voca_filesWhereUniqueInput | voca_filesWhereUniqueInput[]
    update?: voca_filesUpdateWithWhereUniqueWithoutVoca_foldersInput | voca_filesUpdateWithWhereUniqueWithoutVoca_foldersInput[]
    updateMany?: voca_filesUpdateManyWithWhereWithoutVoca_foldersInput | voca_filesUpdateManyWithWhereWithoutVoca_foldersInput[]
    deleteMany?: voca_filesScalarWhereInput | voca_filesScalarWhereInput[]
  }

  export type voca_test_foldersCreatetagsInput = {
    set: string[]
  }

  export type voca_testsCreateNestedManyWithoutVoca_test_foldersInput = {
    create?: XOR<voca_testsCreateWithoutVoca_test_foldersInput, voca_testsUncheckedCreateWithoutVoca_test_foldersInput> | voca_testsCreateWithoutVoca_test_foldersInput[] | voca_testsUncheckedCreateWithoutVoca_test_foldersInput[]
    connectOrCreate?: voca_testsCreateOrConnectWithoutVoca_test_foldersInput | voca_testsCreateOrConnectWithoutVoca_test_foldersInput[]
    createMany?: voca_testsCreateManyVoca_test_foldersInputEnvelope
    connect?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
  }

  export type voca_testsUncheckedCreateNestedManyWithoutVoca_test_foldersInput = {
    create?: XOR<voca_testsCreateWithoutVoca_test_foldersInput, voca_testsUncheckedCreateWithoutVoca_test_foldersInput> | voca_testsCreateWithoutVoca_test_foldersInput[] | voca_testsUncheckedCreateWithoutVoca_test_foldersInput[]
    connectOrCreate?: voca_testsCreateOrConnectWithoutVoca_test_foldersInput | voca_testsCreateOrConnectWithoutVoca_test_foldersInput[]
    createMany?: voca_testsCreateManyVoca_test_foldersInputEnvelope
    connect?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
  }

  export type voca_test_foldersUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type voca_testsUpdateManyWithoutVoca_test_foldersNestedInput = {
    create?: XOR<voca_testsCreateWithoutVoca_test_foldersInput, voca_testsUncheckedCreateWithoutVoca_test_foldersInput> | voca_testsCreateWithoutVoca_test_foldersInput[] | voca_testsUncheckedCreateWithoutVoca_test_foldersInput[]
    connectOrCreate?: voca_testsCreateOrConnectWithoutVoca_test_foldersInput | voca_testsCreateOrConnectWithoutVoca_test_foldersInput[]
    upsert?: voca_testsUpsertWithWhereUniqueWithoutVoca_test_foldersInput | voca_testsUpsertWithWhereUniqueWithoutVoca_test_foldersInput[]
    createMany?: voca_testsCreateManyVoca_test_foldersInputEnvelope
    set?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    disconnect?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    delete?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    connect?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    update?: voca_testsUpdateWithWhereUniqueWithoutVoca_test_foldersInput | voca_testsUpdateWithWhereUniqueWithoutVoca_test_foldersInput[]
    updateMany?: voca_testsUpdateManyWithWhereWithoutVoca_test_foldersInput | voca_testsUpdateManyWithWhereWithoutVoca_test_foldersInput[]
    deleteMany?: voca_testsScalarWhereInput | voca_testsScalarWhereInput[]
  }

  export type voca_testsUncheckedUpdateManyWithoutVoca_test_foldersNestedInput = {
    create?: XOR<voca_testsCreateWithoutVoca_test_foldersInput, voca_testsUncheckedCreateWithoutVoca_test_foldersInput> | voca_testsCreateWithoutVoca_test_foldersInput[] | voca_testsUncheckedCreateWithoutVoca_test_foldersInput[]
    connectOrCreate?: voca_testsCreateOrConnectWithoutVoca_test_foldersInput | voca_testsCreateOrConnectWithoutVoca_test_foldersInput[]
    upsert?: voca_testsUpsertWithWhereUniqueWithoutVoca_test_foldersInput | voca_testsUpsertWithWhereUniqueWithoutVoca_test_foldersInput[]
    createMany?: voca_testsCreateManyVoca_test_foldersInputEnvelope
    set?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    disconnect?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    delete?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    connect?: voca_testsWhereUniqueInput | voca_testsWhereUniqueInput[]
    update?: voca_testsUpdateWithWhereUniqueWithoutVoca_test_foldersInput | voca_testsUpdateWithWhereUniqueWithoutVoca_test_foldersInput[]
    updateMany?: voca_testsUpdateManyWithWhereWithoutVoca_test_foldersInput | voca_testsUpdateManyWithWhereWithoutVoca_test_foldersInput[]
    deleteMany?: voca_testsScalarWhereInput | voca_testsScalarWhereInput[]
  }

  export type voca_testsCreatetagsInput = {
    set: string[]
  }

  export type voca_file_test_linksCreateNestedManyWithoutVoca_testsInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_testsInput, voca_file_test_linksUncheckedCreateWithoutVoca_testsInput> | voca_file_test_linksCreateWithoutVoca_testsInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_testsInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_testsInput | voca_file_test_linksCreateOrConnectWithoutVoca_testsInput[]
    createMany?: voca_file_test_linksCreateManyVoca_testsInputEnvelope
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
  }

  export type voca_test_foldersCreateNestedOneWithoutVoca_testsInput = {
    create?: XOR<voca_test_foldersCreateWithoutVoca_testsInput, voca_test_foldersUncheckedCreateWithoutVoca_testsInput>
    connectOrCreate?: voca_test_foldersCreateOrConnectWithoutVoca_testsInput
    connect?: voca_test_foldersWhereUniqueInput
  }

  export type voca_file_test_linksUncheckedCreateNestedManyWithoutVoca_testsInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_testsInput, voca_file_test_linksUncheckedCreateWithoutVoca_testsInput> | voca_file_test_linksCreateWithoutVoca_testsInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_testsInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_testsInput | voca_file_test_linksCreateOrConnectWithoutVoca_testsInput[]
    createMany?: voca_file_test_linksCreateManyVoca_testsInputEnvelope
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
  }

  export type voca_testsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type voca_file_test_linksUpdateManyWithoutVoca_testsNestedInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_testsInput, voca_file_test_linksUncheckedCreateWithoutVoca_testsInput> | voca_file_test_linksCreateWithoutVoca_testsInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_testsInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_testsInput | voca_file_test_linksCreateOrConnectWithoutVoca_testsInput[]
    upsert?: voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_testsInput | voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_testsInput[]
    createMany?: voca_file_test_linksCreateManyVoca_testsInputEnvelope
    set?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    disconnect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    delete?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    update?: voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_testsInput | voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_testsInput[]
    updateMany?: voca_file_test_linksUpdateManyWithWhereWithoutVoca_testsInput | voca_file_test_linksUpdateManyWithWhereWithoutVoca_testsInput[]
    deleteMany?: voca_file_test_linksScalarWhereInput | voca_file_test_linksScalarWhereInput[]
  }

  export type voca_test_foldersUpdateOneWithoutVoca_testsNestedInput = {
    create?: XOR<voca_test_foldersCreateWithoutVoca_testsInput, voca_test_foldersUncheckedCreateWithoutVoca_testsInput>
    connectOrCreate?: voca_test_foldersCreateOrConnectWithoutVoca_testsInput
    upsert?: voca_test_foldersUpsertWithoutVoca_testsInput
    disconnect?: voca_test_foldersWhereInput | boolean
    delete?: voca_test_foldersWhereInput | boolean
    connect?: voca_test_foldersWhereUniqueInput
    update?: XOR<XOR<voca_test_foldersUpdateToOneWithWhereWithoutVoca_testsInput, voca_test_foldersUpdateWithoutVoca_testsInput>, voca_test_foldersUncheckedUpdateWithoutVoca_testsInput>
  }

  export type voca_file_test_linksUncheckedUpdateManyWithoutVoca_testsNestedInput = {
    create?: XOR<voca_file_test_linksCreateWithoutVoca_testsInput, voca_file_test_linksUncheckedCreateWithoutVoca_testsInput> | voca_file_test_linksCreateWithoutVoca_testsInput[] | voca_file_test_linksUncheckedCreateWithoutVoca_testsInput[]
    connectOrCreate?: voca_file_test_linksCreateOrConnectWithoutVoca_testsInput | voca_file_test_linksCreateOrConnectWithoutVoca_testsInput[]
    upsert?: voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_testsInput | voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_testsInput[]
    createMany?: voca_file_test_linksCreateManyVoca_testsInputEnvelope
    set?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    disconnect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    delete?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    connect?: voca_file_test_linksWhereUniqueInput | voca_file_test_linksWhereUniqueInput[]
    update?: voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_testsInput | voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_testsInput[]
    updateMany?: voca_file_test_linksUpdateManyWithWhereWithoutVoca_testsInput | voca_file_test_linksUpdateManyWithWhereWithoutVoca_testsInput[]
    deleteMany?: voca_file_test_linksScalarWhereInput | voca_file_test_linksScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type grammar_filesCreateWithoutGrammar_file_test_linksInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
    grammar_folders?: grammar_foldersCreateNestedOneWithoutGrammar_filesInput
  }

  export type grammar_filesUncheckedCreateWithoutGrammar_file_test_linksInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_filesCreateOrConnectWithoutGrammar_file_test_linksInput = {
    where: grammar_filesWhereUniqueInput
    create: XOR<grammar_filesCreateWithoutGrammar_file_test_linksInput, grammar_filesUncheckedCreateWithoutGrammar_file_test_linksInput>
  }

  export type grammar_testsCreateWithoutGrammar_file_test_linksInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
    grammar_test_folders?: grammar_test_foldersCreateNestedOneWithoutGrammar_testsInput
  }

  export type grammar_testsUncheckedCreateWithoutGrammar_file_test_linksInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_testsCreateOrConnectWithoutGrammar_file_test_linksInput = {
    where: grammar_testsWhereUniqueInput
    create: XOR<grammar_testsCreateWithoutGrammar_file_test_linksInput, grammar_testsUncheckedCreateWithoutGrammar_file_test_linksInput>
  }

  export type grammar_filesUpsertWithoutGrammar_file_test_linksInput = {
    update: XOR<grammar_filesUpdateWithoutGrammar_file_test_linksInput, grammar_filesUncheckedUpdateWithoutGrammar_file_test_linksInput>
    create: XOR<grammar_filesCreateWithoutGrammar_file_test_linksInput, grammar_filesUncheckedCreateWithoutGrammar_file_test_linksInput>
    where?: grammar_filesWhereInput
  }

  export type grammar_filesUpdateToOneWithWhereWithoutGrammar_file_test_linksInput = {
    where?: grammar_filesWhereInput
    data: XOR<grammar_filesUpdateWithoutGrammar_file_test_linksInput, grammar_filesUncheckedUpdateWithoutGrammar_file_test_linksInput>
  }

  export type grammar_filesUpdateWithoutGrammar_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_folders?: grammar_foldersUpdateOneWithoutGrammar_filesNestedInput
  }

  export type grammar_filesUncheckedUpdateWithoutGrammar_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_testsUpsertWithoutGrammar_file_test_linksInput = {
    update: XOR<grammar_testsUpdateWithoutGrammar_file_test_linksInput, grammar_testsUncheckedUpdateWithoutGrammar_file_test_linksInput>
    create: XOR<grammar_testsCreateWithoutGrammar_file_test_linksInput, grammar_testsUncheckedCreateWithoutGrammar_file_test_linksInput>
    where?: grammar_testsWhereInput
  }

  export type grammar_testsUpdateToOneWithWhereWithoutGrammar_file_test_linksInput = {
    where?: grammar_testsWhereInput
    data: XOR<grammar_testsUpdateWithoutGrammar_file_test_linksInput, grammar_testsUncheckedUpdateWithoutGrammar_file_test_linksInput>
  }

  export type grammar_testsUpdateWithoutGrammar_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_test_folders?: grammar_test_foldersUpdateOneWithoutGrammar_testsNestedInput
  }

  export type grammar_testsUncheckedUpdateWithoutGrammar_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_file_test_linksCreateWithoutGrammar_filesInput = {
    grammar_tests: grammar_testsCreateNestedOneWithoutGrammar_file_test_linksInput
  }

  export type grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput = {
    test_id: string
  }

  export type grammar_file_test_linksCreateOrConnectWithoutGrammar_filesInput = {
    where: grammar_file_test_linksWhereUniqueInput
    create: XOR<grammar_file_test_linksCreateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput>
  }

  export type grammar_file_test_linksCreateManyGrammar_filesInputEnvelope = {
    data: grammar_file_test_linksCreateManyGrammar_filesInput | grammar_file_test_linksCreateManyGrammar_filesInput[]
    skipDuplicates?: boolean
  }

  export type grammar_foldersCreateWithoutGrammar_filesInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_foldersUncheckedCreateWithoutGrammar_filesInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_foldersCreateOrConnectWithoutGrammar_filesInput = {
    where: grammar_foldersWhereUniqueInput
    create: XOR<grammar_foldersCreateWithoutGrammar_filesInput, grammar_foldersUncheckedCreateWithoutGrammar_filesInput>
  }

  export type grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_filesInput = {
    where: grammar_file_test_linksWhereUniqueInput
    update: XOR<grammar_file_test_linksUpdateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedUpdateWithoutGrammar_filesInput>
    create: XOR<grammar_file_test_linksCreateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_filesInput>
  }

  export type grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_filesInput = {
    where: grammar_file_test_linksWhereUniqueInput
    data: XOR<grammar_file_test_linksUpdateWithoutGrammar_filesInput, grammar_file_test_linksUncheckedUpdateWithoutGrammar_filesInput>
  }

  export type grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_filesInput = {
    where: grammar_file_test_linksScalarWhereInput
    data: XOR<grammar_file_test_linksUpdateManyMutationInput, grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_filesInput>
  }

  export type grammar_file_test_linksScalarWhereInput = {
    AND?: grammar_file_test_linksScalarWhereInput | grammar_file_test_linksScalarWhereInput[]
    OR?: grammar_file_test_linksScalarWhereInput[]
    NOT?: grammar_file_test_linksScalarWhereInput | grammar_file_test_linksScalarWhereInput[]
    file_id?: UuidFilter<"grammar_file_test_links"> | string
    test_id?: UuidFilter<"grammar_file_test_links"> | string
  }

  export type grammar_foldersUpsertWithoutGrammar_filesInput = {
    update: XOR<grammar_foldersUpdateWithoutGrammar_filesInput, grammar_foldersUncheckedUpdateWithoutGrammar_filesInput>
    create: XOR<grammar_foldersCreateWithoutGrammar_filesInput, grammar_foldersUncheckedCreateWithoutGrammar_filesInput>
    where?: grammar_foldersWhereInput
  }

  export type grammar_foldersUpdateToOneWithWhereWithoutGrammar_filesInput = {
    where?: grammar_foldersWhereInput
    data: XOR<grammar_foldersUpdateWithoutGrammar_filesInput, grammar_foldersUncheckedUpdateWithoutGrammar_filesInput>
  }

  export type grammar_foldersUpdateWithoutGrammar_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_foldersUncheckedUpdateWithoutGrammar_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_filesCreateWithoutGrammar_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksCreateNestedManyWithoutGrammar_filesInput
  }

  export type grammar_filesUncheckedCreateWithoutGrammar_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedCreateNestedManyWithoutGrammar_filesInput
  }

  export type grammar_filesCreateOrConnectWithoutGrammar_foldersInput = {
    where: grammar_filesWhereUniqueInput
    create: XOR<grammar_filesCreateWithoutGrammar_foldersInput, grammar_filesUncheckedCreateWithoutGrammar_foldersInput>
  }

  export type grammar_filesCreateManyGrammar_foldersInputEnvelope = {
    data: grammar_filesCreateManyGrammar_foldersInput | grammar_filesCreateManyGrammar_foldersInput[]
    skipDuplicates?: boolean
  }

  export type grammar_filesUpsertWithWhereUniqueWithoutGrammar_foldersInput = {
    where: grammar_filesWhereUniqueInput
    update: XOR<grammar_filesUpdateWithoutGrammar_foldersInput, grammar_filesUncheckedUpdateWithoutGrammar_foldersInput>
    create: XOR<grammar_filesCreateWithoutGrammar_foldersInput, grammar_filesUncheckedCreateWithoutGrammar_foldersInput>
  }

  export type grammar_filesUpdateWithWhereUniqueWithoutGrammar_foldersInput = {
    where: grammar_filesWhereUniqueInput
    data: XOR<grammar_filesUpdateWithoutGrammar_foldersInput, grammar_filesUncheckedUpdateWithoutGrammar_foldersInput>
  }

  export type grammar_filesUpdateManyWithWhereWithoutGrammar_foldersInput = {
    where: grammar_filesScalarWhereInput
    data: XOR<grammar_filesUpdateManyMutationInput, grammar_filesUncheckedUpdateManyWithoutGrammar_foldersInput>
  }

  export type grammar_filesScalarWhereInput = {
    AND?: grammar_filesScalarWhereInput | grammar_filesScalarWhereInput[]
    OR?: grammar_filesScalarWhereInput[]
    NOT?: grammar_filesScalarWhereInput | grammar_filesScalarWhereInput[]
    id?: UuidFilter<"grammar_files"> | string
    user_id?: UuidFilter<"grammar_files"> | string
    folder_id?: UuidNullableFilter<"grammar_files"> | string | null
    name?: StringFilter<"grammar_files"> | string
    is_favorited?: BoolFilter<"grammar_files"> | boolean
    is_published?: BoolFilter<"grammar_files"> | boolean
    tags?: StringNullableListFilter<"grammar_files">
    created_at?: DateTimeFilter<"grammar_files"> | Date | string
  }

  export type grammar_testsCreateWithoutGrammar_test_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksCreateNestedManyWithoutGrammar_testsInput
  }

  export type grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedCreateNestedManyWithoutGrammar_testsInput
  }

  export type grammar_testsCreateOrConnectWithoutGrammar_test_foldersInput = {
    where: grammar_testsWhereUniqueInput
    create: XOR<grammar_testsCreateWithoutGrammar_test_foldersInput, grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput>
  }

  export type grammar_testsCreateManyGrammar_test_foldersInputEnvelope = {
    data: grammar_testsCreateManyGrammar_test_foldersInput | grammar_testsCreateManyGrammar_test_foldersInput[]
    skipDuplicates?: boolean
  }

  export type grammar_testsUpsertWithWhereUniqueWithoutGrammar_test_foldersInput = {
    where: grammar_testsWhereUniqueInput
    update: XOR<grammar_testsUpdateWithoutGrammar_test_foldersInput, grammar_testsUncheckedUpdateWithoutGrammar_test_foldersInput>
    create: XOR<grammar_testsCreateWithoutGrammar_test_foldersInput, grammar_testsUncheckedCreateWithoutGrammar_test_foldersInput>
  }

  export type grammar_testsUpdateWithWhereUniqueWithoutGrammar_test_foldersInput = {
    where: grammar_testsWhereUniqueInput
    data: XOR<grammar_testsUpdateWithoutGrammar_test_foldersInput, grammar_testsUncheckedUpdateWithoutGrammar_test_foldersInput>
  }

  export type grammar_testsUpdateManyWithWhereWithoutGrammar_test_foldersInput = {
    where: grammar_testsScalarWhereInput
    data: XOR<grammar_testsUpdateManyMutationInput, grammar_testsUncheckedUpdateManyWithoutGrammar_test_foldersInput>
  }

  export type grammar_testsScalarWhereInput = {
    AND?: grammar_testsScalarWhereInput | grammar_testsScalarWhereInput[]
    OR?: grammar_testsScalarWhereInput[]
    NOT?: grammar_testsScalarWhereInput | grammar_testsScalarWhereInput[]
    id?: UuidFilter<"grammar_tests"> | string
    user_id?: UuidFilter<"grammar_tests"> | string
    folder_id?: UuidNullableFilter<"grammar_tests"> | string | null
    name?: StringFilter<"grammar_tests"> | string
    is_favorited?: BoolFilter<"grammar_tests"> | boolean
    is_published?: BoolFilter<"grammar_tests"> | boolean
    tags?: StringNullableListFilter<"grammar_tests">
    created_at?: DateTimeFilter<"grammar_tests"> | Date | string
  }

  export type grammar_file_test_linksCreateWithoutGrammar_testsInput = {
    grammar_files: grammar_filesCreateNestedOneWithoutGrammar_file_test_linksInput
  }

  export type grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput = {
    file_id: string
  }

  export type grammar_file_test_linksCreateOrConnectWithoutGrammar_testsInput = {
    where: grammar_file_test_linksWhereUniqueInput
    create: XOR<grammar_file_test_linksCreateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput>
  }

  export type grammar_file_test_linksCreateManyGrammar_testsInputEnvelope = {
    data: grammar_file_test_linksCreateManyGrammar_testsInput | grammar_file_test_linksCreateManyGrammar_testsInput[]
    skipDuplicates?: boolean
  }

  export type grammar_test_foldersCreateWithoutGrammar_testsInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_test_foldersUncheckedCreateWithoutGrammar_testsInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_test_foldersCreateOrConnectWithoutGrammar_testsInput = {
    where: grammar_test_foldersWhereUniqueInput
    create: XOR<grammar_test_foldersCreateWithoutGrammar_testsInput, grammar_test_foldersUncheckedCreateWithoutGrammar_testsInput>
  }

  export type grammar_file_test_linksUpsertWithWhereUniqueWithoutGrammar_testsInput = {
    where: grammar_file_test_linksWhereUniqueInput
    update: XOR<grammar_file_test_linksUpdateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedUpdateWithoutGrammar_testsInput>
    create: XOR<grammar_file_test_linksCreateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedCreateWithoutGrammar_testsInput>
  }

  export type grammar_file_test_linksUpdateWithWhereUniqueWithoutGrammar_testsInput = {
    where: grammar_file_test_linksWhereUniqueInput
    data: XOR<grammar_file_test_linksUpdateWithoutGrammar_testsInput, grammar_file_test_linksUncheckedUpdateWithoutGrammar_testsInput>
  }

  export type grammar_file_test_linksUpdateManyWithWhereWithoutGrammar_testsInput = {
    where: grammar_file_test_linksScalarWhereInput
    data: XOR<grammar_file_test_linksUpdateManyMutationInput, grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_testsInput>
  }

  export type grammar_test_foldersUpsertWithoutGrammar_testsInput = {
    update: XOR<grammar_test_foldersUpdateWithoutGrammar_testsInput, grammar_test_foldersUncheckedUpdateWithoutGrammar_testsInput>
    create: XOR<grammar_test_foldersCreateWithoutGrammar_testsInput, grammar_test_foldersUncheckedCreateWithoutGrammar_testsInput>
    where?: grammar_test_foldersWhereInput
  }

  export type grammar_test_foldersUpdateToOneWithWhereWithoutGrammar_testsInput = {
    where?: grammar_test_foldersWhereInput
    data: XOR<grammar_test_foldersUpdateWithoutGrammar_testsInput, grammar_test_foldersUncheckedUpdateWithoutGrammar_testsInput>
  }

  export type grammar_test_foldersUpdateWithoutGrammar_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_test_foldersUncheckedUpdateWithoutGrammar_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_testsCreateWithoutVoca_file_test_linksInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
    voca_test_folders?: voca_test_foldersCreateNestedOneWithoutVoca_testsInput
  }

  export type voca_testsUncheckedCreateWithoutVoca_file_test_linksInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_testsCreateOrConnectWithoutVoca_file_test_linksInput = {
    where: voca_testsWhereUniqueInput
    create: XOR<voca_testsCreateWithoutVoca_file_test_linksInput, voca_testsUncheckedCreateWithoutVoca_file_test_linksInput>
  }

  export type voca_filesCreateWithoutVoca_file_test_linksInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
    voca_folders?: voca_foldersCreateNestedOneWithoutVoca_filesInput
  }

  export type voca_filesUncheckedCreateWithoutVoca_file_test_linksInput = {
    id?: string
    user_id?: string
    folder_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_filesCreateOrConnectWithoutVoca_file_test_linksInput = {
    where: voca_filesWhereUniqueInput
    create: XOR<voca_filesCreateWithoutVoca_file_test_linksInput, voca_filesUncheckedCreateWithoutVoca_file_test_linksInput>
  }

  export type voca_testsUpsertWithoutVoca_file_test_linksInput = {
    update: XOR<voca_testsUpdateWithoutVoca_file_test_linksInput, voca_testsUncheckedUpdateWithoutVoca_file_test_linksInput>
    create: XOR<voca_testsCreateWithoutVoca_file_test_linksInput, voca_testsUncheckedCreateWithoutVoca_file_test_linksInput>
    where?: voca_testsWhereInput
  }

  export type voca_testsUpdateToOneWithWhereWithoutVoca_file_test_linksInput = {
    where?: voca_testsWhereInput
    data: XOR<voca_testsUpdateWithoutVoca_file_test_linksInput, voca_testsUncheckedUpdateWithoutVoca_file_test_linksInput>
  }

  export type voca_testsUpdateWithoutVoca_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_test_folders?: voca_test_foldersUpdateOneWithoutVoca_testsNestedInput
  }

  export type voca_testsUncheckedUpdateWithoutVoca_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_filesUpsertWithoutVoca_file_test_linksInput = {
    update: XOR<voca_filesUpdateWithoutVoca_file_test_linksInput, voca_filesUncheckedUpdateWithoutVoca_file_test_linksInput>
    create: XOR<voca_filesCreateWithoutVoca_file_test_linksInput, voca_filesUncheckedCreateWithoutVoca_file_test_linksInput>
    where?: voca_filesWhereInput
  }

  export type voca_filesUpdateToOneWithWhereWithoutVoca_file_test_linksInput = {
    where?: voca_filesWhereInput
    data: XOR<voca_filesUpdateWithoutVoca_file_test_linksInput, voca_filesUncheckedUpdateWithoutVoca_file_test_linksInput>
  }

  export type voca_filesUpdateWithoutVoca_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_folders?: voca_foldersUpdateOneWithoutVoca_filesNestedInput
  }

  export type voca_filesUncheckedUpdateWithoutVoca_file_test_linksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    folder_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_file_test_linksCreateWithoutVoca_filesInput = {
    voca_tests: voca_testsCreateNestedOneWithoutVoca_file_test_linksInput
  }

  export type voca_file_test_linksUncheckedCreateWithoutVoca_filesInput = {
    test_id: string
  }

  export type voca_file_test_linksCreateOrConnectWithoutVoca_filesInput = {
    where: voca_file_test_linksWhereUniqueInput
    create: XOR<voca_file_test_linksCreateWithoutVoca_filesInput, voca_file_test_linksUncheckedCreateWithoutVoca_filesInput>
  }

  export type voca_file_test_linksCreateManyVoca_filesInputEnvelope = {
    data: voca_file_test_linksCreateManyVoca_filesInput | voca_file_test_linksCreateManyVoca_filesInput[]
    skipDuplicates?: boolean
  }

  export type voca_foldersCreateWithoutVoca_filesInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_foldersUncheckedCreateWithoutVoca_filesInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_foldersCreateOrConnectWithoutVoca_filesInput = {
    where: voca_foldersWhereUniqueInput
    create: XOR<voca_foldersCreateWithoutVoca_filesInput, voca_foldersUncheckedCreateWithoutVoca_filesInput>
  }

  export type voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_filesInput = {
    where: voca_file_test_linksWhereUniqueInput
    update: XOR<voca_file_test_linksUpdateWithoutVoca_filesInput, voca_file_test_linksUncheckedUpdateWithoutVoca_filesInput>
    create: XOR<voca_file_test_linksCreateWithoutVoca_filesInput, voca_file_test_linksUncheckedCreateWithoutVoca_filesInput>
  }

  export type voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_filesInput = {
    where: voca_file_test_linksWhereUniqueInput
    data: XOR<voca_file_test_linksUpdateWithoutVoca_filesInput, voca_file_test_linksUncheckedUpdateWithoutVoca_filesInput>
  }

  export type voca_file_test_linksUpdateManyWithWhereWithoutVoca_filesInput = {
    where: voca_file_test_linksScalarWhereInput
    data: XOR<voca_file_test_linksUpdateManyMutationInput, voca_file_test_linksUncheckedUpdateManyWithoutVoca_filesInput>
  }

  export type voca_file_test_linksScalarWhereInput = {
    AND?: voca_file_test_linksScalarWhereInput | voca_file_test_linksScalarWhereInput[]
    OR?: voca_file_test_linksScalarWhereInput[]
    NOT?: voca_file_test_linksScalarWhereInput | voca_file_test_linksScalarWhereInput[]
    file_id?: UuidFilter<"voca_file_test_links"> | string
    test_id?: UuidFilter<"voca_file_test_links"> | string
  }

  export type voca_foldersUpsertWithoutVoca_filesInput = {
    update: XOR<voca_foldersUpdateWithoutVoca_filesInput, voca_foldersUncheckedUpdateWithoutVoca_filesInput>
    create: XOR<voca_foldersCreateWithoutVoca_filesInput, voca_foldersUncheckedCreateWithoutVoca_filesInput>
    where?: voca_foldersWhereInput
  }

  export type voca_foldersUpdateToOneWithWhereWithoutVoca_filesInput = {
    where?: voca_foldersWhereInput
    data: XOR<voca_foldersUpdateWithoutVoca_filesInput, voca_foldersUncheckedUpdateWithoutVoca_filesInput>
  }

  export type voca_foldersUpdateWithoutVoca_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_foldersUncheckedUpdateWithoutVoca_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_filesCreateWithoutVoca_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksCreateNestedManyWithoutVoca_filesInput
  }

  export type voca_filesUncheckedCreateWithoutVoca_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedCreateNestedManyWithoutVoca_filesInput
  }

  export type voca_filesCreateOrConnectWithoutVoca_foldersInput = {
    where: voca_filesWhereUniqueInput
    create: XOR<voca_filesCreateWithoutVoca_foldersInput, voca_filesUncheckedCreateWithoutVoca_foldersInput>
  }

  export type voca_filesCreateManyVoca_foldersInputEnvelope = {
    data: voca_filesCreateManyVoca_foldersInput | voca_filesCreateManyVoca_foldersInput[]
    skipDuplicates?: boolean
  }

  export type voca_filesUpsertWithWhereUniqueWithoutVoca_foldersInput = {
    where: voca_filesWhereUniqueInput
    update: XOR<voca_filesUpdateWithoutVoca_foldersInput, voca_filesUncheckedUpdateWithoutVoca_foldersInput>
    create: XOR<voca_filesCreateWithoutVoca_foldersInput, voca_filesUncheckedCreateWithoutVoca_foldersInput>
  }

  export type voca_filesUpdateWithWhereUniqueWithoutVoca_foldersInput = {
    where: voca_filesWhereUniqueInput
    data: XOR<voca_filesUpdateWithoutVoca_foldersInput, voca_filesUncheckedUpdateWithoutVoca_foldersInput>
  }

  export type voca_filesUpdateManyWithWhereWithoutVoca_foldersInput = {
    where: voca_filesScalarWhereInput
    data: XOR<voca_filesUpdateManyMutationInput, voca_filesUncheckedUpdateManyWithoutVoca_foldersInput>
  }

  export type voca_filesScalarWhereInput = {
    AND?: voca_filesScalarWhereInput | voca_filesScalarWhereInput[]
    OR?: voca_filesScalarWhereInput[]
    NOT?: voca_filesScalarWhereInput | voca_filesScalarWhereInput[]
    id?: UuidFilter<"voca_files"> | string
    user_id?: UuidFilter<"voca_files"> | string
    folder_id?: UuidNullableFilter<"voca_files"> | string | null
    name?: StringFilter<"voca_files"> | string
    is_favorited?: BoolFilter<"voca_files"> | boolean
    is_published?: BoolFilter<"voca_files"> | boolean
    tags?: StringNullableListFilter<"voca_files">
    created_at?: DateTimeFilter<"voca_files"> | Date | string
  }

  export type voca_testsCreateWithoutVoca_test_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksCreateNestedManyWithoutVoca_testsInput
  }

  export type voca_testsUncheckedCreateWithoutVoca_test_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedCreateNestedManyWithoutVoca_testsInput
  }

  export type voca_testsCreateOrConnectWithoutVoca_test_foldersInput = {
    where: voca_testsWhereUniqueInput
    create: XOR<voca_testsCreateWithoutVoca_test_foldersInput, voca_testsUncheckedCreateWithoutVoca_test_foldersInput>
  }

  export type voca_testsCreateManyVoca_test_foldersInputEnvelope = {
    data: voca_testsCreateManyVoca_test_foldersInput | voca_testsCreateManyVoca_test_foldersInput[]
    skipDuplicates?: boolean
  }

  export type voca_testsUpsertWithWhereUniqueWithoutVoca_test_foldersInput = {
    where: voca_testsWhereUniqueInput
    update: XOR<voca_testsUpdateWithoutVoca_test_foldersInput, voca_testsUncheckedUpdateWithoutVoca_test_foldersInput>
    create: XOR<voca_testsCreateWithoutVoca_test_foldersInput, voca_testsUncheckedCreateWithoutVoca_test_foldersInput>
  }

  export type voca_testsUpdateWithWhereUniqueWithoutVoca_test_foldersInput = {
    where: voca_testsWhereUniqueInput
    data: XOR<voca_testsUpdateWithoutVoca_test_foldersInput, voca_testsUncheckedUpdateWithoutVoca_test_foldersInput>
  }

  export type voca_testsUpdateManyWithWhereWithoutVoca_test_foldersInput = {
    where: voca_testsScalarWhereInput
    data: XOR<voca_testsUpdateManyMutationInput, voca_testsUncheckedUpdateManyWithoutVoca_test_foldersInput>
  }

  export type voca_testsScalarWhereInput = {
    AND?: voca_testsScalarWhereInput | voca_testsScalarWhereInput[]
    OR?: voca_testsScalarWhereInput[]
    NOT?: voca_testsScalarWhereInput | voca_testsScalarWhereInput[]
    id?: UuidFilter<"voca_tests"> | string
    user_id?: UuidFilter<"voca_tests"> | string
    folder_id?: UuidNullableFilter<"voca_tests"> | string | null
    name?: StringFilter<"voca_tests"> | string
    is_favorited?: BoolFilter<"voca_tests"> | boolean
    is_published?: BoolFilter<"voca_tests"> | boolean
    tags?: StringNullableListFilter<"voca_tests">
    created_at?: DateTimeFilter<"voca_tests"> | Date | string
  }

  export type voca_file_test_linksCreateWithoutVoca_testsInput = {
    voca_files: voca_filesCreateNestedOneWithoutVoca_file_test_linksInput
  }

  export type voca_file_test_linksUncheckedCreateWithoutVoca_testsInput = {
    file_id: string
  }

  export type voca_file_test_linksCreateOrConnectWithoutVoca_testsInput = {
    where: voca_file_test_linksWhereUniqueInput
    create: XOR<voca_file_test_linksCreateWithoutVoca_testsInput, voca_file_test_linksUncheckedCreateWithoutVoca_testsInput>
  }

  export type voca_file_test_linksCreateManyVoca_testsInputEnvelope = {
    data: voca_file_test_linksCreateManyVoca_testsInput | voca_file_test_linksCreateManyVoca_testsInput[]
    skipDuplicates?: boolean
  }

  export type voca_test_foldersCreateWithoutVoca_testsInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_test_foldersUncheckedCreateWithoutVoca_testsInput = {
    id?: string
    user_id?: string
    parent_id?: string | null
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_test_foldersCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_test_foldersCreateOrConnectWithoutVoca_testsInput = {
    where: voca_test_foldersWhereUniqueInput
    create: XOR<voca_test_foldersCreateWithoutVoca_testsInput, voca_test_foldersUncheckedCreateWithoutVoca_testsInput>
  }

  export type voca_file_test_linksUpsertWithWhereUniqueWithoutVoca_testsInput = {
    where: voca_file_test_linksWhereUniqueInput
    update: XOR<voca_file_test_linksUpdateWithoutVoca_testsInput, voca_file_test_linksUncheckedUpdateWithoutVoca_testsInput>
    create: XOR<voca_file_test_linksCreateWithoutVoca_testsInput, voca_file_test_linksUncheckedCreateWithoutVoca_testsInput>
  }

  export type voca_file_test_linksUpdateWithWhereUniqueWithoutVoca_testsInput = {
    where: voca_file_test_linksWhereUniqueInput
    data: XOR<voca_file_test_linksUpdateWithoutVoca_testsInput, voca_file_test_linksUncheckedUpdateWithoutVoca_testsInput>
  }

  export type voca_file_test_linksUpdateManyWithWhereWithoutVoca_testsInput = {
    where: voca_file_test_linksScalarWhereInput
    data: XOR<voca_file_test_linksUpdateManyMutationInput, voca_file_test_linksUncheckedUpdateManyWithoutVoca_testsInput>
  }

  export type voca_test_foldersUpsertWithoutVoca_testsInput = {
    update: XOR<voca_test_foldersUpdateWithoutVoca_testsInput, voca_test_foldersUncheckedUpdateWithoutVoca_testsInput>
    create: XOR<voca_test_foldersCreateWithoutVoca_testsInput, voca_test_foldersUncheckedCreateWithoutVoca_testsInput>
    where?: voca_test_foldersWhereInput
  }

  export type voca_test_foldersUpdateToOneWithWhereWithoutVoca_testsInput = {
    where?: voca_test_foldersWhereInput
    data: XOR<voca_test_foldersUpdateWithoutVoca_testsInput, voca_test_foldersUncheckedUpdateWithoutVoca_testsInput>
  }

  export type voca_test_foldersUpdateWithoutVoca_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_test_foldersUncheckedUpdateWithoutVoca_testsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_test_foldersUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_file_test_linksCreateManyGrammar_filesInput = {
    test_id: string
  }

  export type grammar_file_test_linksUpdateWithoutGrammar_filesInput = {
    grammar_tests?: grammar_testsUpdateOneRequiredWithoutGrammar_file_test_linksNestedInput
  }

  export type grammar_file_test_linksUncheckedUpdateWithoutGrammar_filesInput = {
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_filesInput = {
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type grammar_filesCreateManyGrammar_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_filesCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_filesUpdateWithoutGrammar_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUpdateManyWithoutGrammar_filesNestedInput
  }

  export type grammar_filesUncheckedUpdateWithoutGrammar_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_filesNestedInput
  }

  export type grammar_filesUncheckedUpdateManyWithoutGrammar_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_testsCreateManyGrammar_test_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: grammar_testsCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type grammar_testsUpdateWithoutGrammar_test_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUpdateManyWithoutGrammar_testsNestedInput
  }

  export type grammar_testsUncheckedUpdateWithoutGrammar_test_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grammar_file_test_links?: grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_testsNestedInput
  }

  export type grammar_testsUncheckedUpdateManyWithoutGrammar_test_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: grammar_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grammar_file_test_linksCreateManyGrammar_testsInput = {
    file_id: string
  }

  export type grammar_file_test_linksUpdateWithoutGrammar_testsInput = {
    grammar_files?: grammar_filesUpdateOneRequiredWithoutGrammar_file_test_linksNestedInput
  }

  export type grammar_file_test_linksUncheckedUpdateWithoutGrammar_testsInput = {
    file_id?: StringFieldUpdateOperationsInput | string
  }

  export type grammar_file_test_linksUncheckedUpdateManyWithoutGrammar_testsInput = {
    file_id?: StringFieldUpdateOperationsInput | string
  }

  export type voca_file_test_linksCreateManyVoca_filesInput = {
    test_id: string
  }

  export type voca_file_test_linksUpdateWithoutVoca_filesInput = {
    voca_tests?: voca_testsUpdateOneRequiredWithoutVoca_file_test_linksNestedInput
  }

  export type voca_file_test_linksUncheckedUpdateWithoutVoca_filesInput = {
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type voca_file_test_linksUncheckedUpdateManyWithoutVoca_filesInput = {
    test_id?: StringFieldUpdateOperationsInput | string
  }

  export type voca_filesCreateManyVoca_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_filesCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_filesUpdateWithoutVoca_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUpdateManyWithoutVoca_filesNestedInput
  }

  export type voca_filesUncheckedUpdateWithoutVoca_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedUpdateManyWithoutVoca_filesNestedInput
  }

  export type voca_filesUncheckedUpdateManyWithoutVoca_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_filesUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_testsCreateManyVoca_test_foldersInput = {
    id?: string
    user_id?: string
    name: string
    is_favorited?: boolean
    is_published?: boolean
    tags?: voca_testsCreatetagsInput | string[]
    created_at?: Date | string
  }

  export type voca_testsUpdateWithoutVoca_test_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUpdateManyWithoutVoca_testsNestedInput
  }

  export type voca_testsUncheckedUpdateWithoutVoca_test_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voca_file_test_links?: voca_file_test_linksUncheckedUpdateManyWithoutVoca_testsNestedInput
  }

  export type voca_testsUncheckedUpdateManyWithoutVoca_test_foldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_favorited?: BoolFieldUpdateOperationsInput | boolean
    is_published?: BoolFieldUpdateOperationsInput | boolean
    tags?: voca_testsUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voca_file_test_linksCreateManyVoca_testsInput = {
    file_id: string
  }

  export type voca_file_test_linksUpdateWithoutVoca_testsInput = {
    voca_files?: voca_filesUpdateOneRequiredWithoutVoca_file_test_linksNestedInput
  }

  export type voca_file_test_linksUncheckedUpdateWithoutVoca_testsInput = {
    file_id?: StringFieldUpdateOperationsInput | string
  }

  export type voca_file_test_linksUncheckedUpdateManyWithoutVoca_testsInput = {
    file_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}