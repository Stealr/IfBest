import { useState, useEffect } from 'react';

/**
 * Хук useWindowWidth
 *
 * Отслеживает текущую ширину окна браузера и обновляет значение
 * при каждом изменении размеров окна (resize).
 *
 * @returns {number} Ширина окна браузера в пикселях
 */
export default function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

