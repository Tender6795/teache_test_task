import { SignupModalProvider } from "context/SignupModalContext";
import { TimingProvider } from "context/TimingContext";
import { Outlet } from "react-router-dom";
import { FooterVariant } from "ui/blocks/FooterVariant/FooterVariant";
import { HeaderVariant } from "ui/blocks/HeaderVariant/HeaderVariant";

export const UserLayout = () => {
  return (
    <SignupModalProvider>
      <TimingProvider>
        <HeaderVariant />
        <Outlet />
        <FooterVariant />
      </TimingProvider>
    </SignupModalProvider>
  );
};
