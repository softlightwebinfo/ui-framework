import React, {Fragment} from 'react';

const highlight: (searchSubject?: any, searchValue?: any, isStrict?: boolean) => (any | any | any) = (searchSubject, searchValue, isStrict = false) => {
  if (!searchValue) {
    return searchSubject;
  }

  const normalizedSearchSubject = isStrict ? searchSubject : searchSubject.toLowerCase();
  const normalizedSearchValue = isStrict ? searchValue : searchValue.toLowerCase();

  const indexOfMatch = normalizedSearchSubject.indexOf(normalizedSearchValue);
  if (indexOfMatch === -1) {
    return searchSubject;
  }

  const preMatch = searchSubject.substr(0, indexOfMatch);
  const match = searchSubject.substr(indexOfMatch, searchValue.length);
  const postMatch = searchSubject.substr(indexOfMatch + searchValue.length);

  return (
    <Fragment>
      {preMatch}<strong>{match}</strong>{postMatch}
    </Fragment>
  );
};

export const Highlight: ({children, className, search, strict, ...rest}: {
  children?: any; className?: any; search?: any; strict?: any; [p: string]: any
}) => any = (
  {
    children,
    className,
    search,
    strict,
    ...rest
  }
) => {
  return (
    <span
      className={className}
      {...rest}
    >
      {highlight(children, search, strict)}
    </span>
  );
};
