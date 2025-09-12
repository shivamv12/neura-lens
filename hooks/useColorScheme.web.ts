/** Package Imports */
import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/** Components/Utils/Styles/Types Imports */

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
