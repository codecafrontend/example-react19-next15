import { FormContainerUseOptimistic } from '@/components/optimistic/NewUseOptimistic';
import { FormContainerUseState } from '@/components/optimistic/OldUseState';
import { FormUseActionState } from '@/components/useActionState/Default';
import { FormAsyncUseActionState } from '@/components/useActionState/Async';
import { FormErrorUseActionState } from '@/components/useActionState/Error';
import { FormUseFormStatus } from '@/components/useFormStatus/Default';
import { FormContainerUseOptimisticWithError } from '@/components/optimistic/UseOptimisticWithError';
import styles from './page.module.css';

export default function Home() {
  console.log('Server Component Render');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FormUseActionState />

        <FormAsyncUseActionState />

        <FormErrorUseActionState />

        <FormUseFormStatus />

        <FormContainerUseState />

        <FormContainerUseOptimistic />

        <FormContainerUseOptimisticWithError />
      </main>
    </div>
  );
}
