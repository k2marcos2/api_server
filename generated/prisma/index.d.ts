
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Questao
 * 
 */
export type Questao = $Result.DefaultSelection<Prisma.$QuestaoPayload>
/**
 * Model Alternativa
 * 
 */
export type Alternativa = $Result.DefaultSelection<Prisma.$AlternativaPayload>
/**
 * Model Pontuacao
 * 
 */
export type Pontuacao = $Result.DefaultSelection<Prisma.$PontuacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questao`: Exposes CRUD operations for the **Questao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questaos
    * const questaos = await prisma.questao.findMany()
    * ```
    */
  get questao(): Prisma.QuestaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternativa`: Exposes CRUD operations for the **Alternativa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternativas
    * const alternativas = await prisma.alternativa.findMany()
    * ```
    */
  get alternativa(): Prisma.AlternativaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pontuacao`: Exposes CRUD operations for the **Pontuacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pontuacaos
    * const pontuacaos = await prisma.pontuacao.findMany()
    * ```
    */
  get pontuacao(): Prisma.PontuacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Categoria: 'Categoria',
    Questao: 'Questao',
    Alternativa: 'Alternativa',
    Pontuacao: 'Pontuacao'
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
      modelProps: "user" | "categoria" | "questao" | "alternativa" | "pontuacao"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoriaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoriaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Questao: {
        payload: Prisma.$QuestaoPayload<ExtArgs>
        fields: Prisma.QuestaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          findFirst: {
            args: Prisma.QuestaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          findMany: {
            args: Prisma.QuestaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          create: {
            args: Prisma.QuestaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          createMany: {
            args: Prisma.QuestaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          update: {
            args: Prisma.QuestaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          deleteMany: {
            args: Prisma.QuestaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          aggregate: {
            args: Prisma.QuestaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestao>
          }
          groupBy: {
            args: Prisma.QuestaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuestaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuestaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuestaoCountArgs<ExtArgs>
            result: $Utils.Optional<QuestaoCountAggregateOutputType> | number
          }
        }
      }
      Alternativa: {
        payload: Prisma.$AlternativaPayload<ExtArgs>
        fields: Prisma.AlternativaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          findFirst: {
            args: Prisma.AlternativaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          findMany: {
            args: Prisma.AlternativaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>[]
          }
          create: {
            args: Prisma.AlternativaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          createMany: {
            args: Prisma.AlternativaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlternativaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          update: {
            args: Prisma.AlternativaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          deleteMany: {
            args: Prisma.AlternativaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlternativaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          aggregate: {
            args: Prisma.AlternativaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternativa>
          }
          groupBy: {
            args: Prisma.AlternativaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlternativaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlternativaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AlternativaCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativaCountAggregateOutputType> | number
          }
        }
      }
      Pontuacao: {
        payload: Prisma.$PontuacaoPayload<ExtArgs>
        fields: Prisma.PontuacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PontuacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PontuacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>
          }
          findFirst: {
            args: Prisma.PontuacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PontuacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>
          }
          findMany: {
            args: Prisma.PontuacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>[]
          }
          create: {
            args: Prisma.PontuacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>
          }
          createMany: {
            args: Prisma.PontuacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PontuacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>
          }
          update: {
            args: Prisma.PontuacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>
          }
          deleteMany: {
            args: Prisma.PontuacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PontuacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PontuacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PontuacaoPayload>
          }
          aggregate: {
            args: Prisma.PontuacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePontuacao>
          }
          groupBy: {
            args: Prisma.PontuacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PontuacaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PontuacaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PontuacaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PontuacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PontuacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    categoria?: CategoriaOmit
    questao?: QuestaoOmit
    alternativa?: AlternativaOmit
    pontuacao?: PontuacaoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pontuacao: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pontuacao?: boolean | UserCountOutputTypeCountPontuacaoArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPontuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PontuacaoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    questao: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | CategoriaCountOutputTypeCountQuestaoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountQuestaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
  }


  /**
   * Count Type QuestaoCountOutputType
   */

  export type QuestaoCountOutputType = {
    alternativa: number
    pontuacao: number
  }

  export type QuestaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternativa?: boolean | QuestaoCountOutputTypeCountAlternativaArgs
    pontuacao?: boolean | QuestaoCountOutputTypeCountPontuacaoArgs
  }

  // Custom InputTypes
  /**
   * QuestaoCountOutputType without action
   */
  export type QuestaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestaoCountOutputType
     */
    select?: QuestaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestaoCountOutputType without action
   */
  export type QuestaoCountOutputTypeCountAlternativaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativaWhereInput
  }

  /**
   * QuestaoCountOutputType without action
   */
  export type QuestaoCountOutputTypeCountPontuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PontuacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    senha: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    senha: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    senha: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    senha?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    senha?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    senha?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    senha: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    senha?: boolean
    pontuacao?: boolean | User$pontuacaoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    senha?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "senha", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pontuacao?: boolean | User$pontuacaoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pontuacao: Prisma.$PontuacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      senha: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pontuacao<T extends User$pontuacaoArgs<ExtArgs> = {}>(args?: Subset<T, User$pontuacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.pontuacao
   */
  export type User$pontuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    where?: PontuacaoWhereInput
    orderBy?: PontuacaoOrderByWithRelationInput | PontuacaoOrderByWithRelationInput[]
    cursor?: PontuacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PontuacaoScalarFieldEnum | PontuacaoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    status: boolean | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    status: boolean | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    descricao: number
    status: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    descricao: string | null
    status: boolean
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    questao?: boolean | Categoria$questaoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    descricao?: boolean
    status?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "status", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | Categoria$questaoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      questao: Prisma.$QuestaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string | null
      status: boolean
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * @param {CategoriaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const categoria = await prisma.categoria.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoriaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Categoria.
     * @param {CategoriaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const categoria = await prisma.categoria.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoriaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questao<T extends Categoria$questaoArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$questaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
    readonly status: FieldRef<"Categoria", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria findRaw
   */
  export type CategoriaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Categoria aggregateRaw
   */
  export type CategoriaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Categoria.questao
   */
  export type Categoria$questaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    where?: QuestaoWhereInput
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    cursor?: QuestaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Questao
   */

  export type AggregateQuestao = {
    _count: QuestaoCountAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  export type QuestaoMinAggregateOutputType = {
    id: string | null
    questao: string | null
    categoriaId: string | null
  }

  export type QuestaoMaxAggregateOutputType = {
    id: string | null
    questao: string | null
    categoriaId: string | null
  }

  export type QuestaoCountAggregateOutputType = {
    id: number
    questao: number
    categoriaId: number
    _all: number
  }


  export type QuestaoMinAggregateInputType = {
    id?: true
    questao?: true
    categoriaId?: true
  }

  export type QuestaoMaxAggregateInputType = {
    id?: true
    questao?: true
    categoriaId?: true
  }

  export type QuestaoCountAggregateInputType = {
    id?: true
    questao?: true
    categoriaId?: true
    _all?: true
  }

  export type QuestaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questao to aggregate.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questaos
    **/
    _count?: true | QuestaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestaoMaxAggregateInputType
  }

  export type GetQuestaoAggregateType<T extends QuestaoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestao[P]>
      : GetScalarType<T[P], AggregateQuestao[P]>
  }




  export type QuestaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
    orderBy?: QuestaoOrderByWithAggregationInput | QuestaoOrderByWithAggregationInput[]
    by: QuestaoScalarFieldEnum[] | QuestaoScalarFieldEnum
    having?: QuestaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestaoCountAggregateInputType | true
    _min?: QuestaoMinAggregateInputType
    _max?: QuestaoMaxAggregateInputType
  }

  export type QuestaoGroupByOutputType = {
    id: string
    questao: string
    categoriaId: string
    _count: QuestaoCountAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  type GetQuestaoGroupByPayload<T extends QuestaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
            : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
        }
      >
    >


  export type QuestaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questao?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    alternativa?: boolean | Questao$alternativaArgs<ExtArgs>
    pontuacao?: boolean | Questao$pontuacaoArgs<ExtArgs>
    _count?: boolean | QuestaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questao"]>



  export type QuestaoSelectScalar = {
    id?: boolean
    questao?: boolean
    categoriaId?: boolean
  }

  export type QuestaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questao" | "categoriaId", ExtArgs["result"]["questao"]>
  export type QuestaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    alternativa?: boolean | Questao$alternativaArgs<ExtArgs>
    pontuacao?: boolean | Questao$pontuacaoArgs<ExtArgs>
    _count?: boolean | QuestaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questao"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      alternativa: Prisma.$AlternativaPayload<ExtArgs>[]
      pontuacao: Prisma.$PontuacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questao: string
      categoriaId: string
    }, ExtArgs["result"]["questao"]>
    composites: {}
  }

  type QuestaoGetPayload<S extends boolean | null | undefined | QuestaoDefaultArgs> = $Result.GetResult<Prisma.$QuestaoPayload, S>

  type QuestaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestaoCountAggregateInputType | true
    }

  export interface QuestaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questao'], meta: { name: 'Questao' } }
    /**
     * Find zero or one Questao that matches the filter.
     * @param {QuestaoFindUniqueArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestaoFindUniqueArgs>(args: SelectSubset<T, QuestaoFindUniqueArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestaoFindUniqueOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestaoFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestaoFindFirstArgs>(args?: SelectSubset<T, QuestaoFindFirstArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestaoFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questaos
     * const questaos = await prisma.questao.findMany()
     * 
     * // Get first 10 Questaos
     * const questaos = await prisma.questao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questaoWithIdOnly = await prisma.questao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestaoFindManyArgs>(args?: SelectSubset<T, QuestaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questao.
     * @param {QuestaoCreateArgs} args - Arguments to create a Questao.
     * @example
     * // Create one Questao
     * const Questao = await prisma.questao.create({
     *   data: {
     *     // ... data to create a Questao
     *   }
     * })
     * 
     */
    create<T extends QuestaoCreateArgs>(args: SelectSubset<T, QuestaoCreateArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questaos.
     * @param {QuestaoCreateManyArgs} args - Arguments to create many Questaos.
     * @example
     * // Create many Questaos
     * const questao = await prisma.questao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestaoCreateManyArgs>(args?: SelectSubset<T, QuestaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questao.
     * @param {QuestaoDeleteArgs} args - Arguments to delete one Questao.
     * @example
     * // Delete one Questao
     * const Questao = await prisma.questao.delete({
     *   where: {
     *     // ... filter to delete one Questao
     *   }
     * })
     * 
     */
    delete<T extends QuestaoDeleteArgs>(args: SelectSubset<T, QuestaoDeleteArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questao.
     * @param {QuestaoUpdateArgs} args - Arguments to update one Questao.
     * @example
     * // Update one Questao
     * const questao = await prisma.questao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestaoUpdateArgs>(args: SelectSubset<T, QuestaoUpdateArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questaos.
     * @param {QuestaoDeleteManyArgs} args - Arguments to filter Questaos to delete.
     * @example
     * // Delete a few Questaos
     * const { count } = await prisma.questao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestaoDeleteManyArgs>(args?: SelectSubset<T, QuestaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questaos
     * const questao = await prisma.questao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestaoUpdateManyArgs>(args: SelectSubset<T, QuestaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questao.
     * @param {QuestaoUpsertArgs} args - Arguments to update or create a Questao.
     * @example
     * // Update or create a Questao
     * const questao = await prisma.questao.upsert({
     *   create: {
     *     // ... data to create a Questao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questao we want to update
     *   }
     * })
     */
    upsert<T extends QuestaoUpsertArgs>(args: SelectSubset<T, QuestaoUpsertArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questaos that matches the filter.
     * @param {QuestaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const questao = await prisma.questao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Questao.
     * @param {QuestaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const questao = await prisma.questao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuestaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoCountArgs} args - Arguments to filter Questaos to count.
     * @example
     * // Count the number of Questaos
     * const count = await prisma.questao.count({
     *   where: {
     *     // ... the filter for the Questaos we want to count
     *   }
     * })
    **/
    count<T extends QuestaoCountArgs>(
      args?: Subset<T, QuestaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestaoAggregateArgs>(args: Subset<T, QuestaoAggregateArgs>): Prisma.PrismaPromise<GetQuestaoAggregateType<T>>

    /**
     * Group by Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoGroupByArgs} args - Group by arguments.
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
      T extends QuestaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestaoGroupByArgs['orderBy'] }
        : { orderBy?: QuestaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questao model
   */
  readonly fields: QuestaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alternativa<T extends Questao$alternativaArgs<ExtArgs> = {}>(args?: Subset<T, Questao$alternativaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pontuacao<T extends Questao$pontuacaoArgs<ExtArgs> = {}>(args?: Subset<T, Questao$pontuacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Questao model
   */
  interface QuestaoFieldRefs {
    readonly id: FieldRef<"Questao", 'String'>
    readonly questao: FieldRef<"Questao", 'String'>
    readonly categoriaId: FieldRef<"Questao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Questao findUnique
   */
  export type QuestaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findUniqueOrThrow
   */
  export type QuestaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findFirst
   */
  export type QuestaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao findFirstOrThrow
   */
  export type QuestaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao findMany
   */
  export type QuestaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questaos to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao create
   */
  export type QuestaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Questao.
     */
    data: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
  }

  /**
   * Questao createMany
   */
  export type QuestaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questaos.
     */
    data: QuestaoCreateManyInput | QuestaoCreateManyInput[]
  }

  /**
   * Questao update
   */
  export type QuestaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Questao.
     */
    data: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
    /**
     * Choose, which Questao to update.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao updateMany
   */
  export type QuestaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questaos.
     */
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyInput>
    /**
     * Filter which Questaos to update
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to update.
     */
    limit?: number
  }

  /**
   * Questao upsert
   */
  export type QuestaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Questao to update in case it exists.
     */
    where: QuestaoWhereUniqueInput
    /**
     * In case the Questao found by the `where` argument doesn't exist, create a new Questao with this data.
     */
    create: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
    /**
     * In case the Questao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
  }

  /**
   * Questao delete
   */
  export type QuestaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter which Questao to delete.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao deleteMany
   */
  export type QuestaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questaos to delete
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to delete.
     */
    limit?: number
  }

  /**
   * Questao findRaw
   */
  export type QuestaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Questao aggregateRaw
   */
  export type QuestaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Questao.alternativa
   */
  export type Questao$alternativaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    where?: AlternativaWhereInput
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    cursor?: AlternativaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Questao.pontuacao
   */
  export type Questao$pontuacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    where?: PontuacaoWhereInput
    orderBy?: PontuacaoOrderByWithRelationInput | PontuacaoOrderByWithRelationInput[]
    cursor?: PontuacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PontuacaoScalarFieldEnum | PontuacaoScalarFieldEnum[]
  }

  /**
   * Questao without action
   */
  export type QuestaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
  }


  /**
   * Model Alternativa
   */

  export type AggregateAlternativa = {
    _count: AlternativaCountAggregateOutputType | null
    _min: AlternativaMinAggregateOutputType | null
    _max: AlternativaMaxAggregateOutputType | null
  }

  export type AlternativaMinAggregateOutputType = {
    id: string | null
    alternativa: string | null
    questaoId: string | null
  }

  export type AlternativaMaxAggregateOutputType = {
    id: string | null
    alternativa: string | null
    questaoId: string | null
  }

  export type AlternativaCountAggregateOutputType = {
    id: number
    alternativa: number
    questaoId: number
    _all: number
  }


  export type AlternativaMinAggregateInputType = {
    id?: true
    alternativa?: true
    questaoId?: true
  }

  export type AlternativaMaxAggregateInputType = {
    id?: true
    alternativa?: true
    questaoId?: true
  }

  export type AlternativaCountAggregateInputType = {
    id?: true
    alternativa?: true
    questaoId?: true
    _all?: true
  }

  export type AlternativaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternativa to aggregate.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternativas
    **/
    _count?: true | AlternativaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativaMaxAggregateInputType
  }

  export type GetAlternativaAggregateType<T extends AlternativaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternativa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternativa[P]>
      : GetScalarType<T[P], AggregateAlternativa[P]>
  }




  export type AlternativaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativaWhereInput
    orderBy?: AlternativaOrderByWithAggregationInput | AlternativaOrderByWithAggregationInput[]
    by: AlternativaScalarFieldEnum[] | AlternativaScalarFieldEnum
    having?: AlternativaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativaCountAggregateInputType | true
    _min?: AlternativaMinAggregateInputType
    _max?: AlternativaMaxAggregateInputType
  }

  export type AlternativaGroupByOutputType = {
    id: string
    alternativa: string
    questaoId: string
    _count: AlternativaCountAggregateOutputType | null
    _min: AlternativaMinAggregateOutputType | null
    _max: AlternativaMaxAggregateOutputType | null
  }

  type GetAlternativaGroupByPayload<T extends AlternativaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativaGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativaGroupByOutputType[P]>
        }
      >
    >


  export type AlternativaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alternativa?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativa"]>



  export type AlternativaSelectScalar = {
    id?: boolean
    alternativa?: boolean
    questaoId?: boolean
  }

  export type AlternativaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alternativa" | "questaoId", ExtArgs["result"]["alternativa"]>
  export type AlternativaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }

  export type $AlternativaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternativa"
    objects: {
      questao: Prisma.$QuestaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alternativa: string
      questaoId: string
    }, ExtArgs["result"]["alternativa"]>
    composites: {}
  }

  type AlternativaGetPayload<S extends boolean | null | undefined | AlternativaDefaultArgs> = $Result.GetResult<Prisma.$AlternativaPayload, S>

  type AlternativaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativaCountAggregateInputType | true
    }

  export interface AlternativaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternativa'], meta: { name: 'Alternativa' } }
    /**
     * Find zero or one Alternativa that matches the filter.
     * @param {AlternativaFindUniqueArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativaFindUniqueArgs>(args: SelectSubset<T, AlternativaFindUniqueArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternativa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativaFindUniqueOrThrowArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternativa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaFindFirstArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativaFindFirstArgs>(args?: SelectSubset<T, AlternativaFindFirstArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternativa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaFindFirstOrThrowArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternativas
     * const alternativas = await prisma.alternativa.findMany()
     * 
     * // Get first 10 Alternativas
     * const alternativas = await prisma.alternativa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativaWithIdOnly = await prisma.alternativa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativaFindManyArgs>(args?: SelectSubset<T, AlternativaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternativa.
     * @param {AlternativaCreateArgs} args - Arguments to create a Alternativa.
     * @example
     * // Create one Alternativa
     * const Alternativa = await prisma.alternativa.create({
     *   data: {
     *     // ... data to create a Alternativa
     *   }
     * })
     * 
     */
    create<T extends AlternativaCreateArgs>(args: SelectSubset<T, AlternativaCreateArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternativas.
     * @param {AlternativaCreateManyArgs} args - Arguments to create many Alternativas.
     * @example
     * // Create many Alternativas
     * const alternativa = await prisma.alternativa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativaCreateManyArgs>(args?: SelectSubset<T, AlternativaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alternativa.
     * @param {AlternativaDeleteArgs} args - Arguments to delete one Alternativa.
     * @example
     * // Delete one Alternativa
     * const Alternativa = await prisma.alternativa.delete({
     *   where: {
     *     // ... filter to delete one Alternativa
     *   }
     * })
     * 
     */
    delete<T extends AlternativaDeleteArgs>(args: SelectSubset<T, AlternativaDeleteArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternativa.
     * @param {AlternativaUpdateArgs} args - Arguments to update one Alternativa.
     * @example
     * // Update one Alternativa
     * const alternativa = await prisma.alternativa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativaUpdateArgs>(args: SelectSubset<T, AlternativaUpdateArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternativas.
     * @param {AlternativaDeleteManyArgs} args - Arguments to filter Alternativas to delete.
     * @example
     * // Delete a few Alternativas
     * const { count } = await prisma.alternativa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativaDeleteManyArgs>(args?: SelectSubset<T, AlternativaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternativas
     * const alternativa = await prisma.alternativa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativaUpdateManyArgs>(args: SelectSubset<T, AlternativaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alternativa.
     * @param {AlternativaUpsertArgs} args - Arguments to update or create a Alternativa.
     * @example
     * // Update or create a Alternativa
     * const alternativa = await prisma.alternativa.upsert({
     *   create: {
     *     // ... data to create a Alternativa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternativa we want to update
     *   }
     * })
     */
    upsert<T extends AlternativaUpsertArgs>(args: SelectSubset<T, AlternativaUpsertArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternativas that matches the filter.
     * @param {AlternativaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const alternativa = await prisma.alternativa.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AlternativaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Alternativa.
     * @param {AlternativaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const alternativa = await prisma.alternativa.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AlternativaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Alternativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaCountArgs} args - Arguments to filter Alternativas to count.
     * @example
     * // Count the number of Alternativas
     * const count = await prisma.alternativa.count({
     *   where: {
     *     // ... the filter for the Alternativas we want to count
     *   }
     * })
    **/
    count<T extends AlternativaCountArgs>(
      args?: Subset<T, AlternativaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativaAggregateArgs>(args: Subset<T, AlternativaAggregateArgs>): Prisma.PrismaPromise<GetAlternativaAggregateType<T>>

    /**
     * Group by Alternativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaGroupByArgs} args - Group by arguments.
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
      T extends AlternativaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativaGroupByArgs['orderBy'] }
        : { orderBy?: AlternativaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlternativaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternativa model
   */
  readonly fields: AlternativaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternativa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questao<T extends QuestaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestaoDefaultArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alternativa model
   */
  interface AlternativaFieldRefs {
    readonly id: FieldRef<"Alternativa", 'String'>
    readonly alternativa: FieldRef<"Alternativa", 'String'>
    readonly questaoId: FieldRef<"Alternativa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alternativa findUnique
   */
  export type AlternativaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa findUniqueOrThrow
   */
  export type AlternativaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa findFirst
   */
  export type AlternativaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternativas.
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternativas.
     */
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Alternativa findFirstOrThrow
   */
  export type AlternativaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternativas.
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternativas.
     */
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Alternativa findMany
   */
  export type AlternativaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativas to fetch.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternativas.
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Alternativa create
   */
  export type AlternativaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternativa.
     */
    data: XOR<AlternativaCreateInput, AlternativaUncheckedCreateInput>
  }

  /**
   * Alternativa createMany
   */
  export type AlternativaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternativas.
     */
    data: AlternativaCreateManyInput | AlternativaCreateManyInput[]
  }

  /**
   * Alternativa update
   */
  export type AlternativaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternativa.
     */
    data: XOR<AlternativaUpdateInput, AlternativaUncheckedUpdateInput>
    /**
     * Choose, which Alternativa to update.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa updateMany
   */
  export type AlternativaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternativas.
     */
    data: XOR<AlternativaUpdateManyMutationInput, AlternativaUncheckedUpdateManyInput>
    /**
     * Filter which Alternativas to update
     */
    where?: AlternativaWhereInput
    /**
     * Limit how many Alternativas to update.
     */
    limit?: number
  }

  /**
   * Alternativa upsert
   */
  export type AlternativaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternativa to update in case it exists.
     */
    where: AlternativaWhereUniqueInput
    /**
     * In case the Alternativa found by the `where` argument doesn't exist, create a new Alternativa with this data.
     */
    create: XOR<AlternativaCreateInput, AlternativaUncheckedCreateInput>
    /**
     * In case the Alternativa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativaUpdateInput, AlternativaUncheckedUpdateInput>
  }

  /**
   * Alternativa delete
   */
  export type AlternativaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter which Alternativa to delete.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa deleteMany
   */
  export type AlternativaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternativas to delete
     */
    where?: AlternativaWhereInput
    /**
     * Limit how many Alternativas to delete.
     */
    limit?: number
  }

  /**
   * Alternativa findRaw
   */
  export type AlternativaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Alternativa aggregateRaw
   */
  export type AlternativaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Alternativa without action
   */
  export type AlternativaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
  }


  /**
   * Model Pontuacao
   */

  export type AggregatePontuacao = {
    _count: PontuacaoCountAggregateOutputType | null
    _min: PontuacaoMinAggregateOutputType | null
    _max: PontuacaoMaxAggregateOutputType | null
  }

  export type PontuacaoMinAggregateOutputType = {
    id: string | null
    questaoId: string | null
    userId: string | null
  }

  export type PontuacaoMaxAggregateOutputType = {
    id: string | null
    questaoId: string | null
    userId: string | null
  }

  export type PontuacaoCountAggregateOutputType = {
    id: number
    questaoId: number
    userId: number
    _all: number
  }


  export type PontuacaoMinAggregateInputType = {
    id?: true
    questaoId?: true
    userId?: true
  }

  export type PontuacaoMaxAggregateInputType = {
    id?: true
    questaoId?: true
    userId?: true
  }

  export type PontuacaoCountAggregateInputType = {
    id?: true
    questaoId?: true
    userId?: true
    _all?: true
  }

  export type PontuacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pontuacao to aggregate.
     */
    where?: PontuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacaos to fetch.
     */
    orderBy?: PontuacaoOrderByWithRelationInput | PontuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PontuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pontuacaos
    **/
    _count?: true | PontuacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PontuacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PontuacaoMaxAggregateInputType
  }

  export type GetPontuacaoAggregateType<T extends PontuacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePontuacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePontuacao[P]>
      : GetScalarType<T[P], AggregatePontuacao[P]>
  }




  export type PontuacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PontuacaoWhereInput
    orderBy?: PontuacaoOrderByWithAggregationInput | PontuacaoOrderByWithAggregationInput[]
    by: PontuacaoScalarFieldEnum[] | PontuacaoScalarFieldEnum
    having?: PontuacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PontuacaoCountAggregateInputType | true
    _min?: PontuacaoMinAggregateInputType
    _max?: PontuacaoMaxAggregateInputType
  }

  export type PontuacaoGroupByOutputType = {
    id: string
    questaoId: string
    userId: string
    _count: PontuacaoCountAggregateOutputType | null
    _min: PontuacaoMinAggregateOutputType | null
    _max: PontuacaoMaxAggregateOutputType | null
  }

  type GetPontuacaoGroupByPayload<T extends PontuacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PontuacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PontuacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PontuacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PontuacaoGroupByOutputType[P]>
        }
      >
    >


  export type PontuacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questaoId?: boolean
    userId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pontuacao"]>



  export type PontuacaoSelectScalar = {
    id?: boolean
    questaoId?: boolean
    userId?: boolean
  }

  export type PontuacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questaoId" | "userId", ExtArgs["result"]["pontuacao"]>
  export type PontuacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PontuacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pontuacao"
    objects: {
      questao: Prisma.$QuestaoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questaoId: string
      userId: string
    }, ExtArgs["result"]["pontuacao"]>
    composites: {}
  }

  type PontuacaoGetPayload<S extends boolean | null | undefined | PontuacaoDefaultArgs> = $Result.GetResult<Prisma.$PontuacaoPayload, S>

  type PontuacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PontuacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PontuacaoCountAggregateInputType | true
    }

  export interface PontuacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pontuacao'], meta: { name: 'Pontuacao' } }
    /**
     * Find zero or one Pontuacao that matches the filter.
     * @param {PontuacaoFindUniqueArgs} args - Arguments to find a Pontuacao
     * @example
     * // Get one Pontuacao
     * const pontuacao = await prisma.pontuacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PontuacaoFindUniqueArgs>(args: SelectSubset<T, PontuacaoFindUniqueArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pontuacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PontuacaoFindUniqueOrThrowArgs} args - Arguments to find a Pontuacao
     * @example
     * // Get one Pontuacao
     * const pontuacao = await prisma.pontuacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PontuacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PontuacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pontuacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoFindFirstArgs} args - Arguments to find a Pontuacao
     * @example
     * // Get one Pontuacao
     * const pontuacao = await prisma.pontuacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PontuacaoFindFirstArgs>(args?: SelectSubset<T, PontuacaoFindFirstArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pontuacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoFindFirstOrThrowArgs} args - Arguments to find a Pontuacao
     * @example
     * // Get one Pontuacao
     * const pontuacao = await prisma.pontuacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PontuacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PontuacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pontuacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pontuacaos
     * const pontuacaos = await prisma.pontuacao.findMany()
     * 
     * // Get first 10 Pontuacaos
     * const pontuacaos = await prisma.pontuacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pontuacaoWithIdOnly = await prisma.pontuacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PontuacaoFindManyArgs>(args?: SelectSubset<T, PontuacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pontuacao.
     * @param {PontuacaoCreateArgs} args - Arguments to create a Pontuacao.
     * @example
     * // Create one Pontuacao
     * const Pontuacao = await prisma.pontuacao.create({
     *   data: {
     *     // ... data to create a Pontuacao
     *   }
     * })
     * 
     */
    create<T extends PontuacaoCreateArgs>(args: SelectSubset<T, PontuacaoCreateArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pontuacaos.
     * @param {PontuacaoCreateManyArgs} args - Arguments to create many Pontuacaos.
     * @example
     * // Create many Pontuacaos
     * const pontuacao = await prisma.pontuacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PontuacaoCreateManyArgs>(args?: SelectSubset<T, PontuacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pontuacao.
     * @param {PontuacaoDeleteArgs} args - Arguments to delete one Pontuacao.
     * @example
     * // Delete one Pontuacao
     * const Pontuacao = await prisma.pontuacao.delete({
     *   where: {
     *     // ... filter to delete one Pontuacao
     *   }
     * })
     * 
     */
    delete<T extends PontuacaoDeleteArgs>(args: SelectSubset<T, PontuacaoDeleteArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pontuacao.
     * @param {PontuacaoUpdateArgs} args - Arguments to update one Pontuacao.
     * @example
     * // Update one Pontuacao
     * const pontuacao = await prisma.pontuacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PontuacaoUpdateArgs>(args: SelectSubset<T, PontuacaoUpdateArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pontuacaos.
     * @param {PontuacaoDeleteManyArgs} args - Arguments to filter Pontuacaos to delete.
     * @example
     * // Delete a few Pontuacaos
     * const { count } = await prisma.pontuacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PontuacaoDeleteManyArgs>(args?: SelectSubset<T, PontuacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pontuacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pontuacaos
     * const pontuacao = await prisma.pontuacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PontuacaoUpdateManyArgs>(args: SelectSubset<T, PontuacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pontuacao.
     * @param {PontuacaoUpsertArgs} args - Arguments to update or create a Pontuacao.
     * @example
     * // Update or create a Pontuacao
     * const pontuacao = await prisma.pontuacao.upsert({
     *   create: {
     *     // ... data to create a Pontuacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pontuacao we want to update
     *   }
     * })
     */
    upsert<T extends PontuacaoUpsertArgs>(args: SelectSubset<T, PontuacaoUpsertArgs<ExtArgs>>): Prisma__PontuacaoClient<$Result.GetResult<Prisma.$PontuacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pontuacaos that matches the filter.
     * @param {PontuacaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pontuacao = await prisma.pontuacao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PontuacaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Pontuacao.
     * @param {PontuacaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pontuacao = await prisma.pontuacao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PontuacaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Pontuacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoCountArgs} args - Arguments to filter Pontuacaos to count.
     * @example
     * // Count the number of Pontuacaos
     * const count = await prisma.pontuacao.count({
     *   where: {
     *     // ... the filter for the Pontuacaos we want to count
     *   }
     * })
    **/
    count<T extends PontuacaoCountArgs>(
      args?: Subset<T, PontuacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PontuacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pontuacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PontuacaoAggregateArgs>(args: Subset<T, PontuacaoAggregateArgs>): Prisma.PrismaPromise<GetPontuacaoAggregateType<T>>

    /**
     * Group by Pontuacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PontuacaoGroupByArgs} args - Group by arguments.
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
      T extends PontuacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PontuacaoGroupByArgs['orderBy'] }
        : { orderBy?: PontuacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PontuacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPontuacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pontuacao model
   */
  readonly fields: PontuacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pontuacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PontuacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questao<T extends QuestaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestaoDefaultArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pontuacao model
   */
  interface PontuacaoFieldRefs {
    readonly id: FieldRef<"Pontuacao", 'String'>
    readonly questaoId: FieldRef<"Pontuacao", 'String'>
    readonly userId: FieldRef<"Pontuacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pontuacao findUnique
   */
  export type PontuacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacao to fetch.
     */
    where: PontuacaoWhereUniqueInput
  }

  /**
   * Pontuacao findUniqueOrThrow
   */
  export type PontuacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacao to fetch.
     */
    where: PontuacaoWhereUniqueInput
  }

  /**
   * Pontuacao findFirst
   */
  export type PontuacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacao to fetch.
     */
    where?: PontuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacaos to fetch.
     */
    orderBy?: PontuacaoOrderByWithRelationInput | PontuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pontuacaos.
     */
    cursor?: PontuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pontuacaos.
     */
    distinct?: PontuacaoScalarFieldEnum | PontuacaoScalarFieldEnum[]
  }

  /**
   * Pontuacao findFirstOrThrow
   */
  export type PontuacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacao to fetch.
     */
    where?: PontuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacaos to fetch.
     */
    orderBy?: PontuacaoOrderByWithRelationInput | PontuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pontuacaos.
     */
    cursor?: PontuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pontuacaos.
     */
    distinct?: PontuacaoScalarFieldEnum | PontuacaoScalarFieldEnum[]
  }

  /**
   * Pontuacao findMany
   */
  export type PontuacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * Filter, which Pontuacaos to fetch.
     */
    where?: PontuacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pontuacaos to fetch.
     */
    orderBy?: PontuacaoOrderByWithRelationInput | PontuacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pontuacaos.
     */
    cursor?: PontuacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pontuacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pontuacaos.
     */
    skip?: number
    distinct?: PontuacaoScalarFieldEnum | PontuacaoScalarFieldEnum[]
  }

  /**
   * Pontuacao create
   */
  export type PontuacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pontuacao.
     */
    data: XOR<PontuacaoCreateInput, PontuacaoUncheckedCreateInput>
  }

  /**
   * Pontuacao createMany
   */
  export type PontuacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pontuacaos.
     */
    data: PontuacaoCreateManyInput | PontuacaoCreateManyInput[]
  }

  /**
   * Pontuacao update
   */
  export type PontuacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pontuacao.
     */
    data: XOR<PontuacaoUpdateInput, PontuacaoUncheckedUpdateInput>
    /**
     * Choose, which Pontuacao to update.
     */
    where: PontuacaoWhereUniqueInput
  }

  /**
   * Pontuacao updateMany
   */
  export type PontuacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pontuacaos.
     */
    data: XOR<PontuacaoUpdateManyMutationInput, PontuacaoUncheckedUpdateManyInput>
    /**
     * Filter which Pontuacaos to update
     */
    where?: PontuacaoWhereInput
    /**
     * Limit how many Pontuacaos to update.
     */
    limit?: number
  }

  /**
   * Pontuacao upsert
   */
  export type PontuacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pontuacao to update in case it exists.
     */
    where: PontuacaoWhereUniqueInput
    /**
     * In case the Pontuacao found by the `where` argument doesn't exist, create a new Pontuacao with this data.
     */
    create: XOR<PontuacaoCreateInput, PontuacaoUncheckedCreateInput>
    /**
     * In case the Pontuacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PontuacaoUpdateInput, PontuacaoUncheckedUpdateInput>
  }

  /**
   * Pontuacao delete
   */
  export type PontuacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
    /**
     * Filter which Pontuacao to delete.
     */
    where: PontuacaoWhereUniqueInput
  }

  /**
   * Pontuacao deleteMany
   */
  export type PontuacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pontuacaos to delete
     */
    where?: PontuacaoWhereInput
    /**
     * Limit how many Pontuacaos to delete.
     */
    limit?: number
  }

  /**
   * Pontuacao findRaw
   */
  export type PontuacaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pontuacao aggregateRaw
   */
  export type PontuacaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Pontuacao without action
   */
  export type PontuacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pontuacao
     */
    select?: PontuacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pontuacao
     */
    omit?: PontuacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PontuacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    senha: 'senha'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    status: 'status'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const QuestaoScalarFieldEnum: {
    id: 'id',
    questao: 'questao',
    categoriaId: 'categoriaId'
  };

  export type QuestaoScalarFieldEnum = (typeof QuestaoScalarFieldEnum)[keyof typeof QuestaoScalarFieldEnum]


  export const AlternativaScalarFieldEnum: {
    id: 'id',
    alternativa: 'alternativa',
    questaoId: 'questaoId'
  };

  export type AlternativaScalarFieldEnum = (typeof AlternativaScalarFieldEnum)[keyof typeof AlternativaScalarFieldEnum]


  export const PontuacaoScalarFieldEnum: {
    id: 'id',
    questaoId: 'questaoId',
    userId: 'userId'
  };

  export type PontuacaoScalarFieldEnum = (typeof PontuacaoScalarFieldEnum)[keyof typeof PontuacaoScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    senha?: StringFilter<"User"> | string
    pontuacao?: PontuacaoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    senha?: SortOrder
    pontuacao?: PontuacaoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    senha?: StringFilter<"User"> | string
    pontuacao?: PontuacaoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    senha?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    senha?: StringWithAggregatesFilter<"User"> | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    status?: BoolFilter<"Categoria"> | boolean
    questao?: QuestaoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    questao?: QuestaoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descricao?: StringNullableFilter<"Categoria"> | string | null
    status?: BoolFilter<"Categoria"> | boolean
    questao?: QuestaoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    status?: BoolWithAggregatesFilter<"Categoria"> | boolean
  }

  export type QuestaoWhereInput = {
    AND?: QuestaoWhereInput | QuestaoWhereInput[]
    OR?: QuestaoWhereInput[]
    NOT?: QuestaoWhereInput | QuestaoWhereInput[]
    id?: StringFilter<"Questao"> | string
    questao?: StringFilter<"Questao"> | string
    categoriaId?: StringFilter<"Questao"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    alternativa?: AlternativaListRelationFilter
    pontuacao?: PontuacaoListRelationFilter
  }

  export type QuestaoOrderByWithRelationInput = {
    id?: SortOrder
    questao?: SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    alternativa?: AlternativaOrderByRelationAggregateInput
    pontuacao?: PontuacaoOrderByRelationAggregateInput
  }

  export type QuestaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestaoWhereInput | QuestaoWhereInput[]
    OR?: QuestaoWhereInput[]
    NOT?: QuestaoWhereInput | QuestaoWhereInput[]
    questao?: StringFilter<"Questao"> | string
    categoriaId?: StringFilter<"Questao"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    alternativa?: AlternativaListRelationFilter
    pontuacao?: PontuacaoListRelationFilter
  }, "id">

  export type QuestaoOrderByWithAggregationInput = {
    id?: SortOrder
    questao?: SortOrder
    categoriaId?: SortOrder
    _count?: QuestaoCountOrderByAggregateInput
    _max?: QuestaoMaxOrderByAggregateInput
    _min?: QuestaoMinOrderByAggregateInput
  }

  export type QuestaoScalarWhereWithAggregatesInput = {
    AND?: QuestaoScalarWhereWithAggregatesInput | QuestaoScalarWhereWithAggregatesInput[]
    OR?: QuestaoScalarWhereWithAggregatesInput[]
    NOT?: QuestaoScalarWhereWithAggregatesInput | QuestaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Questao"> | string
    questao?: StringWithAggregatesFilter<"Questao"> | string
    categoriaId?: StringWithAggregatesFilter<"Questao"> | string
  }

  export type AlternativaWhereInput = {
    AND?: AlternativaWhereInput | AlternativaWhereInput[]
    OR?: AlternativaWhereInput[]
    NOT?: AlternativaWhereInput | AlternativaWhereInput[]
    id?: StringFilter<"Alternativa"> | string
    alternativa?: StringFilter<"Alternativa"> | string
    questaoId?: StringFilter<"Alternativa"> | string
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
  }

  export type AlternativaOrderByWithRelationInput = {
    id?: SortOrder
    alternativa?: SortOrder
    questaoId?: SortOrder
    questao?: QuestaoOrderByWithRelationInput
  }

  export type AlternativaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlternativaWhereInput | AlternativaWhereInput[]
    OR?: AlternativaWhereInput[]
    NOT?: AlternativaWhereInput | AlternativaWhereInput[]
    alternativa?: StringFilter<"Alternativa"> | string
    questaoId?: StringFilter<"Alternativa"> | string
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
  }, "id">

  export type AlternativaOrderByWithAggregationInput = {
    id?: SortOrder
    alternativa?: SortOrder
    questaoId?: SortOrder
    _count?: AlternativaCountOrderByAggregateInput
    _max?: AlternativaMaxOrderByAggregateInput
    _min?: AlternativaMinOrderByAggregateInput
  }

  export type AlternativaScalarWhereWithAggregatesInput = {
    AND?: AlternativaScalarWhereWithAggregatesInput | AlternativaScalarWhereWithAggregatesInput[]
    OR?: AlternativaScalarWhereWithAggregatesInput[]
    NOT?: AlternativaScalarWhereWithAggregatesInput | AlternativaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alternativa"> | string
    alternativa?: StringWithAggregatesFilter<"Alternativa"> | string
    questaoId?: StringWithAggregatesFilter<"Alternativa"> | string
  }

  export type PontuacaoWhereInput = {
    AND?: PontuacaoWhereInput | PontuacaoWhereInput[]
    OR?: PontuacaoWhereInput[]
    NOT?: PontuacaoWhereInput | PontuacaoWhereInput[]
    id?: StringFilter<"Pontuacao"> | string
    questaoId?: StringFilter<"Pontuacao"> | string
    userId?: StringFilter<"Pontuacao"> | string
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PontuacaoOrderByWithRelationInput = {
    id?: SortOrder
    questaoId?: SortOrder
    userId?: SortOrder
    questao?: QuestaoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PontuacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PontuacaoWhereInput | PontuacaoWhereInput[]
    OR?: PontuacaoWhereInput[]
    NOT?: PontuacaoWhereInput | PontuacaoWhereInput[]
    questaoId?: StringFilter<"Pontuacao"> | string
    userId?: StringFilter<"Pontuacao"> | string
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PontuacaoOrderByWithAggregationInput = {
    id?: SortOrder
    questaoId?: SortOrder
    userId?: SortOrder
    _count?: PontuacaoCountOrderByAggregateInput
    _max?: PontuacaoMaxOrderByAggregateInput
    _min?: PontuacaoMinOrderByAggregateInput
  }

  export type PontuacaoScalarWhereWithAggregatesInput = {
    AND?: PontuacaoScalarWhereWithAggregatesInput | PontuacaoScalarWhereWithAggregatesInput[]
    OR?: PontuacaoScalarWhereWithAggregatesInput[]
    NOT?: PontuacaoScalarWhereWithAggregatesInput | PontuacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pontuacao"> | string
    questaoId?: StringWithAggregatesFilter<"Pontuacao"> | string
    userId?: StringWithAggregatesFilter<"Pontuacao"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    senha: string
    pontuacao?: PontuacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    senha: string
    pontuacao?: PontuacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    pontuacao?: PontuacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    pontuacao?: PontuacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    senha: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateInput = {
    id?: string
    descricao?: string | null
    status: boolean
    questao?: QuestaoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    descricao?: string | null
    status: boolean
    questao?: QuestaoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    questao?: QuestaoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    questao?: QuestaoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    descricao?: string | null
    status: boolean
  }

  export type CategoriaUpdateManyMutationInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaUncheckedUpdateManyInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestaoCreateInput = {
    id?: string
    questao: string
    categoria: CategoriaCreateNestedOneWithoutQuestaoInput
    alternativa?: AlternativaCreateNestedManyWithoutQuestaoInput
    pontuacao?: PontuacaoCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateInput = {
    id?: string
    questao: string
    categoriaId: string
    alternativa?: AlternativaUncheckedCreateNestedManyWithoutQuestaoInput
    pontuacao?: PontuacaoUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUpdateInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutQuestaoNestedInput
    alternativa?: AlternativaUpdateManyWithoutQuestaoNestedInput
    pontuacao?: PontuacaoUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    alternativa?: AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput
    pontuacao?: PontuacaoUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoCreateManyInput = {
    id?: string
    questao: string
    categoriaId: string
  }

  export type QuestaoUpdateManyMutationInput = {
    questao?: StringFieldUpdateOperationsInput | string
  }

  export type QuestaoUncheckedUpdateManyInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaCreateInput = {
    id?: string
    alternativa: string
    questao: QuestaoCreateNestedOneWithoutAlternativaInput
  }

  export type AlternativaUncheckedCreateInput = {
    id?: string
    alternativa: string
    questaoId: string
  }

  export type AlternativaUpdateInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
    questao?: QuestaoUpdateOneRequiredWithoutAlternativaNestedInput
  }

  export type AlternativaUncheckedUpdateInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
    questaoId?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaCreateManyInput = {
    id?: string
    alternativa: string
    questaoId: string
  }

  export type AlternativaUpdateManyMutationInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaUncheckedUpdateManyInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
    questaoId?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacaoCreateInput = {
    id?: string
    questao: QuestaoCreateNestedOneWithoutPontuacaoInput
    user: UserCreateNestedOneWithoutPontuacaoInput
  }

  export type PontuacaoUncheckedCreateInput = {
    id?: string
    questaoId: string
    userId: string
  }

  export type PontuacaoUpdateInput = {
    questao?: QuestaoUpdateOneRequiredWithoutPontuacaoNestedInput
    user?: UserUpdateOneRequiredWithoutPontuacaoNestedInput
  }

  export type PontuacaoUncheckedUpdateInput = {
    questaoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacaoCreateManyInput = {
    id?: string
    questaoId: string
    userId: string
  }

  export type PontuacaoUpdateManyMutationInput = {

  }

  export type PontuacaoUncheckedUpdateManyInput = {
    questaoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type PontuacaoListRelationFilter = {
    every?: PontuacaoWhereInput
    some?: PontuacaoWhereInput
    none?: PontuacaoWhereInput
  }

  export type PontuacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    senha?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    senha?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    senha?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestaoListRelationFilter = {
    every?: QuestaoWhereInput
    some?: QuestaoWhereInput
    none?: QuestaoWhereInput
  }

  export type QuestaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type AlternativaListRelationFilter = {
    every?: AlternativaWhereInput
    some?: AlternativaWhereInput
    none?: AlternativaWhereInput
  }

  export type AlternativaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestaoCountOrderByAggregateInput = {
    id?: SortOrder
    questao?: SortOrder
    categoriaId?: SortOrder
  }

  export type QuestaoMaxOrderByAggregateInput = {
    id?: SortOrder
    questao?: SortOrder
    categoriaId?: SortOrder
  }

  export type QuestaoMinOrderByAggregateInput = {
    id?: SortOrder
    questao?: SortOrder
    categoriaId?: SortOrder
  }

  export type QuestaoScalarRelationFilter = {
    is?: QuestaoWhereInput
    isNot?: QuestaoWhereInput
  }

  export type AlternativaCountOrderByAggregateInput = {
    id?: SortOrder
    alternativa?: SortOrder
    questaoId?: SortOrder
  }

  export type AlternativaMaxOrderByAggregateInput = {
    id?: SortOrder
    alternativa?: SortOrder
    questaoId?: SortOrder
  }

  export type AlternativaMinOrderByAggregateInput = {
    id?: SortOrder
    alternativa?: SortOrder
    questaoId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PontuacaoCountOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
    userId?: SortOrder
  }

  export type PontuacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
    userId?: SortOrder
  }

  export type PontuacaoMinOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
    userId?: SortOrder
  }

  export type PontuacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<PontuacaoCreateWithoutUserInput, PontuacaoUncheckedCreateWithoutUserInput> | PontuacaoCreateWithoutUserInput[] | PontuacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutUserInput | PontuacaoCreateOrConnectWithoutUserInput[]
    createMany?: PontuacaoCreateManyUserInputEnvelope
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
  }

  export type PontuacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PontuacaoCreateWithoutUserInput, PontuacaoUncheckedCreateWithoutUserInput> | PontuacaoCreateWithoutUserInput[] | PontuacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutUserInput | PontuacaoCreateOrConnectWithoutUserInput[]
    createMany?: PontuacaoCreateManyUserInputEnvelope
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type PontuacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<PontuacaoCreateWithoutUserInput, PontuacaoUncheckedCreateWithoutUserInput> | PontuacaoCreateWithoutUserInput[] | PontuacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutUserInput | PontuacaoCreateOrConnectWithoutUserInput[]
    upsert?: PontuacaoUpsertWithWhereUniqueWithoutUserInput | PontuacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PontuacaoCreateManyUserInputEnvelope
    set?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    disconnect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    delete?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    update?: PontuacaoUpdateWithWhereUniqueWithoutUserInput | PontuacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PontuacaoUpdateManyWithWhereWithoutUserInput | PontuacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PontuacaoScalarWhereInput | PontuacaoScalarWhereInput[]
  }

  export type PontuacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PontuacaoCreateWithoutUserInput, PontuacaoUncheckedCreateWithoutUserInput> | PontuacaoCreateWithoutUserInput[] | PontuacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutUserInput | PontuacaoCreateOrConnectWithoutUserInput[]
    upsert?: PontuacaoUpsertWithWhereUniqueWithoutUserInput | PontuacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PontuacaoCreateManyUserInputEnvelope
    set?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    disconnect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    delete?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    update?: PontuacaoUpdateWithWhereUniqueWithoutUserInput | PontuacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PontuacaoUpdateManyWithWhereWithoutUserInput | PontuacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PontuacaoScalarWhereInput | PontuacaoScalarWhereInput[]
  }

  export type QuestaoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<QuestaoCreateWithoutCategoriaInput, QuestaoUncheckedCreateWithoutCategoriaInput> | QuestaoCreateWithoutCategoriaInput[] | QuestaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutCategoriaInput | QuestaoCreateOrConnectWithoutCategoriaInput[]
    createMany?: QuestaoCreateManyCategoriaInputEnvelope
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
  }

  export type QuestaoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<QuestaoCreateWithoutCategoriaInput, QuestaoUncheckedCreateWithoutCategoriaInput> | QuestaoCreateWithoutCategoriaInput[] | QuestaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutCategoriaInput | QuestaoCreateOrConnectWithoutCategoriaInput[]
    createMany?: QuestaoCreateManyCategoriaInputEnvelope
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestaoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<QuestaoCreateWithoutCategoriaInput, QuestaoUncheckedCreateWithoutCategoriaInput> | QuestaoCreateWithoutCategoriaInput[] | QuestaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutCategoriaInput | QuestaoCreateOrConnectWithoutCategoriaInput[]
    upsert?: QuestaoUpsertWithWhereUniqueWithoutCategoriaInput | QuestaoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: QuestaoCreateManyCategoriaInputEnvelope
    set?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    disconnect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    delete?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    update?: QuestaoUpdateWithWhereUniqueWithoutCategoriaInput | QuestaoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: QuestaoUpdateManyWithWhereWithoutCategoriaInput | QuestaoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
  }

  export type QuestaoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<QuestaoCreateWithoutCategoriaInput, QuestaoUncheckedCreateWithoutCategoriaInput> | QuestaoCreateWithoutCategoriaInput[] | QuestaoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutCategoriaInput | QuestaoCreateOrConnectWithoutCategoriaInput[]
    upsert?: QuestaoUpsertWithWhereUniqueWithoutCategoriaInput | QuestaoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: QuestaoCreateManyCategoriaInputEnvelope
    set?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    disconnect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    delete?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    update?: QuestaoUpdateWithWhereUniqueWithoutCategoriaInput | QuestaoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: QuestaoUpdateManyWithWhereWithoutCategoriaInput | QuestaoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutQuestaoInput = {
    create?: XOR<CategoriaCreateWithoutQuestaoInput, CategoriaUncheckedCreateWithoutQuestaoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutQuestaoInput
    connect?: CategoriaWhereUniqueInput
  }

  export type AlternativaCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
  }

  export type PontuacaoCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<PontuacaoCreateWithoutQuestaoInput, PontuacaoUncheckedCreateWithoutQuestaoInput> | PontuacaoCreateWithoutQuestaoInput[] | PontuacaoUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutQuestaoInput | PontuacaoCreateOrConnectWithoutQuestaoInput[]
    createMany?: PontuacaoCreateManyQuestaoInputEnvelope
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
  }

  export type AlternativaUncheckedCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
  }

  export type PontuacaoUncheckedCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<PontuacaoCreateWithoutQuestaoInput, PontuacaoUncheckedCreateWithoutQuestaoInput> | PontuacaoCreateWithoutQuestaoInput[] | PontuacaoUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutQuestaoInput | PontuacaoCreateOrConnectWithoutQuestaoInput[]
    createMany?: PontuacaoCreateManyQuestaoInputEnvelope
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutQuestaoNestedInput = {
    create?: XOR<CategoriaCreateWithoutQuestaoInput, CategoriaUncheckedCreateWithoutQuestaoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutQuestaoInput
    upsert?: CategoriaUpsertWithoutQuestaoInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutQuestaoInput, CategoriaUpdateWithoutQuestaoInput>, CategoriaUncheckedUpdateWithoutQuestaoInput>
  }

  export type AlternativaUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    upsert?: AlternativaUpsertWithWhereUniqueWithoutQuestaoInput | AlternativaUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    set?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    disconnect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    delete?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    update?: AlternativaUpdateWithWhereUniqueWithoutQuestaoInput | AlternativaUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: AlternativaUpdateManyWithWhereWithoutQuestaoInput | AlternativaUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
  }

  export type PontuacaoUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<PontuacaoCreateWithoutQuestaoInput, PontuacaoUncheckedCreateWithoutQuestaoInput> | PontuacaoCreateWithoutQuestaoInput[] | PontuacaoUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutQuestaoInput | PontuacaoCreateOrConnectWithoutQuestaoInput[]
    upsert?: PontuacaoUpsertWithWhereUniqueWithoutQuestaoInput | PontuacaoUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: PontuacaoCreateManyQuestaoInputEnvelope
    set?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    disconnect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    delete?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    update?: PontuacaoUpdateWithWhereUniqueWithoutQuestaoInput | PontuacaoUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: PontuacaoUpdateManyWithWhereWithoutQuestaoInput | PontuacaoUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: PontuacaoScalarWhereInput | PontuacaoScalarWhereInput[]
  }

  export type AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    upsert?: AlternativaUpsertWithWhereUniqueWithoutQuestaoInput | AlternativaUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    set?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    disconnect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    delete?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    update?: AlternativaUpdateWithWhereUniqueWithoutQuestaoInput | AlternativaUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: AlternativaUpdateManyWithWhereWithoutQuestaoInput | AlternativaUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
  }

  export type PontuacaoUncheckedUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<PontuacaoCreateWithoutQuestaoInput, PontuacaoUncheckedCreateWithoutQuestaoInput> | PontuacaoCreateWithoutQuestaoInput[] | PontuacaoUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: PontuacaoCreateOrConnectWithoutQuestaoInput | PontuacaoCreateOrConnectWithoutQuestaoInput[]
    upsert?: PontuacaoUpsertWithWhereUniqueWithoutQuestaoInput | PontuacaoUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: PontuacaoCreateManyQuestaoInputEnvelope
    set?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    disconnect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    delete?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    connect?: PontuacaoWhereUniqueInput | PontuacaoWhereUniqueInput[]
    update?: PontuacaoUpdateWithWhereUniqueWithoutQuestaoInput | PontuacaoUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: PontuacaoUpdateManyWithWhereWithoutQuestaoInput | PontuacaoUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: PontuacaoScalarWhereInput | PontuacaoScalarWhereInput[]
  }

  export type QuestaoCreateNestedOneWithoutAlternativaInput = {
    create?: XOR<QuestaoCreateWithoutAlternativaInput, QuestaoUncheckedCreateWithoutAlternativaInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutAlternativaInput
    connect?: QuestaoWhereUniqueInput
  }

  export type QuestaoUpdateOneRequiredWithoutAlternativaNestedInput = {
    create?: XOR<QuestaoCreateWithoutAlternativaInput, QuestaoUncheckedCreateWithoutAlternativaInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutAlternativaInput
    upsert?: QuestaoUpsertWithoutAlternativaInput
    connect?: QuestaoWhereUniqueInput
    update?: XOR<XOR<QuestaoUpdateToOneWithWhereWithoutAlternativaInput, QuestaoUpdateWithoutAlternativaInput>, QuestaoUncheckedUpdateWithoutAlternativaInput>
  }

  export type QuestaoCreateNestedOneWithoutPontuacaoInput = {
    create?: XOR<QuestaoCreateWithoutPontuacaoInput, QuestaoUncheckedCreateWithoutPontuacaoInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutPontuacaoInput
    connect?: QuestaoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPontuacaoInput = {
    create?: XOR<UserCreateWithoutPontuacaoInput, UserUncheckedCreateWithoutPontuacaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPontuacaoInput
    connect?: UserWhereUniqueInput
  }

  export type QuestaoUpdateOneRequiredWithoutPontuacaoNestedInput = {
    create?: XOR<QuestaoCreateWithoutPontuacaoInput, QuestaoUncheckedCreateWithoutPontuacaoInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutPontuacaoInput
    upsert?: QuestaoUpsertWithoutPontuacaoInput
    connect?: QuestaoWhereUniqueInput
    update?: XOR<XOR<QuestaoUpdateToOneWithWhereWithoutPontuacaoInput, QuestaoUpdateWithoutPontuacaoInput>, QuestaoUncheckedUpdateWithoutPontuacaoInput>
  }

  export type UserUpdateOneRequiredWithoutPontuacaoNestedInput = {
    create?: XOR<UserCreateWithoutPontuacaoInput, UserUncheckedCreateWithoutPontuacaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPontuacaoInput
    upsert?: UserUpsertWithoutPontuacaoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPontuacaoInput, UserUpdateWithoutPontuacaoInput>, UserUncheckedUpdateWithoutPontuacaoInput>
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
    isSet?: boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PontuacaoCreateWithoutUserInput = {
    id?: string
    questao: QuestaoCreateNestedOneWithoutPontuacaoInput
  }

  export type PontuacaoUncheckedCreateWithoutUserInput = {
    id?: string
    questaoId: string
  }

  export type PontuacaoCreateOrConnectWithoutUserInput = {
    where: PontuacaoWhereUniqueInput
    create: XOR<PontuacaoCreateWithoutUserInput, PontuacaoUncheckedCreateWithoutUserInput>
  }

  export type PontuacaoCreateManyUserInputEnvelope = {
    data: PontuacaoCreateManyUserInput | PontuacaoCreateManyUserInput[]
  }

  export type PontuacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: PontuacaoWhereUniqueInput
    update: XOR<PontuacaoUpdateWithoutUserInput, PontuacaoUncheckedUpdateWithoutUserInput>
    create: XOR<PontuacaoCreateWithoutUserInput, PontuacaoUncheckedCreateWithoutUserInput>
  }

  export type PontuacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: PontuacaoWhereUniqueInput
    data: XOR<PontuacaoUpdateWithoutUserInput, PontuacaoUncheckedUpdateWithoutUserInput>
  }

  export type PontuacaoUpdateManyWithWhereWithoutUserInput = {
    where: PontuacaoScalarWhereInput
    data: XOR<PontuacaoUpdateManyMutationInput, PontuacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type PontuacaoScalarWhereInput = {
    AND?: PontuacaoScalarWhereInput | PontuacaoScalarWhereInput[]
    OR?: PontuacaoScalarWhereInput[]
    NOT?: PontuacaoScalarWhereInput | PontuacaoScalarWhereInput[]
    id?: StringFilter<"Pontuacao"> | string
    questaoId?: StringFilter<"Pontuacao"> | string
    userId?: StringFilter<"Pontuacao"> | string
  }

  export type QuestaoCreateWithoutCategoriaInput = {
    id?: string
    questao: string
    alternativa?: AlternativaCreateNestedManyWithoutQuestaoInput
    pontuacao?: PontuacaoCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    questao: string
    alternativa?: AlternativaUncheckedCreateNestedManyWithoutQuestaoInput
    pontuacao?: PontuacaoUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoCreateOrConnectWithoutCategoriaInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutCategoriaInput, QuestaoUncheckedCreateWithoutCategoriaInput>
  }

  export type QuestaoCreateManyCategoriaInputEnvelope = {
    data: QuestaoCreateManyCategoriaInput | QuestaoCreateManyCategoriaInput[]
  }

  export type QuestaoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: QuestaoWhereUniqueInput
    update: XOR<QuestaoUpdateWithoutCategoriaInput, QuestaoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<QuestaoCreateWithoutCategoriaInput, QuestaoUncheckedCreateWithoutCategoriaInput>
  }

  export type QuestaoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: QuestaoWhereUniqueInput
    data: XOR<QuestaoUpdateWithoutCategoriaInput, QuestaoUncheckedUpdateWithoutCategoriaInput>
  }

  export type QuestaoUpdateManyWithWhereWithoutCategoriaInput = {
    where: QuestaoScalarWhereInput
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type QuestaoScalarWhereInput = {
    AND?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
    OR?: QuestaoScalarWhereInput[]
    NOT?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
    id?: StringFilter<"Questao"> | string
    questao?: StringFilter<"Questao"> | string
    categoriaId?: StringFilter<"Questao"> | string
  }

  export type CategoriaCreateWithoutQuestaoInput = {
    id?: string
    descricao?: string | null
    status: boolean
  }

  export type CategoriaUncheckedCreateWithoutQuestaoInput = {
    id?: string
    descricao?: string | null
    status: boolean
  }

  export type CategoriaCreateOrConnectWithoutQuestaoInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutQuestaoInput, CategoriaUncheckedCreateWithoutQuestaoInput>
  }

  export type AlternativaCreateWithoutQuestaoInput = {
    id?: string
    alternativa: string
  }

  export type AlternativaUncheckedCreateWithoutQuestaoInput = {
    id?: string
    alternativa: string
  }

  export type AlternativaCreateOrConnectWithoutQuestaoInput = {
    where: AlternativaWhereUniqueInput
    create: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput>
  }

  export type AlternativaCreateManyQuestaoInputEnvelope = {
    data: AlternativaCreateManyQuestaoInput | AlternativaCreateManyQuestaoInput[]
  }

  export type PontuacaoCreateWithoutQuestaoInput = {
    id?: string
    user: UserCreateNestedOneWithoutPontuacaoInput
  }

  export type PontuacaoUncheckedCreateWithoutQuestaoInput = {
    id?: string
    userId: string
  }

  export type PontuacaoCreateOrConnectWithoutQuestaoInput = {
    where: PontuacaoWhereUniqueInput
    create: XOR<PontuacaoCreateWithoutQuestaoInput, PontuacaoUncheckedCreateWithoutQuestaoInput>
  }

  export type PontuacaoCreateManyQuestaoInputEnvelope = {
    data: PontuacaoCreateManyQuestaoInput | PontuacaoCreateManyQuestaoInput[]
  }

  export type CategoriaUpsertWithoutQuestaoInput = {
    update: XOR<CategoriaUpdateWithoutQuestaoInput, CategoriaUncheckedUpdateWithoutQuestaoInput>
    create: XOR<CategoriaCreateWithoutQuestaoInput, CategoriaUncheckedCreateWithoutQuestaoInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutQuestaoInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutQuestaoInput, CategoriaUncheckedUpdateWithoutQuestaoInput>
  }

  export type CategoriaUpdateWithoutQuestaoInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaUncheckedUpdateWithoutQuestaoInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativaUpsertWithWhereUniqueWithoutQuestaoInput = {
    where: AlternativaWhereUniqueInput
    update: XOR<AlternativaUpdateWithoutQuestaoInput, AlternativaUncheckedUpdateWithoutQuestaoInput>
    create: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput>
  }

  export type AlternativaUpdateWithWhereUniqueWithoutQuestaoInput = {
    where: AlternativaWhereUniqueInput
    data: XOR<AlternativaUpdateWithoutQuestaoInput, AlternativaUncheckedUpdateWithoutQuestaoInput>
  }

  export type AlternativaUpdateManyWithWhereWithoutQuestaoInput = {
    where: AlternativaScalarWhereInput
    data: XOR<AlternativaUpdateManyMutationInput, AlternativaUncheckedUpdateManyWithoutQuestaoInput>
  }

  export type AlternativaScalarWhereInput = {
    AND?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
    OR?: AlternativaScalarWhereInput[]
    NOT?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
    id?: StringFilter<"Alternativa"> | string
    alternativa?: StringFilter<"Alternativa"> | string
    questaoId?: StringFilter<"Alternativa"> | string
  }

  export type PontuacaoUpsertWithWhereUniqueWithoutQuestaoInput = {
    where: PontuacaoWhereUniqueInput
    update: XOR<PontuacaoUpdateWithoutQuestaoInput, PontuacaoUncheckedUpdateWithoutQuestaoInput>
    create: XOR<PontuacaoCreateWithoutQuestaoInput, PontuacaoUncheckedCreateWithoutQuestaoInput>
  }

  export type PontuacaoUpdateWithWhereUniqueWithoutQuestaoInput = {
    where: PontuacaoWhereUniqueInput
    data: XOR<PontuacaoUpdateWithoutQuestaoInput, PontuacaoUncheckedUpdateWithoutQuestaoInput>
  }

  export type PontuacaoUpdateManyWithWhereWithoutQuestaoInput = {
    where: PontuacaoScalarWhereInput
    data: XOR<PontuacaoUpdateManyMutationInput, PontuacaoUncheckedUpdateManyWithoutQuestaoInput>
  }

  export type QuestaoCreateWithoutAlternativaInput = {
    id?: string
    questao: string
    categoria: CategoriaCreateNestedOneWithoutQuestaoInput
    pontuacao?: PontuacaoCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateWithoutAlternativaInput = {
    id?: string
    questao: string
    categoriaId: string
    pontuacao?: PontuacaoUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoCreateOrConnectWithoutAlternativaInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutAlternativaInput, QuestaoUncheckedCreateWithoutAlternativaInput>
  }

  export type QuestaoUpsertWithoutAlternativaInput = {
    update: XOR<QuestaoUpdateWithoutAlternativaInput, QuestaoUncheckedUpdateWithoutAlternativaInput>
    create: XOR<QuestaoCreateWithoutAlternativaInput, QuestaoUncheckedCreateWithoutAlternativaInput>
    where?: QuestaoWhereInput
  }

  export type QuestaoUpdateToOneWithWhereWithoutAlternativaInput = {
    where?: QuestaoWhereInput
    data: XOR<QuestaoUpdateWithoutAlternativaInput, QuestaoUncheckedUpdateWithoutAlternativaInput>
  }

  export type QuestaoUpdateWithoutAlternativaInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutQuestaoNestedInput
    pontuacao?: PontuacaoUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateWithoutAlternativaInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    pontuacao?: PontuacaoUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoCreateWithoutPontuacaoInput = {
    id?: string
    questao: string
    categoria: CategoriaCreateNestedOneWithoutQuestaoInput
    alternativa?: AlternativaCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateWithoutPontuacaoInput = {
    id?: string
    questao: string
    categoriaId: string
    alternativa?: AlternativaUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoCreateOrConnectWithoutPontuacaoInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutPontuacaoInput, QuestaoUncheckedCreateWithoutPontuacaoInput>
  }

  export type UserCreateWithoutPontuacaoInput = {
    id?: string
    email: string
    name?: string | null
    senha: string
  }

  export type UserUncheckedCreateWithoutPontuacaoInput = {
    id?: string
    email: string
    name?: string | null
    senha: string
  }

  export type UserCreateOrConnectWithoutPontuacaoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPontuacaoInput, UserUncheckedCreateWithoutPontuacaoInput>
  }

  export type QuestaoUpsertWithoutPontuacaoInput = {
    update: XOR<QuestaoUpdateWithoutPontuacaoInput, QuestaoUncheckedUpdateWithoutPontuacaoInput>
    create: XOR<QuestaoCreateWithoutPontuacaoInput, QuestaoUncheckedCreateWithoutPontuacaoInput>
    where?: QuestaoWhereInput
  }

  export type QuestaoUpdateToOneWithWhereWithoutPontuacaoInput = {
    where?: QuestaoWhereInput
    data: XOR<QuestaoUpdateWithoutPontuacaoInput, QuestaoUncheckedUpdateWithoutPontuacaoInput>
  }

  export type QuestaoUpdateWithoutPontuacaoInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutQuestaoNestedInput
    alternativa?: AlternativaUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateWithoutPontuacaoInput = {
    questao?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    alternativa?: AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type UserUpsertWithoutPontuacaoInput = {
    update: XOR<UserUpdateWithoutPontuacaoInput, UserUncheckedUpdateWithoutPontuacaoInput>
    create: XOR<UserCreateWithoutPontuacaoInput, UserUncheckedCreateWithoutPontuacaoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPontuacaoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPontuacaoInput, UserUncheckedUpdateWithoutPontuacaoInput>
  }

  export type UserUpdateWithoutPontuacaoInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutPontuacaoInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacaoCreateManyUserInput = {
    id?: string
    questaoId: string
  }

  export type PontuacaoUpdateWithoutUserInput = {
    questao?: QuestaoUpdateOneRequiredWithoutPontuacaoNestedInput
  }

  export type PontuacaoUncheckedUpdateWithoutUserInput = {
    questaoId?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacaoUncheckedUpdateManyWithoutUserInput = {
    questaoId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestaoCreateManyCategoriaInput = {
    id?: string
    questao: string
  }

  export type QuestaoUpdateWithoutCategoriaInput = {
    questao?: StringFieldUpdateOperationsInput | string
    alternativa?: AlternativaUpdateManyWithoutQuestaoNestedInput
    pontuacao?: PontuacaoUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateWithoutCategoriaInput = {
    questao?: StringFieldUpdateOperationsInput | string
    alternativa?: AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput
    pontuacao?: PontuacaoUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateManyWithoutCategoriaInput = {
    questao?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaCreateManyQuestaoInput = {
    id?: string
    alternativa: string
  }

  export type PontuacaoCreateManyQuestaoInput = {
    id?: string
    userId: string
  }

  export type AlternativaUpdateWithoutQuestaoInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaUncheckedUpdateWithoutQuestaoInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaUncheckedUpdateManyWithoutQuestaoInput = {
    alternativa?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacaoUpdateWithoutQuestaoInput = {
    user?: UserUpdateOneRequiredWithoutPontuacaoNestedInput
  }

  export type PontuacaoUncheckedUpdateWithoutQuestaoInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PontuacaoUncheckedUpdateManyWithoutQuestaoInput = {
    userId?: StringFieldUpdateOperationsInput | string
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