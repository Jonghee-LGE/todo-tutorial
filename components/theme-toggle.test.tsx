import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/theme-toggle";

const setTheme = vi.fn();
let resolvedTheme = "light";

vi.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme, setTheme }),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    setTheme.mockClear();
  });

  it("라이트 테마에서 클릭하면 다크로 전환한다", async () => {
    resolvedTheme = "light";
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "다크 모드 전환" }));

    expect(setTheme).toHaveBeenCalledExactlyOnceWith("dark");
  });

  it("다크 테마에서 클릭하면 라이트로 전환한다", async () => {
    resolvedTheme = "dark";
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "다크 모드 전환" }));

    expect(setTheme).toHaveBeenCalledExactlyOnceWith("light");
  });
});
