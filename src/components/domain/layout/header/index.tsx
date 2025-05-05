import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import Logo from "./logo";
import AuthButton from "./authButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-2 sm:px-5 sm:py-3">
      <Logo />
      <Suspense
        fallback={
          <Skeleton
            animation="wave"
            width={120}
            height={45}
            sx={{
              bgcolor: "var(--color-primary-deep2)",
              opacity: 0.15,
              borderRadius: "20px",
            }}
          />
        }
      >
        <AuthButton />
      </Suspense>
    </header>
  );
}
