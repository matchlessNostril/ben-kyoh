import { Sidebar, ExpandableArea } from './_components';

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Sidebar />
      <ExpandableArea>{children}</ExpandableArea>
    </main>
  );
}
