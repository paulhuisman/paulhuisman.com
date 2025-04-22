import { useEffect, useState } from 'react';

const useBreakpointValue = (values: { [key: string]: number }) => {
  const [value, setValue] = useState(values.default || 20);

  useEffect(() => {
    const mediaQueryLists = {
      sm: window.matchMedia('(min-width: 640px)'),
      md: window.matchMedia('(min-width: 768px)'),
      lg: window.matchMedia('(min-width: 1024px)'),
      xl: window.matchMedia('(min-width: 1280px)'),
    };

    const getValue = () => {
      if (mediaQueryLists.xl.matches) return values.xl || value;
      if (mediaQueryLists.lg.matches) return values.lg || value;
      if (mediaQueryLists.md.matches) return values.md || value;
      if (mediaQueryLists.sm.matches) return values.sm || value;
      return values.default || value;
    };

    const handleResize = () => {
      setValue(getValue());
    };

    Object.values(mediaQueryLists).forEach((mql) =>
      mql.addEventListener('change', handleResize),
    );
    handleResize();

    return () =>
      Object.values(mediaQueryLists).forEach((mql) =>
        mql.removeEventListener('change', handleResize),
      );
  }, [values]);

  return value;
};

export default useBreakpointValue;
