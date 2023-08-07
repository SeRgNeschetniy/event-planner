import { useMediaQuery } from "react-responsive";

export default function useMedia() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOnly = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279.99px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return {
    isMobile,
    isTabletOnly,
    isTablet,
    isDesktop,
  };
}
