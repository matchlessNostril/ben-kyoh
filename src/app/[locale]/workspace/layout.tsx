import Sidebar from '@/client/components/domain/sidebar';
import ExpandableArea from '@/client/components/domain/sidebar/expandableArea';

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Sidebar />
      <ExpandableArea>{children}</ExpandableArea>
    </main>
  );
}
