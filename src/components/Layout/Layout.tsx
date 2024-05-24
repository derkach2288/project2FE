import { LayoutContainer } from "./styles";

import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  )
}

export default Layout;
