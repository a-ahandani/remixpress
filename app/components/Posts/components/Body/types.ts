export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

type BaseBodyProps = {
  body: string;
  children: string;
};

export type BodyProps = AtLeastOne<BaseBodyProps>;
