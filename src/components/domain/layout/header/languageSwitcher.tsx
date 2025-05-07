"use client";

import { useLocale } from "next-intl";
import { Select, MenuItem, FormControl } from "@mui/material";
import { routing, useRouter, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const menuLabel = {
    ja: "日本語",
    en: "English",
    ko: "한국어",
  };

  return (
    <FormControl variant="standard">
      <Select
        label="Language"
        value={locale}
        onChange={(e) => {
          router.replace(pathname, { locale: e.target.value });
        }}
        sx={{
          color: "var(--color-gray)",
          fontSize: "12px",
          "& .MuiSelect-select": {
            paddingLeft: "4px",
          },
          "& .MuiSelect-icon": {
            color: "var(--color-gray)",
            width: "22px",
            height: "22px",
          },
          "&:after": {
            borderBottom: "1px solid var(--color-gray)",
          },
        }}
      >
        {routing.locales.map((loc) => (
          <MenuItem
            key={loc}
            value={loc}
            disabled={loc === locale}
            sx={{
              color: "var(--color-gray)",
              fontSize: "12px",
            }}
          >
            {menuLabel[loc]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
