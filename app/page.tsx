import { ThemeToggle } from "@/components/theme-toggle"
import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-3xl font-bold tracking-tight">
      ✨ <AuroraText>Todo</AuroraText>
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            {title}
            <p className="font-mono text-xs text-muted-foreground">
              (Press <kbd>d</kbd> to toggle dark mode)
            </p>
          </div>
          <ThemeToggle />
        </div>
        <TodoList />
      </div>
    </div>
  )
}
